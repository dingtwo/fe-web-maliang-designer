/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Runner from '../../gallery/mx-runner/index';
let { View, applyStyle, mark, node, State } = Magix;
applyStyle('@:./index.less');
export default View.extend({
    tmpl: '@:index.html',
    assign(data) {
        this.set(data);
    },
    async render() {
        let renderMark = mark(this, '@:{render}');
        await this.digest({
            scale: State.get('@:{global#stage.scale}') || 1
        });
        if (renderMark()) {
            let second = node('_rd_s_' + this.id);
            let minute = node('_rd_m_' + this.id);
            let hour = node('_rd_h_' + this.id);
            let work = () => {
                let now = new Date();
                let seconds = (now.getSeconds() * 1000 + now.getMilliseconds()) / 1000;
                let minutes = (now.getMinutes() * 60 + seconds) / 60;
                let hours = (now.getHours() * 60 + minutes) / 60;
                second.style.transform = `rotate(${seconds * 6 - 90}deg)`;
                minute.style.transform = `rotate(${minutes * 6 - 90}deg)`;
                hour.style.transform = `rotate(${hours * 30 - 90}deg)`;
            };
            Runner['@:{task.add}'](32, work);
            this.on('destroy', () => {
                Runner['@:{task.remove}'](work);
            });
        }
    }
});