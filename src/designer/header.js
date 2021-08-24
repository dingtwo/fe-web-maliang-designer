/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/5l",["51","../5m/index","../58/5n/index","../58/59/index","../58/5a/cursor","../58/5a/select","../58/5b/index","../5g/fs","./53","./content","./5j","./5e","./5o","./5p","./5q","./5h"],(require,exports,module)=>{
let $quick_gj_1_static_node;
let $quick_gj_2_static_node;
let $quick_gj_6_static_node;
let $quick_gj_9_static_node;
let $quick_gj_10_static_node;
let $quick_gj_11_static_node;
let $quick_gj_12_static_node;
let $quick_gj_13_static_node;
let $quick_gj_14_static_node;
let $quick_gj_15_static_node;
let $quick_gj_16_static_node;
let $quick_gj_17_static_node;
let $quick_gj_18_static_node;
let $quick_gj_19_static_node;
let $quick_gj_20_static_node;
let $quick_gj_21_static_node;
let $quick_gj_22_static_node;
let $quick_gj_23_static_node;
let $quick_gj_0_static_attr={'class': 'rd-g9 rd-gT rd-h8 rd-ha',};
let $quick_gj_3_static_attr={'class': 'rd-gW rd-ha rd-hw rd-i2 rd-iV rd-iY',};
let $quick_gj_4_static_attr={'class': 'rd-ge rd-i3',};
let $quick_gj_5_static_attr={'class': 'rd-h6 rd-i4',};
let $quick_gj_7_static_attr={'class': 'rd-g0 rd-gV rd-hx rd-i0 rd-ir',};
let $quick_gj_8_static_attr={'class': 'rd-g3 rd-g9 rd-gU rd-ha',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let index_1 = require("../5m/index");
let index_2 = require("../58/5n/index");
let index_3 = require("../58/59/index");
let cursor_1 = require("../58/5a/cursor");
let select_1 = require("../58/5a/select");
let index_4 = require("../58/5b/index");
let fs_1 = require("../5g/fs");
let const_1 = require("./53");
let content_1 = require("./content");
let example_1 = require("./5j");
let keyboard_1 = require("./5e");
let stage_align_1 = require("./5o");
let stage_elements_1 = require("./5p");
let stage_generic_1 = require("./5q");
let tojson_1 = require("./5h");
let { node, State, applyStyle, config, View, inside, mix, isFunction } = magix_1;
let Stage_Line = 1;
let { random, max, round } = Math;
let StagePadding = const_1['gs'];
applyStyle("rd-gh",".rd-iV,.rd-iW{display:grid;grid-template-rows:20px 20px;height:40px;justify-items:center;margin:0 2px;width:50px}.rd-iX{z-index:400}.rd-iY{grid-template-columns:50px 10px;width:60px}.rd-iW{border-radius:2px}.rd-iW:hover{background:#398e3e}.rd-iZ{max-height:90%;max-width:90%}.rd-i0{left:0;width:278px}.rd-i0,.rd-i1{background:#40a146;border-radius:0 0 2px 2px;top:100%}.rd-i1{min-width:160px}.rd-iV:hover{background:#40a146}.rd-iV:hover .rd-i0,.rd-iV:hover .rd-i1{display:block}.rd-i2:hover{z-index:700}.rd-i3{align-self:flex-end;grid-column:1/2;grid-row:1/2}.rd-i4{font-weight:400;grid-column:1/2;grid-row:2/3;line-height:12px}.rd-i5{grid-column:2/3;grid-row:1/3;margin-left:-10px;opacity:.6;transition:all .25s}.rd-iV:hover .rd-i5{transform:rotate(180deg)}.rd-i6{background:linear-gradient(hsla(0,0%,100%,.25),#fff 30%,#fff 70%,hsla(0,0%,100%,.25));height:30px;margin:2px 12px}.rd-i7{white-space:nowrap;word-break:keep-all}.rd-i8{border-radius:2px;height:28px;line-height:1.5;margin:2px;padding:0 8px}.rd-i8:hover{background:#398e3e}.rd-i9{color:hsla(0,0%,100%,.6);margin-left:20px}.rd-j_{margin-right:5px}");
//不同浏览器对全屏的处理方式不一样，这里进行统一尝试
let Fullscreens = ['requestFullscreen',
    'webkitRequestFullScreen',
    'webkitRequestFullscreen',
    'mozRequestFullScreen',
    'msRequestFullscreen'];
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0=[],
{
	mini,
	i18n,
	elements,
	template,
	su,
	cssc,
	cunf,
	dd,
	native,
	help,}=$dataFromView,
$vnode_2,
$vnode_1,
$$_class,
$vnode_3,
$vnode_5,
$vnode_4,
$$_title,
$text;

if(!mini){

if($quick_gj_1_static_node){
$vnode_1=[$quick_gj_1_static_node];
}else{
$vnode_2=[$createVNode(0,'')];$vnode_1=[$quick_gj_1_static_node=$createVNode('i',{'_': 'eD','class': 'rd-gI rd-ge',},$vnode_2)];
}
$vnode_1.push($createVNode(0,(i18n('gw'))));$vnode_0.push($createVNode('div',$quick_gj_0_static_attr,$vnode_1));
}$vnode_1=[];
for(let $q_c_yiraq=elements.length,$q_key_homcgmki=0;$q_key_homcgmki<$q_c_yiraq;$q_key_homcgmki+=1){
let e=elements[$q_key_homcgmki];

if(e.spliter){

if($quick_gj_2_static_node){
$vnode_1.push($quick_gj_2_static_node);
}else{
$vnode_1.push($quick_gj_2_static_node=$createVNode('div',{'_': 'eE','class': 'rd-gT rd-hp rd-i6',}));
}

}else{

if(e.subs){
$vnode_3=[$createVNode(0,(e.icon),1)];$vnode_2=[$createVNode('i',$quick_gj_4_static_attr,$vnode_3)];$vnode_3=[$createVNode(0,(i18n(e.title)))];$vnode_2.push($createVNode('b',$quick_gj_5_static_attr,$vnode_3));
if($quick_gj_6_static_node){
$vnode_2.push($quick_gj_6_static_node);
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2.push($quick_gj_6_static_node=$createVNode('i',{'_': 'eF','class': 'rd-ge rd-h5 rd-i5',},$vnode_3));
}
$vnode_3=[];
for(let $q_a_jywxnrsj=e.subs,$q_c_asgwhetks=$q_a_jywxnrsj.length,$q_key_bkcxgc=0;$q_key_bkcxgc<$q_c_asgwhetks;$q_key_bkcxgc+=1){
let es=$q_a_jywxnrsj[$q_key_bkcxgc];
$vnode_4=[];
if(e.image){
$vnode_4.push($createVNode('img',{'class': 'rd-gB rd-gP rd-iZ','src': (es.image),},1));
}else{
$vnode_5=[$createVNode(0,(es.icon||es.ctrl.icon),1)];$vnode_4.push($createVNode('i',$quick_gj_4_static_attr,$vnode_5));
}$vnode_5=[$createVNode(0,(i18n(es.title||es.ctrl.title)))];$vnode_4.push($createVNode('b',$quick_gj_5_static_attr,$vnode_5));$vnode_3.push($createVNode('div',{'class': 'rd-gT rd-ha rd-hw rd-iW rd-iz','mx5-pointerdown': $viewId+'_hp({src:\''+$keyOf($refData,es,'eD.'+($q_key_homcgmki)+'.eE.'+($q_key_bkcxgc)+'.eF')+'\',hide:true})',},$vnode_4));
}$vnode_2.push($createVNode('div',$quick_gj_7_static_attr,$vnode_3));$vnode_1.push($createVNode('div',$quick_gj_3_static_attr,$vnode_2));
}else{
$vnode_3=[$createVNode(0,(e.icon||e.ctrl.icon),1)];$vnode_2=[$createVNode('i',$quick_gj_4_static_attr,$vnode_3)];$vnode_3=[$createVNode(0,(i18n(e.title||e.ctrl.title)))];$vnode_2.push($createVNode('b',$quick_gj_5_static_attr,$vnode_3));$vnode_1.push($createVNode('div',{'class': 'rd-gW rd-ha rd-hw rd-iV rd-iz','mx5-pointerdown': $viewId+'_hp({src:\''+$keyOf($refData,e,'eD.'+($q_key_homcgmki)+'.eG')+'\'})',},$vnode_2));
}
}
};$$_class='rd-g9 rd-ha rd-gT rd-g3';if(!mini){;$$_class+=' rd-hd';};$vnode_0.push($createVNode('div',{'class': $$_class,},$vnode_1));$vnode_1=[];
if(template){

if($quick_gj_9_static_node){
$vnode_2=[$quick_gj_9_static_node];
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2=[$quick_gj_9_static_node=$createVNode('i',{'_': 'eG','class': 'rd-ge',},$vnode_3)];
}

if($quick_gj_10_static_node){
$vnode_2.push($quick_gj_10_static_node);
}else{
$vnode_3=[$createVNode(0,'示例')];$vnode_2.push($quick_gj_10_static_node=$createVNode('b',{'_': 'eH','class': 'rd-h6 rd-i4',},$vnode_3));
}
$vnode_1.push($createVNode('div',{'class': 'rd-ha rd-hw rd-iV','mx5-click': $viewId+'_hz()',},$vnode_2));
}
if(su||cssc||cunf){
$vnode_2=[];
if($quick_gj_11_static_node){
$vnode_2.push($quick_gj_11_static_node);
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2.push($quick_gj_11_static_node=$createVNode('i',{'_': 'eI','class': 'rd-ge',},$vnode_3));
}

if($quick_gj_12_static_node){
$vnode_2.push($quick_gj_12_static_node);
}else{
$vnode_3=[$createVNode(0,'保存')];$vnode_2.push($quick_gj_12_static_node=$createVNode('b',{'_': 'eJ','class': 'rd-h6 rd-i4',},$vnode_3));
}

if(dd){

if($quick_gj_6_static_node){
$vnode_2.push($quick_gj_6_static_node);
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2.push($quick_gj_6_static_node=$createVNode('i',{'_': 'eF','class': 'rd-ge rd-h5 rd-i5',},$vnode_3));
}
$vnode_3=[];
if(su){

if($quick_gj_13_static_node){
$vnode_4=[$quick_gj_13_static_node];
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4=[$quick_gj_13_static_node=$createVNode('i',{'_': 'eK','class': 'rd-ge rd-h7 rd-j_',},$vnode_5)];
}
$vnode_5=[$createVNode(0,(i18n('g1')))];$vnode_4.push($createVNode('span',{'class': 'rd-g8 rd-i7','title': (i18n('g1')),},$vnode_5));
if($quick_gj_14_static_node){
$vnode_4.push($quick_gj_14_static_node);
}else{
$vnode_5=[$createVNode(0,'Ctrl+S')];$vnode_4.push($quick_gj_14_static_node=$createVNode('code',{'_': 'eL','class': 'rd-h6 rd-i9','title': '快捷键:Ctrl+S',},$vnode_5));
}
$vnode_3.push($createVNode('div',{'class': 'rd-g9 rd-ha rd-i8','mx5-click': $viewId+'_g0()',},$vnode_4));
}
if(cssc){

if($quick_gj_15_static_node){
$vnode_4=[$quick_gj_15_static_node];
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4=[$quick_gj_15_static_node=$createVNode('i',{'_': 'eM','class': 'rd-ge rd-h7 rd-j_',},$vnode_5)];
}
$vnode_5=[$createVNode(0,(i18n('gy')))];$vnode_4.push($createVNode('span',{'class': 'rd-g8 rd-i7','title': (i18n('gy')),},$vnode_5));$text='Ctrl+';if(su){;$text+='Shift+';};$text+='S';$vnode_5=[$createVNode(0,$text)];;$$_title='快捷键:Ctrl+';if(su){;$$_title+='Shift+';};$$_title+='S';$vnode_4.push($createVNode('code',{'class': 'rd-i9','title': $$_title,},$vnode_5));$vnode_3.push($createVNode('div',{'class': 'rd-g9 rd-ha rd-i8','mx5-click': $viewId+'_h_()',},$vnode_4));
}
if(cunf){

if($quick_gj_16_static_node){
$vnode_4=[$quick_gj_16_static_node];
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4=[$quick_gj_16_static_node=$createVNode('i',{'_': 'eN','class': 'rd-ge rd-h7 rd-j_',},$vnode_5)];
}
$vnode_5=[$createVNode(0,(i18n('g2')))];$vnode_4.push($createVNode('span',{'class': 'rd-g8 rd-i7','title': (i18n('g2')),},$vnode_5));$vnode_3.push($createVNode('div',{'class': 'rd-g9 rd-ha rd-i8','mx5-click': $viewId+'_ha()',},$vnode_4));$vnode_4=[];
if($quick_gj_17_static_node){
$vnode_4.push($quick_gj_17_static_node);
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4.push($quick_gj_17_static_node=$createVNode('i',{'_': 'eO','class': 'rd-ge rd-h7 rd-j_',},$vnode_5));
}
$vnode_5=[$createVNode(0,(i18n('g3')))];$vnode_4.push($createVNode('span',{'class': 'rd-g8 rd-i7','title': (i18n('g3')),},$vnode_5));
if(native){
$vnode_4.push($createVNode('input',{'type': 'file','accept': '.rd','class': 'rd-gV rd-hK rd-iw','mx5-change': $viewId+'_hc()',},1));
}$vnode_3.push($createVNode('div',{'class': 'rd-g9 rd-gW rd-ha rd-i8','mx5-click': $viewId+'_hb()',},$vnode_4));
}$vnode_2.push($createVNode('div',{'class': 'rd-g0 rd-gV rd-hx rd-i1 rd-ia rd-is','mx5-click': $viewId+'_g9()',},$vnode_3));
};$$_class='rd-iV rd-hw rd-ha';if(dd){;$$_class+=' rd-i2 rd-iY rd-gW';};$vnode_1.push($createVNode('div',{'mx5-click': $viewId+'_g0()','class': $$_class,},$vnode_2));
}
if(!mini){

if($quick_gj_2_static_node){
$vnode_1.push($quick_gj_2_static_node);
}else{
$vnode_1.push($quick_gj_2_static_node=$createVNode('div',{'_': 'eE','class': 'rd-gT rd-hp rd-i6',}));
}

if($quick_gj_18_static_node){
$vnode_2=[$quick_gj_18_static_node];
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2=[$quick_gj_18_static_node=$createVNode('i',{'_': 'eP','class': 'rd-ge',},$vnode_3)];
}

if($quick_gj_19_static_node){
$vnode_2.push($quick_gj_19_static_node);
}else{
$vnode_3=[$createVNode(0,'大屏预览')];$vnode_2.push($quick_gj_19_static_node=$createVNode('b',{'_': 'eQ','class': 'rd-h6 rd-i4',},$vnode_3));
}
$vnode_1.push($createVNode('div',{'class': 'rd-ha rd-hw rd-iV','mx5-click': $viewId+'_hs()',},$vnode_2));
}
if($quick_gj_20_static_node){
$vnode_2=[$quick_gj_20_static_node];
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2=[$quick_gj_20_static_node=$createVNode('i',{'_': 'eR','class': 'rd-ge',},$vnode_3)];
}

if($quick_gj_21_static_node){
$vnode_2.push($quick_gj_21_static_node);
}else{
$vnode_3=[$createVNode(0,'打印')];$vnode_2.push($quick_gj_21_static_node=$createVNode('b',{'_': 'eS','class': 'rd-h6 rd-i4',},$vnode_3));
}
$vnode_1.push($createVNode('div',{'class': 'rd-ha rd-hw rd-iV','mx5-click': $viewId+'_g6()',},$vnode_2));
if(help){

if($quick_gj_2_static_node){
$vnode_1.push($quick_gj_2_static_node);
}else{
$vnode_1.push($quick_gj_2_static_node=$createVNode('div',{'_': 'eE','class': 'rd-gT rd-hp rd-i6',}));
}

if($quick_gj_22_static_node){
$vnode_2=[$quick_gj_22_static_node];
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2=[$quick_gj_22_static_node=$createVNode('i',{'_': 'eT','class': 'rd-ge',},$vnode_3)];
}

if($quick_gj_23_static_node){
$vnode_2.push($quick_gj_23_static_node);
}else{
$vnode_3=[$createVNode(0,'帮助')];$vnode_2.push($quick_gj_23_static_node=$createVNode('b',{'_': 'eU','class': 'rd-h6 rd-i4',},$vnode_3));
}
$vnode_1.push($createVNode('div',{'class': 'rd-ha rd-hw rd-iV','mx5-click': $viewId+'_hy()',},$vnode_2));
}$vnode_0.push($createVNode('div',$quick_gj_8_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            help: const_1['gp'],
            mini: State.get('gk'),
            template: config('getTemplateUrl')
        });
        let watchKeypress = (e) => {
            let { 'gg': keyCode, 'gi': ctrlKey, 'gj': altKey, 'gh': shiftKey } = e;
            if (keyCode == keyboard_1['gl'] &&
                ctrlKey &&
                !shiftKey &&
                !altKey) {
                e['gk']();
                this['_g6<click>']();
            }
        };
        State.on('gm', watchKeypress);
        this.on('destroy', () => {
            State.off('gm', watchKeypress);
        });
    },
    render() {
        let elements = index_1["gd"]();
        let saveUrl = config('saveContentUrl');
        let canShowStageContent = const_1['go'];
        let canUseNativeFile = const_1['gn'];
        /**
         * 如果要对项目中可使用的设计元素控制，则在这里对elements数组进行控制即可
         * 比如在这里发送请求，根据服务端返回的数据进行控制
         */
        this.digest({
            native: fs_1['_g7'](),
            dd: canUseNativeFile || (saveUrl && canShowStageContent),
            su: saveUrl,
            cssc: canShowStageContent,
            cunf: canUseNativeFile,
            elements
        });
    },
    '_g9<click>'(e) {
        e['_g8'] = 1;
    },
    '_h_<click>'() {
        State.fire('gp', {
            'gd': 1
        });
    },
    '_ha<click>'() {
        content_1['_g0']();
    },
    '_hb<click>'(e) {
        let native = this.get('native');
        if (!native) {
            content_1['_gX'](e.eventTarget);
        }
    },
    '_hc<change>'(e) {
        content_1['_gX'](e.eventTarget);
    },
    /**
     * 当鼠标在设计元素上按下时，可能是拖动或点击动作
     * @param e 鼠标事件
     */
    '_hp<pointerdown>'(e) {
        let { params, eventTarget, altKey, pageX: beginX, pageY: beginY } = e;
        beginY -= window.scrollY;
        beginX -= window.screenX;
        let { classList: rootClassList } = this.root;
        rootClassList.add('rd-iX'); //让header在拖动的虚线框之上
        let { src, hide } = params;
        let { props: definedProps, ctrl } = src; //获取鼠标下的元素控制对象和预设属性
        let moreNode = eventTarget.parentNode; //有可能是更多面板里的元素
        //Follower["@:{update}"](ctrl.icon);
        let moved;
        let stage = node('_rd_stage');
        //以下props仅为了拿到尺寸，鼠标松开添加时，会在stage-elements.ts的add.element里重新生成一份新的props，因此不要在这里对props做修改，否则会不生效
        let props = ctrl['_hd'](0, 0); //获取元素的属性，主要是为了拿到尺寸，生成相应的鼠标跟随矩形
        //如果有预设属性，则需要合并进去
        if (isFunction(definedProps)) {
            definedProps = definedProps();
        }
        mix(props, definedProps);
        if (ctrl['_he']) { //如果元素需要动态确定属性，则调用
            ctrl['_he'](props);
        }
        let { width, height } = props; //拿到元素的尺寸
        width = round(const_1['gY'](width));
        height = round(const_1['gY'](height));
        let scale = State.get('ge');
        width *= scale; //根据当前缩放，生成相应的尺寸
        height *= scale;
        select_1["_hf"](); //准备显示矩形
        cursor_1["_hg"]('move'); //全局显示可移动的鼠标样式
        let allowedTotalCount = ctrl['_hh'], //获取当前元素一共能添加多少个
        allowedStageCount = ctrl['_hi'], //获取当前元素允许向设计区添加多少个
        allCount = 0, stageCount = 0;
        if (allowedTotalCount || allowedStageCount) {
            let { 'gd': allElements } = stage_generic_1["gd"]();
            allCount = stage_generic_1["ge"](allElements, ctrl.type).length; //获取当前一共添加了多少个
            stageCount = stage_generic_1["ge"](State.get('gl'), ctrl.type).length; //获取当前设计区添加了多少个
        }
        let nearestElements = []; //吸附对齐的其它元素
        let page = State.get('gm'), isSpecialHod = ctrl.type == 'hod-header' ||
            ctrl.type == 'hod-footer', supportSnapElement = const_1['gz'] &&
            !isSpecialHod && !page.readonly, //头尾元素手动时，不需要使用吸附对齐到其它元素，只读模式关闭对齐功能
        snapElement = page.snapElement; //
        let pos = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }, snapOffset = const_1['gJ'] * scale;
        let startX = beginX, startY = beginY, testX, testY, sizesMap, aberration;
        //元素吸附
        if (supportSnapElement) {
            aberration = const_1['gZ']();
            //先计算出其它元素的可对齐坐标
            let { 'gd': allElements } = stage_generic_1['gd']();
            let alignElements = stage_align_1['gd'](allElements);
            nearestElements = alignElements['gd'];
            pos = alignElements['ge'];
            let sInfo = stage_generic_1['gf'](0, 0, [{
                    'gf': 0,
                    'gg': 0,
                    'gh': ctrl,
                    'gi': width,
                    'gj': height,
                }]);
            testX = sInfo['_hj'];
            testY = sInfo['_hk'];
            sizesMap = sInfo['_hl'];
        }
        //开始坐标，拖动时以元素中心为移动点
        startX -= width / 2 + pos.x;
        startY -= height / 2 + pos.y;
        let offsetX = 0, offsetY = 0, moveInfo, altPressed = snapElement ? altKey : !altKey, lastHoverNode, lastHod, 
        //0 => top 1 => right 2 => bottom 3 => left 
        maxWidth = stage.scrollWidth - StagePadding[3], maxHeight = stage.scrollHeight - StagePadding[0], scrollOffsetX = 0, scrollOffsetY = 0;
        let moveCallback = (magixEvent) => {
            if (!moveInfo)
                return;
            if (magixEvent) {
                scrollOffsetY = -magixEvent['gd'];
                scrollOffsetX - magixEvent['ge'];
            }
            if (!moved) { //在移动时，如果是首次回调，则更多面板需要隐藏
                if (hide) {
                    moreNode.style.display = 'none';
                }
                moved = 1;
            }
            //Follower["@:{show}"](ex);
            //触发工具栏拖动事件，并把相关的信息传递出去
            //console.log(nearestElements);
            let { pageX, pageY } = moveInfo;
            pageY -= window.scrollY;
            pageX -= window.scrollX;
            offsetX = pageX - beginX;
            offsetY = pageY - beginY;
            let hoverNode = index_3["_hm"](moveInfo.clientX, moveInfo.clientY), insideStageZone = inside(hoverNode, stage);
            let lastElement = nearestElements[nearestElements.length - 1];
            if (hoverNode != lastHoverNode) {
                lastHod = stage_elements_1['gd'](hoverNode, ctrl);
                lastHoverNode = hoverNode;
                //新容器装入，旧容器移除
                if (lastElement && (!lastHod ||
                    lastElement['gk'] != lastHod['_hn'])) {
                    if (lastElement['gk']) {
                        nearestElements.pop();
                    }
                }
            }
            if (supportSnapElement) { //启用元素吸附
                if (insideStageZone) { //在设计区才判断
                    if (!altPressed && //未按alt键
                        lastHod &&
                        lastElement['gk'] != lastHod['_hn']) {
                        let maskNode = node(lastHod['_hn']);
                        if (maskNode) {
                            let db = maskNode.getBoundingClientRect();
                            nearestElements.push({
                                'gl': Stage_Line,
                                'gk': lastHod['_hn'],
                                'gf': db.x - pos.x - scrollOffsetX,
                                'gg': db.y - pos.y - scrollOffsetY,
                                'gi': db.width,
                                'gj': db.height
                            });
                        }
                    }
                    //console.log(nearestElements);
                    let snapInfo = stage_align_1['ge'](nearestElements, startX, offsetX, startY, offsetY, sizesMap, testX, testY, 0, 0, altPressed, snapOffset, aberration, scrollOffsetX, scrollOffsetY, maxWidth, maxHeight);
                    offsetX = snapInfo['gf'];
                    offsetY = snapInfo['gg'];
                }
                else {
                    stage_align_1['gh']();
                }
            }
            State.fire('gq', {
                width,
                height,
                ctrl,
                stage: insideStageZone,
                hod: lastHod,
                allowedTotal: allowedTotalCount,
                total: allCount,
                allowedStage: allowedStageCount,
                count: stageCount,
                node: hoverNode,
                pageX: startX + offsetX + pos.x,
                pageY: startY + offsetY + pos.y
            });
            //触发鼠标移动事件，用于贴边滚动
            State.fire('gr', moveInfo);
            if (magixEvent && !magixEvent['gf']) {
                magixEvent['gf'] = 1;
                magixEvent['gg']();
            }
        };
        let watchKeypress = e => {
            altPressed = snapElement ? e['gj'] : !e['gj'];
            moveCallback();
        };
        //如果按alt键，则需要实时响应界面，即拖动过程中停下来，未松开鼠标，而此时按alt键，则界面需要实时显示或隐藏吸附线，同时元素做偏移
        State.on('gm', watchKeypress);
        //如果设计区滚动，鼠标未动，则辅助线也需要实时更新
        State.on('gs', moveCallback);
        this['_gL'](e, ex => {
            moveInfo = ex;
            moveCallback();
        }, (ex) => {
            State.off('gm', watchKeypress);
            State.off('gs', moveCallback);
            if (hide) {
                moreNode.style.display = '';
            }
            rootClassList.remove('rd-iX');
            //拖动结束，隐藏矩形
            select_1["_gN"]();
            //恢复鼠标形状
            cursor_1["_ho"]();
            State.set({
                'gn': [src] //一次性添加多个，只需要向这个数组添加其它元素即可
            });
            if (!moved) { //如果未移动过，则是点击添加
                //位置随机到左上角
                State.fire('gt', {
                    // width,
                    // height,
                    pageX: stage.scrollLeft + ((random() * 50) | 0),
                    pageY: stage.scrollTop + ((random() * 50) | 0)
                });
                return;
            }
            if (ex) {
                //获取当前鼠标下的节点，并
                let hoverNode = index_3["_hm"](ex.clientX, ex.clientY);
                State.fire('gt', {
                    node: hoverNode,
                    // width,
                    // height,
                    pageX: startX + offsetX + pos.x,
                    pageY: startY + offsetY + pos.y, // + (list.length - i) * 20
                });
                State.fire('gu');
                if (supportSnapElement) {
                    State.fire('gd');
                }
            }
        });
    },
    '_hs<click>'() {
        let cavans = node('_rd_so');
        this['_hq'] = screen.width;
        this['_hr'] = screen.height;
        for (let fs of Fullscreens) {
            if (cavans[fs]) {
                cavans[fs]();
                break;
            }
        }
    },
    '_g0<click>'(e) {
        if (!e['_g8']) {
            State.fire('gp');
        }
    },
    // '@:{display}<click>'() {
    //     let old = this['@:{display.post.fn}'];
    //     if (old) {
    //         Runner["@:{task.remove.background}"](old);
    //     }
    //     this['@:{display.try.send.message}'] = 0;
    //     let w = window.open(DEBUG ? './display-debug.html' : './display.html', '@:{display}');
    //     w.focus();
    //     let post = () => {
    //         console.log(w);
    //         w.postMessage(ToJSON(), '*');
    //         this['@:{display.try.send.message}']++;
    //         if (this['@:{display.try.send.message}'] > 20) {
    //             Runner["@:{task.remove.background}"](post);
    //         }
    //     };
    //     Runner["@:{task.add.background}"](400, this['@:{display.post.fn}'] = post);
    // },
    '_g6<click>'() {
        if (const_1['gG']) {
            //this.alert('打印功能正开发中...');
            let old = this['_ht'];
            if (old) {
                index_4["_hu"](old);
            }
            this['_hv'] = 0;
            let w = window.open(DEBUG ? '/print-debug.html' : './print.html', '_hw');
            w.focus();
            let origin = location.protocol + '//' + location.host;
            let post = () => {
                w.postMessage(tojson_1(), origin);
                this['_hv']++;
                if (this['_hv'] > 20) {
                    index_4["_hu"](post);
                }
            };
            index_4["_hx"](400, this['_ht'] = post);
        }
        else {
            this.mxDialog("50/print", {
                width: max(1200, screen.width - 100)
            });
        }
    },
    '_hy<click>'() {
        State.fire('gm', {
            'ge': 1,
            'gh': 1,
            'gg': keyboard_1['gm']
        });
    },
    '_hz<click>'() {
        example_1["_gM"](this);
    },
    '$win<message>'(e) {
        let origin = location.protocol + '//' + location.host;
        if (e.origin == origin &&
            e.data == '_hA') {
            index_4["_hu"](this['_ht']);
        } /* else if (e.data == '@:{display.message.received}') {
            Runner["@:{task.remove.background}"](this['@:{display.post.fn}']);
        }*/
    },
    '$doc<fullscreenchange,webkitfullscreenchange>'() {
        let doc = document;
        let element = doc.fullscreenElement ||
            doc.webkitCurrentFullScreenElement ||
            doc.mozFullScreenElement || null;
        State.fire('gv', {
            '_hB': 1,
            '_hC': this['_hq'],
            '_hD': this['_hr'],
            '_hE': !!element
        });
    }
}).merge(index_3, index_2);

});