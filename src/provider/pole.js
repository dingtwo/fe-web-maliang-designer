/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("provider/pole",["magix5"],(require,exports,module)=>{


/**
 * 撑杆插件
 */
let magix_1 = require("magix5");
let { State, node } = magix_1;
let ownerView;
let togglePole = e => {
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
            '@:{global#stage.prevent.actions~rs}': 1
        });
    }
    if (e.hide) {
        State.set({
            '@:{global#stage.prevent.actions~rs}': 0
        });
        let before = o.scrollTop;
        ps.display = 'none';
        let after = o.scrollTop;
        if (before > after) { //fix chrome cache old scrolltop;
            o.scrollTop = after - 1;
        }
        //o.scrollTop = o.scrollHeight - o.offsetHeight - 80;
    }
};
module.exports= {
    '@:{pole#setup~rs}'(view) {
        ownerView = view;
        State.on('@:{event#stage.toggle.scroll~rs}', togglePole);
    },
    '@:{pole#teardown~rs}'() {
        ownerView = null;
        State.off('@:{event#stage.toggle.scroll~rs}', togglePole);
    },
    '@:{pole#update~rs}': togglePole
};

});