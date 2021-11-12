/*
    author:https://github.com/xinglie
*/
import Magix, { mark } from 'magix';
import Dragdrop from '../mx-dragdrop/index';
let { State, View, applyStyle, dispatch, inside } = Magix;
applyStyle('@:./index.less');
let Half_Item_Height = 10; //可拖动元素的一半高，用于优化从外部拖动新的数据源字段拖进来时的效果提示
let CurrentDragViewId;
export default View.extend({
  tmpl: '@:./index.html',
  init() {
    this.set({
      index: -1,
    });
  },
  assign({ data, disabled, max }) {
    this.set({
      disabled,
      max,
    });

    this['@:{now.url}'] = null;
    this['@:{now.id}'] = null;
    this['@:{fields}'] = null;
    this['@:{drag.index}'] = null;

    if (data) {
      let { url, fields, id } = data;
      if (url) {
        this['@:{now.url}'] = url;
      }
      if (id) {
        this['@:{now.id}'] = id;
      }
      if (fields) {
        this['@:{fields}'] = fields;
        this.set({
          fields,
        });
      }
    }

    this['@:{data.stringify}'] = JSON.stringify([
      this['@:{now.url}'],
      this['@:{now.id}'],
      this['@:{fields}'],
    ]);
  },

  render() {
    this.digest();
  },

  '@:{notify.change}'() {
    let url = this['@:{now.url}'],
      fields = this['@:{fields}'],
      id = this['@:{now.id}'];
    let nowStringify = JSON.stringify([url, id, fields]);
    if (nowStringify != this['@:{data.stringify}']) {
      this['@:{data.stringify}'] = nowStringify;
      if (!fields.length) {
        url = '';
        id = '';
      }
      dispatch(this.root, 'change', {
        bindField: {
          url,
          id,
          fields,
        },
      });
    }
  },

  '@:{drag.exit}<dragleave>'(e: DragEvent & Magix5.MagixMouseEvent) {
    if (!this.get('disabled') && Dragdrop['@:{is.dragleave}'](this)) {
      this.digest({
        enter: false,
        outside: true,
        index: -1,
      });
    }
  },

  '@:{drag.end}<dragend>'() {
    if (!this['@:{dropped}']) {
      //未触发drop事件，表明未移动到浏览器的阈值，此时需要还原界面
      this.digest({
        enter: false,
        index: -1,
        dragIndex: -1,
      });
    }
  },

  '@:{drag.enter}<dragenter>'(e: DragEvent & Magix5.MagixMouseEvent) {
    if (!this.get('disabled') && Dragdrop['@:{is.dragenter}'](this)) {
      // let inNode = inside(e.relatedTarget as HTMLElement, e.eventTarget);
      // if (!inNode) {
      let fields = this['@:{fields}'];
      let index = this.get('index');
      let dragIndex = this['@:{drag.index}'];
      let dragData = State.get('@:{global#bind.field.drag.data}');

      if ((dragData && fields.length && index == -1) || dragIndex != null) {
        let rootBound = this.root.getBoundingClientRect();
        let onTop;

        //如果不是从顶部进来，则提示放最后一个的底部
        if (rootBound.y + Half_Item_Height < e.pageY) {
          index = fields.length - 1;
          onTop = 0;
        } else {
          //否则先提示放顶部
          index = 0;
          onTop = 1;
        }
        this.set({
          index,
          onTop,
        });
      }

      this.digest({
        outside: false,
        enter: dragIndex == null && dragData,
      });
    }
    // }
  },
  '@:{drag.start}<dragstart>'(e: Magix5.MagixMouseEvent & DragEvent) {
    let { params, dataTransfer } = e;
    this.set({
      dragIndex: (this['@:{drag.index}'] = params.index),
    });
    //dataTransfer.effectAllowed = 'move';
    //firefox required setData
    dataTransfer.setData('text/plain', '@:{fix.firefox.cursor}');
    CurrentDragViewId = this.id;
  },

  '@:{drag.over}<dragover>'(e: Magix5.MagixMouseEvent & DragEvent) {
    if (this.get('disabled') || (CurrentDragViewId && CurrentDragViewId != this.id)) {
      return;
    }

    let me = this;
    let dragIndex = me['@:{drag.index}'];
    this['@:{prevent.default}'](e);
    let { eventTarget, params, pageY } = e;

    //dataTransfer.dropEffect = 'move';
    let rect = eventTarget.getBoundingClientRect();
    let onTop = rect.top + rect.height / 2 > pageY;
    let index = params.index;

    //如果放在某一个元素的顶部
    if (onTop) {
      //如果这个元素的顶部挨着拖动元素，其实不需要移动
      if (index - 1 == dragIndex) {
        index = dragIndex;
      }
    } else {
      if (index + 1 == dragIndex) {
        index = dragIndex;
      }
    }

    me.digest({
      onTop,
      index,
    });
  },
  '$doc<drop>'(e: DragEvent) {
    this['@:{prevent.default}'](e);

    if (this.get('disabled')) return;

    Dragdrop['@:{clear.drag}'](this);
    this['@:{dropped}'] = 1;

    let changed;
    let inNode = inside(e.target as HTMLElement, this.root);
    let max = this.get('max') || -1;

    if (!inNode) {
      //放下时，如果放置在当前节点的外部，则表明删除这个拖动的元素
      let index = this['@:{drag.index}'];
      if (index != null) {
        //需要判断是否有拖动中的元素，避免从数据源拖进来再拖出的情况
        let fields = this['@:{fields}'];
        fields.splice(index, 1); //直接删除
        this.set({
          index: -1,
          fields,
        });
        changed = 1;
      }
    } else {
      let dragData = State.get('@:{global#bind.field.drag.data}');

      let index = this.get('index'),
        onTop = this.get('onTop');

      if (dragData) {
        //如果能拿到数据，则表明从数据源拖动进来
        State.set({
          '@:{global#bind.field.drag.data}': null,
        });

        let { url, field, id } = dragData;

        let fields = this['@:{fields}'];

        if (this['@:{now.id}'] != id) {
          //根据id来判断是否换了新的数据源

          this['@:{now.url}'] = url;
          fields = [field]; //如果是新的数据源，则旧的字段全部删除
          this['@:{fields}'] = fields;
          this['@:{now.id}'] = id;

          this.set({
            index: -1,
            fields,
          });
          changed = 1;
        } else {
          //追加数据源
          if (index != -1) {
            fields.splice(index + (onTop ? 0 : 1), 0, field);
            changed = 1;
          } else if (!fields.length) {
            fields.push(field);
            changed = 1;
          }

          this.set({
            index: -1,
            fields,
          });
        }
      } else {
        //普通的调整顺序
        if (index != -1) {
          let startIndex = this['@:{drag.index}'];
          let fields = this['@:{fields}'];
          let drag = fields[startIndex];
          fields.splice(index + (onTop ? 0 : 1), 0, drag);

          if (index < startIndex) {
            fields.splice(startIndex + 1, 1);
          } else {
            fields.splice(startIndex, 1);
          }

          this.set({
            fields,
            index: -1,
          });

          changed = 1;
        }
      }
    }
    this['@:{drag.index}'] = null;
    this.digest({
      enter: false,
      dragIndex: -1,
    });
    if (changed) {
      this['@:{notify.change}']();
    }
    CurrentDragViewId = null;
    let waitMarker = mark(this, '@:{wait.drag.end.event.check}'); //等待dropend事件检查
    setTimeout(() => {
      if (waitMarker()) {
        delete this['@:{dropped}'];
      }
    }, 30);
  },
});
