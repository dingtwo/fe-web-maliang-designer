/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/align",["51"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
/**
 * 显示对齐辅助线的view
 */
let magix_1 = require("51");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0=[],
{
	x,
	y,}=$dataFromView;

if(x){

for(let $q_c_chejoaut=x.length,$q_key_djowxrbo=0;$q_key_djowxrbo<$q_c_chejoaut;$q_key_djowxrbo+=1){
let xp=x[$q_key_djowxrbo];
$vnode_0.push($createVNode('div',{'class': 'rd-gL rd-gV rd-hn rd-ig rd-ix','style': 'top:'+(xp[0])+'px;left:'+(xp[1])+'px;width:'+(xp[2]-xp[1])+'px',}));
}
}
if(y){

for(let $q_c_ylwsiyl=y.length,$q_key_tjafscbl=0;$q_key_tjafscbl<$q_c_ylwsiyl;$q_key_tjafscbl+=1){
let yp=y[$q_key_tjafscbl];
$vnode_0.push($createVNode('div',{'class': 'rd-gL rd-gV rd-hp rd-ig rd-iy','style': 'left:'+(yp[0])+'px;top:'+(yp[1])+'px;height:'+(yp[2]-yp[1])+'px',}));
}
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = e => {
            this.digest({
                x: e.x,
                y: e.y
            });
        };
        State.on('gd', update);
        this.on('destroy', () => {
            State.off('gd', update);
        });
    },
    render() {
        this.digest();
    }
});

});