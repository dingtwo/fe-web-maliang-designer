/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-picture/index",["magix5","../mx-dialog/index"],(require,exports,module)=>{
let $quick_cV_static_text;
let $quick_ef_0_static_attr={'class': 'rd-_assets_index_less_-color-999 rd-_assets_index_less_-tc rd-_gallery_mx-picture_index_less_-pic-tip',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let index_1 = require("../mx-dialog/index");
let { View, applyStyle, dispatch } = magix_1;
applyStyle("rd-_gallery_mx-picture_index_less_","\n.rd-_gallery_mx-picture_index_less_-pic {\nborder:solid 1px #e6e6e6;\nmargin:4px 0;\nborder-radius:2px;\n}\n.rd-_gallery_mx-picture_index_less_-pic:hover {\nborder-color:#ccc;\n}\n.rd-_gallery_mx-picture_index_less_-pic-tip {\nline-height:92px;\n}\n.rd-_gallery_mx-picture_index_less_-item-container {\nwidth:100px;\nmargin:4px;\nborder:1px solid #e6e6e6;\nborder-radius:2px;\n}\n.rd-_gallery_mx-picture_index_less_-item-container:hover {\nborder-color:#47B34E;\n}\n.rd-_gallery_mx-picture_index_less_-item {\nbackground-position:50%;\nbackground-repeat:no-repeat;\nbackground-size:contain;\n}\n.rd-_gallery_mx-picture_index_less_-item-title {\nwidth:100px;\nmargin:0 5px;\nheight:25px;\n}\n.rd-_gallery_mx-picture_index_less_-remove {\nright:3px;\ntop:2px;\nopacity:0.2;\n}\n.rd-_gallery_mx-picture_index_less_-remove:hover {\nopacity:0.5;\n}\n.rd-_gallery_mx-picture_index_less_-notallowed {\nbackground:#f5f5f5;\ncursor:not-allowed;\n}\n.rd-_gallery_mx-picture_index_less_-notallowed .rd-_gallery_mx-picture_index_less_-remove {\nopacity:0.1;\n}\n.rd-_gallery_mx-picture_index_less_-notallowed .rd-_gallery_mx-picture_index_less_-remove:hover {\nopacity:0.1;\n}\n.rd-_gallery_mx-picture_index_less_-notallowed:hover {\nborder-color:#e6e6e6;\n}\n.rd-_gallery_mx-picture_index_less_-tabs {\nmargin-bottom:10px;\nborder-bottom:solid 1px #47B34E;\n}\n.rd-_gallery_mx-picture_index_less_-tabs-item {\nheight:25px;\nline-height:25px;\nmargin:0 5px;\npadding:0 4px;\nmin-width:50px;\nmargin-bottom:-1px;\nborder:solid 1px transparent;\nborder-bottom:none;\n}\n.rd-_gallery_mx-picture_index_less_-tabs-active {\nborder-radius:2px 2px 0 0;\nbackground:#ffffff;\nborder-color:#47B34E;\ncolor:#47B34E;\n}\n.rd-_gallery_mx-picture_index_less_-margin-100 {\nmargin:100px;\n}\n");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	disabled,
	src,
	i18n,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_1=[];$__line=2;$__art="{{if src}}";$__ctrl="if(src){";
if(src){
$vnode_3=[$quick_cV_static_text||($quick_cV_static_text=$createVNode(0,''))];$vnode_2=[$createVNode('i',{'class': 'rd-_assets_index_less_-iconfont rd-_assets_index_less_-pa rd-_gallery_mx-picture_index_less_-remove','mx5-click': (($temp_var=($__line=4,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-picture/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'1@:{clear.image~rs}()'),'title': ($__line=4,$__art='{{=i18n(\'@:{lang#remove.image~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#remove.image~rs}\')%>',(i18n('@:{lang#remove.image~rs}'))),},$vnode_3)];$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-hp100 rd-_assets_index_less_-wp100 rd-_gallery_mx-picture_index_less_-item','style': 'background-image:url(\''+($__line=3,$__art='{{=src}}',$__ctrl='<%=src%>',(src))+'\')',},$vnode_2));
}else{
$vnode_2=[$createVNode(0,($__line=8,$__art='{{=i18n(\'@:{lang#click.choose.image~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#click.choose.image~rs}\')%>',(i18n('@:{lang#click.choose.image~rs}'))))];$vnode_1.push($createVNode('div',$quick_ef_0_static_attr,$vnode_2));
};$$_class='rd-_gallery_mx-picture_index_less_-pic rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-padding-4 rd-_assets_index_less_-pr rd-_assets_index_less_-height-100'+($__line=1,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-picture_index_less_-notallowed'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'mx5-click': (($temp_var=($__line=1,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-picture/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{choose.picture~rs}()'),'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-picture/index.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '@:{choose.picture~rs}<click>'() {
        //debugger;
        let me = this;
        me.mxDialog("gallery/mx-picture/list", {
            width: 1042,
            done(pic) {
                //me.digest(pic);
                me['@:{fire.event~rs}'](pic);
            }
        });
    },
    '@:{fire.event~rs}'(pic) {
        dispatch(this.root, 'change', pic);
    },
    '@:{clear.image~rs}<click>'(e) {
        this['@:{stop.propagation~rs}'](e);
        //debugger;
        // this.digest({
        //     src: ''
        // });
        this['@:{fire.event~rs}']({
            src: '',
            width: 0,
            height: 0
        });
    }
}).merge(index_1);

});