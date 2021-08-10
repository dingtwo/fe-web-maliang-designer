/*
    author:https://github.com/xinglie
*/
'ref@:./index.less';
import Magix from 'magix';
import Service from '../../designer/service';
import I18n from '../../i18n/index';
import Dialog from '../mx-dialog/index';
import Toast from '../mx-toast/index';
let { View, mark, node } = Magix;
export default View.extend({
    tmpl: '@:list.html',
    init(data) {
        let me = this;
        me['@:{dialog}'] = data.dialog;
        me['@:{done.callback}'] = data.done;
        me.set({
            current: 0
        });
        me.on('destroy', () => {
            Toast.hide();
        });
    },
    render() {
        let m = mark(this, '@:{render}');
        let s = new Service();
        s.all('@:{get.images}', (err, bag) => {
            if (m()) {
                this.digest({
                    error: err,
                    list: bag.get('data', [])
                });
            }
        });
    },
    '@:{use}<click>'(e) {
        let me = this;
        let img = new Image();
        let done = me['@:{done.callback}'];
        let src = e.params.src;
        let m = mark(this, '@:{use}');
        Toast.show('正在获取图片尺寸...');
        img.onerror = () => {
            if (m()) {
                Toast.hide();
                me.alert(I18n('@:{lang#load.img.error}'));
            }
        };
        img.onload = () => {
            if (m()) {
                Toast.hide();
                let w = img.width;
                let h = img.height;
                done({
                    src,
                    width: w,
                    height: h
                });
                me['@:{dialog}'].close();
            }
        };
        img.src = src;
    },
    '@:{change.tab}<click>'(e: Magix5.MagixMouseEvent) {
        let { to } = e.params;
        this.digest({
            current: to
        });
    },
    '@:{close}<click>'() {
        this['@:{dialog}'].close();
    },
    '@:{apply.network.image}<click>'() {
        let input = node<HTMLInputElement>(`_rd_nw_${this.id}`);
        let url = input.value.trim();
        if (url) {
            let m = mark(this, '@:{use}');
            let done = this['@:{done.callback}'];
            Toast.show('正在获取图片尺寸...');
            let img = new Image();
            img.onload = () => {
                if (m()) {
                    Toast.hide();
                    done({
                        src: url,
                        width: img.width,
                        height: img.height
                    });
                    this['@:{dialog}'].close();
                }
            };
            img.onerror = () => {
                if (m()) {
                    input.select();
                    Toast.show('无法加载图片，请检查地址后重试~', 2e3);
                }
            };
            img.src = url;
        } else {
            Toast.show('请粘贴/输入图片地址~', 2e3);
            input.focus();
        }
    },
    '@:{page.change}<change>'(e) {
        console.log(e.page);
    }
}).merge(Dialog);