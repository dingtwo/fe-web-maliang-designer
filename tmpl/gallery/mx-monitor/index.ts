/*
    author:https://github.com/xinglie
 */
import Magix from "magix";
let { node, attach, detach } = Magix;
let ICounter = 0;
let Instances = [];
let DocumentEvents = ['pointerdown', 'keyup', 'keydown'];
let Doc = document;
let Win = window;
let Stage;
let Watcher = (e) => {
    for (let i = Instances.length; i--;) {
        let info = Instances[i];
        if (info['@:{destroyed}']) {
            Instances.splice(i, 1);
        } else {
            let view = info['@:{view}'];
            if (e.type == 'resize' ||
                e.type == 'blur' ||
                !view['@:{inside}'](e.target)) {
                view['@:{hide}']();
            }
        }
    }
};
let Remove = view => {
    let info = Instances[view.id];
    if (info) {
        info['@:{destroyed}'] = 1;
        delete Instances[view.id];
    }
};
export default {
    '@:{add}'(view) {
        Remove(view);
        let info = {
            '@:{view}': view
        };
        Instances.push(info);
        Instances[view.id] = info;
    },
    '@:{remove}': Remove,
    '@:{setup}'() {
        if (!ICounter) {
            if (!Stage) {
                Stage = node<HTMLDivElement>('_rd_stage');
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
    '@:{teardown}'() {
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