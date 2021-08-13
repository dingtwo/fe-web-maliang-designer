/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-field/index",["magix5","../mx-dragdrop/index"],(require,exports,module)=>{
let $quick_gU_0_static_node;
let $quick_gU_1_static_attr={'class': 'rd-_assets_index_less_-color-999 rd-_gallery_mx-field_index_less_-drop-tip',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let index_1 = require("../mx-dragdrop/index");
let { State, View, applyStyle, dispatch, inside } = magix_1;
applyStyle("rd-_gallery_mx-field_index_less_","\n.rd-_gallery_mx-field_index_less_-drop-zone {\nmin-height:100px;\nborder:solid 1px #e6e6e6;\nborder-radius:2px;\n}\n.rd-_gallery_mx-field_index_less_-drop-zone:hover {\nborder-color:#ccc;\n}\n.rd-_gallery_mx-field_index_less_-drop-tip {\npadding:10px;\n}\n.rd-_gallery_mx-field_index_less_-item-draggable {\nborder:solid 1px #e6e6e6;\nborder-radius:2px;\nmargin:2px;\nline-height:20px;\nheight:20px;\n}\n.rd-_gallery_mx-field_index_less_-item-draggable::after {\ncontent:' ';\nwidth:98%;\nmargin:0 1%;\nheight:2px;\nleft:0;\nposition:absolute;\n}\n.rd-_gallery_mx-field_index_less_-notallowed {\nbackground:#f5f5f5;\ncursor:not-allowed;\ncolor:#999;\n}\n.rd-_gallery_mx-field_index_less_-notallowed .rd-_gallery_mx-field_index_less_-item-draggable {\nbackground:#f5f5f5;\n}\n.rd-_gallery_mx-field_index_less_-notallowed:hover {\nborder-color:#e6e6e6;\n}\n.rd-_gallery_mx-field_index_less_-item--top::after {\ntop:-3px;\nbackground:#36873b;\n}\n.rd-_gallery_mx-field_index_less_-item--bottom::after {\nbottom:-3px;\nbackground:#36873b;\n}\n.rd-_gallery_mx-field_index_less_-item-dragged {\nbackground:#fff;\nopacity:0.4;\n}\n.rd-_gallery_mx-field_index_less_-drop-zone-enter {\nbackground:rgba(71, 179, 78, 0.1);\n}\n.rd-_gallery_mx-field_index_less_-item-removed {\ntext-decoration:line-through;\ncolor:#bd0303;\n}\n");
let Half_Item_Height = 10; //可拖动元素的一半高，用于优化从外部拖动新的数据源字段拖进来时的效果提示
let CurrentDragViewId;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
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
$vnode_1=[];$__line=2;$__art="{{if fields&&fields.length}}";$__ctrl="if(fields&&fields.length){";
if(fields&&fields.length){
$__line=3;$__art="{{each fields as field i}}";$__ctrl="for(let $q_c_sdjlxuyq=fields.length,i=0;i<$q_c_sdjlxuyq;i++){let field=fields[i];";
for(let $q_c_sdjlxuyq=fields.length,i=0;i<$q_c_sdjlxuyq;i+=1){
let field=fields[i];

if($quick_gU_0_static_node){
$vnode_2=[$quick_gU_0_static_node];
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2=[$quick_gU_0_static_node=$createVNode('span',{'_': 'dM','class': 'rd-_assets_index_less_-fontsize-12 rd-_assets_index_less_-iconfont',},$vnode_3)];
}
$vnode_2.push($createVNode(0,($__line=5,$__art='{{=field.name}}',$__ctrl='<%=field.name%>',(field.name))));;$$_class='rd-_gallery_mx-field_index_less_-item-draggable rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-pr rd-_assets_index_less_-fontsize-12'+($__line=4,$__art='{{if i==dragIndex}}','');$__ctrl='<%if(i==dragIndex){%>';if(i==dragIndex){;$$_class+=' rd-_gallery_mx-field_index_less_-item-dragged'+($__line=4,$__art='{{if outside}}','');$__ctrl='<%if(outside){%>';if(outside){;$$_class+=' rd-_gallery_mx-field_index_less_-item-removed'+($__line=4,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=4,$__art='{{else if i==index}}','');$__ctrl='<%}else if(i==index){%>';}else if(i==index){;$$_class+=' rd-_gallery_mx-field_index_less_-item--'+($__line=4,$__art='{{=onTop?\'top\':\'bottom\'}}',$__ctrl='<%=onTop?\'top\':\'bottom\'%>',(onTop?'top':'bottom'))+($__line=4,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'draggable': (($__line=4,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled))&&('true'),'mx5-dragstart': $viewId+'@:{drag.start~rs}({index:'+($__line=4,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+'})','mx5-dragover': $viewId+'@:{drag.over~rs}({index:'+($__line=4,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+'})','mx5-dragend': $viewId+'@:{drag.end~rs}()','class': $$_class,},$vnode_2));
}
}else{
$vnode_2=[$createVNode(0,($__line=10,$__art='{{=i18n(\'@:{lang#mx-gallery.field.drag.tip~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.field.drag.tip~rs}\')%>',(i18n('@:{lang#mx-gallery.field.drag.tip~rs}'))))];$vnode_1.push($createVNode('div',$quick_gU_1_static_attr,$vnode_2));
};$$_class='rd-_gallery_mx-field_index_less_-drop-zone rd-_assets_index_less_-background-color-fff'+($__line=1,$__art='{{if enter}}','');$__ctrl='<%if(enter){%>';if(enter){;$$_class+=' rd-_gallery_mx-field_index_less_-drop-zone-enter'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=1,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-field_index_less_-notallowed'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=1,$__art='{{if !fields||!fields.length}}','');$__ctrl='<%if(!fields||!fields.length){%>';if(!fields||!fields.length){;$$_class+=' rd-_assets_index_less_-flex rd-_assets_index_less_-align-items-center'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'mx5-dragleave': $viewId+'@:{drag.exit~rs}()','mx5-dragenter': $viewId+'@:{drag.enter~rs}()','mx5-contextmenu': $viewId+'@:{prevent~rs}()','class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-field/index.html'; throw msg; }  } ,
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
        this['@:{now.url~rs}'] = null;
        this['@:{now.id~rs}'] = null;
        this['@:{fields~rs}'] = null;
        this['@:{drag.index~rs}'] = null;
        if (data) {
            let { url, fields, id } = data;
            if (url) {
                this['@:{now.url~rs}'] = url;
            }
            if (id) {
                this['@:{now.id~rs}'] = id;
            }
            if (fields) {
                this['@:{fields~rs}'] = fields;
                this.set({
                    fields
                });
            }
        }
        this['@:{data.stringify~rs}'] = JSON.stringify([this['@:{now.url~rs}'], this['@:{now.id~rs}'], this['@:{fields~rs}']]);
    },
    render() {
        this.digest();
    },
    '@:{notify.change~rs}'() {
        let url = this['@:{now.url~rs}'], fields = this['@:{fields~rs}'], id = this['@:{now.id~rs}'];
        let nowStringify = JSON.stringify([url, id, fields]);
        if (nowStringify != this['@:{data.stringify~rs}']) {
            this['@:{data.stringify~rs}'] = nowStringify;
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
    '@:{drag.exit~rs}<dragleave>'(e) {
        if (!this.get('disabled') &&
            index_1['@:{is.dragleave~rs}'](this)) {
            this.digest({
                enter: false,
                outside: true,
                index: -1
            });
        }
    },
    '@:{drag.end~rs}<dragend>'() {
        if (!this['@:{dropped~rs}']) { //未触发drop事件，表明未移动到浏览器的阈值，此时需要还原界面
            this.digest({
                enter: false,
                index: -1,
                dragIndex: -1
            });
        }
    },
    '@:{drag.enter~rs}<dragenter>'(e) {
        if (!this.get('disabled') &&
            index_1['@:{is.dragenter~rs}'](this)) {
            // let inNode = inside(e.relatedTarget as HTMLElement, e.eventTarget);
            // if (!inNode) {
            let fields = this['@:{fields~rs}'];
            let index = this.get('index');
            let dragIndex = this['@:{drag.index~rs}'];
            let dragData = State.get('@:{global#bind.field.drag.data~rs}');
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
    '@:{drag.start~rs}<dragstart>'(e) {
        let { params, dataTransfer } = e;
        this.set({
            dragIndex: this['@:{drag.index~rs}'] = params.index
        });
        //dataTransfer.effectAllowed = 'move';
        //firefox required setData
        dataTransfer.setData('text/plain', '@:{fix.firefox.cursor~rs}');
        CurrentDragViewId = this.id;
    },
    '@:{drag.over~rs}<dragover>'(e) {
        if (this.get('disabled') ||
            (CurrentDragViewId &&
                CurrentDragViewId != this.id)) {
            return;
        }
        let me = this;
        let dragIndex = me['@:{drag.index~rs}'];
        this['@:{prevent.default~rs}'](e);
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
        this['@:{prevent.default~rs}'](e);
        if (this.get('disabled'))
            return;
        index_1['@:{clear.drag~rs}'](this);
        this['@:{dropped~rs}'] = 1;
        let changed;
        let inNode = inside(e.target, this.root);
        let max = this.get('max') || -1;
        if (!inNode) { //放下时，如果放置在当前节点的外部，则表明删除这个拖动的元素
            let index = this['@:{drag.index~rs}'];
            if (index != null) { //需要判断是否有拖动中的元素，避免从数据源拖进来再拖出的情况
                let fields = this['@:{fields~rs}'];
                fields.splice(index, 1); //直接删除
                this.set({
                    index: -1,
                    fields
                });
                changed = 1;
            }
        }
        else {
            let dragData = State.get('@:{global#bind.field.drag.data~rs}');
            let index = this.get('index'), onTop = this.get('onTop');
            if (dragData) { //如果能拿到数据，则表明从数据源拖动进来
                State.set({
                    '@:{global#bind.field.drag.data~rs}': null
                });
                let { url, field, id } = dragData;
                let fields = this['@:{fields~rs}'];
                if (this['@:{now.id~rs}'] != id) { //根据id来判断是否换了新的数据源
                    this['@:{now.url~rs}'] = url;
                    fields = [field]; //如果是新的数据源，则旧的字段全部删除
                    this['@:{fields~rs}'] = fields;
                    this['@:{now.id~rs}'] = id;
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
                    let startIndex = this['@:{drag.index~rs}'];
                    let fields = this['@:{fields~rs}'];
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
        this['@:{drag.index~rs}'] = null;
        this.digest({
            enter: false,
            dragIndex: -1
        });
        if (changed) {
            this['@:{notify.change~rs}']();
        }
        CurrentDragViewId = null;
        let waitMarker = magix_1.mark(this, '@:{wait.drag.end.event.check~rs}'); //等待dropend事件检查
        setTimeout(() => {
            if (waitMarker()) {
                delete this['@:{dropped~rs}'];
            }
        }, 30);
    }
});

});