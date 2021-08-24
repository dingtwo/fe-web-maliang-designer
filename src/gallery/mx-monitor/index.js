/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6r/index",["51"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
 */
let magix_1 = require("51");
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
        if (info['_mZ']) {
            Instances.splice(i, 1);
        }
        else {
            let view = info['_m0'];
            if (e.type == 'resize' ||
                e.type == 'blur' ||
                !view['_lT'](e.target)) {
                view['_gN']();
            }
        }
    }
};
let Remove = view => {
    let info = Instances[view.id];
    if (info) {
        info['_mZ'] = 1;
        delete Instances[view.id];
    }
};
module.exports= {
    '_lU'(view) {
        Remove(view);
        let info = {
            '_m0': view
        };
        Instances.push(info);
        Instances[view.id] = info;
    },
    '_js': Remove,
    '_lD'() {
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
    '_lE'() {
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