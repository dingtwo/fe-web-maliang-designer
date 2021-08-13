/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/6t/border",["5c","./coperate"],(require,exports,module)=>{
let $quick_na_static_text;
let $quick_ob_0_static_attr={'class': 'rd-mX rd-mZ rd-nf rd-ni',};


let magix_1 = require("5c");
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
$vnode_2=[$quick_na_static_text||($quick_na_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk rd-mu';if(cell.bLeft&&!disabled){;$$_class+=' rd-nB';};if(disabled){;$$_class+=' rd-p9';};$vnode_1=[$createVNode('i',{'title': (i18n(cell.bLeft?'sG':'sH','左')),'mx5-click': ((!disabled))&&($viewId+'_tv({to:\'Left\'})'),'class': $$_class,},$vnode_2)];$vnode_2=[$quick_na_static_text||($quick_na_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk';if(cell.bTop&&!disabled){;$$_class+=' rd-nB';};if(disabled){;$$_class+=' rd-p9';};$vnode_1.push($createVNode('i',{'title': (i18n(cell.bLeft?'sG':'sH','上')),'mx5-click': ((!disabled))&&($viewId+'_tv({to:\'Top\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_na_static_text||($quick_na_static_text=$createVNode(0,''))];;$$_class='rd-mt rd-l3 rd-nX rd-p8 rd-nk';if(cell.bRight&&!disabled){;$$_class+=' rd-nB';};if(disabled){;$$_class+=' rd-p9';};$vnode_1.push($createVNode('i',{'title': (i18n(cell.bLeft?'sG':'sH','右')),'mx5-click': ((!disabled))&&($viewId+'_tv({to:\'Right\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_na_static_text||($quick_na_static_text=$createVNode(0,''))];;$$_class='rd-ms rd-l3 rd-nX rd-p8 rd-nk';if(cell.bBottom&&!disabled){;$$_class+=' rd-nB';};if(disabled){;$$_class+=' rd-p9';};$vnode_1.push($createVNode('i',{'title': (i18n(cell.bLeft?'sG':'sH','下')),'mx5-click': ((!disabled))&&($viewId+'_tv({to:\'Bottom\'})'),'class': $$_class,},$vnode_2));$vnode_0=[$createVNode('div',$quick_ob_0_static_attr,$vnode_1)]; 

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
    '_tv<click>'(e) {
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