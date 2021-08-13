/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/6d/index",["5c","../76/index"],(require,exports,module)=>{
let $quick_n4_1_static_node;
let $quick_n4_0_static_attr={'class': 'rd-mR rd-mn rd-nl',};
let $quick_n4_2_static_attr={'class': 'rd-mW rd-m_',};

/*
    author:https://github.com/xinglie
 */
let magix_1 = require("5c");
let index_1 = require("../76/index");
let { node, View, applyStyle, inside, Vframe } = magix_1;
let paddingSize = 20;
applyStyle("rd-mp",".rd-ri{background-color:#fff;border:1px solid #e6e6e6;border-radius:2px;box-shadow:0 0 3px 2px rgba(0,0,0,.06);max-height:calc(100vh - 64px);max-width:calc(100vw - 44px);overflow:auto;padding:4px;z-index:3000}.rd-rj{border-radius:2px;height:24px;padding:2px 8px 2px 4px}.rd-rk{height:14px;width:14px}.rd-rj:not(.rd-rl):hover{background-color:#b2e1b5}.rd-rm{background:#eee;height:1px;margin:4px 0}.rd-rl,.rd-rl:hover{color:#ccc;cursor:not-allowed}.rd-rl .rd-rk,.rd-rl .rd-rn{color:#e6e6e6}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
{
	width,
	list,
	disabled,}=$dataFromView,
$$_class,
$vnode_4,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_2=[];
for(let $q_c_semerevbh=list.length,$q_key_eaacidnuvag=0;$q_key_eaacidnuvag<$q_c_semerevbh;$q_key_eaacidnuvag+=1){
let one=list[$q_key_eaacidnuvag];

if(one.spliter){

if($quick_n4_1_static_node){
$vnode_2.push($quick_n4_1_static_node);
}else{
$vnode_2.push($quick_n4_1_static_node=$createVNode('li',{'_': 'i!','class': 'rd-rm',}));
}

}else{
$vnode_3=[];$vnode_4=[];
if((one.icon)!=null){
$vnode_4.push($createVNode(0,one.icon,1));
};$$_class='rd-l3 rd-mv rd-rk rd-nO rd-nV rd-nN';if(one.r180){;$$_class+=' rd-ms';}else if(one.r90){;$$_class+=' rd-mt';};$vnode_3.push($createVNode('i',{'class': $$_class,},$vnode_4));$vnode_4=[$createVNode(0,(one.text))];$vnode_3.push($createVNode('b',$quick_n4_2_static_attr,$vnode_4));
if(one.short){
$vnode_4=[$createVNode(0,(one.short))];$vnode_3.push($createVNode('code',{'class': 'rd-nL rd-nU rd-rn','title': '快捷键:'+(one.short),},$vnode_4));
};$$_class='rd-mX rd-mZ rd-rj rd-nl';if(disabled[one.id]){;$$_class+=' rd-rl';};$vnode_2.push($createVNode('li',{'mx5-click': ((!disabled[one.id]))&&($viewId+'_r7({item:\''+$keyOf($refData,one,'i!.'+($q_key_eaacidnuvag)+'.i@')+'\'})'),'class': $$_class,},$vnode_3));
}
}$vnode_1=[$createVNode('ul',$quick_n4_0_static_attr,$vnode_2)];$vnode_0=[$createVNode('div',{'style': 'width:'+(width)+'px;position:absolute;left:-10000px;top:-10000px','class': 'rd-mS rd-mT rd-ri','id': '_mx_cnt_'+$viewId,'mx5-contextmenu': $viewId+'_nT()',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let root = this.root;
        index_1['_ro']();
        this.on('destroy', () => {
            index_1['_pd'](this);
            index_1['_rp']();
            root.parentNode.removeChild(root);
        });
    },
    assign(ops) {
        let me = this;
        let width = ops.width || 200;
        me['_nt'] = ops.list;
        me['_nq'] = width;
        me['_sH'] = ops.disabled || {};
        me['_sI'] = ops.picked;
    },
    async render(e) {
        let me = this;
        await me.digest({
            disabled: me['_sH'],
            list: me['_nt'],
            width: me['_nq']
        });
        if (e) {
            this['_mA'](e);
        }
    },
    '_rE'(node) {
        return inside(node, this.root);
    },
    '_mA'(e) {
        let me = this;
        if (!me['_sJ']) {
            me['_sJ'] = 1;
            let n = node('_mx_cnt_' + me.id);
            let width = n.clientWidth;
            let height = n.clientHeight;
            let left = e.pageX + 2;
            let top = e.pageY;
            let positionHeight = top + height + paddingSize, positionnWidth = left + width + paddingSize, { innerHeight, innerWidth } = window;
            if (positionnWidth > innerWidth) {
                left -= width + 5;
                if (left < paddingSize)
                    left = paddingSize;
            }
            if (positionHeight > innerHeight) {
                top -= positionHeight - innerHeight + paddingSize;
                if (top < paddingSize)
                    top = paddingSize;
            }
            n.style.left = left + 'px';
            n.style.top = top + 'px';
            index_1['_rF'](me);
        }
    },
    '_mB'() {
        let me = this;
        if (me['_sJ']) {
            me['_sJ'] = 0;
            let n = node('_mx_cnt_' + me.id);
            n.style.left = '-10000px';
            index_1['_pd'](me);
        }
    },
    '_r7<click>'(e) {
        let me = this;
        me['_mB']();
        let fn = me['_sI'];
        if (fn) {
            fn(e.params.item);
        }
    }
}).static({
    show(view, e, cmId, ops) {
        let n = node(cmId);
        let vf = n && Vframe.byNode(n);
        if (vf) {
            vf.invoke('assign', [ops]);
            vf.invoke('render', [e]);
        }
        else {
            document.body.insertAdjacentHTML("beforeend", `<div class="rd-l2" id="${cmId}"></div>`);
            vf = view.owner.mount(node(cmId), '5j/6d/index', ops);
            vf.invoke('_mA', [e]);
        }
    }
});

});