/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/align",["4e"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
/**
 * 显示对齐辅助线的view
 */
let magix_1 = require("4e");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0=[],
{
	x,
	y,}=$dataFromView;

if(x){

for(let $q_c_zjgfqe=x.length,$q_key_rtyyswj=0;$q_key_rtyyswj<$q_c_zjgfqe;$q_key_rtyyswj+=1){
let xp=x[$q_key_rtyyswj];
$vnode_0.push($createVNode('div',{'class': 'rd-eO rd-eb rd-el rd-fH rd-fY','style': 'top:'+(xp[0])+'px;left:'+(xp[1])+'px;width:'+(xp[2]-xp[1])+'px',}));
}
}
if(y){

for(let $q_c_jhsnkt=y.length,$q_key_tqxzwnj=0;$q_key_tqxzwnj<$q_c_jhsnkt;$q_key_tqxzwnj+=1){
let yp=y[$q_key_tqxzwnj];
$vnode_0.push($createVNode('div',{'class': 'rd-eQ rd-eb rd-el rd-fH rd-fZ','style': 'left:'+(yp[0])+'px;top:'+(yp[1])+'px;height:'+(yp[2]-yp[1])+'px',}));
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
        State.on('dE', update);
        this.on('destroy', () => {
            State.off('dE', update);
        });
    },
    render() {
        this.digest();
    }
});

});