/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/73/list",["5c","../../5b/5v","../../5n/index","../62/index","../5q/index"],(require,exports,module)=>{
let $quick_n8_0_static_node;
let $quick_n8_3_static_node;
let $quick_m6_static_text;
let $quick_m7_static_text;
let $quick_n8_1_static_attr={'class': 'rd-m3 rd-m4 rd-mA rd-mX rd-mZ rd-mb rd-mc rd-n9',};
let $quick_n8_2_static_attr={'class': 'rd-mm',};
let $quick_n8_4_static_attr={'class': 'rd-mf rd-oc',};
let $quick_n8_5_static_attr={'class': 'rd-mG rd-mN rd-nW',};
let $quick_n8_6_static_attr={'class': 'rd-mX rd-rD',};
let $quick_n8_7_static_attr={'class': 'rd-mX rd-rG',};
let $quick_n8_8_static_attr={'class': 'rd-mX rd-ni',};
let $quick_n8_9_static_attr={'class': 'rd-mG rd-mU rd-rA',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("5c");
let service_1 = require("../../5b/5v");
let index_1 = require("../../5n/index");
let index_2 = require("../62/index");
let index_3 = require("../5q/index");
let { View, mark, node } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0,
{
	i18n,
	error,
	list,
	current,}=$dataFromView,
$vnode_2,
$vnode_1,
$$_class,
$vnode_3,
$vnode_4;

if($quick_n8_0_static_node){
$vnode_0=[$quick_n8_0_static_node];
}else{
$vnode_0=[$quick_n8_0_static_node=$createVNode('div',{'_': 'i!','class': 'rd-m3 rd-md rd-n8',})];
}
$vnode_2=[$createVNode(0,(i18n('sF')))];$vnode_1=[$createVNode('h5',$quick_n8_2_static_attr,$vnode_2)];
if($quick_n8_3_static_node){
$vnode_1.push($quick_n8_3_static_node);
}else{
$vnode_2=[$createVNode(0,'如何不显示或更换图片库接口?')];$vnode_1.push($quick_n8_3_static_node=$createVNode('a',{'_': 'i@','class': 'rd-mo rd-mx','href': 'https://github.com/xinglie/report-designer/issues/28','rel': 'noopener noreferrer','target': '_blank',},$vnode_2));
}
$vnode_0.push($createVNode('div',$quick_n8_1_static_attr,$vnode_1));$vnode_1=[];
if(error){
$vnode_2=[$createVNode(0,(error.message))];$vnode_1.push($createVNode('div',$quick_n8_5_static_attr,$vnode_2));
}else{
$vnode_2=[];
for(let $q_c_qxaqqtg=list.length,ci=0;ci<$q_c_qxaqqtg;ci+=1){
let category=list[ci];
$vnode_3=[$createVNode(0,(category.title))];;$$_class='rd-rE rd-mG rd-nk';if(ci==current){;$$_class+=' rd-rF';};$vnode_2.push($createVNode('div',{'mx5-click': ((ci!=current))&&($viewId+'_sz({to:'+(ci)+'})'),'class': $$_class,},$vnode_3));
}$vnode_3=[$quick_m6_static_text||($quick_m6_static_text=$createVNode(0,'网络图片'))];;$$_class='rd-rE rd-mG rd-nk';if('network'==current){;$$_class+=' rd-rF';};$vnode_2.push($createVNode('div',{'mx5-click': (('network'!=current))&&($viewId+'_sz({to:\'network\'})'),'class': $$_class,},$vnode_3));$vnode_1.push($createVNode('div',$quick_n8_6_static_attr,$vnode_2));
if(current=='network'){
$vnode_2=[$quick_m7_static_text||($quick_m7_static_text=$createVNode(0,'网络地址: ')),$createVNode('input',{'placeholder': '请粘贴/输入网络图片地址','class': 'rd-l4 rd-l5 rd-mW rd-mx','id': '_rd_nw_'+$viewId,},1)];$vnode_3=[$createVNode(0,(i18n('mn')))];$vnode_2.push($createVNode('button',{'class': 'rd-l9 rd-ma rd-mx','mx5-click': $viewId+'_tg()',},$vnode_3));$vnode_1.push($createVNode('div',$quick_n8_7_static_attr,$vnode_2));
}else{
$vnode_2=[];
for(let $q_a_qsqjyz=list[current].list,$q_c_vywuaxey=$q_a_qsqjyz.length,$q_key_zindsyzri=0;$q_key_zindsyzri<$q_c_vywuaxey;$q_key_zindsyzri+=1){
let p=$q_a_qsqjyz[$q_key_zindsyzri];
$vnode_4=[$createVNode('div',{'class': 'rd-mC rd-rz','style': 'background-image:url(\''+(p.src)+'\')',})];$vnode_3=[$createVNode('div',{'class': 'rd-nO rd-na rd-nk rd-of rd-ry','mx5-click': $viewId+'_mQ({src:\''+($encodeQuote(p.src))+'\'})',},$vnode_4)];$vnode_4=[$createVNode(0,(p.title))];$vnode_3.push($createVNode('div',$quick_n8_9_static_attr,$vnode_4));$vnode_2.push($createVNode('div',{'title': (p.title),},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_n8_8_static_attr,$vnode_2));
}
}$vnode_0.push($createVNode('div',$quick_n8_4_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init(data) {
        let me = this;
        me['_mH'] = data.dialog;
        me['_sr'] = data.done;
        me.set({
            current: 0
        });
        me.on('destroy', () => {
            index_3.hide();
        });
    },
    render() {
        let m = mark(this, '_mh');
        let s = new service_1();
        s.all('_nX', (err, bag) => {
            if (m()) {
                this.digest({
                    error: err,
                    list: bag.get('data', [])
                });
            }
        });
    },
    '_mQ<click>'(e) {
        let me = this;
        let img = new Image();
        let done = me['_sr'];
        let src = e.params.src;
        let m = mark(this, '_mQ');
        index_3.show('正在获取图片尺寸...');
        img.onerror = () => {
            if (m()) {
                index_3.hide();
                me.alert(index_1('sE'));
            }
        };
        img.onload = () => {
            if (m()) {
                index_3.hide();
                let w = img.width;
                let h = img.height;
                done({
                    src,
                    width: w,
                    height: h
                });
                me['_mH'].close();
            }
        };
        img.src = src;
    },
    '_sz<click>'(e) {
        let { to } = e.params;
        this.digest({
            current: to
        });
    },
    '_mR<click>'() {
        this['_mH'].close();
    },
    '_tg<click>'() {
        let input = node(`_rd_nw_${this.id}`);
        let url = input.value.trim();
        if (url) {
            let m = mark(this, '_mQ');
            let done = this['_sr'];
            index_3.show('正在获取图片尺寸...');
            let img = new Image();
            img.onload = () => {
                if (m()) {
                    index_3.hide();
                    done({
                        src: url,
                        width: img.width,
                        height: img.height
                    });
                    this['_mH'].close();
                }
            };
            img.onerror = () => {
                if (m()) {
                    input.select();
                    index_3.show('无法加载图片，请检查地址后重试~', 2e3);
                }
            };
            img.src = url;
        }
        else {
            index_3.show('请粘贴/输入图片地址~', 2e3);
            input.focus();
        }
    },
    '_th<change>'(e) {
        console.log(e.page);
    }
}).merge(index_2);

});