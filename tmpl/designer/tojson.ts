import Magix from 'magix';
import Elements from '../elements/index';
import Enum from './enum';
import Const from './const';
let { State } = Magix;
//过滤掉JSON中私有属性
let filter = (key, value) => {
  if (key.startsWith('@') || key.startsWith('_')) {
    return undefined;
  }
  return value;
};
export default () => {
  //设计区中所有元素
  let elements = State.get<Report.StageElement[]>('@:{global#stage.elements}');
  //页面数据
  let pageData = State.get<Report.StagePage>('@:{global#stage.page}');
  let pageCtrl = State.get('@:{global#stage.page.ctrl}');
  let unit = State.get<string>('@:{global#stage.unit}');
  let page = {};
  //循环页面控制对象的props，只对配置有json的属性进行序列化
  for (let x of pageCtrl.props) {
    if (x.json) {
      let v = pageData[x.key];
      if (x['@:{is.scale.and.unit.field}']) {
        v = Const['@:{const#scale.to.unit}'](v);
      }
      page[x.key] = v;
    }
  }
  let filters = [];
  let dataSources = new Set();
  //递归遍历所有元素
  let walk = (es, collection) => {
    for (let { type, ctrl, props, id } of es) {
      console.log('遍历每个元素', props, type, id);
      // NOTICE: 额外添加数据源收集
      if (props.bind && props.bind.id) {
        dataSources.add(props.bind.id);
      }
      let m = {
        id,
        type,
        unit,
        props: {
          //readonly pinX pinY直接设置
          readonly: props.readonly,
          pinX: props.pinX,
          pinY: props.pinY,
        },
      } as Report.StageElement;
      //遍历控制对象的props，只对指定有json的属性进行序列化
      for (let x of ctrl.props) {
        if (x['@:{json.encode}']) {
          //属性['@:{json.encode}']方法，则交['@:{json.encode}']方法处理
          x['@:{json.encode}'](m.props, props);
        } else if (x.json) {
          if (x.read) {
            //有读取拦截器，则交于拦截器处理
            m.props[x.key] = x.read(props[x.key]);
          } else {
            //其它情况直接复制一份
            m.props[x.key] = props[x.key];
          }
        }
      }
      if (ctrl.as & Enum['@:{enum#as.hod}']) {
        for (let r of m.props.rows) {
          for (let c of r.cols) {
            if (c.elements) {
              let elements = [];
              walk(c.elements, elements);
              c.elements = elements;
            }
          }
        }
      }
      collection.push(m);
    }
  };
  //开始遍历
  walk(elements, filters);
  //记录组合中的元素id
  let groups = State.get('@:{global#stage.elements.groups}');
  let newGroups = [];
  let groupAdded = {};
  for (let p in groups) {
    let list = groups[p];
    if (!groupAdded[list]) {
      newGroups.push(list);
      groupAdded[list] = 1;
    }
  }
  let stage = {
    unit,
    page,
    groups: newGroups,
    elements: filters,
    // NOTICE: 添加所有绑定的数据
    dataSources: Array.from(dataSources),
  };
  return JSON.stringify(stage, filter, 2);
};
