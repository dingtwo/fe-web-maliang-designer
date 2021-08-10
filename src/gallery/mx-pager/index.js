/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/6f/index",["4e"],(require,exports,module)=>{
let $quick_eG_static_text;
let $quick_eH_static_text;
let $quick_fI_1_static_node;
let $quick_fI_0_static_attr={'class': 'rd-et rd-ez',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let { ceil, max, min } = Math;
let { View, applyStyle, dispatch } = magix_1;
applyStyle("rd-d4",".rd-i6{border-radius:2px;height:30px;margin:0 2px;min-width:40px}.rd-i7:hover{background:#f0f0f0}.rd-i8,.rd-i8:hover{background:#ccc}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	page,
	start,
	end,
	pages,}=$dataFromView,
$$_class,
$$_title,
$vnode_2,
$vnode_1;
$vnode_1=[];$vnode_2=[$quick_eG_static_text||($quick_eG_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-i6 rd-ez rd-eB rd-eT rd-eX rd-d6 ';if(page==1){;$$_class+='rd-fk';}else{;$$_class+='rd-i7';};$$_title='';if(page==1){;$$_title+='已经是首页了';}else{;$$_title+='点击跳转到'+(page-1)+'页';};$vnode_1.push($createVNode('div',{'mx5-click': ((page>1))&&($viewId+'_kP({page:'+(page-1)+'})'),'class': $$_class,'title': $$_title,},$vnode_2));
if(start>1){
$vnode_2=[$quick_eH_static_text||($quick_eH_static_text=$createVNode(0,'1'))];$vnode_1.push($createVNode('div',{'class': 'rd-eB rd-eT rd-eX rd-ez rd-i6 rd-i7','mx5-click': $viewId+'_kP({page:1})','title': '点击跳转到1页',},$vnode_2));
}
if(start>2){

if($quick_fI_1_static_node){
$vnode_1.push($quick_fI_1_static_node);
}else{
$vnode_2=[$createVNode(0,'...')];$vnode_1.push($quick_fI_1_static_node=$createVNode('div',{'_': 'cH','class': 'rd-eB rd-eT rd-ez rd-fk rd-i6',},$vnode_2));
}

}
for(let i=start;i<=end;i++){
$vnode_2=[$createVNode(0,(i))];;$$_class='rd-i6 rd-ez rd-eB rd-eT rd-eX ';if(i==page){;$$_class+='rd-i8';}else{;$$_class+='rd-i7';};$vnode_1.push($createVNode('div',{'mx5-click': ((i!=page))&&($viewId+'_kP({page:'+(i)+'})'),'title': ((i!=page))&&('点击跳转到'+(i)+'页'),'class': $$_class,},$vnode_2));
}
if(end+2<=pages){

if($quick_fI_1_static_node){
$vnode_1.push($quick_fI_1_static_node);
}else{
$vnode_2=[$createVNode(0,'...')];$vnode_1.push($quick_fI_1_static_node=$createVNode('div',{'_': 'cH','class': 'rd-eB rd-eT rd-ez rd-fk rd-i6',},$vnode_2));
}

}
if(end<pages){
$vnode_2=[$createVNode(0,(pages))];$vnode_1.push($createVNode('div',{'class': 'rd-eB rd-eT rd-eX rd-ez rd-i6 rd-i7','mx5-click': $viewId+'_kP({page:'+(pages)+'})','title': '点击跳转到'+(pages)+'页',},$vnode_2));
}$vnode_2=[$quick_eG_static_text||($quick_eG_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-i6 rd-ez rd-eB rd-eT rd-eX rd-d7 ';if(page==pages){;$$_class+='rd-fk';}else{;$$_class+='rd-i7';};$$_title='';if(page==pages){;$$_title+='已经是尾页了';}else{;$$_title+='点击跳转到'+(1+page)+'页';};$vnode_1.push($createVNode('div',{'mx5-click': ((page<pages))&&($viewId+'_kP({page:'+(page+1)+'})'),'class': $$_class,'title': $$_title,},$vnode_2));$vnode_0=[$createVNode('div',$quick_fI_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
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
    '_kP<click>'(e) {
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