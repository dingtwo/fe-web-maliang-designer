/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/align",["magix5"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
/**
 * 显示对齐辅助线的view
 */
let magix_1 = require("magix5");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
{
	x,
	y,}=$dataFromView;
$__line=1;$__art="{{if x}}";$__ctrl="if(x){";
if(x){
$__line=2;$__art="{{each x as xp}}";$__ctrl="for(let $q_c_vqjesewlh=x.length,$q_key_qlelwu=0;$q_key_qlelwu<$q_c_vqjesewlh;$q_key_qlelwu++){let xp=x[$q_key_qlelwu];";
for(let $q_c_vqjesewlh=x.length,$q_key_qlelwu=0;$q_key_qlelwu<$q_c_vqjesewlh;$q_key_qlelwu+=1){
let xp=x[$q_key_qlelwu];
$vnode_0.push($createVNode('div',{'class': 'rd-_assets_index_less_-background-color-brand-a60 rd-_assets_index_less_-height-1 rd-_assets_index_less_-pa rd-_assets_index_less_-transform-y-n50 rd-_assets_index_less_-z-index-1','style': 'top:'+($__line=3,$__art='{{=xp[0]}}',$__ctrl='<%=xp[0]%>',(xp[0]))+'px;left:'+($__line=3,$__art='{{=xp[1]}}',$__ctrl='<%=xp[1]%>',(xp[1]))+'px;width:'+($__line=3,$__art='{{=xp[2]-xp[1]}}',$__ctrl='<%=xp[2]-xp[1]%>',(xp[2]-xp[1]))+'px',}));
}
}$__line=6;$__art="{{if y}}";$__ctrl="if(y){";
if(y){
$__line=7;$__art="{{each y as yp}}";$__ctrl="for(let $q_c_yhzeeqtba=y.length,$q_key_netqlqyf=0;$q_key_netqlqyf<$q_c_yhzeeqtba;$q_key_netqlqyf++){let yp=y[$q_key_netqlqyf];";
for(let $q_c_yhzeeqtba=y.length,$q_key_netqlqyf=0;$q_key_netqlqyf<$q_c_yhzeeqtba;$q_key_netqlqyf+=1){
let yp=y[$q_key_netqlqyf];
$vnode_0.push($createVNode('div',{'class': 'rd-_assets_index_less_-background-color-brand-a60 rd-_assets_index_less_-pa rd-_assets_index_less_-transform-x-n50 rd-_assets_index_less_-width-1 rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=8,$__art='{{=yp[0]}}',$__ctrl='<%=yp[0]%>',(yp[0]))+'px;top:'+($__line=8,$__art='{{=yp[1]}}',$__ctrl='<%=yp[1]%>',(yp[1]))+'px;height:'+($__line=8,$__art='{{=yp[2]-yp[1]}}',$__ctrl='<%=yp[2]-yp[1]%>',(yp[2]-yp[1]))+'px',}));
}
} 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/align.html'; throw msg; }  } ,
    init() {
        let update = e => {
            this.digest({
                x: e.x,
                y: e.y
            });
        };
        State.on('@:{event#stage.find.snap.element~rs}', update);
        this.on('destroy', () => {
            State.off('@:{event#stage.find.snap.element~rs}', update);
        });
    },
    render() {
        this.digest();
    }
});

});