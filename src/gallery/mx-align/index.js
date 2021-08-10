/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/5t/index",["4e"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let actions = [{
        'dE': '&#xe687;',
        'dF': 'i1',
        'dG': 'hpos',
        'dH': 'flex-start'
    }, {
        'dE': '&#xe68a;',
        'dF': 'i2',
        'dG': 'hpos',
        'dH': 'center'
    }, {
        'dE': '&#xe686;',
        'dF': 'i3',
        'dG': 'hpos',
        'dH': 'flex-end'
    }, {
        'dE': '&#xe687;',
        'dF': 'i4',
        'dG': 'vpos',
        'dH': 'flex-start',
        'dI': 1
    }, {
        'dE': '&#xe68a;',
        'dF': 'i5',
        'dG': 'vpos',
        'dH': 'center',
        'dI': 1
    }, {
        'dE': '&#xe686;',
        'dF': 'i6',
        'dG': 'vpos',
        'dH': 'flex-end',
        'dI': 1
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
for(let $q_c_mzwzrfdxv=actions.length,$q_key_raaytc=0;$q_key_raaytc<$q_c_mzwzrfdxv;$q_key_raaytc+=1){
let a=actions[$q_key_raaytc];
$vnode_2=[$createVNode(0,(a['dE']),1)];;$$_class='rd-ej rd-fi rd-ei rd-eX rd-dF';if(a['dI']){;$$_class+=' rd-d6';};if(value[a['dG']]==a['dH']){;$$_class+=' rd-fj';};$vnode_1.push($createVNode('li',{'title': (i18n(a['dF'])),'mx5-click': $viewId+'_iA({type:\''+($encodeQuote(a['dG']))+'\',v:\''+($encodeQuote(a['dH']))+'\'})','class': $$_class,},$vnode_2));
};$$_class='rd-d0 rd-et';if(disabled){;$$_class+=' rd-fk';};$vnode_0=[$createVNode('ul',{'class': $$_class,},$vnode_1)]; 

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
    '_iA<click>'(e) {
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