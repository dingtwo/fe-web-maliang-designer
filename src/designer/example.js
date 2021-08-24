/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/5j",["51","./53","./5d","./5k"],(require,exports,module)=>{
let $quick_gi_0_static_node;
let $quick_gi_1_static_node;
let $quick_gi_3_static_attr={'class': 'rd-gr rd-in',};
let $quick_gi_4_static_attr={'class': 'rd-g9 rd-hu',};
let $quick_gi_5_static_attr={'class': 'rd-gS rd-gZ rd-h8',};

let magix_1 = require("51");
let const_1 = require("./53");
let history_1 = require("./5d");
let service_1 = require("./5k");
let { random, floor } = Math;
let { State, applyStyle, View, mark, config } = magix_1;
applyStyle("rd-gg",".rd-iU{border:1px solid #e6e6e6;border-radius:2px;margin:4px;padding:0 10px;width:100px}.rd-iU:hover{border-color:#47b34e}");
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

if($quick_gi_0_static_node){
$vnode_0=[$quick_gi_0_static_node];
}else{
$vnode_0=[$quick_gi_0_static_node=$createVNode('div',{'_': 'eD','class': 'rd-gp rd-he rd-ij',})];
}

if($quick_gi_1_static_node){
$vnode_0.push($quick_gi_1_static_node);
}else{
$vnode_1=[$createVNode(0,'<h5 class="rd-gy">模板</h5><a class="rd-gA rd-gJ" href="https://github.com/xinglie/report-designer/issues/28" rel="noopener noreferrer" target="_blank">如何不显示或更换模板接口?</a>',1)];$vnode_0.push($quick_gi_1_static_node=$createVNode('div',{'_': 'eE','class': 'rd-g9 rd-gM rd-gn rd-go rd-ha rd-he rd-hf rd-ik',},$vnode_1));
}
$vnode_2=[];
if(error){
$vnode_3=[$createVNode(0,(error.message))];$vnode_2.push($createVNode('div',$quick_gi_5_static_attr,$vnode_3));
}else{

for(let $q_c_pxvcccb=list.length,$q_key_okkcsqruj=0;$q_key_okkcsqruj<$q_c_pxvcccb;$q_key_okkcsqruj+=1){
let p=list[$q_key_okkcsqruj];
$vnode_4=[$createVNode(0,(p.title))];$vnode_3=[$createVNode('div',{'class': 'rd-g9 rd-h0 rd-ha rd-hm rd-hs rd-hw rd-iU','mx5-click': $viewId+'_g2({src:\''+$keyOf($refData,p,'eD.'+($q_key_okkcsqruj)+'.eE')+'\'})',},$vnode_4)];$vnode_2.push($createVNode('div',{'title': (p.title),},$vnode_3));
}
}$vnode_1=[$createVNode('div',$quick_gi_4_static_attr,$vnode_2)];$vnode_0.push($createVNode('div',$quick_gi_3_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init(data) {
        this['_gT'] = data.dialog;
    },
    render() {
        let m = mark(this, '_gt');
        let s = new service_1();
        s.all('_g1', (ex, bag) => {
            if (m()) {
                this.digest({
                    error: ex,
                    list: bag.get('data', [])
                });
            }
        });
    },
    '_g2<click>'(e) {
        this['_gT'].close();
        let { src } = e.params;
        if (src.stage) {
            State.fire('go', {
                'ge': history_1['gj'],
                'gf': src.title,
                'gd': const_1['g1'](src.stage)
            });
        }
    },
    '_g3<click>'() {
        this['_gT'].close();
    }
}).static({
    '_gM'(owner) {
        if (!this['_g4'] &&
            config('getTemplateUrl')) {
            this['_g4'] = 1;
            owner.mxDialog("50/5j", {
                width: 1026
            }).whenClose(() => {
                delete this['_g4'];
            });
        }
    },
    '_g5'() {
        return new Promise(resolve => {
            let s = new service_1();
            s.all('_g1', (ex, bag) => {
                let list = bag.get('data', []);
                let one = list[floor(random() * list.length)];
                if (one &&
                    one.stage) {
                    State.fire('go', {
                        'ge': history_1['gj'],
                        'gd': const_1['g1'](one.stage),
                        'gf': one.title
                    });
                }
                resolve();
            });
        });
    }
});

});