/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/toolbar-avg",["magix5","./stage-elements","./stage-generic"],(require,exports,module)=>{
let $quick_kB_0_static_node;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("magix5");
let stage_elements_1 = require("./stage-elements");
let stage_generic_1 = require("./stage-generic");
let { State, View } = magix_1;
let actions = [{
        icon: '&#xe61f;',
        to: 'h',
        r90: 1,
        title: '@:{lang#avg.h~rs}',
        use: 'canX'
    }, {
        icon: '&#xe61f;',
        to: 'v',
        title: '@:{lang#avg.v~rs}',
        use: 'canY'
    }, {
        icon: '&#xe659;',
        to: 'sh',
        title: '@:{lang#avg.stage.h~rs}',
        use: 'stageCanX'
    }, {
        icon: '&#xe659;',
        to: 'sv',
        r90: 1,
        title: '@:{lang#avg.stage.v~rs}',
        use: 'stageCanY'
    }];
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
{
	actions,
	i18n,}=$dataFromView,
$$_class,
$vnode_1;

if($quick_kB_0_static_node){
$vnode_0.push($quick_kB_0_static_node);
}else{
$vnode_0.push($quick_kB_0_static_node=$createVNode('i',{'_': 'hS','class': 'rd-_assets_index_less_-fl rd-_designer_toolbar_less_-toolbar-spliter',}));
}
$__line=2;$__art="{{each actions as a}}";$__ctrl="for(let $q_c_onpnlrpqb=actions.length,$q_key_mnovyjek=0;$q_key_mnovyjek<$q_c_onpnlrpqb;$q_key_mnovyjek++){let a=actions[$q_key_mnovyjek];";
for(let $q_c_onpnlrpqb=actions.length,$q_key_mnovyjek=0;$q_key_mnovyjek<$q_c_onpnlrpqb;$q_key_mnovyjek+=1){
let a=actions[$q_key_mnovyjek];
$vnode_1=[$createVNode(0,($__line=3,$__art='{{=a.icon}}',$__ctrl='<%=a.icon%>',(a.icon)),1)];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center'+($__line=3,$__art='{{if a.r180}}','');$__ctrl='<%if(a.r180){%>';if(a.r180){;$$_class+=' rd-_assets_index_less_-r180'+($__line=3,$__art='{{else if a.r90}}','');$__ctrl='<%}else if(a.r90){%>';}else if(a.r90){;$$_class+=' rd-_assets_index_less_-r90'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=3,$__art='{{if !this[a.use]}}','');$__ctrl='<%if(!$dataFromView[a.use]){%>';if(!$dataFromView[a.use]){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-disabled'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('i',{'title': ($__line=3,$__art='{{=i18n(a.title)}}',$__ctrl='<%=i18n(a.title)%>',(i18n(a.title))),'mx5-click': (($temp_var=($__line=3,$__art='{{=this[a.use]}}',$__ctrl='<%=this[a.use]%>',$dataFromView[a.use]),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:designer/toolbar-avg.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{align.elements~rs}({to:\''+($__line=3,$__art='{{=a.to}}',$__ctrl='<%=$encodeQuote(a.to)%>',($encodeQuote(a.to)))+'\'})'),'class': $$_class,},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/toolbar-avg.html'; throw msg; }  } ,
    init() {
        this.set({
            actions
        });
        let update = this.render.bind(this);
        let checkLocked = e => {
            if (e['@:{props~rs}'].locked) {
                update();
            }
        };
        State.on('@:{event#history.shift.change~rs}', update);
        State.on('@:{event#stage.elements.change~rs}', update);
        State.on('@:{event#stage.select.elements.change~rs}', update);
        State.on('@:{event#stage.select.element.props.change~rs}', checkLocked);
        this.on('destroy', () => {
            State.off('@:{event#history.shift.change~rs}', update);
            State.off('@:{event#stage.elements.change~rs}', update);
            State.off('@:{event#stage.select.elements.change~rs}', update);
            State.off('@:{event#stage.select.element.props.change~rs}', checkLocked);
        });
    },
    render() {
        let avgInfo = stage_generic_1['@:{generic#query.can.avg~rs}']();
        this.digest({
            canX: avgInfo['@:{generic.avg#x.can.avg~rs}'],
            canY: avgInfo['@:{generic.avg#y.can.avg~rs}'],
            stageCanX: avgInfo['@:{generic.avg#stage.x.can.avg~rs}'],
            stageCanY: avgInfo['@:{generic.avg#stage.y.can.avg~rs}']
        });
    },
    '@:{align.elements~rs}<click>'(e) {
        if (e.eventTarget.classList.contains('rd-_designer_toolbar_less_-toolbar-item-disabled')) {
            return;
        }
        let { to } = e.params;
        let use;
        if (to.startsWith('s')) {
            use = '@:{elements#stage.avg.elements~rs}';
        }
        else {
            use = '@:{elements#avg.elements~rs}';
        }
        stage_elements_1[use](to, e.shiftKey, e.metaKey || e.ctrlKey);
    }
});

});