/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-picture/list",["magix5","../../designer/service","../../i18n/index","../mx-dialog/index","../mx-toast/index"],(require,exports,module)=>{
let $quick_mq_0_static_node;
let $quick_mq_3_static_node;
let $quick_lo_static_text;
let $quick_lp_static_text;
let $quick_mq_1_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-dialog-header rd-_assets_index_less_-dialog-header-with-shadow rd-_assets_index_less_-flex rd-_assets_index_less_-position-sticky rd-_assets_index_less_-top-0 rd-_assets_index_less_-z-index-8',};
let $quick_mq_2_static_attr={'class': 'rd-_assets_index_less_-tag-h5',};
let $quick_mq_4_static_attr={'class': 'rd-_assets_index_less_-dialog-body rd-_assets_index_less_-min-height-100vh',};
let $quick_mq_5_static_attr={'class': 'rd-_assets_index_less_-fontsize-16 rd-_assets_index_less_-mt30 rd-_assets_index_less_-tc',};
let $quick_mq_6_static_attr={'class': 'rd-_assets_index_less_-flex rd-_gallery_mx-picture_index_less_-tabs',};
let $quick_mq_7_static_attr={'class': 'rd-_assets_index_less_-flex rd-_gallery_mx-picture_index_less_-margin-100',};
let $quick_mq_8_static_attr={'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-flex-wrap-wrap',};
let $quick_mq_9_static_attr={'class': 'rd-_assets_index_less_-ellipsis rd-_assets_index_less_-tc rd-_gallery_mx-picture_index_less_-item-title',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("magix5");
let service_1 = require("../../designer/service");
let index_1 = require("../../i18n/index");
let index_2 = require("../mx-dialog/index");
let index_3 = require("../mx-toast/index");
let { View, mark, node } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
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

if($quick_mq_0_static_node){
$vnode_0=[$quick_mq_0_static_node];
}else{
$vnode_0=[$quick_mq_0_static_node=$createVNode('div',{'_': 'hN','class': 'rd-_assets_index_less_-dialog-header-shadow rd-_assets_index_less_-position-sticky rd-_assets_index_less_-z-index-7',})];
}
$vnode_2=[$createVNode(0,($__line=3,$__art='{{=i18n(\'@:{lang#lib.images~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#lib.images~rs}\')%>',(i18n('@:{lang#lib.images~rs}'))))];$vnode_1=[$createVNode('h5',$quick_mq_2_static_attr,$vnode_2)];
if($quick_mq_3_static_node){
$vnode_1.push($quick_mq_3_static_node);
}else{
$vnode_2=[$createVNode(0,'如何不显示或更换图片库接口?')];$vnode_1.push($quick_mq_3_static_node=$createVNode('a',{'_': 'hO','class': 'rd-_assets_index_less_-ml10 rd-_assets_index_less_-tag-a','href': 'https://github.com/xinglie/report-designer/issues/28','rel': 'noopener noreferrer','target': '_blank',},$vnode_2));
}
$vnode_0.push($createVNode('div',$quick_mq_1_static_attr,$vnode_1));$vnode_1=[];$__line=7;$__art="{{if error}}";$__ctrl="if(error){";
if(error){
$vnode_2=[$createVNode(0,($__line=8,$__art='{{=error.message}}',$__ctrl='<%=error.message%>',(error.message)))];$vnode_1.push($createVNode('div',$quick_mq_5_static_attr,$vnode_2));
}else{
$vnode_2=[];$__line=11;$__art="{{each list as category ci}}";$__ctrl="for(let $q_c_exdfcjxj=list.length,ci=0;ci<$q_c_exdfcjxj;ci++){let category=list[ci];";
for(let $q_c_exdfcjxj=list.length,ci=0;ci<$q_c_exdfcjxj;ci+=1){
let category=list[ci];
$vnode_3=[$createVNode(0,($__line=12,$__art='{{=category.title}}',$__ctrl='<%=category.title%>',(category.title)))];;$$_class='rd-_gallery_mx-picture_index_less_-tabs-item rd-_assets_index_less_-tc rd-_assets_index_less_-cursor-pointer'+($__line=12,$__art='{{if ci==current}}','');$__ctrl='<%if(ci==current){%>';if(ci==current){;$$_class+=' rd-_gallery_mx-picture_index_less_-tabs-active'+($__line=12,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2.push($createVNode('div',{'mx5-click': (($temp_var=($__line=12,$__art='{{ci!=current}}',$__ctrl='<%ci!=current%>',ci!=current),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-picture/list.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{change.tab~rs}({to:'+($__line=12,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci))+'})'),'class': $$_class,},$vnode_3));
}$vnode_3=[$quick_lo_static_text||($quick_lo_static_text=$createVNode(0,'网络图片'))];;$$_class='rd-_gallery_mx-picture_index_less_-tabs-item rd-_assets_index_less_-tc rd-_assets_index_less_-cursor-pointer'+($__line=15,$__art='{{if \'network\'==current}}','');$__ctrl='<%if(\'network\'==current){%>';if('network'==current){;$$_class+=' rd-_gallery_mx-picture_index_less_-tabs-active'+($__line=15,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2.push($createVNode('div',{'mx5-click': (($temp_var=($__line=15,$__art='{{\'network\'!=current}}',$__ctrl='<%\'network\'!=current%>','network'!=current),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-picture/list.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{change.tab~rs}({to:\'network\'})'),'class': $$_class,},$vnode_3));$vnode_1.push($createVNode('div',$quick_mq_6_static_attr,$vnode_2));$__line=20;$__art="{{if current==\\'network\\'}}";$__ctrl="if(current=='network'){";
if(current=='network'){
$vnode_2=[$quick_lp_static_text||($quick_lp_static_text=$createVNode(0,'网络地址: ')),$createVNode('input',{'placeholder': '请粘贴/输入网络图片地址','class': 'rd-_assets_index_less_-flex-fill-rest rd-_assets_index_less_-input rd-_assets_index_less_-ml10 rd-_assets_index_less_-tag-input','id': '_rd_nw_'+($__line=23,$__art='{{=$viewId}}','')+$viewId,},1)];$vnode_3=[$createVNode(0,($__line=24,$__art='{{=i18n(\'@:{lang#btn.apply~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#btn.apply~rs}\')%>',(i18n('@:{lang#btn.apply~rs}'))))];$vnode_2.push($createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-ml10','mx5-click': $viewId+'@:{apply.network.image~rs}()',},$vnode_3));$vnode_1.push($createVNode('div',$quick_mq_7_static_attr,$vnode_2));
}else{
$vnode_2=[];$__line=28;$__art="{{each list[current].list as p}}";$__ctrl="for(let $q_a_sdyfrimoj=list[current].list,$q_c_npicypb=$q_a_sdyfrimoj.length,$q_key_srqfpmad=0;$q_key_srqfpmad<$q_c_npicypb;$q_key_srqfpmad++){let p=$q_a_sdyfrimoj[$q_key_srqfpmad];";
for(let $q_a_sdyfrimoj=list[current].list,$q_c_npicypb=$q_a_sdyfrimoj.length,$q_key_srqfpmad=0;$q_key_srqfpmad<$q_c_npicypb;$q_key_srqfpmad+=1){
let p=$q_a_sdyfrimoj[$q_key_srqfpmad];
$vnode_4=[$createVNode('div',{'class': 'rd-_assets_index_less_-hp100 rd-_gallery_mx-picture_index_less_-item','style': 'background-image:url(\''+($__line=31,$__art='{{=p.src}}',$__ctrl='<%=p.src%>',(p.src))+'\')',})];$vnode_3=[$createVNode('div',{'class': 'rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-height-100 rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-padding-4 rd-_gallery_mx-picture_index_less_-item-container','mx5-click': $viewId+'@:{use~rs}({src:\''+($__line=30,$__art='{{=p.src}}',$__ctrl='<%=$encodeQuote(p.src)%>',($encodeQuote(p.src)))+'\'})',},$vnode_4)];$vnode_4=[$createVNode(0,($__line=33,$__art='{{=p.title}}',$__ctrl='<%=p.title%>',(p.title)))];$vnode_3.push($createVNode('div',$quick_mq_9_static_attr,$vnode_4));$vnode_2.push($createVNode('div',{'title': ($__line=29,$__art='{{=p.title}}',$__ctrl='<%=p.title%>',(p.title)),},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_mq_8_static_attr,$vnode_2));
}
}$vnode_0.push($createVNode('div',$quick_mq_4_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-picture/list.html'; throw msg; }  } ,
    init(data) {
        let me = this;
        me['@:{dialog~rs}'] = data.dialog;
        me['@:{done.callback~rs}'] = data.done;
        me.set({
            current: 0
        });
        me.on('destroy', () => {
            index_3.hide();
        });
    },
    render() {
        let m = mark(this, '@:{render~rs}');
        let s = new service_1();
        s.all('@:{get.images~rs}', (err, bag) => {
            if (m()) {
                this.digest({
                    error: err,
                    list: bag.get('data', [])
                });
            }
        });
    },
    '@:{use~rs}<click>'(e) {
        let me = this;
        let img = new Image();
        let done = me['@:{done.callback~rs}'];
        let src = e.params.src;
        let m = mark(this, '@:{use~rs}');
        index_3.show('正在获取图片尺寸...');
        img.onerror = () => {
            if (m()) {
                index_3.hide();
                me.alert(index_1('@:{lang#load.img.error~rs}'));
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
                me['@:{dialog~rs}'].close();
            }
        };
        img.src = src;
    },
    '@:{change.tab~rs}<click>'(e) {
        let { to } = e.params;
        this.digest({
            current: to
        });
    },
    '@:{close~rs}<click>'() {
        this['@:{dialog~rs}'].close();
    },
    '@:{apply.network.image~rs}<click>'() {
        let input = node(`_rd_nw_${this.id}`);
        let url = input.value.trim();
        if (url) {
            let m = mark(this, '@:{use~rs}');
            let done = this['@:{done.callback~rs}'];
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
                    this['@:{dialog~rs}'].close();
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
    '@:{page.change~rs}<change>'(e) {
        console.log(e.page);
    }
}).merge(index_2);

});