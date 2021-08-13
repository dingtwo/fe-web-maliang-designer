/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/5u",["5c","./5e","./5o","./5v"],(require,exports,module)=>{
let $quick_l7_0_static_node;
let $quick_l7_1_static_node;
let $quick_l7_3_static_attr={'class': 'rd-mf rd-ob',};
let $quick_l7_4_static_attr={'class': 'rd-mX rd-ni',};
let $quick_l7_5_static_attr={'class': 'rd-mG rd-mN rd-nW',};

let magix_1 = require("5c");
let const_1 = require("./5e");
let history_1 = require("./5o");
let service_1 = require("./5v");
let { random, floor } = Math;
let { State, applyStyle, View, mark, config } = magix_1;
applyStyle("rd-l5",".rd-oI{border:1px solid #e6e6e6;border-radius:2px;margin:4px;padding:0 10px;width:100px}.rd-oI:hover{border-color:#47b34e}");
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

if($quick_l7_0_static_node){
$vnode_0=[$quick_l7_0_static_node];
}else{
$vnode_0=[$quick_l7_0_static_node=$createVNode('div',{'_': 'i!','class': 'rd-m3 rd-md rd-n8',})];
}

if($quick_l7_1_static_node){
$vnode_0.push($quick_l7_1_static_node);
}else{
$vnode_1=[$createVNode(0,'<h5 class="rd-mm">模板</h5><a class="rd-mo rd-mx" href="https://github.com/xinglie/report-designer/issues/28" rel="noopener noreferrer" target="_blank">如何不显示或更换模板接口?</a>',1)];$vnode_0.push($quick_l7_1_static_node=$createVNode('div',{'_': 'i@','class': 'rd-m3 rd-m4 rd-mA rd-mX rd-mZ rd-mb rd-mc rd-n9',},$vnode_1));
}
$vnode_2=[];
if(error){
$vnode_3=[$createVNode(0,(error.message))];$vnode_2.push($createVNode('div',$quick_l7_5_static_attr,$vnode_3));
}else{

for(let $q_c_kihvtgh=list.length,$q_key_okvudulaz=0;$q_key_okvudulaz<$q_c_kihvtgh;$q_key_okvudulaz+=1){
let p=list[$q_key_okvudulaz];
$vnode_4=[$createVNode(0,(p.title))];$vnode_3=[$createVNode('div',{'class': 'rd-mX rd-mZ rd-nO rd-na rd-ng rd-nk rd-oI','mx5-click': $viewId+'_mQ({src:\''+$keyOf($refData,p,'i!.'+($q_key_okvudulaz)+'.i@')+'\'})',},$vnode_4)];$vnode_2.push($createVNode('div',{'title': (p.title),},$vnode_3));
}
}$vnode_1=[$createVNode('div',$quick_l7_4_static_attr,$vnode_2)];$vnode_0.push($createVNode('div',$quick_l7_3_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init(data) {
        this['_mH'] = data.dialog;
    },
    render() {
        let m = mark(this, '_mh');
        let s = new service_1();
        s.all('_mP', (ex, bag) => {
            if (m()) {
                this.digest({
                    error: ex,
                    list: bag.get('data', [])
                });
            }
        });
    },
    '_mQ<click>'(e) {
        this['_mH'].close();
        let { src } = e.params;
        if (src.stage) {
            State.fire('mc', {
                'l3': history_1['l8'],
                'l4': src.title,
                'l2': const_1['mP'](src.stage)
            });
        }
    },
    '_mR<click>'() {
        this['_mH'].close();
    }
}).static({
    '_mA'(owner) {
        if (!this['_mS'] &&
            config('getTemplateUrl')) {
            this['_mS'] = 1;
            owner.mxDialog("5b/5u", {
                width: 1026
            }).whenClose(() => {
                delete this['_mS'];
            });
        }
    },
    '_mT'() {
        return new Promise(resolve => {
            let s = new service_1();
            s.all('_mP', (ex, bag) => {
                let list = bag.get('data', []);
                let one = list[floor(random() * list.length)];
                if (one &&
                    one.stage) {
                    State.fire('mc', {
                        'l3': history_1['l8'],
                        'l2': const_1['mP'](one.stage),
                        'l4': one.title
                    });
                }
                resolve();
            });
        });
    }
});

});