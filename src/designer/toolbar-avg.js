/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/64",["51","./5p","./5q"],(require,exports,module)=>{
let $quick_gp_0_static_node;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("51");
let stage_elements_1 = require("./5p");
let stage_generic_1 = require("./5q");
let { State, View } = magix_1;
let actions = [{
        icon: '&#xe61f;',
        to: 'h',
        r90: 1,
        title: 'hI',
        use: 'canX'
    }, {
        icon: '&#xe61f;',
        to: 'v',
        title: 'hJ',
        use: 'canY'
    }, {
        icon: '&#xe659;',
        to: 'sh',
        title: 'hK',
        use: 'stageCanX'
    }, {
        icon: '&#xe659;',
        to: 'sv',
        r90: 1,
        title: 'hL',
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

if($quick_gp_0_static_node){
$vnode_0.push($quick_gp_0_static_node);
}else{
$vnode_0.push($quick_gp_0_static_node=$createVNode('i',{'_': 'eD','class': 'rd-gT rd-jy',}));
}

for(let $q_c_xszssivxq=actions.length,$q_key_irgykxl=0;$q_key_irgykxl<$q_c_xszssivxq;$q_key_irgykxl+=1){
let a=actions[$q_key_irgykxl];
$vnode_1=[$createVNode(0,(a.icon),1)];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs';if(a.r180){;$$_class+=' rd-gE';}else if(a.r90){;$$_class+=' rd-gF';};if(!$dataFromView[a.use]){;$$_class+=' rd-jz';};$vnode_0.push($createVNode('i',{'title': (i18n(a.title)),'mx5-click': (($dataFromView[a.use]))&&($viewId+'_jy({to:\''+($encodeQuote(a.to))+'\'})'),'class': $$_class,},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            actions
        });
        let update = this.render.bind(this);
        let checkLocked = e => {
            if (e['_ge'].locked) {
                update();
            }
        };
        State.on('gi', update);
        State.on('gB', update);
        State.on('gg', update);
        State.on('gf', checkLocked);
        this.on('destroy', () => {
            State.off('gi', update);
            State.off('gB', update);
            State.off('gg', update);
            State.off('gf', checkLocked);
        });
    },
    render() {
        let avgInfo = stage_generic_1['gI']();
        this.digest({
            canX: avgInfo['gd'],
            canY: avgInfo['ge'],
            stageCanX: avgInfo['gf'],
            stageCanY: avgInfo['gg']
        });
    },
    '_jy<click>'(e) {
        if (e.eventTarget.classList.contains('rd-jz')) {
            return;
        }
        let { to } = e.params;
        let use;
        if (to.startsWith('s')) {
            use = 'gs';
        }
        else {
            use = 'gr';
        }
        stage_elements_1[use](to, e.shiftKey, e.metaKey || e.ctrlKey);
    }
});

});