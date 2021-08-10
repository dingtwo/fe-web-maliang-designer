/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/65/list",["4e","../../4d/51","../../4p/index","../54/index","../4s/index"],(require,exports,module)=>{
let $quick_fK_0_static_node;
let $quick_fK_3_static_node;
let $quick_eI_static_text;
let $quick_eJ_static_text;
let $quick_fK_1_static_attr={'class': 'rd-dO rd-dP rd-eB rd-eF rd-eG rd-ec rd-ez rd-fL',};
let $quick_fK_2_static_attr={'class': 'rd-dZ',};
let $quick_fK_4_static_attr={'class': 'rd-dS rd-fP',};
let $quick_fK_5_static_attr={'class': 'rd-ei rd-ep rd-fy',};
let $quick_fK_6_static_attr={'class': 'rd-ez rd-jf',};
let $quick_fK_7_static_attr={'class': 'rd-ez rd-ji',};
let $quick_fK_8_static_attr={'class': 'rd-eV rd-ez',};
let $quick_fK_9_static_attr={'class': 'rd-ei rd-ew rd-jc',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("4e");
let service_1 = require("../../4d/51");
let index_1 = require("../../4p/index");
let index_2 = require("../54/index");
let index_3 = require("../4s/index");
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

if($quick_fK_0_static_node){
$vnode_0=[$quick_fK_0_static_node];
}else{
$vnode_0=[$quick_fK_0_static_node=$createVNode('div',{'_': 'cH','class': 'rd-dQ rd-eF rd-fK',})];
}
$vnode_2=[$createVNode(0,(i18n('kh')))];$vnode_1=[$createVNode('h5',$quick_fK_2_static_attr,$vnode_2)];
if($quick_fK_3_static_node){
$vnode_1.push($quick_fK_3_static_node);
}else{
$vnode_2=[$createVNode(0,'如何不显示或更换图片库接口?')];$vnode_1.push($quick_fK_3_static_node=$createVNode('a',{'_': 'cI','class': 'rd-d1 rd-e_','href': 'https://github.com/xinglie/report-designer/issues/28','rel': 'noopener noreferrer','target': '_blank',},$vnode_2));
}
$vnode_0.push($createVNode('div',$quick_fK_1_static_attr,$vnode_1));$vnode_1=[];
if(error){
$vnode_2=[$createVNode(0,(error.message))];$vnode_1.push($createVNode('div',$quick_fK_5_static_attr,$vnode_2));
}else{
$vnode_2=[];
for(let $q_c_daaodr=list.length,ci=0;ci<$q_c_daaodr;ci+=1){
let category=list[ci];
$vnode_3=[$createVNode(0,(category.title))];;$$_class='rd-jg rd-ei rd-eX';if(ci==current){;$$_class+=' rd-jh';};$vnode_2.push($createVNode('div',{'mx5-click': ((ci!=current))&&($viewId+'_kb({to:'+(ci)+'})'),'class': $$_class,},$vnode_3));
}$vnode_3=[$quick_eI_static_text||($quick_eI_static_text=$createVNode(0,'网络图片'))];;$$_class='rd-jg rd-ei rd-eX';if('network'==current){;$$_class+=' rd-jh';};$vnode_2.push($createVNode('div',{'mx5-click': (('network'!=current))&&($viewId+'_kb({to:\'network\'})'),'class': $$_class,},$vnode_3));$vnode_1.push($createVNode('div',$quick_fK_6_static_attr,$vnode_2));
if(current=='network'){
$vnode_2=[$quick_eJ_static_text||($quick_eJ_static_text=$createVNode(0,'网络地址: ')),$createVNode('input',{'placeholder': '请粘贴/输入网络图片地址','class': 'rd-dG rd-dH rd-e_ rd-ey','id': '_rd_nw_'+$viewId,},1)];$vnode_3=[$createVNode(0,(i18n('d0')))];$vnode_2.push($createVNode('button',{'class': 'rd-dL rd-dN rd-e_','mx5-click': $viewId+'_kT()',},$vnode_3));$vnode_1.push($createVNode('div',$quick_fK_7_static_attr,$vnode_2));
}else{
$vnode_2=[];
for(let $q_a_ekx=list[current].list,$q_c_wecttvimib=$q_a_ekx.length,$q_key_dzrvfxa=0;$q_key_dzrvfxa<$q_c_wecttvimib;$q_key_dzrvfxa+=1){
let p=$q_a_ekx[$q_key_dzrvfxa];
$vnode_4=[$createVNode('div',{'class': 'rd-ee rd-jb','style': 'background-image:url(\''+(p.src)+'\')',})];$vnode_3=[$createVNode('div',{'class': 'rd-eN rd-eX rd-fS rd-fq rd-ja','mx5-click': $viewId+'_es({src:\''+($encodeQuote(p.src))+'\'})',},$vnode_4)];$vnode_4=[$createVNode(0,(p.title))];$vnode_3.push($createVNode('div',$quick_fK_9_static_attr,$vnode_4));$vnode_2.push($createVNode('div',{'title': (p.title),},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_fK_8_static_attr,$vnode_2));
}
}$vnode_0.push($createVNode('div',$quick_fK_4_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init(data) {
        let me = this;
        me['_ej'] = data.dialog;
        me['_j4'] = data.done;
        me.set({
            current: 0
        });
        me.on('destroy', () => {
            index_3.hide();
        });
    },
    render() {
        let m = mark(this, '_dU');
        let s = new service_1();
        s.all('_fz', (err, bag) => {
            if (m()) {
                this.digest({
                    error: err,
                    list: bag.get('data', [])
                });
            }
        });
    },
    '_es<click>'(e) {
        let me = this;
        let img = new Image();
        let done = me['_j4'];
        let src = e.params.src;
        let m = mark(this, '_es');
        index_3.show('正在获取图片尺寸...');
        img.onerror = () => {
            if (m()) {
                index_3.hide();
                me.alert(index_1('kg'));
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
                me['_ej'].close();
            }
        };
        img.src = src;
    },
    '_kb<click>'(e) {
        let { to } = e.params;
        this.digest({
            current: to
        });
    },
    '_et<click>'() {
        this['_ej'].close();
    },
    '_kT<click>'() {
        let input = node(`_rd_nw_${this.id}`);
        let url = input.value.trim();
        if (url) {
            let m = mark(this, '_es');
            let done = this['_j4'];
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
                    this['_ej'].close();
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
    '_kU<change>'(e) {
        console.log(e.page);
    }
}).merge(index_2);

});