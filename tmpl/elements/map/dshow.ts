/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import MapProvider from '../../provider/map';
import DHistory from '../../designer/history';
import StageSelection from '../../designer/stage-selection';
let { State, View, mark, node } = Magix;
let triggerEvent = (element, map) => {
    let center = map.getCenter().wrap();
    let zoom = map.getZoom();
    let { props } = element;
    let changed = 0,
        p = {};
    if (props.lat != center.lat ||
        props.lng != center.lng) {
        props.lat = center.lat;
        props.lng = center.lng;
        changed = 1;
        p['@:{latlng}'] = 1;
    }
    if (props.zoom != zoom) {
        props.zoom = zoom;
        changed = 1;
        p['@:{zoom}'] = 1;
    }
    if (changed) {
        State.fire('@:{event#stage.select.element.props.change}', {
            '@:{ids}': {
                [element.id]: 1
            },
            '@:{types}': {
                [element.type]: 1
            },
            '@:{props}': p
        });
        DHistory["@:{history#save}"](DHistory['@:{history#element.modified.props}'], props.ename);
    }
};
export default View.extend({
    tmpl: '@:dshow.html',
    init() {
        this.on('destroy', () => {
            let map = this['@:{map.instance}'];
            if (map) {
                map.remove();
            }
        })
    },
    assign(data) {
        this.set(data);
    },
    async render() {
        let m = mark(this, '@:{render}');
        let props = this.get('props');
        let readonly = props.readonly;
        if (!this['@:{exception}']) {
            await this.digest();
            let map = this['@:{map.instance}'];
            try {
                if (!map) {
                    await MapProvider();
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

                        this['@:{map.instance}'] = map;
                        this['@:{change.listener}'] = (e) => {
                            triggerEvent(this.get('element'), map);
                        };
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
                        }).addTo(map);
                        map.addEventListener('zoomend', this['@:{change.listener}']);
                        map.addEventListener('moveend', this['@:{change.listener}']);

                        let tipNode = node(`tip_${this.id}`);
                        tipNode.parentNode.removeChild(tipNode);
                    }
                } else {
                    map.removeEventListener('zoomend', this['@:{change.listener}']);
                    map.removeEventListener('moveend', this['@:{change.listener}']);
                    map.setView({
                        lat: props.lat,
                        lng: props.lng
                    }, props.zoom);
                    map.invalidateSize(true);
                    let addMark = mark(this, '@:{add.mark}');
                    setTimeout(() => {
                        if (addMark()) {
                            map.addEventListener('zoomend', this['@:{change.listener}']);
                            map.addEventListener('moveend', this['@:{change.listener}']);
                        }
                    }, 300);
                }
            } catch (ex) {
                this.digest({
                    error: this['@:{exception}'] = ex
                });
            }
        } else {
            this.digest({
                error: this['@:{exception}']
            });
        }
    },
    '@:{stop}<pointerdown,contextmenu>'(e: MouseEvent) {
        if (e['@:{halt}']) return;
        // let { target } = e;
        // if (target.id != `${this.id}_pv`) {
        e['@:{halt}'] = 1;
        let element = this.get('element');
        if (StageSelection["@:{selection#set}"](element)) {
            DHistory["@:{history#save}"](DHistory['@:{history#element.get.focus}'], element.props.ename);
        }
        //}
    }
});