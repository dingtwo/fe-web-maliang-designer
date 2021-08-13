/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/example",["magix5","./const","./history","./service"],(require,exports,module)=>{
let $quick_e8_0_static_node;
let $quick_e8_1_static_node;
let $quick_e8_3_static_attr={'class': 'rd-_assets_index_less_-dialog-body rd-_assets_index_less_-min-height-500',};
let $quick_e8_4_static_attr={'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-flex-wrap-wrap',};
let $quick_e8_5_static_attr={'class': 'rd-_assets_index_less_-fontsize-16 rd-_assets_index_less_-mt30 rd-_assets_index_less_-tc',};

let magix_1 = require("magix5");
let const_1 = require("./const");
let history_1 = require("./history");
let service_1 = require("./service");
let { random, floor } = Math;
let { State, applyStyle, View, mark, config } = magix_1;
applyStyle("rd-_designer_example_less_","\n.rd-_designer_example_less_-item-container {\nwidth:100px;\nmargin:4px;\nborder:1px solid #e6e6e6;\npadding:0 10px;\nborder-radius:2px;\n}\n.rd-_designer_example_less_-item-container:hover {\nborder-color:#47B34E;\n}\n");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	error,
	list,}=$dataFromView,
$vnode_1,
$vnode_3,
$vnode_4,
$vnode_2;

if($quick_e8_0_static_node){
$vnode_0=[$quick_e8_0_static_node];
}else{
$vnode_0=[$quick_e8_0_static_node=$createVNode('div',{'_': 'dM','class': 'rd-_assets_index_less_-dialog-header-shadow rd-_assets_index_less_-position-sticky rd-_assets_index_less_-z-index-7',})];
}

if($quick_e8_1_static_node){
$vnode_0.push($quick_e8_1_static_node);
}else{
$vnode_1=[$createVNode(0,'<h5 class="rd-_assets_index_less_-tag-h5">模板</h5><a class="rd-_assets_index_less_-ml10 rd-_assets_index_less_-tag-a" href="https://github.com/xinglie/report-designer/issues/28" rel="noopener noreferrer" target="_blank">如何不显示或更换模板接口?</a>',1)];$vnode_0.push($quick_e8_1_static_node=$createVNode('div',{'_': 'dN','class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-dialog-header rd-_assets_index_less_-dialog-header-with-shadow rd-_assets_index_less_-flex rd-_assets_index_less_-position-sticky rd-_assets_index_less_-top-0 rd-_assets_index_less_-z-index-8',},$vnode_1));
}
$vnode_2=[];$__line=8;$__art="{{if error}}";$__ctrl="if(error){";
if(error){
$vnode_3=[$createVNode(0,($__line=9,$__art='{{=error.message}}',$__ctrl='<%=error.message%>',(error.message)))];$vnode_2.push($createVNode('div',$quick_e8_5_static_attr,$vnode_3));
}else{
$__line=11;$__art="{{each list as p}}";$__ctrl="for(let $q_c_zzwyfxhi=list.length,$q_key_ubgywxrmpo=0;$q_key_ubgywxrmpo<$q_c_zzwyfxhi;$q_key_ubgywxrmpo++){let p=list[$q_key_ubgywxrmpo];";
for(let $q_c_zzwyfxhi=list.length,$q_key_ubgywxrmpo=0;$q_key_ubgywxrmpo<$q_c_zzwyfxhi;$q_key_ubgywxrmpo+=1){
let p=list[$q_key_ubgywxrmpo];
$vnode_4=[$createVNode(0,($__line=14,$__art='{{=p.title}}',$__ctrl='<%=p.title%>',(p.title)))];$vnode_3=[$createVNode('div',{'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-flex rd-_assets_index_less_-height-100 rd-_assets_index_less_-justify-content-center rd-_assets_index_less_-overflow-hidden rd-_designer_example_less_-item-container','mx5-click': $viewId+'@:{use~rs}({src:\''+($__line=13,$__art='{{#p}}',$__ctrl='<%#p,\'auto_key_list.\'+($q_key_ubgywxrmpo)+\'.p\'%>',$keyOf($refData,p,'auto_key_list.'+($q_key_ubgywxrmpo)+'.p'))+'\'})',},$vnode_4)];$vnode_2.push($createVNode('div',{'title': ($__line=12,$__art='{{=p.title}}',$__ctrl='<%=p.title%>',(p.title)),},$vnode_3));
}
}$vnode_1=[$createVNode('div',$quick_e8_4_static_attr,$vnode_2)];$vnode_0.push($createVNode('div',$quick_e8_3_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/example.html'; throw msg; }  } ,
    init(data) {
        this['@:{dialog~rs}'] = data.dialog;
    },
    render() {
        let m = mark(this, '@:{render~rs}');
        let s = new service_1();
        s.all('@:{get.templates~rs}', (ex, bag) => {
            if (m()) {
                this.digest({
                    error: ex,
                    list: bag.get('data', [])
                });
            }
        });
    },
    '@:{use~rs}<click>'(e) {
        this['@:{dialog~rs}'].close();
        let { src } = e.params;
        if (src.stage) {
            State.fire('@:{event#example.change~rs}', {
                '@:{excample.change.event#type~rs}': history_1['@:{history#example.from.list~rs}'],
                '@:{excample.change.event#title~rs}': src.title,
                '@:{excample.change.event#stage~rs}': const_1['@:{const#clone~rs}'](src.stage)
            });
        }
    },
    '@:{close~rs}<click>'() {
        this['@:{dialog~rs}'].close();
    }
}).static({
    '@:{show~rs}'(owner) {
        if (!this['@:{shown~rs}'] &&
            config('getTemplateUrl')) {
            this['@:{shown~rs}'] = 1;
            owner.mxDialog("designer/example", {
                width: 1026
            }).whenClose(() => {
                delete this['@:{shown~rs}'];
            });
        }
    },
    '@:{load~rs}'() {
        return new Promise(resolve => {
            let s = new service_1();
            s.all('@:{get.templates~rs}', (ex, bag) => {
                let list = bag.get('data', []);
                let one = list[floor(random() * list.length)];
                if (one &&
                    one.stage) {
                    State.fire('@:{event#example.change~rs}', {
                        '@:{excample.change.event#type~rs}': history_1['@:{history#example.from.list~rs}'],
                        '@:{excample.change.event#stage~rs}': const_1['@:{const#clone~rs}'](one.stage),
                        '@:{excample.change.event#title~rs}': one.title
                    });
                }
                resolve();
            });
        });
    }
});

});