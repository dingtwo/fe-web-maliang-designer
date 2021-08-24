/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/72/index",["51"],(require,exports,module)=>{
let $quick_hf_static_text;
let $quick_hg_static_text;
let $quick_ih_1_static_node;
let $quick_ih_0_static_attr={'class': 'rd-g3 rd-g9',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let { ceil, max, min } = Math;
let { View, applyStyle, dispatch } = magix_1;
applyStyle("rd-gD",".rd-lF{border-radius:2px;height:30px;margin:0 2px;min-width:40px}.rd-lG:hover{background:#f0f0f0}.rd-lH,.rd-lH:hover{background:#ccc}");
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
$vnode_1=[];$vnode_2=[$quick_hf_static_text||($quick_hf_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-lF rd-g9 rd-ha rd-hs rd-hw rd-gF ';if(page==1){;$$_class+='rd-hU';}else{;$$_class+='rd-lG';};$$_title='';if(page==1){;$$_title+='已经是首页了';}else{;$$_title+='点击跳转到'+(page-1)+'页';};$vnode_1.push($createVNode('div',{'mx5-click': ((page>1))&&($viewId+'_nr({page:'+(page-1)+'})'),'class': $$_class,'title': $$_title,},$vnode_2));
if(start>1){
$vnode_2=[$quick_hg_static_text||($quick_hg_static_text=$createVNode(0,'1'))];$vnode_1.push($createVNode('div',{'class': 'rd-g9 rd-ha rd-hs rd-hw rd-lF rd-lG','mx5-click': $viewId+'_nr({page:1})','title': '点击跳转到1页',},$vnode_2));
}
if(start>2){

if($quick_ih_1_static_node){
$vnode_1.push($quick_ih_1_static_node);
}else{
$vnode_2=[$createVNode(0,'...')];$vnode_1.push($quick_ih_1_static_node=$createVNode('div',{'_': 'eD','class': 'rd-g9 rd-hU rd-ha rd-hs rd-lF',},$vnode_2));
}

}
for(let i=start;i<=end;i++){
$vnode_2=[$createVNode(0,(i))];;$$_class='rd-lF rd-g9 rd-ha rd-hs rd-hw ';if(i==page){;$$_class+='rd-lH';}else{;$$_class+='rd-lG';};$vnode_1.push($createVNode('div',{'mx5-click': ((i!=page))&&($viewId+'_nr({page:'+(i)+'})'),'title': ((i!=page))&&('点击跳转到'+(i)+'页'),'class': $$_class,},$vnode_2));
}
if(end+2<=pages){

if($quick_ih_1_static_node){
$vnode_1.push($quick_ih_1_static_node);
}else{
$vnode_2=[$createVNode(0,'...')];$vnode_1.push($quick_ih_1_static_node=$createVNode('div',{'_': 'eD','class': 'rd-g9 rd-hU rd-ha rd-hs rd-lF',},$vnode_2));
}

}
if(end<pages){
$vnode_2=[$createVNode(0,(pages))];$vnode_1.push($createVNode('div',{'class': 'rd-g9 rd-ha rd-hs rd-hw rd-lF rd-lG','mx5-click': $viewId+'_nr({page:'+(pages)+'})','title': '点击跳转到'+(pages)+'页',},$vnode_2));
}$vnode_2=[$quick_hf_static_text||($quick_hf_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-lF rd-g9 rd-ha rd-hs rd-hw rd-gG ';if(page==pages){;$$_class+='rd-hU';}else{;$$_class+='rd-lG';};$$_title='';if(page==pages){;$$_title+='已经是尾页了';}else{;$$_title+='点击跳转到'+(1+page)+'页';};$vnode_1.push($createVNode('div',{'mx5-click': ((page<pages))&&($viewId+'_nr({page:'+(page+1)+'})'),'class': $$_class,'title': $$_title,},$vnode_2));$vnode_0=[$createVNode('div',$quick_ih_0_static_attr,$vnode_1)]; 

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
    '_nr<click>'(e) {
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