/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6o/list",["51","../../50/5k","../../5c/index","../5n/index","../5f/index"],(require,exports,module)=>{
let $quick_ij_0_static_node;
let $quick_ij_3_static_node;
let $quick_hh_static_text;
let $quick_hi_static_text;
let $quick_ij_1_static_attr={'class': 'rd-g9 rd-gM rd-gn rd-go rd-ha rd-he rd-hf rd-ik',};
let $quick_ij_2_static_attr={'class': 'rd-gy',};
let $quick_ij_4_static_attr={'class': 'rd-gr rd-io',};
let $quick_ij_5_static_attr={'class': 'rd-gS rd-gZ rd-h8',};
let $quick_ij_6_static_attr={'class': 'rd-g9 rd-lP',};
let $quick_ij_7_static_attr={'class': 'rd-g9 rd-lS',};
let $quick_ij_8_static_attr={'class': 'rd-g9 rd-hu',};
let $quick_ij_9_static_attr={'class': 'rd-g6 rd-gS rd-lM',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("51");
let service_1 = require("../../50/5k");
let index_1 = require("../../5c/index");
let index_2 = require("../5n/index");
let index_3 = require("../5f/index");
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

if($quick_ij_0_static_node){
$vnode_0=[$quick_ij_0_static_node];
}else{
$vnode_0=[$quick_ij_0_static_node=$createVNode('div',{'_': 'eD','class': 'rd-gp rd-he rd-ij',})];
}
$vnode_2=[$createVNode(0,(i18n('mQ')))];$vnode_1=[$createVNode('h5',$quick_ij_2_static_attr,$vnode_2)];
if($quick_ij_3_static_node){
$vnode_1.push($quick_ij_3_static_node);
}else{
$vnode_2=[$createVNode(0,'如何不显示或更换图片库接口?')];$vnode_1.push($quick_ij_3_static_node=$createVNode('a',{'_': 'eE','class': 'rd-gA rd-gJ','href': 'https://github.com/xinglie/report-designer/issues/28','rel': 'noopener noreferrer','target': '_blank',},$vnode_2));
}
$vnode_0.push($createVNode('div',$quick_ij_1_static_attr,$vnode_1));$vnode_1=[];
if(error){
$vnode_2=[$createVNode(0,(error.message))];$vnode_1.push($createVNode('div',$quick_ij_5_static_attr,$vnode_2));
}else{
$vnode_2=[];
for(let $q_c_ufystbe=list.length,ci=0;ci<$q_c_ufystbe;ci+=1){
let category=list[ci];
$vnode_3=[$createVNode(0,(category.title))];;$$_class='rd-lQ rd-gS rd-hw';if(ci==current){;$$_class+=' rd-lR';};$vnode_2.push($createVNode('div',{'mx5-click': ((ci!=current))&&($viewId+'_mO({to:'+(ci)+'})'),'class': $$_class,},$vnode_3));
}$vnode_3=[$quick_hh_static_text||($quick_hh_static_text=$createVNode(0,'网络图片'))];;$$_class='rd-lQ rd-gS rd-hw';if('network'==current){;$$_class+=' rd-lR';};$vnode_2.push($createVNode('div',{'mx5-click': (('network'!=current))&&($viewId+'_mO({to:\'network\'})'),'class': $$_class,},$vnode_3));$vnode_1.push($createVNode('div',$quick_ij_6_static_attr,$vnode_2));
if(current=='network'){
$vnode_2=[$quick_hi_static_text||($quick_hi_static_text=$createVNode(0,'网络地址: ')),$createVNode('input',{'placeholder': '请粘贴/输入网络图片地址','class': 'rd-g8 rd-gJ rd-gf rd-gg','id': '_rd_nw_'+$viewId,},1)];$vnode_3=[$createVNode(0,(i18n('gz')))];$vnode_2.push($createVNode('button',{'class': 'rd-gJ rd-gk rd-gm','mx5-click': $viewId+'_nv()',},$vnode_3));$vnode_1.push($createVNode('div',$quick_ij_7_static_attr,$vnode_2));
}else{
$vnode_2=[];
for(let $q_a_bdrbxtsq=list[current].list,$q_c_aekaej=$q_a_bdrbxtsq.length,$q_key_arntpmbi=0;$q_key_arntpmbi<$q_c_aekaej;$q_key_arntpmbi+=1){
let p=$q_a_bdrbxtsq[$q_key_arntpmbi];
$vnode_4=[$createVNode('div',{'class': 'rd-gO rd-lL','style': 'background-image:url(\''+(p.src)+'\')',})];$vnode_3=[$createVNode('div',{'class': 'rd-h0 rd-hm rd-hw rd-ir rd-lK','mx5-click': $viewId+'_g2({src:\''+($encodeQuote(p.src))+'\'})',},$vnode_4)];$vnode_4=[$createVNode(0,(p.title))];$vnode_3.push($createVNode('div',$quick_ij_9_static_attr,$vnode_4));$vnode_2.push($createVNode('div',{'title': (p.title),},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_ij_8_static_attr,$vnode_2));
}
}$vnode_0.push($createVNode('div',$quick_ij_4_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init(data) {
        let me = this;
        me['_gT'] = data.dialog;
        me['_mG'] = data.done;
        me.set({
            current: 0
        });
        me.on('destroy', () => {
            index_3.hide();
        });
    },
    render() {
        let m = mark(this, '_gt');
        let s = new service_1();
        s.all('_ia', (err, bag) => {
            if (m()) {
                this.digest({
                    error: err,
                    list: bag.get('data', [])
                });
            }
        });
    },
    '_g2<click>'(e) {
        let me = this;
        let img = new Image();
        let done = me['_mG'];
        let src = e.params.src;
        let m = mark(this, '_g2');
        index_3.show('正在获取图片尺寸...');
        img.onerror = () => {
            if (m()) {
                index_3.hide();
                me.alert(index_1('mP'));
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
                me['_gT'].close();
            }
        };
        img.src = src;
    },
    '_mO<click>'(e) {
        let { to } = e.params;
        this.digest({
            current: to
        });
    },
    '_g3<click>'() {
        this['_gT'].close();
    },
    '_nv<click>'() {
        let input = node(`_rd_nw_${this.id}`);
        let url = input.value.trim();
        if (url) {
            let m = mark(this, '_g2');
            let done = this['_mG'];
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
                    this['_gT'].close();
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
    '_nw<change>'(e) {
        console.log(e.page);
    }
}).merge(index_2);

});