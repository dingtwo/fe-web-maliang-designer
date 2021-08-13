/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/6e",["5c","./64","./65"],(require,exports,module)=>{
let $quick_mc_0_static_node;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("5c");
let stage_elements_1 = require("./64");
let stage_generic_1 = require("./65");
let { State, View } = magix_1;
let actions = [{
        icon: '&#xe70b;',
        to: 'left',
        title: 'mC',
        use: 'canX'
    }, {
        icon: '&#xe711;',
        to: 'center',
        title: 'mE',
        use: 'canX'
    }, {
        icon: '&#xe70b;',
        to: 'right',
        r180: 1,
        title: 'mD',
        use: 'canX'
    }, {
        icon: '&#xe70d;',
        to: 'top',
        title: 'mF',
        use: 'canY'
    }, {
        icon: '&#xe711;',
        to: 'middle',
        r90: 1,
        title: 'mH',
        use: 'canY'
    }, {
        icon: '&#xe70d;',
        to: 'bottom',
        r180: 1,
        title: 'mG',
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

if($quick_mc_0_static_node){
$vnode_0.push($quick_mc_0_static_node);
}else{
$vnode_0.push($quick_mc_0_static_node=$createVNode('i',{'_': 'i!','class': 'rd-mH rd-pm',}));
}

for(let $q_c_lwvpfdxt=actions.length,$q_key_isdwvmwkck=0;$q_key_isdwvmwkck<$q_c_lwvpfdxt;$q_key_isdwvmwkck+=1){
let a=actions[$q_key_isdwvmwkck];
$vnode_1=[$createVNode(0,(a.icon),1)];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng';if(a.r180){;$$_class+=' rd-ms';}else if(a.r90){;$$_class+=' rd-mt';};if(!$dataFromView[a.use]){;$$_class+=' rd-pn';};$vnode_0.push($createVNode('i',{'title': (i18n(a.title)),'mx5-click': (($dataFromView[a.use]))&&($viewId+'_pj({to:\''+($encodeQuote(a.to))+'\'})'),'class': $$_class,},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            actions
        });
        let update = this.render.bind(this);
        let checkLocked = e => {
            if (e['_l3'].locked) {
                update();
            }
        };
        State.on('l7', update);
        State.on('mp', update);
        State.on('l5', update);
        State.on('l4', checkLocked);
        this.on('destroy', () => {
            State.off('l7', update);
            State.off('mp', update);
            State.off('l5', update);
            State.off('l4', checkLocked);
        });
    },
    render() {
        let alignInfo = stage_generic_1['mk']();
        this.digest({
            canX: alignInfo['l2'],
            canY: alignInfo['l3']
        });
    },
    '_pj<click>'(e) {
        if (e.eventTarget.classList.contains('rd-pn')) {
            return;
        }
        let { to } = e.params;
        stage_elements_1["md"](to);
    }
});

});