/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-pager/index",["magix5"],(require,exports,module)=>{
let $quick_f5_static_text;
let $quick_f6_static_text;
let $quick_g7_1_static_node;
let $quick_g7_0_static_attr={'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-unselectable',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let { ceil, max, min } = Math;
let { View, applyStyle, dispatch } = magix_1;
applyStyle("rd-_gallery_mx-pager_index_less_","\n.rd-_gallery_mx-pager_index_less_-num-item {\nheight:30px;\nmin-width:40px;\nborder-radius:2px;\nmargin:0 2px;\n}\n.rd-_gallery_mx-pager_index_less_-num-enable:hover {\nbackground:#f0f0f0;\n}\n.rd-_gallery_mx-pager_index_less_-num-active,\n.rd-_gallery_mx-pager_index_less_-num-active:hover {\nbackground:#ccc;\n}\n");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	page,
	start,
	end,
	pages,}=$dataFromView,
$$_class,
$$_title,
$vnode_2,
$vnode_1;
$vnode_1=[];$vnode_2=[$quick_f5_static_text||($quick_f5_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_gallery_mx-pager_index_less_-num-item rd-_assets_index_less_-flex rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-r90 '+($__line=2,$__art='{{if page==1}}','');$__ctrl='<%if(page==1){%>';if(page==1){;$$_class+='rd-_assets_index_less_-notallowed'+($__line=2,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_class+='rd-_gallery_mx-pager_index_less_-num-enable'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_title=($__line=2,$__art='{{if page==1}}','');$__ctrl='<%if(page==1){%>';if(page==1){;$$_title+='已经是首页了'+($__line=2,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_title+='点击跳转到'+($__line=2,$__art='{{=page-1}}',$__ctrl='<%=page-1%>',(page-1))+'页'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'mx5-click': (($temp_var=($__line=2,$__art='{{page>1}}',$__ctrl='<%page>1%>',page>1),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-pager/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{to.page~rs}({page:'+($__line=2,$__art='{{=page-1}}',$__ctrl='<%=page-1%>',(page-1))+'})'),'class': $$_class,'title': $$_title,},$vnode_2));$__line=5;$__art="{{if (start>1)}}";$__ctrl="if(start>1){";
if(start>1){
$vnode_2=[$quick_f6_static_text||($quick_f6_static_text=$createVNode(0,'1'))];$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-flex rd-_assets_index_less_-justify-content-center rd-_gallery_mx-pager_index_less_-num-enable rd-_gallery_mx-pager_index_less_-num-item','mx5-click': $viewId+'@:{to.page~rs}({page:1})','title': '点击跳转到1页',},$vnode_2));
}$__line=8;$__art="{{if (start>2)}}";$__ctrl="if(start>2){";
if(start>2){

if($quick_g7_1_static_node){
$vnode_1.push($quick_g7_1_static_node);
}else{
$vnode_2=[$createVNode(0,'...')];$vnode_1.push($quick_g7_1_static_node=$createVNode('div',{'_': 'dM','class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-justify-content-center rd-_assets_index_less_-notallowed rd-_gallery_mx-pager_index_less_-num-item',},$vnode_2));
}

}$__line=11;$__art="{{for (let i=start;i<=end;i++)}}";$__ctrl="for(let i=start;i<=end;i++){";
for(let i=start;i<=end;i++){
$vnode_2=[$createVNode(0,($__line=12,$__art='{{=i}}',$__ctrl='<%=i%>',(i)))];;$$_class='rd-_gallery_mx-pager_index_less_-num-item rd-_assets_index_less_-flex rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center rd-_assets_index_less_-cursor-pointer '+($__line=12,$__art='{{if i==page}}','');$__ctrl='<%if(i==page){%>';if(i==page){;$$_class+='rd-_gallery_mx-pager_index_less_-num-active'+($__line=12,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_class+='rd-_gallery_mx-pager_index_less_-num-enable'+($__line=12,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'mx5-click': (($temp_var=($__line=12,$__art='{{=i!=page}}',$__ctrl='<%=i!=page%>',i!=page),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-pager/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{to.page~rs}({page:'+($__line=12,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+'})'),'title': (($__line=12,$__art='{{=i!=page}}',$__ctrl='<%=i!=page%>',i!=page))&&('点击跳转到'+($__line=12,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+'页'),'class': $$_class,},$vnode_2));
}$__line=14;$__art="{{if end+2<=pages }}";$__ctrl="if(end+2<=pages){";
if(end+2<=pages){

if($quick_g7_1_static_node){
$vnode_1.push($quick_g7_1_static_node);
}else{
$vnode_2=[$createVNode(0,'...')];$vnode_1.push($quick_g7_1_static_node=$createVNode('div',{'_': 'dM','class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-justify-content-center rd-_assets_index_less_-notallowed rd-_gallery_mx-pager_index_less_-num-item',},$vnode_2));
}

}$__line=17;$__art="{{if end<pages }}";$__ctrl="if(end<pages){";
if(end<pages){
$vnode_2=[$createVNode(0,($__line=18,$__art='{{=pages}}',$__ctrl='<%=pages%>',(pages)))];$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-flex rd-_assets_index_less_-justify-content-center rd-_gallery_mx-pager_index_less_-num-enable rd-_gallery_mx-pager_index_less_-num-item','mx5-click': $viewId+'@:{to.page~rs}({page:'+($__line=18,$__art='{{=pages}}',$__ctrl='<%=pages%>',(pages))+'})','title': '点击跳转到'+($__line=18,$__art='{{=pages}}',$__ctrl='<%=pages%>',(pages))+'页',},$vnode_2));
}$vnode_2=[$quick_f5_static_text||($quick_f5_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_gallery_mx-pager_index_less_-num-item rd-_assets_index_less_-flex rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-r270 '+($__line=20,$__art='{{if page==pages}}','');$__ctrl='<%if(page==pages){%>';if(page==pages){;$$_class+='rd-_assets_index_less_-notallowed'+($__line=20,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_class+='rd-_gallery_mx-pager_index_less_-num-enable'+($__line=20,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_title=($__line=20,$__art='{{if page==pages}}','');$__ctrl='<%if(page==pages){%>';if(page==pages){;$$_title+='已经是尾页了'+($__line=20,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_title+='点击跳转到'+($__line=20,$__art='{{=1+page}}',$__ctrl='<%=1+page%>',(1+page))+'页'+($__line=20,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'mx5-click': (($temp_var=($__line=20,$__art='{{page<pages}}',$__ctrl='<%page<pages%>',page<pages),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-pager/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{to.page~rs}({page:'+($__line=20,$__art='{{=page+1}}',$__ctrl='<%=page+1%>',(page+1))+'})'),'class': $$_class,'title': $$_title,},$vnode_2));$vnode_0=[$createVNode('div',$quick_g7_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-pager/index.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    render() {
        let total = this.get('total') || 0; //总共有多少页
        let page = (this.get('page') | 0) || 1; //当前显示第几页
        let size = this.get('size') || 20; //每页显示多少个
        let step = this.get('step') || 9; //页码过多时，中间显示几个
        let pages = ceil(total / size);
        if (page > pages) { //对页码进行纠正
            page = pages;
        }
        let middle = step / 2 | 0; //步长中间数值
        let start = max(1, page - middle);
        let end = min(pages, start + step - 1);
        start = max(1, end - step + 1);
        let offset;
        if (start <= 2) { //=2 +1  =1  +2
            offset = 3 - start;
            if (end + offset < pages) {
                end += offset;
            }
        }
        if (end + 2 > pages) {
            offset = 2 - (pages - end);
            if ((start - offset) > 1) {
                start -= offset;
            }
        }
        if (start == 3) {
            start -= 1;
        }
        if (end + 2 == pages) {
            end += 1;
        }
        this.digest({
            start,
            end,
            page,
            pages
        });
    },
    '@:{to.page~rs}<click>'(e) {
        let { page } = e.params;
        this.set({
            page
        });
        dispatch(this.root, 'change', {
            page
        });
        this.render();
    }
});

});