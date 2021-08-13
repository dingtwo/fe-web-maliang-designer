/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/map/dshow",["5c","../../5r/map","../../5b/5o","../../5b/69"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let map_1 = require("../../5r/map");
let history_1 = require("../../5b/5o");
let stage_selection_1 = require("../../5b/69");
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
        p['_qE'] = 1;
    }
    if (props.zoom != zoom) {
        props.zoom = zoom;
        changed = 1;
        p['_qB'] = 1;
    }
    if (changed) {
        State.fire('l4', {
            '_nK': {
                [element.id]: 1
            },
            '_nL': {
                [element.type]: 1
            },
            '_l3': p
        });
        history_1["l2"](history_1['my'], props.ename);
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
$text='';if(error){;$text+=' '+(error)+' ';}else{;$text+=' '+(i18n('qo'))+' ';};$vnode_2=[$createVNode(0,$text)];$vnode_1=[$createVNode('div',{'id': 'tip_'+$viewId,'class': 'rd-mC rd-mX rd-mZ rd-ng',},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-n5 rd-on','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit),'id': 'map_'+$viewId,'mx5-pointerdown': $viewId+'_p2()','mx5-contextmenu': $viewId+'_p2()',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.on('destroy', () => {
            let map = this['_qF'];
            if (map) {
                map.remove();
            }
        });
    },
    assign(data) {
        this.set(data);
    },
    async render() {
        let m = mark(this, '_mh');
        let props = this.get('props');
        let readonly = props.readonly;
        if (!this['_qG']) {
            await this.digest();
            let map = this['_qF'];
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
                        this['_qF'] = map;
                        this['_qH'] = (e) => {
                            triggerEvent(this.get('element'), map);
                        };
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
                        }).addTo(map);
                        map.addEventListener('zoomend', this['_qH']);
                        map.addEventListener('moveend', this['_qH']);
                        let tipNode = node(`tip_${this.id}`);
                        tipNode.parentNode.removeChild(tipNode);
                    }
                }
                else {
                    map.removeEventListener('zoomend', this['_qH']);
                    map.removeEventListener('moveend', this['_qH']);
                    map.setView({
                        lat: props.lat,
                        lng: props.lng
                    }, props.zoom);
                    map.invalidateSize(true);
                    let addMark = mark(this, '_qI');
                    setTimeout(() => {
                        if (addMark()) {
                            map.addEventListener('zoomend', this['_qH']);
                            map.addEventListener('moveend', this['_qH']);
                        }
                    }, 300);
                }
            }
            catch (ex) {
                this.digest({
                    error: this['_qG'] = ex
                });
            }
        }
        else {
            this.digest({
                error: this['_qG']
            });
        }
    },
    '_p2<pointerdown,contextmenu>'(e) {
        if (e['_mW'])
            return;
        // let { target } = e;
        // if (target.id != `${this.id}_pv`) {
        e['_mW'] = 1;
        let element = this.get('element');
        if (stage_selection_1["l3"](element)) {
            history_1["l2"](history_1['mi'], element.props.ename);
        }
        //}
    }
});

});