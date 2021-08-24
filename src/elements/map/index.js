/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/map/index",["51","../../5g/map"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let map_1 = require("../../5g/map");
let { View, mark, node } = magix_1;
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
$text='';if(error){;$text+=' '+(error)+' ';}else{;$text+=' '+(i18n('kz'))+' ';};$vnode_2=[$createVNode(0,$text)];$vnode_1=[$createVNode('div',{'id': 'tip_'+$viewId,'class': 'rd-g9 rd-gO rd-ha rd-hs',},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-gV rd-ig','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit),'id': 'map_'+$viewId,},$vnode_1)]; 

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
        if (this['_kV']) {
            this.digest({
                error: this['_kV']
            });
        }
        else {
            await this.digest();
            let map = this['_kU'];
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
                        this['_kU'] = map;
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
                        }).addTo(map);
                        let tipNode = node(`tip_${this.id}`);
                        tipNode.parentNode.removeChild(tipNode);
                    }
                }
                catch (ex) {
                    this.digest({
                        error: this['_kV'] = ex
                    });
                }
            }
        }
    }
});

});