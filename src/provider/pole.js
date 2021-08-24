/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5g/pole",["51"],(require,exports,module)=>{


/**
 * 撑杆插件
 */
let magix_1 = require("51");
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
            'gj': 1
        });
    }
    if (e.hide) {
        State.set({
            'gj': 0
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
    'gd'(view) {
        ownerView = view;
        State.on('gC', togglePole);
    },
    'ge'() {
        ownerView = null;
        State.off('gC', togglePole);
    },
    'gf': togglePole
};

});