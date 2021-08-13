/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/6r/index",["5c"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let actions = [{
        'l2': '&#xe687;',
        'l3': 'ro',
        'l4': 'hpos',
        'l5': 'flex-start'
    }, {
        'l2': '&#xe68a;',
        'l3': 'rp',
        'l4': 'hpos',
        'l5': 'center'
    }, {
        'l2': '&#xe686;',
        'l3': 'rq',
        'l4': 'hpos',
        'l5': 'flex-end'
    }, {
        'l2': '&#xe687;',
        'l3': 'rr',
        'l4': 'vpos',
        'l5': 'flex-start',
        'l6': 1
    }, {
        'l2': '&#xe68a;',
        'l3': 'rs',
        'l4': 'vpos',
        'l5': 'center',
        'l6': 1
    }, {
        'l2': '&#xe686;',
        'l3': 'rt',
        'l4': 'vpos',
        'l5': 'flex-end',
        'l6': 1
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
for(let $q_c_wyqvmy=actions.length,$q_key_bpbjovk=0;$q_key_bpbjovk<$q_c_wyqvmy;$q_key_bpbjovk+=1){
let a=actions[$q_key_bpbjovk];
$vnode_2=[$createVNode(0,(a['l2']),1)];;$$_class='rd-mH rd-nG rd-mG rd-nk rd-l3';if(a['l6']){;$$_class+=' rd-mt';};if(value[a['l4']]==a['l5']){;$$_class+=' rd-nH';};$vnode_1.push($createVNode('li',{'title': (i18n(a['l3'])),'mx5-click': $viewId+'_qY({type:\''+($encodeQuote(a['l4']))+'\',v:\''+($encodeQuote(a['l5']))+'\'})','class': $$_class,},$vnode_2));
};$$_class='rd-mn rd-mR';if(disabled){;$$_class+=' rd-nI';};$vnode_0=[$createVNode('ul',{'class': $$_class,},$vnode_1)]; 

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
    '_qY<click>'(e) {
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