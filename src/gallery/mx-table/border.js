/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6i/border",["51","./coperate"],(require,exports,module)=>{
let $quick_hm_static_text;
let $quick_in_0_static_attr={'class': 'rd-g9 rd-ha rd-hr rd-hu',};


let magix_1 = require("51");
require("./coperate");
let { View, dispatch } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	cell,
	disabled,
	i18n,}=$dataFromView,
$$_class,
$vnode_2,
$vnode_1;
$vnode_2=[$quick_hm_static_text||($quick_hm_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw rd-gG';if(cell.bLeft&&!disabled){;$$_class+=' rd-hN';};if(disabled){;$$_class+=' rd-kk';};$vnode_1=[$createVNode('i',{'title': (i18n(cell.bLeft?'mR':'mS','左')),'mx5-click': ((!disabled))&&($viewId+'_nK({to:\'Left\'})'),'class': $$_class,},$vnode_2)];$vnode_2=[$quick_hm_static_text||($quick_hm_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw';if(cell.bTop&&!disabled){;$$_class+=' rd-hN';};if(disabled){;$$_class+=' rd-kk';};$vnode_1.push($createVNode('i',{'title': (i18n(cell.bLeft?'mR':'mS','上')),'mx5-click': ((!disabled))&&($viewId+'_nK({to:\'Top\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_hm_static_text||($quick_hm_static_text=$createVNode(0,''))];;$$_class='rd-gF rd-ge rd-h9 rd-kj rd-hw';if(cell.bRight&&!disabled){;$$_class+=' rd-hN';};if(disabled){;$$_class+=' rd-kk';};$vnode_1.push($createVNode('i',{'title': (i18n(cell.bLeft?'mR':'mS','右')),'mx5-click': ((!disabled))&&($viewId+'_nK({to:\'Right\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_hm_static_text||($quick_hm_static_text=$createVNode(0,''))];;$$_class='rd-gE rd-ge rd-h9 rd-kj rd-hw';if(cell.bBottom&&!disabled){;$$_class+=' rd-hN';};if(disabled){;$$_class+=' rd-kk';};$vnode_1.push($createVNode('i',{'title': (i18n(cell.bLeft?'mR':'mS','下')),'mx5-click': ((!disabled))&&($viewId+'_nK({to:\'Bottom\'})'),'class': $$_class,},$vnode_2));$vnode_0=[$createVNode('div',$quick_in_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        let { props, disabled } = data;
        let { rows, focusRow, focusCol } = props;
        if (focusRow == -1) {
            focusRow = 0;
        }
        if (focusCol == -1) {
            focusCol = 0;
        }
        let cell = rows[focusRow].cols[focusCol];
        this.set({
            rows,
            cell,
            props,
            disabled
        });
    },
    render() {
        this.digest();
    },
    '_nK<click>'(e) {
        let rows = this.get('rows');
        let cell = this.get('cell');
        let key = 'b' + e.params.to;
        cell[key] = !cell[key];
        dispatch(this.root, 'change', {
            rows
        });
    },
});

});