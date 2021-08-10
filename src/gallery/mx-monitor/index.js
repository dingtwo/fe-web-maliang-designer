/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/68/index",["4e"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
 */
let magix_1 = require("4e");
let { node, attach, detach } = magix_1;
let ICounter = 0;
let Instances = [];
let DocumentEvents = ['pointerdown', 'keyup', 'keydown'];
let Doc = document;
let Win = window;
let Stage;
let Watcher = (e) => {
    for (let i = Instances.length; i--;) {
        let info = Instances[i];
        if (info['_km']) {
            Instances.splice(i, 1);
        }
        else {
            let view = info['_kn'];
            if (e.type == 'resize' ||
                e.type == 'blur' ||
                !view['_jg'](e.target)) {
                view['_ed']();
            }
        }
    }
};
let Remove = view => {
    let info = Instances[view.id];
    if (info) {
        info['_km'] = 1;
        delete Instances[view.id];
    }
};
module.exports= {
    '_jh'(view) {
        Remove(view);
        let info = {
            '_kn': view
        };
        Instances.push(info);
        Instances[view.id] = info;
    },
    '_gQ': Remove,
    '_i1'() {
        if (!ICounter) {
            if (!Stage) {
                Stage = node('_rd_stage');
            }
            for (let e of DocumentEvents) {
                attach(Doc, e, Watcher);
            }
            attach(Win, 'resize', Watcher);
            attach(Win, 'blur', Watcher);
            if (Stage) {
                attach(Stage, 'scroll', Watcher);
            }
        }
        ICounter++;
    },
    '_i2'() {
        if (ICounter > 0) {
            ICounter--;
            if (!ICounter) {
                for (let e of DocumentEvents) {
                    detach(Doc, e, Watcher);
                }
                detach(Win, 'resize', Watcher);
                detach(Win, 'blur', Watcher);
                if (Stage) {
                    detach(Stage, 'scroll', Watcher);
                }
            }
        }
    }
};

});