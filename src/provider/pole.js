/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4t/pole",["4e"],(require,exports,module)=>{


/**
 * 撑杆插件
 */
let magix_1 = require("4e");
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
            'dK': 1
        });
    }
    if (e.hide) {
        State.set({
            'dK': 0
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
    'dE'(view) {
        ownerView = view;
        State.on('d3', togglePole);
    },
    'dF'() {
        ownerView = null;
        State.off('d3', togglePole);
    },
    'dG': togglePole
};

});