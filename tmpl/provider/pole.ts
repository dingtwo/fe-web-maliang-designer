/**
 * 撑杆插件
 */
import Magix from 'magix';
let { State, node } = Magix;
let ownerView: Magix5.View;
let togglePole = e => {//撑杆，防止从高向低拖动时高度随着变化，只有在放置元素后才收缩高度
    let o = ownerView.root;
    let p = node('_rd_pole_' + ownerView.id);
    let ps = p.style;
    if (e.size) {
        ps.width = o.scrollWidth + 'px';
        ps.height = o.scrollHeight + 'px';
    }
    if (e.show) {
        ps.display = 'block';
        State.set({
            '@:{global#stage.prevent.actions}': 1
        });
    }
    if (e.hide) {
        State.set({
            '@:{global#stage.prevent.actions}': 0
        });
        let before = o.scrollTop;
        ps.display = 'none';
        let after = o.scrollTop;
        if (before > after) {//fix chrome cache old scrolltop;
            o.scrollTop = after - 1;
        }
        //o.scrollTop = o.scrollHeight - o.offsetHeight - 80;
    }
};

export default {
    '@:{pole#setup}'(view: Magix5.View) {
        ownerView = view;
        State.on('@:{event#stage.toggle.scroll}', togglePole);
    },
    '@:{pole#teardown}'() {
        ownerView = null;
        State.off('@:{event#stage.toggle.scroll}', togglePole);
    },
    '@:{pole#update}': togglePole
}