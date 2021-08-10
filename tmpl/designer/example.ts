import Magix from 'magix';
import Const from './const';
import DHistory from './history';
import Service from './service';
let { random, floor } = Math;
let { State, applyStyle, View, mark, config } = Magix;
applyStyle('@:./example.less');
export default View.extend({
    tmpl: '@:./example.html',
    init(data) {
        this['@:{dialog}'] = data.dialog;
    },
    render() {
        let m = mark(this, '@:{render}');
        let s = new Service();
        s.all('@:{get.templates}', (ex, bag) => {
            if (m()) {
                this.digest({
                    error: ex,
                    list: bag.get('data', [])
                });
            }
        })
    },
    '@:{use}<click>'(e) {
        this['@:{dialog}'].close();
        let { src } = e.params;
        if (src.stage) {
            State.fire('@:{event#example.change}', {
                '@:{excample.change.event#type}': DHistory['@:{history#example.from.list}'],
                '@:{excample.change.event#title}': src.title,
                '@:{excample.change.event#stage}': Const['@:{const#clone}'](src.stage)
            });
        }
    },
    '@:{close}<click>'() {
        this['@:{dialog}'].close();
    }
}).static({
    '@:{show}'(owner) {
        if (!this['@:{shown}'] &&
            config('getTemplateUrl')) {
            this['@:{shown}'] = 1;
            owner.mxDialog('@:./example', {
                width: 1026
            }).whenClose(() => {
                delete this['@:{shown}'];
            });
        }
    },
    '@:{load}'() {
        return new Promise<void>(resolve => {
            let s = new Service();
            s.all('@:{get.templates}', (ex, bag) => {
                let list = bag.get('data', []);
                let one = list[floor(random() * list.length)];
                if (one &&
                    one.stage) {
                    State.fire('@:{event#example.change}', {
                        '@:{excample.change.event#type}': DHistory['@:{history#example.from.list}'],
                        '@:{excample.change.event#stage}': Const['@:{const#clone}'](one.stage),
                        '@:{excample.change.event#title}': one.title
                    });
                }
                resolve();
            });
        });
    }
});