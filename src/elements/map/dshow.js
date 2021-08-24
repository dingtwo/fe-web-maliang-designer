/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/map/dshow",["51","../../5g/map","../../50/5d","../../50/5u"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let map_1 = require("../../5g/map");
let history_1 = require("../../50/5d");
let stage_selection_1 = require("../../50/5u");
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
        p['_kT'] = 1;
    }
    if (props.zoom != zoom) {
        props.zoom = zoom;
        changed = 1;
        p['_kQ'] = 1;
    }
    if (changed) {
        State.fire('gf', {
            '_hW': {
                [element.id]: 1
            },
            '_hX': {
                [element.type]: 1
            },
            '_ge': p
        });
        history_1["gd"](history_1['gK'], props.ename);
    }
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,
	error,
	i18n,}=$dataFromView,
$text,
$vnode_2,
$vnode_1;
$text='';if(error){;$text+=' '+(error)+' ';}else{;$text+=' '+(i18n('kz'))+' ';};$vnode_2=[$createVNode(0,$text)];$vnode_1=[$createVNode('div',{'id': 'tip_'+$viewId,'class': 'rd-g9 rd-gO rd-ha rd-hs',},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-gV rd-ig rd-iz','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit),'id': 'map_'+$viewId,'mx5-pointerdown': $viewId+'_kg()','mx5-contextmenu': $viewId+'_kg()',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.on('destroy', () => {
            let map = this['_kU'];
            if (map) {
                map.remove();
            }
        });
    },
    assign(data) {
        this.set(data);
    },
    async render() {
        let m = mark(this, '_gt');
        let props = this.get('props');
        let readonly = props.readonly;
        if (!this['_kV']) {
            await this.digest();
            let map = this['_kU'];
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
                        this['_kU'] = map;
                        this['_kW'] = (e) => {
                            triggerEvent(this.get('element'), map);
                        };
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
                        }).addTo(map);
                        map.addEventListener('zoomend', this['_kW']);
                        map.addEventListener('moveend', this['_kW']);
                        let tipNode = node(`tip_${this.id}`);
                        tipNode.parentNode.removeChild(tipNode);
                    }
                }
                else {
                    map.removeEventListener('zoomend', this['_kW']);
                    map.removeEventListener('moveend', this['_kW']);
                    map.setView({
                        lat: props.lat,
                        lng: props.lng
                    }, props.zoom);
                    map.invalidateSize(true);
                    let addMark = mark(this, '_kX');
                    setTimeout(() => {
                        if (addMark()) {
                            map.addEventListener('zoomend', this['_kW']);
                            map.addEventListener('moveend', this['_kW']);
                        }
                    }, 300);
                }
            }
            catch (ex) {
                this.digest({
                    error: this['_kV'] = ex
                });
            }
        }
        else {
            this.digest({
                error: this['_kV']
            });
        }
    },
    '_kg<pointerdown,contextmenu>'(e) {
        if (e['_g8'])
            return;
        // let { target } = e;
        // if (target.id != `${this.id}_pv`) {
        e['_g8'] = 1;
        let element = this.get('element');
        if (stage_selection_1["ge"](element)) {
            history_1["gd"](history_1['gu'], element.props.ename);
        }
        //}
    }
});

});