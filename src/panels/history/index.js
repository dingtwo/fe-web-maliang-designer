/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("panels/history/index",["magix5","../../designer/history","../../designer/stage-generic"],(require,exports,module)=>{
let $quick_dA_static_text;
let $quick_fU_0_static_attr={'class': 'rd-_panels_history_index_less_-history-wrap',};
let $quick_fU_1_static_attr={'class': 'rd-_assets_index_less_-fontsize-12 rd-_assets_index_less_-iconfont rd-_panels_history_index_less_-history-icon',};
let $quick_fU_2_static_attr={'class': 'rd-_assets_index_less_-ellipsis',};

let magix_1 = require("magix5");
let history_1 = require("../../designer/history");
let stage_generic_1 = require("../../designer/stage-generic");
let { State, View, applyStyle, mark, node } = magix_1;
applyStyle("rd-_panels_history_index_less_","\n.rd-_panels_history_index_less_-history-wrap {\npadding:5px 4px;\n}\n.rd-_panels_history_index_less_-history {\ncolor:#333;\nmargin:1px 0;\nheight:22px;\nline-height:22px;\nborder-radius:2px;\n}\n.rd-_panels_history_index_less_-history:hover {\nbackground:#f0f0f0;\n}\n.rd-_panels_history_index_less_-history-redo {\nopacity:0.6;\n}\n.rd-_panels_history_index_less_-history-selected,\n.rd-_panels_history_index_less_-history-selected:hover {\nbackground:#b2e1b5;\n}\n.rd-_panels_history_index_less_-history-icon {\nmargin:0 4px 0 2px;\nwidth:12px;\n}\n.rd-_panels_history_index_less_-remove-icon {\nvisibility:hidden;\n}\n.rd-_panels_history_index_less_-history:hover .rd-_panels_history_index_less_-remove-icon {\nvisibility:visible;\n}\n.rd-_panels_history_index_less_-move {\nmargin:0 4px 0 2px;\n}\n");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	list,
	i18n,
	index,
	bottom,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_1=[];($__line=2,$__art='{{set title}}','');$__ctrl='<%let title;%>';let title;;$__line=3;$__art="{{each list as h i by desc}}";$__ctrl="for(let i=list.length;i--;){let h=list[i];";
for(let i=list.length;i--;){
let h=list[i];
($__line=4,$__art='{{title=i18n(h[\'@:{history#description~rs}\'],h[\'@:{history#ext.description}\'])}}','');$__ctrl='<%title=i18n(h[\'@:{history#description~rs}\'],h[\'@:{history#ext.description~rs}\'])%>';title=i18n(h['@:{history#description~rs}'],h['@:{history#ext.description~rs}']);$vnode_3=[$createVNode(0,($__line=6,$__art='{{=h[\'@:{history#icon~rs}\']}}',$__ctrl='<%=h[\'@:{history#icon~rs}\']%>',(h['@:{history#icon~rs}'])),1)];$vnode_2=[$createVNode('i',{'class': 'rd-_assets_index_less_-fontsize-12 rd-_assets_index_less_-iconfont rd-_panels_history_index_less_-history-icon','mx5-click': (($temp_var=($__line=6,$__art='{{i!=index}}',$__ctrl='<%i!=index%>',i!=index),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:panels/history/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{set.history~rs}({at:'+($__line=6,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+'})'),},$vnode_3)];$vnode_3=[$createVNode(0,($__line=8,$__art='{{=title}}',$__ctrl='<%=title%>',(title)))];$vnode_2.push($createVNode('div',{'class': 'rd-_assets_index_less_-ellipsis rd-_assets_index_less_-flex-fill-rest','mx5-click': (($temp_var=($__line=7,$__art='{{i!=index}}',$__ctrl='<%i!=index%>',i!=index),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:panels/history/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{set.history~rs}({at:'+($__line=7,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+'})'),},$vnode_3));$vnode_3=[$quick_dA_static_text||($quick_dA_static_text=$createVNode(0,''))];$vnode_2.push($createVNode('i',{'class': 'rd-_assets_index_less_-fontsize-10 rd-_assets_index_less_-gray rd-_assets_index_less_-iconfont rd-_panels_history_index_less_-move rd-_panels_history_index_less_-remove-icon','title': ($__line=10,$__art='{{=i18n(\'@:{lang#remove.history~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#remove.history~rs}\')%>',(i18n('@:{lang#remove.history~rs}'))),'mx5-click': $viewId+'@:{remove.history~rs}({at:'+($__line=10,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+'})',},$vnode_3));;$$_class='rd-_panels_history_index_less_-history rd-_assets_index_less_-flex rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center'+($__line=5,$__art='{{if i==index}}','');$__ctrl='<%if(i==index){%>';if(i==index){;$$_class+=' rd-_panels_history_index_less_-history-selected'+($__line=5,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=5,$__art='{{if i>index}}','');$__ctrl='<%if(i>index){%>';if(i>index){;$$_class+=' rd-_panels_history_index_less_-history-redo'+($__line=5,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'id': 'h_'+($__line=5,$__art='{{=$viewId}}','')+$viewId+'_'+($__line=5,$__art='{{=i}}',$__ctrl='<%=i%>',(i)),'title': ($__line=5,$__art='{{=i18n(\'@:{lang#history.recover~rs}\',title)}}',$__ctrl='<%=i18n(\'@:{lang#history.recover~rs}\',title)%>',(i18n('@:{lang#history.recover~rs}',title))),'class': $$_class,},$vnode_2));
}($__line=13,$__art='{{title=i18n(bottom[\'@:{history#description~rs}\'],bottom[\'@:{history#ext.description}\'])}}','');$__ctrl='<%title=i18n(bottom[\'@:{history#description~rs}\'],bottom[\'@:{history#ext.description~rs}\'])%>';title=i18n(bottom['@:{history#description~rs}'],bottom['@:{history#ext.description~rs}']);$vnode_3=[$createVNode(0,($__line=15,$__art='{{=bottom[\'@:{history#icon~rs}\']}}',$__ctrl='<%=bottom[\'@:{history#icon~rs}\']%>',(bottom['@:{history#icon~rs}'])),1)];$vnode_2=[$createVNode('i',$quick_fU_1_static_attr,$vnode_3)];$vnode_3=[$createVNode(0,($__line=17,$__art='{{=title}}',$__ctrl='<%=title%>',(title)))];$vnode_2.push($createVNode('div',$quick_fU_2_static_attr,$vnode_3));;$$_class='rd-_panels_history_index_less_-history rd-_assets_index_less_-flex rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center'+($__line=14,$__art='{{if index==-1}}','');$__ctrl='<%if(index==-1){%>';if(index==-1){;$$_class+=' rd-_panels_history_index_less_-history-selected'+($__line=14,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'id': 'h_'+($__line=14,$__art='{{=$viewId}}','')+$viewId+'_-1','mx5-click': (($temp_var=($__line=14,$__art='{{-1!=index}}',$__ctrl='<%-1!=index%>',-1!=index),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:panels/history/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{set.history~rs}({at:-1})'),'title': ($__line=14,$__art='{{=i18n(\'@:{lang#history.recover~rs}\',title)}}',$__ctrl='<%=i18n(\'@:{lang#history.recover~rs}\',title)%>',(i18n('@:{lang#history.recover~rs}',title))),'class': $$_class,},$vnode_2));$vnode_0=[$createVNode('div',$quick_fU_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:panels/history/index.html'; throw msg; }  } ,
    init() {
        let update = this['@:{debounce~rs}'](this.render, 30);
        State.on('@:{event#history.shift.change~rs}', update);
        State.on('@:{event#history.status.change~rs}', update);
        this.on('destroy', () => {
            State.off('@:{event#history.shift.change~rs}', update);
            State.off('@:{event#history.status.change~rs}', update);
        });
    },
    async render() {
        let renderMark = mark(this, '@:{render.mark~rs}');
        let { '@:{list~rs}': list, '@:{index~rs}': index, '@:{bottom~rs}': bottom } = history_1['@:{history#get.history.info~rs}']();
        if (bottom) {
            await this.digest({
                list,
                index,
                bottom
            });
            if (renderMark()) {
                stage_generic_1['@:{generic#scroll.into.view~rs}'](`h_${this.id}_${index}`, this.root);
            }
        }
    },
    '@:{set.history~rs}<click>'(e) {
        if (!e['@:{halt~rs}']) {
            let { at } = e.params;
            history_1['@:{history#set.history~rs}'](at);
        }
    },
    '@:{remove.history~rs}<click>'(e) {
        e['@:{halt~rs}'] = 1;
        let { at } = e.params;
        history_1['@:{history#remove.at~rs}'](at);
    }
});

});