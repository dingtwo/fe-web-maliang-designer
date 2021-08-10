/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/map/index",["magix5","../../provider/map"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let map_1 = require("../../provider/map");
let { View, mark, node } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,
	error,
	i18n,}=$dataFromView,
$text,
$vnode_2,
$vnode_1;
$text=($__line=3,$__art='{{if error}}','');$__ctrl='<%if(error){%>';if(error){;$text+=' '+($__line=4,$__art='{{=error}}',$__ctrl='<%=error%>',(error))+' '+($__line=5,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$text+=' '+($__line=6,$__art='{{=i18n(\'@:{lang#elements.loading.library.tip~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#elements.loading.library.tip~rs}\')%>',(i18n('@:{lang#elements.loading.library.tip~rs}')))+' '+($__line=7,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2=[$createVNode(0,$text)];$vnode_1=[$createVNode('div',{'id': 'tip_'+($__line=2,$__art='{{=$viewId}}','')+$viewId,'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-hp100 rd-_assets_index_less_-justify-content-center',},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),'id': 'map_'+($__line=1,$__art='{{=$viewId}}','')+$viewId,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/map/index.html'; throw msg; }  } ,
    init() {
        this.on('destroy', () => {
            let map = this['@:{map.instance~rs}'];
            if (map) {
                map.remove();
            }
        });
    },
    assign(data) {
        this.set(data);
    },
    async render() {
        let m = mark(this, '@:{render~rs}');
        let props = this.get('props');
        if (this['@:{exception~rs}']) {
            this.digest({
                error: this['@:{exception~rs}']
            });
        }
        else {
            await this.digest();
            let map = this['@:{map.instance~rs}'];
            if (!map) {
                try {
                    await map_1();
                    if (m()) {
                        let containerNode = node(`map_${this.id}`);
                        let map = L.map(containerNode, {
                            zoom: props.zoom,
                            center: [props.lat, props.lng],
                            zoomControl: props.zoomCtrl,
                            dragging: props.dragging,
                            doubleClickZoom: props.doubleClickZoom
                        });
                        this['@:{map.instance~rs}'] = map;
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
                        }).addTo(map);
                        let tipNode = node(`tip_${this.id}`);
                        tipNode.parentNode.removeChild(tipNode);
                    }
                }
                catch (ex) {
                    this.digest({
                        error: this['@:{exception~rs}'] = ex
                    });
                }
            }
        }
    }
});

});