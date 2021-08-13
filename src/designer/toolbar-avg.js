/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/6f",["5c","./64","./65"],(require,exports,module)=>{
let $quick_md_0_static_node;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("5c");
let stage_elements_1 = require("./64");
let stage_generic_1 = require("./65");
let { State, View } = magix_1;
let actions = [{
        icon: '&#xe61f;',
        to: 'h',
        r90: 1,
        title: 'nw',
        use: 'canX'
    }, {
        icon: '&#xe61f;',
        to: 'v',
        title: 'nx',
        use: 'canY'
    }, {
        icon: '&#xe659;',
        to: 'sh',
        title: 'ny',
        use: 'stageCanX'
    }, {
        icon: '&#xe659;',
        to: 'sv',
        r90: 1,
        title: 'nz',
        use: 'stageCanY'
    }];
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0=[],
{
	actions,
	i18n,}=$dataFromView,
$$_class,
$vnode_1;

if($quick_md_0_static_node){
$vnode_0.push($quick_md_0_static_node);
}else{
$vnode_0.push($quick_md_0_static_node=$createVNode('i',{'_': 'i!','class': 'rd-mH rd-pm',}));
}

for(let $q_c_ljuweckjmn=actions.length,$q_key_sbddn=0;$q_key_sbddn<$q_c_ljuweckjmn;$q_key_sbddn+=1){
let a=actions[$q_key_sbddn];
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
        let avgInfo = stage_generic_1['mw']();
        this.digest({
            canX: avgInfo['l2'],
            canY: avgInfo['l3'],
            stageCanX: avgInfo['l4'],
            stageCanY: avgInfo['l5']
        });
    },
    '_pj<click>'(e) {
        if (e.eventTarget.classList.contains('rd-pn')) {
            return;
        }
        let { to } = e.params;
        let use;
        if (to.startsWith('s')) {
            use = 'mg';
        }
        else {
            use = 'mf';
        }
        stage_elements_1[use](to, e.shiftKey, e.metaKey || e.ctrlKey);
    }
});

});