/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6u/index",["51","../59/index"],(require,exports,module)=>{
let $quick_h5_0_static_node;
let $quick_h5_1_static_attr={'class': 'rd-hX rd-la',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let index_1 = require("../59/index");
let { State, View, applyStyle, dispatch, inside } = magix_1;
applyStyle("rd-gy",".rd-l_{border:1px solid #e6e6e6;border-radius:2px;min-height:100px}.rd-l_:hover{border-color:#ccc}.rd-la{padding:10px}.rd-lb{border:1px solid #e6e6e6;border-radius:2px;height:20px;line-height:20px;margin:2px}.rd-lb:after{content:\" \";height:2px;left:0;margin:0 1%;position:absolute;width:98%}.rd-lc{color:#999;cursor:not-allowed}.rd-lc,.rd-lc .rd-lb{background:#f5f5f5}.rd-lc:hover{border-color:#e6e6e6}.rd-ld-top:after{background:#36873b;top:-3px}.rd-ld-bottom:after{background:#36873b;bottom:-3px}.rd-le{background:#fff;opacity:.4}.rd-lf{background:rgba(71,179,78,.1)}.rd-lg{color:#bd0303;text-decoration:line-through}");
let Half_Item_Height = 10; //可拖动元素的一半高，用于优化从外部拖动新的数据源字段拖进来时的效果提示
let CurrentDragViewId;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	enter,
	disabled,
	fields,
	dragIndex,
	outside,
	index,
	onTop,
	i18n,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_1=[];
if(fields&&fields.length){

for(let $q_c_hsstrwzn=fields.length,i=0;i<$q_c_hsstrwzn;i+=1){
let field=fields[i];

if($quick_h5_0_static_node){
$vnode_2=[$quick_h5_0_static_node];
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2=[$quick_h5_0_static_node=$createVNode('span',{'_': 'eD','class': 'rd-ge rd-h6',},$vnode_3)];
}
$vnode_2.push($createVNode(0,(field.name)));;$$_class='rd-lb rd-gM rd-gW rd-h6';if(i==dragIndex){;$$_class+=' rd-le';if(outside){;$$_class+=' rd-lg';};}else if(i==index){;$$_class+=' rd-ld-'+(onTop?'top':'bottom');};$vnode_1.push($createVNode('div',{'draggable': ((!disabled))&&('true'),'mx5-dragstart': $viewId+'_mv({index:'+(i)+'})','mx5-dragover': $viewId+'_mw({index:'+(i)+'})','mx5-dragend': $viewId+'_md()','class': $$_class,},$vnode_2));
}
}else{
$vnode_2=[$createVNode(0,(i18n('mE')))];$vnode_1.push($createVNode('div',$quick_h5_1_static_attr,$vnode_2));
};$$_class='rd-l_ rd-gM';if(enter){;$$_class+=' rd-lf';};if(disabled){;$$_class+=' rd-lc';};if(!fields||!fields.length){;$$_class+=' rd-g9 rd-ha';};$vnode_0=[$createVNode('div',{'mx5-dragleave': $viewId+'_mr()','mx5-dragenter': $viewId+'_mt()','mx5-contextmenu': $viewId+'_h6()','class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            index: -1
        });
    },
    assign({ data, disabled, max }) {
        this.set({
            disabled,
            max
        });
        this['_mm'] = null;
        this['_mn'] = null;
        this['_mo'] = null;
        this['_mp'] = null;
        if (data) {
            let { url, fields, id } = data;
            if (url) {
                this['_mm'] = url;
            }
            if (id) {
                this['_mn'] = id;
            }
            if (fields) {
                this['_mo'] = fields;
                this.set({
                    fields
                });
            }
        }
        this['_mq'] = JSON.stringify([this['_mm'], this['_mn'], this['_mo']]);
    },
    render() {
        this.digest();
    },
    '_l1'() {
        let url = this['_mm'], fields = this['_mo'], id = this['_mn'];
        let nowStringify = JSON.stringify([url, id, fields]);
        if (nowStringify != this['_mq']) {
            this['_mq'] = nowStringify;
            if (!fields.length) {
                url = '';
                id = '';
            }
            dispatch(this.root, 'change', {
                bindField: {
                    url,
                    id,
                    fields
                }
            });
        }
    },
    '_mr<dragleave>'(e) {
        if (!this.get('disabled') &&
            index_1['_kc'](this)) {
            this.digest({
                enter: false,
                outside: true,
                index: -1
            });
        }
    },
    '_md<dragend>'() {
        if (!this['_ms']) { //未触发drop事件，表明未移动到浏览器的阈值，此时需要还原界面
            this.digest({
                enter: false,
                index: -1,
                dragIndex: -1
            });
        }
    },
    '_mt<dragenter>'(e) {
        if (!this.get('disabled') &&
            index_1['_kb'](this)) {
            // let inNode = inside(e.relatedTarget as HTMLElement, e.eventTarget);
            // if (!inNode) {
            let fields = this['_mo'];
            let index = this.get('index');
            let dragIndex = this['_mp'];
            let dragData = State.get('gx');
            if ((dragData &&
                fields.length &&
                index == -1) ||
                dragIndex != null) {
                let rootBound = this.root.getBoundingClientRect();
                let onTop;
                //如果不是从顶部进来，则提示放最后一个的底部
                if (rootBound.y + Half_Item_Height < e.pageY) {
                    index = fields.length - 1;
                    onTop = 0;
                }
                else { //否则先提示放顶部
                    index = 0;
                    onTop = 1;
                }
                this.set({
                    index,
                    onTop
                });
            }
            this.digest({
                outside: false,
                enter: (dragIndex == null) && dragData
            });
        }
        // }
    },
    '_mv<dragstart>'(e) {
        let { params, dataTransfer } = e;
        this.set({
            dragIndex: this['_mp'] = params.index
        });
        //dataTransfer.effectAllowed = 'move';
        //firefox required setData
        dataTransfer.setData('text/plain', '_mu');
        CurrentDragViewId = this.id;
    },
    '_mw<dragover>'(e) {
        if (this.get('disabled') ||
            (CurrentDragViewId &&
                CurrentDragViewId != this.id)) {
            return;
        }
        let me = this;
        let dragIndex = me['_mp'];
        this['_h5'](e);
        let { eventTarget, params, pageY } = e;
        //dataTransfer.dropEffect = 'move';
        let rect = eventTarget.getBoundingClientRect();
        let onTop = (rect.top + rect.height / 2) > pageY;
        let index = params.index;
        //如果放在某一个元素的顶部
        if (onTop) {
            //如果这个元素的顶部挨着拖动元素，其实不需要移动
            if (index - 1 == dragIndex) {
                index = dragIndex;
            }
        }
        else {
            if (index + 1 == dragIndex) {
                index = dragIndex;
            }
        }
        me.digest({
            onTop,
            index
        });
    },
    '$doc<drop>'(e) {
        this['_h5'](e);
        if (this.get('disabled'))
            return;
        index_1['_me'](this);
        this['_ms'] = 1;
        let changed;
        let inNode = inside(e.target, this.root);
        let max = this.get('max') || -1;
        if (!inNode) { //放下时，如果放置在当前节点的外部，则表明删除这个拖动的元素
            let index = this['_mp'];
            if (index != null) { //需要判断是否有拖动中的元素，避免从数据源拖进来再拖出的情况
                let fields = this['_mo'];
                fields.splice(index, 1); //直接删除
                this.set({
                    index: -1,
                    fields
                });
                changed = 1;
            }
        }
        else {
            let dragData = State.get('gx');
            let index = this.get('index'), onTop = this.get('onTop');
            if (dragData) { //如果能拿到数据，则表明从数据源拖动进来
                State.set({
                    'gx': null
                });
                let { url, field, id } = dragData;
                let fields = this['_mo'];
                if (this['_mn'] != id) { //根据id来判断是否换了新的数据源
                    this['_mm'] = url;
                    fields = [field]; //如果是新的数据源，则旧的字段全部删除
                    this['_mo'] = fields;
                    this['_mn'] = id;
                    this.set({
                        index: -1,
                        fields
                    });
                    changed = 1;
                }
                else { //追加数据源
                    if (index != -1) { //有拖动中的
                        if (max != -1 && fields.length >= max) { //超出则删除
                            fields.shift();
                        }
                        fields.splice(index + (onTop ? 0 : 1), 0, field);
                        changed = 1;
                    }
                    else if (!fields.length) {
                        if (max != -1 && fields.length >= max) {
                            fields.shift();
                        }
                        fields.push(field);
                        changed = 1;
                    }
                    this.set({
                        index: -1,
                        fields
                    });
                }
            }
            else { //普通的调整顺序
                if (index != -1) {
                    let startIndex = this['_mp'];
                    let fields = this['_mo'];
                    let drag = fields[startIndex];
                    fields.splice(index + (onTop ? 0 : 1), 0, drag);
                    if (index < startIndex) {
                        fields.splice(startIndex + 1, 1);
                    }
                    else {
                        fields.splice(startIndex, 1);
                    }
                    this.set({
                        fields,
                        index: -1,
                    });
                    changed = 1;
                }
            }
        }
        this['_mp'] = null;
        this.digest({
            enter: false,
            dragIndex: -1
        });
        if (changed) {
            this['_l1']();
        }
        CurrentDragViewId = null;
        let waitMarker = magix_1.mark(this, '_mx'); //等待dropend事件检查
        setTimeout(() => {
            if (waitMarker()) {
                delete this['_ms'];
            }
        }, 30);
    }
});

});