/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/5g",["4e","./56","./57"],(require,exports,module)=>{
let $quick_dP_0_static_node;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("4e");
let stage_elements_1 = require("./56");
let stage_generic_1 = require("./57");
let { State, View } = magix_1;
let actions = [{
        icon: '&#xe70b;',
        to: 'left',
        title: 'ee',
        use: 'canX'
    }, {
        icon: '&#xe711;',
        to: 'center',
        title: 'eg',
        use: 'canX'
    }, {
        icon: '&#xe70b;',
        to: 'right',
        r180: 1,
        title: 'ef',
        use: 'canX'
    }, {
        icon: '&#xe70d;',
        to: 'top',
        title: 'eh',
        use: 'canY'
    }, {
        icon: '&#xe711;',
        to: 'middle',
        r90: 1,
        title: 'ej',
        use: 'canY'
    }, {
        icon: '&#xe70d;',
        to: 'bottom',
        r180: 1,
        title: 'ei',
        use: 'canY'
    }];
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0=[],
{
	actions,
	i18n,}=$dataFromView,
$$_class,
$vnode_1;

if($quick_dP_0_static_node){
$vnode_0.push($quick_dP_0_static_node);
}else{
$vnode_0.push($quick_dP_0_static_node=$createVNode('i',{'_': 'cH','class': 'rd-ej rd-gZ',}));
}

for(let $q_c_rehdsgnrt=actions.length,$q_key_rpezuag=0;$q_key_rpezuag<$q_c_rehdsgnrt;$q_key_rpezuag+=1){
let a=actions[$q_key_rpezuag];
$vnode_1=[$createVNode(0,(a.icon),1)];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT';if(a.r180){;$$_class+=' rd-d5';}else if(a.r90){;$$_class+=' rd-d6';};if(!$dataFromView[a.use]){;$$_class+=' rd-g0';};$vnode_0.push($createVNode('i',{'title': (i18n(a.title)),'mx5-click': (($dataFromView[a.use]))&&($viewId+'_gW({to:\''+($encodeQuote(a.to))+'\'})'),'class': $$_class,},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            actions
        });
        let update = this.render.bind(this);
        let checkLocked = e => {
            if (e['_dF'].locked) {
                update();
            }
        };
        State.on('dJ', update);
        State.on('d2', update);
        State.on('dH', update);
        State.on('dG', checkLocked);
        this.on('destroy', () => {
            State.off('dJ', update);
            State.off('d2', update);
            State.off('dH', update);
            State.off('dG', checkLocked);
        });
    },
    render() {
        let alignInfo = stage_generic_1['dX']();
        this.digest({
            canX: alignInfo['dE'],
            canY: alignInfo['dF']
        });
    },
    '_gW<click>'(e) {
        if (e.eventTarget.classList.contains('rd-g0')) {
            return;
        }
        let { to } = e.params;
        stage_elements_1["dQ"](to);
    }
});

});