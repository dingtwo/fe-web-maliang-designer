/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/map/dshow",["4e","../../4t/map","../../4d/4q","../../4d/5b"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let map_1 = require("../../4t/map");
let history_1 = require("../../4d/4q");
let stage_selection_1 = require("../../4d/5b");
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
        p['_ig'] = 1;
    }
    if (props.zoom != zoom) {
        props.zoom = zoom;
        changed = 1;
        p['_id'] = 1;
    }
    if (changed) {
        State.fire('dG', {
            '_fm': {
                [element.id]: 1
            },
            '_fn': {
                [element.type]: 1
            },
            '_dF': p
        });
        history_1["dE"](history_1['ea'], props.ename);
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
$text='';if(error){;$text+=' '+(error)+' ';}else{;$text+=' '+(i18n('h1'))+' ';};$vnode_2=[$createVNode(0,$text)];$vnode_1=[$createVNode('div',{'id': 'tip_'+$viewId,'class': 'rd-eB rd-eT rd-ee rd-ez',},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-el rd-f0 rd-fH','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit),'id': 'map_'+$viewId,'mx5-pointerdown': $viewId+'_hE()','mx5-contextmenu': $viewId+'_hE()',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.on('destroy', () => {
            let map = this['_ih'];
            if (map) {
                map.remove();
            }
        });
    },
    assign(data) {
        this.set(data);
    },
    async render() {
        let m = mark(this, '_dU');
        let props = this.get('props');
        let readonly = props.readonly;
        if (!this['_ii']) {
            await this.digest();
            let map = this['_ih'];
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
                        this['_ih'] = map;
                        this['_ij'] = (e) => {
                            triggerEvent(this.get('element'), map);
                        };
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
                        }).addTo(map);
                        map.addEventListener('zoomend', this['_ij']);
                        map.addEventListener('moveend', this['_ij']);
                        let tipNode = node(`tip_${this.id}`);
                        tipNode.parentNode.removeChild(tipNode);
                    }
                }
                else {
                    map.removeEventListener('zoomend', this['_ij']);
                    map.removeEventListener('moveend', this['_ij']);
                    map.setView({
                        lat: props.lat,
                        lng: props.lng
                    }, props.zoom);
                    map.invalidateSize(true);
                    let addMark = mark(this, '_ik');
                    setTimeout(() => {
                        if (addMark()) {
                            map.addEventListener('zoomend', this['_ij']);
                            map.addEventListener('moveend', this['_ij']);
                        }
                    }, 300);
                }
            }
            catch (ex) {
                this.digest({
                    error: this['_ii'] = ex
                });
            }
        }
        else {
            this.digest({
                error: this['_ii']
            });
        }
    },
    '_hE<pointerdown,contextmenu>'(e) {
        if (e['_ey'])
            return;
        // let { target } = e;
        // if (target.id != `${this.id}_pv`) {
        e['_ey'] = 1;
        let element = this.get('element');
        if (stage_selection_1["dF"](element)) {
            history_1["dE"](history_1['dV'], element.props.ename);
        }
        //}
    }
});

});