/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/align",["5c"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
/**
 * 显示对齐辅助线的view
 */
let magix_1 = require("5c");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0=[],
{
	x,
	y,}=$dataFromView;

if(x){

for(let $q_c_jlpsor=x.length,$q_key_ugjgjxt=0;$q_key_ugjgjxt<$q_c_jlpsor;$q_key_ugjgjxt+=1){
let xp=x[$q_key_ugjgjxt];
$vnode_0.push($createVNode('div',{'class': 'rd-mJ rd-mz rd-n5 rd-nb rd-ol','style': 'top:'+(xp[0])+'px;left:'+(xp[1])+'px;width:'+(xp[2]-xp[1])+'px',}));
}
}
if(y){

for(let $q_c_dhtbqyfkr=y.length,$q_key_ptkezbm=0;$q_key_ptkezbm<$q_c_dhtbqyfkr;$q_key_ptkezbm+=1){
let yp=y[$q_key_ptkezbm];
$vnode_0.push($createVNode('div',{'class': 'rd-mJ rd-mz rd-n5 rd-nd rd-om','style': 'left:'+(yp[0])+'px;top:'+(yp[1])+'px;height:'+(yp[2]-yp[1])+'px',}));
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
        State.on('l2', update);
        this.on('destroy', () => {
            State.off('l2', update);
        });
    },
    render() {
        this.digest();
    }
});

});