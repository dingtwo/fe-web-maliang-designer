/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/50",["4e","./4g","./4q","./51"],(require,exports,module)=>{
let $quick_dJ_0_static_node;
let $quick_dJ_1_static_node;
let $quick_dJ_3_static_attr={'class': 'rd-dS rd-fO',};
let $quick_dJ_4_static_attr={'class': 'rd-eV rd-ez',};
let $quick_dJ_5_static_attr={'class': 'rd-ei rd-ep rd-fy',};

let magix_1 = require("4e");
let const_1 = require("./4g");
let history_1 = require("./4q");
let service_1 = require("./51");
let { random, floor } = Math;
let { State, applyStyle, View, mark, config } = magix_1;
applyStyle("rd-dH",".rd-gk{border:1px solid #e6e6e6;border-radius:2px;margin:4px;padding:0 10px;width:100px}.rd-gk:hover{border-color:#fa742b}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
{
	error,
	list,}=$dataFromView,
$vnode_1,
$vnode_3,
$vnode_4,
$vnode_2;

if($quick_dJ_0_static_node){
$vnode_0=[$quick_dJ_0_static_node];
}else{
$vnode_0=[$quick_dJ_0_static_node=$createVNode('div',{'_': 'cH','class': 'rd-dQ rd-eF rd-fK',})];
}

if($quick_dJ_1_static_node){
$vnode_0.push($quick_dJ_1_static_node);
}else{
$vnode_1=[$createVNode(0,'<h5 class="rd-dZ">模板</h5><a class="rd-d1 rd-e_" href="https://github.com/xinglie/report-designer/issues/28" rel="noopener noreferrer" target="_blank">如何不显示或更换模板接口?</a>',1)];$vnode_0.push($quick_dJ_1_static_node=$createVNode('div',{'_': 'cI','class': 'rd-dO rd-dP rd-eB rd-eF rd-eG rd-ec rd-ez rd-fL',},$vnode_1));
}
$vnode_2=[];
if(error){
$vnode_3=[$createVNode(0,(error.message))];$vnode_2.push($createVNode('div',$quick_dJ_5_static_attr,$vnode_3));
}else{

for(let $q_c_lwhvzrala=list.length,$q_key_nfqxpxdi=0;$q_key_nfqxpxdi<$q_c_lwhvzrala;$q_key_nfqxpxdi+=1){
let p=list[$q_key_nfqxpxdi];
$vnode_4=[$createVNode(0,(p.title))];$vnode_3=[$createVNode('div',{'class': 'rd-eB rd-eN rd-eT rd-eX rd-ez rd-fq rd-gk','mx5-click': $viewId+'_es({src:\''+$keyOf($refData,p,'cH.'+($q_key_nfqxpxdi)+'.cI')+'\'})',},$vnode_4)];$vnode_2.push($createVNode('div',{'title': (p.title),},$vnode_3));
}
}$vnode_1=[$createVNode('div',$quick_dJ_4_static_attr,$vnode_2)];$vnode_0.push($createVNode('div',$quick_dJ_3_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init(data) {
        this['_ej'] = data.dialog;
    },
    render() {
        let m = mark(this, '_dU');
        let s = new service_1();
        s.all('_er', (ex, bag) => {
            if (m()) {
                this.digest({
                    error: ex,
                    list: bag.get('data', [])
                });
            }
        });
    },
    '_es<click>'(e) {
        this['_ej'].close();
        let { src } = e.params;
        if (src.stage) {
            State.fire('dP', {
                'dF': history_1['dK'],
                'dG': src.title,
                'dE': const_1['er'](src.stage)
            });
        }
    },
    '_et<click>'() {
        this['_ej'].close();
    }
}).static({
    '_ec'(owner) {
        if (!this['_eu'] &&
            config('getTemplateUrl')) {
            this['_eu'] = 1;
            owner.mxDialog("4d/50", {
                width: 1026
            }).whenClose(() => {
                delete this['_eu'];
            });
        }
    },
    '_ev'() {
        return new Promise(resolve => {
            let s = new service_1();
            s.all('_er', (ex, bag) => {
                let list = bag.get('data', []);
                let one = list[floor(random() * list.length)];
                if (one &&
                    one.stage) {
                    State.fire('dP', {
                        'dF': history_1['dK'],
                        'dE': const_1['er'](one.stage),
                        'dG': one.title
                    });
                }
                resolve();
            });
        });
    }
});

});