/*
    author:https://github.com/xinglie
*/
'ref@:../designer/index.less'
import Magix from 'magix';
import IndexView from '../designer/index';
let { State } = Magix;
State.set({
    '@:{global#provider.of.use.mini}': 1
});

export default IndexView.extend({
    tmpl: '@:./index.html'
});