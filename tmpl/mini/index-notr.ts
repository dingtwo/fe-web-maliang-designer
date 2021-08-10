import Magix from 'magix';
import Index from './index';
Magix.applyStyle('@:./index-notr.less');
export default Index.extend({
    tmpl: '@:./index-notr.html'
});