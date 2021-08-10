/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/5v/border",["4e","./coperate"],(require,exports,module)=>{
let $quick_eN_static_text;
let $quick_fO_0_static_attr={'class': 'rd-eB rd-eS rd-eV rd-ez',};


let magix_1 = require("4e");
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
$vnode_2=[$quick_eN_static_text||($quick_eN_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX rd-d7';if(cell.bLeft&&!disabled){;$$_class+=' rd-fd';};if(disabled){;$$_class+=' rd-hL';};$vnode_1=[$createVNode('i',{'title': (i18n(cell.bLeft?'ki':'kj','左')),'mx5-click': ((!disabled))&&($viewId+'_k8({to:\'Left\'})'),'class': $$_class,},$vnode_2)];$vnode_2=[$quick_eN_static_text||($quick_eN_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX';if(cell.bTop&&!disabled){;$$_class+=' rd-fd';};if(disabled){;$$_class+=' rd-hL';};$vnode_1.push($createVNode('i',{'title': (i18n(cell.bLeft?'ki':'kj','上')),'mx5-click': ((!disabled))&&($viewId+'_k8({to:\'Top\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_eN_static_text||($quick_eN_static_text=$createVNode(0,''))];;$$_class='rd-d6 rd-dF rd-fz rd-hK rd-eX';if(cell.bRight&&!disabled){;$$_class+=' rd-fd';};if(disabled){;$$_class+=' rd-hL';};$vnode_1.push($createVNode('i',{'title': (i18n(cell.bLeft?'ki':'kj','右')),'mx5-click': ((!disabled))&&($viewId+'_k8({to:\'Right\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_eN_static_text||($quick_eN_static_text=$createVNode(0,''))];;$$_class='rd-d5 rd-dF rd-fz rd-hK rd-eX';if(cell.bBottom&&!disabled){;$$_class+=' rd-fd';};if(disabled){;$$_class+=' rd-hL';};$vnode_1.push($createVNode('i',{'title': (i18n(cell.bLeft?'ki':'kj','下')),'mx5-click': ((!disabled))&&($viewId+'_k8({to:\'Bottom\'})'),'class': $$_class,},$vnode_2));$vnode_0=[$createVNode('div',$quick_fO_0_static_attr,$vnode_1)]; 

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
    '_k8<click>'(e) {
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