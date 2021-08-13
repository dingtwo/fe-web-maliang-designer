/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/map/dshow",["magix5","../../provider/map","../../designer/history","../../designer/stage-selection"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let map_1 = require("../../provider/map");
let history_1 = require("../../designer/history");
let stage_selection_1 = require("../../designer/stage-selection");
let { State, View, mark, node } = magix_1;
let triggerEvent = (element, map) => {
    let center = map.getCenter().wrap();
    let zoom = map.getZoom();
    let { props } = element;
    let changed = 0, p = {};
    if (props.lat != center.lat ||
        props.lng != center.lng) {
        props.lat = center.lat;
        props.lng = center.lng;
        changed = 1;
        p['@:{latlng~rs}'] = 1;
    }
    if (props.zoom != zoom) {
        props.zoom = zoom;
        changed = 1;
        p['@:{zoom~rs}'] = 1;
    }
    if (changed) {
        State.fire('@:{event#stage.select.element.props.change~rs}', {
            '@:{ids~rs}': {
                [element.id]: 1
            },
            '@:{types~rs}': {
                [element.type]: 1
            },
            '@:{props~rs}': p
        });
        history_1["@:{history#save~rs}"](history_1['@:{history#element.modified.props~rs}'], props.ename);
    }
};
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
$text=($__line=3,$__art='{{if error}}','');$__ctrl='<%if(error){%>';if(error){;$text+=' '+($__line=4,$__art='{{=error}}',$__ctrl='<%=error%>',(error))+' '+($__line=5,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$text+=' '+($__line=6,$__art='{{=i18n(\'@:{lang#elements.loading.library.tip~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#elements.loading.library.tip~rs}\')%>',(i18n('@:{lang#elements.loading.library.tip~rs}')))+' '+($__line=7,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2=[$createVNode(0,$text)];$vnode_1=[$createVNode('div',{'id': 'tip_'+($__line=2,$__art='{{=$viewId}}','')+$viewId,'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-hp100 rd-_assets_index_less_-justify-content-center',},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-touch-action-none rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),'id': 'map_'+($__line=1,$__art='{{=$viewId}}','')+$viewId,'mx5-pointerdown': $viewId+'@:{stop~rs}()','mx5-contextmenu': $viewId+'@:{stop~rs}()',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/map/dshow.html'; throw msg; }  } ,
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
        let readonly = props.readonly;
        if (!this['@:{exception~rs}']) {
            await this.digest();
            let map = this['@:{map.instance~rs}'];
            try {
                if (!map) {
                    await map_1();
                    if (m()) {
                        let containerNode = node(`map_${this.id}`);
                        let map = L.map(containerNode, {
                            zoom: props.zoom,
                            center: [props.lat, props.lng],
                            zoomAnimation: false,
                            zoomControl: !readonly,
                            dragging: !readonly,
                            doubleClickZoom: !readonly
                        });
                        this['@:{map.instance~rs}'] = map;
                        this['@:{change.listener~rs}'] = (e) => {
                            triggerEvent(this.get('element'), map);
                        };
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
                        }).addTo(map);
                        map.addEventListener('zoomend', this['@:{change.listener~rs}']);
                        map.addEventListener('moveend', this['@:{change.listener~rs}']);
                        let tipNode = node(`tip_${this.id}`);
                        tipNode.parentNode.removeChild(tipNode);
                    }
                }
                else {
                    map.removeEventListener('zoomend', this['@:{change.listener~rs}']);
                    map.removeEventListener('moveend', this['@:{change.listener~rs}']);
                    map.setView({
                        lat: props.lat,
                        lng: props.lng
                    }, props.zoom);
                    map.invalidateSize(true);
                    let addMark = mark(this, '@:{add.mark~rs}');
                    setTimeout(() => {
                        if (addMark()) {
                            map.addEventListener('zoomend', this['@:{change.listener~rs}']);
                            map.addEventListener('moveend', this['@:{change.listener~rs}']);
                        }
                    }, 300);
                }
            }
            catch (ex) {
                this.digest({
                    error: this['@:{exception~rs}'] = ex
                });
            }
        }
        else {
            this.digest({
                error: this['@:{exception~rs}']
            });
        }
    },
    '@:{stop~rs}<pointerdown,contextmenu>'(e) {
        if (e['@:{halt~rs}'])
            return;
        // let { target } = e;
        // if (target.id != `${this.id}_pv`) {
        e['@:{halt~rs}'] = 1;
        let element = this.get('element');
        if (stage_selection_1["@:{selection#set~rs}"](element)) {
            history_1["@:{history#save~rs}"](history_1['@:{history#element.get.focus~rs}'], element.props.ename);
        }
        //}
    }
});

});