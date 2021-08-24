/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6g/index",["51"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let actions = [{
        'gd': '&#xe687;',
        'ge': 'lz',
        'gf': 'hpos',
        'gg': 'flex-start'
    }, {
        'gd': '&#xe68a;',
        'ge': 'lA',
        'gf': 'hpos',
        'gg': 'center'
    }, {
        'gd': '&#xe686;',
        'ge': 'lB',
        'gf': 'hpos',
        'gg': 'flex-end'
    }, {
        'gd': '&#xe687;',
        'ge': 'lC',
        'gf': 'vpos',
        'gg': 'flex-start',
        'gh': 1
    }, {
        'gd': '&#xe68a;',
        'ge': 'lD',
        'gf': 'vpos',
        'gg': 'center',
        'gh': 1
    }, {
        'gd': '&#xe686;',
        'ge': 'lE',
        'gf': 'vpos',
        'gg': 'flex-end',
        'gh': 1
    }];
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0,
{
	disabled,
	actions,
	i18n,
	value,}=$dataFromView,
$$_class,
$vnode_2,
$vnode_1;
$vnode_1=[];
for(let $q_c_oyxfafrna=actions.length,$q_key_bnukyfytt=0;$q_key_bnukyfytt<$q_c_oyxfafrna;$q_key_bnukyfytt+=1){
let a=actions[$q_key_bnukyfytt];
$vnode_2=[$createVNode(0,(a['gd']),1)];;$$_class='rd-gT rd-hS rd-gS rd-hw rd-ge';if(a['gh']){;$$_class+=' rd-gF';};if(value[a['gf']]==a['gg']){;$$_class+=' rd-hT';};$vnode_1.push($createVNode('li',{'title': (i18n(a['ge'])),'mx5-click': $viewId+'_lc({type:\''+($encodeQuote(a['gf']))+'\',v:\''+($encodeQuote(a['gg']))+'\'})','class': $$_class,},$vnode_2));
};$$_class='rd-gz rd-g3';if(disabled){;$$_class+=' rd-hU';};$vnode_0=[$createVNode('ul',{'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            actions
        });
    },
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '_lc<click>'(e) {
        let me = this;
        if (me.get('disabled')) {
            return;
        }
        let props = me.get('value');
        let { type, v } = e.params;
        props[type] = v;
        magix_1.dispatch(me.root, 'input');
    }
});

});