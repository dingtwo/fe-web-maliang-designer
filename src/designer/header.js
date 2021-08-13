/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/60",["5c","../61/index","../5j/62/index","../5j/5k/index","../5j/5l/cursor","../5j/5l/select","../5j/5m/index","../5r/fs","./5e","./content","./5u","./5p","./63","./64","./65","./5s"],(require,exports,module)=>{
let $quick_l8_1_static_node;
let $quick_l8_2_static_node;
let $quick_l8_6_static_node;
let $quick_l8_9_static_node;
let $quick_l8_10_static_node;
let $quick_l8_11_static_node;
let $quick_l8_12_static_node;
let $quick_l8_13_static_node;
let $quick_l8_14_static_node;
let $quick_l8_15_static_node;
let $quick_l8_16_static_node;
let $quick_l8_17_static_node;
let $quick_l8_18_static_node;
let $quick_l8_19_static_node;
let $quick_l8_20_static_node;
let $quick_l8_21_static_node;
let $quick_l8_22_static_node;
let $quick_l8_23_static_node;
let $quick_l8_0_static_attr={'class': 'rd-mH rd-mX rd-mZ rd-nW',};
let $quick_l8_3_static_attr={'class': 'rd-mK rd-mZ rd-nk rd-oJ rd-oM rd-oQ',};
let $quick_l8_4_static_attr={'class': 'rd-l3 rd-oR',};
let $quick_l8_5_static_attr={'class': 'rd-nU rd-oS',};
let $quick_l8_7_static_attr={'class': 'rd-mJ rd-mO rd-nl rd-oO rd-of',};
let $quick_l8_8_static_attr={'class': 'rd-mI rd-mR rd-mX rd-mZ',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let index_1 = require("../61/index");
let index_2 = require("../5j/62/index");
let index_3 = require("../5j/5k/index");
let cursor_1 = require("../5j/5l/cursor");
let select_1 = require("../5j/5l/select");
let index_4 = require("../5j/5m/index");
let fs_1 = require("../5r/fs");
let const_1 = require("./5e");
let content_1 = require("./content");
let example_1 = require("./5u");
let keyboard_1 = require("./5p");
let stage_align_1 = require("./63");
let stage_elements_1 = require("./64");
let stage_generic_1 = require("./65");
let tojson_1 = require("./5s");
let { node, State, applyStyle, config, View, inside, mix, isFunction } = magix_1;
let Stage_Line = 1;
let { random, max, round } = Math;
let StagePadding = const_1['mg'];
applyStyle("rd-l6",".rd-oJ,.rd-oK{display:grid;grid-template-rows:20px 20px;height:40px;justify-items:center;margin:0 2px;width:50px}.rd-oL{z-index:400}.rd-oM{grid-template-columns:50px 10px;width:60px}.rd-oK{border-radius:2px}.rd-oK:hover{background:#398e3e}.rd-oN{max-height:90%;max-width:90%}.rd-oO{left:0;width:278px}.rd-oO,.rd-oP{background:#40a146;border-radius:0 0 2px 2px;top:100%}.rd-oP{min-width:160px}.rd-oJ:hover{background:#40a146}.rd-oJ:hover .rd-oO,.rd-oJ:hover .rd-oP{display:block}.rd-oQ:hover{z-index:700}.rd-oR{align-self:flex-end;grid-column:1/2;grid-row:1/2}.rd-oS{font-weight:400;grid-column:1/2;grid-row:2/3;line-height:12px}.rd-oT{grid-column:2/3;grid-row:1/3;margin-left:-10px;opacity:.6;transition:all .25s}.rd-oJ:hover .rd-oT{transform:rotate(180deg)}.rd-oU{background:linear-gradient(hsla(0,0%,100%,.25),#fff 30%,#fff 70%,hsla(0,0%,100%,.25));height:30px;margin:2px 12px}.rd-oV{white-space:nowrap;word-break:keep-all}.rd-oW{border-radius:2px;height:28px;line-height:1.5;margin:2px;padding:0 8px}.rd-oW:hover{background:#398e3e}.rd-oX{color:hsla(0,0%,100%,.6);margin-left:20px}.rd-oY{margin-right:5px}");
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

if($quick_l8_1_static_node){
$vnode_1=[$quick_l8_1_static_node];
}else{
$vnode_2=[$createVNode(0,'')];$vnode_1=[$quick_l8_1_static_node=$createVNode('i',{'_': 'i!','class': 'rd-l3 rd-mw',},$vnode_2)];
}
$vnode_1.push($createVNode(0,(i18n('mk'))));$vnode_0.push($createVNode('div',$quick_l8_0_static_attr,$vnode_1));
}$vnode_1=[];
for(let $q_c_bsobim=elements.length,$q_key_xkmiwelf=0;$q_key_xkmiwelf<$q_c_bsobim;$q_key_xkmiwelf+=1){
let e=elements[$q_key_xkmiwelf];

if(e.spliter){

if($quick_l8_2_static_node){
$vnode_1.push($quick_l8_2_static_node);
}else{
$vnode_1.push($quick_l8_2_static_node=$createVNode('div',{'_': 'i@','class': 'rd-mH rd-nd rd-oU',}));
}

}else{

if(e.subs){
$vnode_3=[$createVNode(0,(e.icon),1)];$vnode_2=[$createVNode('i',$quick_l8_4_static_attr,$vnode_3)];$vnode_3=[$createVNode(0,(i18n(e.title)))];$vnode_2.push($createVNode('b',$quick_l8_5_static_attr,$vnode_3));
if($quick_l8_6_static_node){
$vnode_2.push($quick_l8_6_static_node);
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2.push($quick_l8_6_static_node=$createVNode('i',{'_': 'i$','class': 'rd-l3 rd-nT rd-oT',},$vnode_3));
}
$vnode_3=[];
for(let $q_a_omrtnztzl=e.subs,$q_c_vvquqfmej=$q_a_omrtnztzl.length,$q_key_wwsliueibn=0;$q_key_wwsliueibn<$q_c_vvquqfmej;$q_key_wwsliueibn+=1){
let es=$q_a_omrtnztzl[$q_key_wwsliueibn];
$vnode_4=[];
if(e.image){
$vnode_4.push($createVNode('img',{'class': 'rd-mD rd-mp rd-oN','src': (es.image),},1));
}else{
$vnode_5=[$createVNode(0,(es.icon||es.ctrl.icon),1)];$vnode_4.push($createVNode('i',$quick_l8_4_static_attr,$vnode_5));
}$vnode_5=[$createVNode(0,(i18n(es.title||es.ctrl.title)))];$vnode_4.push($createVNode('b',$quick_l8_5_static_attr,$vnode_5));$vnode_3.push($createVNode('div',{'class': 'rd-mH rd-mZ rd-nk rd-oK rd-on','mx5-pointerdown': $viewId+'_nd({src:\''+$keyOf($refData,es,'i!.'+($q_key_xkmiwelf)+'.i@.'+($q_key_wwsliueibn)+'.i$')+'\',hide:true})',},$vnode_4));
}$vnode_2.push($createVNode('div',$quick_l8_7_static_attr,$vnode_3));$vnode_1.push($createVNode('div',$quick_l8_3_static_attr,$vnode_2));
}else{
$vnode_3=[$createVNode(0,(e.icon||e.ctrl.icon),1)];$vnode_2=[$createVNode('i',$quick_l8_4_static_attr,$vnode_3)];$vnode_3=[$createVNode(0,(i18n(e.title||e.ctrl.title)))];$vnode_2.push($createVNode('b',$quick_l8_5_static_attr,$vnode_3));$vnode_1.push($createVNode('div',{'class': 'rd-mK rd-mZ rd-nk rd-oJ rd-on','mx5-pointerdown': $viewId+'_nd({src:\''+$keyOf($refData,e,'i!.'+($q_key_xkmiwelf)+'.i^')+'\'})',},$vnode_2));
}
}
};$$_class='rd-mX rd-mZ rd-mH rd-mR';if(!mini){;$$_class+=' rd-m2';};$vnode_0.push($createVNode('div',{'class': $$_class,},$vnode_1));$vnode_1=[];
if(template){

if($quick_l8_9_static_node){
$vnode_2=[$quick_l8_9_static_node];
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2=[$quick_l8_9_static_node=$createVNode('i',{'_': 'i^','class': 'rd-l3',},$vnode_3)];
}

if($quick_l8_10_static_node){
$vnode_2.push($quick_l8_10_static_node);
}else{
$vnode_3=[$createVNode(0,'示例')];$vnode_2.push($quick_l8_10_static_node=$createVNode('b',{'_': 'i*','class': 'rd-nU rd-oS',},$vnode_3));
}
$vnode_1.push($createVNode('div',{'class': 'rd-mZ rd-nk rd-oJ','mx5-click': $viewId+'_nn()',},$vnode_2));
}
if(su||cssc||cunf){
$vnode_2=[];
if($quick_l8_11_static_node){
$vnode_2.push($quick_l8_11_static_node);
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2.push($quick_l8_11_static_node=$createVNode('i',{'_': 'i{','class': 'rd-l3',},$vnode_3));
}

if($quick_l8_12_static_node){
$vnode_2.push($quick_l8_12_static_node);
}else{
$vnode_3=[$createVNode(0,'保存')];$vnode_2.push($quick_l8_12_static_node=$createVNode('b',{'_': 'i}','class': 'rd-nU rd-oS',},$vnode_3));
}

if(dd){

if($quick_l8_6_static_node){
$vnode_2.push($quick_l8_6_static_node);
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2.push($quick_l8_6_static_node=$createVNode('i',{'_': 'i$','class': 'rd-l3 rd-nT rd-oT',},$vnode_3));
}
$vnode_3=[];
if(su){

if($quick_l8_13_static_node){
$vnode_4=[$quick_l8_13_static_node];
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4=[$quick_l8_13_static_node=$createVNode('i',{'_': 'i[','class': 'rd-l3 rd-nV rd-oY',},$vnode_5)];
}
$vnode_5=[$createVNode(0,(i18n('mP')))];$vnode_4.push($createVNode('span',{'class': 'rd-mW rd-oV','title': (i18n('mP')),},$vnode_5));
if($quick_l8_14_static_node){
$vnode_4.push($quick_l8_14_static_node);
}else{
$vnode_5=[$createVNode(0,'Ctrl+S')];$vnode_4.push($quick_l8_14_static_node=$createVNode('code',{'_': 'i]','class': 'rd-nU rd-oX','title': '快捷键:Ctrl+S',},$vnode_5));
}
$vnode_3.push($createVNode('div',{'class': 'rd-mX rd-mZ rd-oW','mx5-click': $viewId+'_mO()',},$vnode_4));
}
if(cssc){

if($quick_l8_15_static_node){
$vnode_4=[$quick_l8_15_static_node];
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4=[$quick_l8_15_static_node=$createVNode('i',{'_': 'i|','class': 'rd-l3 rd-nV rd-oY',},$vnode_5)];
}
$vnode_5=[$createVNode(0,(i18n('mm')))];$vnode_4.push($createVNode('span',{'class': 'rd-mW rd-oV','title': (i18n('mm')),},$vnode_5));$text='Ctrl+';if(su){;$text+='Shift+';};$text+='S';$vnode_5=[$createVNode(0,$text)];;$$_title='快捷键:Ctrl+';if(su){;$$_title+='Shift+';};$$_title+='S';$vnode_4.push($createVNode('code',{'class': 'rd-oX','title': $$_title,},$vnode_5));$vnode_3.push($createVNode('div',{'class': 'rd-mX rd-mZ rd-oW','mx5-click': $viewId+'_mY()',},$vnode_4));
}
if(cunf){

if($quick_l8_16_static_node){
$vnode_4=[$quick_l8_16_static_node];
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4=[$quick_l8_16_static_node=$createVNode('i',{'_': 'i,','class': 'rd-l3 rd-nV rd-oY',},$vnode_5)];
}
$vnode_5=[$createVNode(0,(i18n('mQ')))];$vnode_4.push($createVNode('span',{'class': 'rd-mW rd-oV','title': (i18n('mQ')),},$vnode_5));$vnode_3.push($createVNode('div',{'class': 'rd-mX rd-mZ rd-oW','mx5-click': $viewId+'_mZ()',},$vnode_4));$vnode_4=[];
if($quick_l8_17_static_node){
$vnode_4.push($quick_l8_17_static_node);
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4.push($quick_l8_17_static_node=$createVNode('i',{'_': 'i.','class': 'rd-l3 rd-nV rd-oY',},$vnode_5));
}
$vnode_5=[$createVNode(0,(i18n('mR')))];$vnode_4.push($createVNode('span',{'class': 'rd-mW rd-oV','title': (i18n('mR')),},$vnode_5));
if(native){
$vnode_4.push($createVNode('input',{'type': 'file','accept': '.rd','class': 'rd-mJ rd-ny rd-ok','mx5-change': $viewId+'_m1()',},1));
}$vnode_3.push($createVNode('div',{'class': 'rd-mK rd-mX rd-mZ rd-oW','mx5-click': $viewId+'_m0()',},$vnode_4));
}$vnode_2.push($createVNode('div',{'class': 'rd-mJ rd-mO rd-nZ rd-nl rd-oP rd-og','mx5-click': $viewId+'_mX()',},$vnode_3));
};$$_class='rd-oJ rd-nk rd-mZ';if(dd){;$$_class+=' rd-oQ rd-oM rd-mK';};$vnode_1.push($createVNode('div',{'mx5-click': $viewId+'_mO()','class': $$_class,},$vnode_2));
}
if(!mini){

if($quick_l8_2_static_node){
$vnode_1.push($quick_l8_2_static_node);
}else{
$vnode_1.push($quick_l8_2_static_node=$createVNode('div',{'_': 'i@','class': 'rd-mH rd-nd rd-oU',}));
}

if($quick_l8_18_static_node){
$vnode_2=[$quick_l8_18_static_node];
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2=[$quick_l8_18_static_node=$createVNode('i',{'_': 'i`','class': 'rd-l3',},$vnode_3)];
}

if($quick_l8_19_static_node){
$vnode_2.push($quick_l8_19_static_node);
}else{
$vnode_3=[$createVNode(0,'大屏预览')];$vnode_2.push($quick_l8_19_static_node=$createVNode('b',{'_': 'i~','class': 'rd-nU rd-oS',},$vnode_3));
}
$vnode_1.push($createVNode('div',{'class': 'rd-mZ rd-nk rd-oJ','mx5-click': $viewId+'_ng()',},$vnode_2));
}
if($quick_l8_20_static_node){
$vnode_2=[$quick_l8_20_static_node];
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2=[$quick_l8_20_static_node=$createVNode('i',{'_': 'i/','class': 'rd-l3',},$vnode_3)];
}

if($quick_l8_21_static_node){
$vnode_2.push($quick_l8_21_static_node);
}else{
$vnode_3=[$createVNode(0,'打印')];$vnode_2.push($quick_l8_21_static_node=$createVNode('b',{'_': 'i;','class': 'rd-nU rd-oS',},$vnode_3));
}
$vnode_1.push($createVNode('div',{'class': 'rd-mZ rd-nk rd-oJ','mx5-click': $viewId+'_mU()',},$vnode_2));
if(help){

if($quick_l8_2_static_node){
$vnode_1.push($quick_l8_2_static_node);
}else{
$vnode_1.push($quick_l8_2_static_node=$createVNode('div',{'_': 'i@','class': 'rd-mH rd-nd rd-oU',}));
}

if($quick_l8_22_static_node){
$vnode_2=[$quick_l8_22_static_node];
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2=[$quick_l8_22_static_node=$createVNode('i',{'_': 'i:','class': 'rd-l3',},$vnode_3)];
}

if($quick_l8_23_static_node){
$vnode_2.push($quick_l8_23_static_node);
}else{
$vnode_3=[$createVNode(0,'帮助')];$vnode_2.push($quick_l8_23_static_node=$createVNode('b',{'_': 'i-','class': 'rd-nU rd-oS',},$vnode_3));
}
$vnode_1.push($createVNode('div',{'class': 'rd-mZ rd-nk rd-oJ','mx5-click': $viewId+'_nm()',},$vnode_2));
}$vnode_0.push($createVNode('div',$quick_l8_8_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            help: const_1['md'],
            mini: State.get('l9'),
            template: config('getTemplateUrl')
        });
        let watchKeypress = (e) => {
            let { 'l5': keyCode, 'l7': ctrlKey, 'l8': altKey, 'l6': shiftKey } = e;
            if (keyCode == keyboard_1['m_'] &&
                ctrlKey &&
                !shiftKey &&
                !altKey) {
                e['l9']();
                this['_mU<click>']();
            }
        };
        State.on('ma', watchKeypress);
        this.on('destroy', () => {
            State.off('ma', watchKeypress);
        });
    },
    render() {
        let elements = index_1["l2"]();
        let saveUrl = config('saveContentUrl');
        let canShowStageContent = const_1['mc'];
        let canUseNativeFile = const_1['mb'];
        /**
         * 如果要对项目中可使用的设计元素控制，则在这里对elements数组进行控制即可
         * 比如在这里发送请求，根据服务端返回的数据进行控制
         */
        this.digest({
            native: fs_1['_mV'](),
            dd: canUseNativeFile || (saveUrl && canShowStageContent),
            su: saveUrl,
            cssc: canShowStageContent,
            cunf: canUseNativeFile,
            elements
        });
    },
    '_mX<click>'(e) {
        e['_mW'] = 1;
    },
    '_mY<click>'() {
        State.fire('md', {
            'l2': 1
        });
    },
    '_mZ<click>'() {
        content_1['_mO']();
    },
    '_m0<click>'(e) {
        let native = this.get('native');
        if (!native) {
            content_1['_mL'](e.eventTarget);
        }
    },
    '_m1<change>'(e) {
        content_1['_mL'](e.eventTarget);
    },
    /**
     * 当鼠标在设计元素上按下时，可能是拖动或点击动作
     * @param e 鼠标事件
     */
    '_nd<pointerdown>'(e) {
        let { params, eventTarget, altKey, pageX: beginX, pageY: beginY } = e;
        beginY -= window.scrollY;
        beginX -= window.screenX;
        let { classList: rootClassList } = this.root;
        rootClassList.add('rd-oL'); //让header在拖动的虚线框之上
        let { src, hide } = params;
        let { props: definedProps, ctrl } = src; //获取鼠标下的元素控制对象和预设属性
        let moreNode = eventTarget.parentNode; //有可能是更多面板里的元素
        //Follower["@:{update}"](ctrl.icon);
        let moved;
        let stage = node('_rd_stage');
        //以下props仅为了拿到尺寸，鼠标松开添加时，会在stage-elements.ts的add.element里重新生成一份新的props，因此不要在这里对props做修改，否则会不生效
        let props = ctrl['_m2'](0, 0); //获取元素的属性，主要是为了拿到尺寸，生成相应的鼠标跟随矩形
        //如果有预设属性，则需要合并进去
        if (isFunction(definedProps)) {
            definedProps = definedProps();
        }
        mix(props, definedProps);
        if (ctrl['_m3']) { //如果元素需要动态确定属性，则调用
            ctrl['_m3'](props);
        }
        let { width, height } = props; //拿到元素的尺寸
        width = round(const_1['mM'](width));
        height = round(const_1['mM'](height));
        let scale = State.get('l3');
        width *= scale; //根据当前缩放，生成相应的尺寸
        height *= scale;
        select_1["_m4"](); //准备显示矩形
        cursor_1["_m5"]('move'); //全局显示可移动的鼠标样式
        let allowedTotalCount = ctrl['_m6'], //获取当前元素一共能添加多少个
        allowedStageCount = ctrl['_m7'], //获取当前元素允许向设计区添加多少个
        allCount = 0, stageCount = 0;
        if (allowedTotalCount || allowedStageCount) {
            let { 'l2': allElements } = stage_generic_1["l2"]();
            allCount = stage_generic_1["l3"](allElements, ctrl.type).length; //获取当前一共添加了多少个
            stageCount = stage_generic_1["l3"](State.get('m_'), ctrl.type).length; //获取当前设计区添加了多少个
        }
        let nearestElements = []; //吸附对齐的其它元素
        let page = State.get('ma'), isSpecialHod = ctrl.type == 'hod-header' ||
            ctrl.type == 'hod-footer', supportSnapElement = const_1['mn'] &&
            !isSpecialHod && !page.readonly, //头尾元素手动时，不需要使用吸附对齐到其它元素，只读模式关闭对齐功能
        snapElement = page.snapElement; //
        let pos = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }, snapOffset = const_1['mx'] * scale;
        let startX = beginX, startY = beginY, testX, testY, sizesMap, aberration;
        //元素吸附
        if (supportSnapElement) {
            aberration = const_1['mN']();
            //先计算出其它元素的可对齐坐标
            let { 'l2': allElements } = stage_generic_1['l2']();
            let alignElements = stage_align_1['l2'](allElements);
            nearestElements = alignElements['l2'];
            pos = alignElements['l3'];
            let sInfo = stage_generic_1['l4'](0, 0, [{
                    'l4': 0,
                    'l5': 0,
                    'l6': ctrl,
                    'l7': width,
                    'l8': height,
                }]);
            testX = sInfo['_m8'];
            testY = sInfo['_m9'];
            sizesMap = sInfo['_n_'];
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
                scrollOffsetY = -magixEvent['l2'];
                scrollOffsetX - magixEvent['l3'];
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
            let hoverNode = index_3["_na"](moveInfo.clientX, moveInfo.clientY), insideStageZone = inside(hoverNode, stage);
            let lastElement = nearestElements[nearestElements.length - 1];
            if (hoverNode != lastHoverNode) {
                lastHod = stage_elements_1['l2'](hoverNode, ctrl);
                lastHoverNode = hoverNode;
                //新容器装入，旧容器移除
                if (lastElement && (!lastHod ||
                    lastElement['l9'] != lastHod['_nb'])) {
                    if (lastElement['l9']) {
                        nearestElements.pop();
                    }
                }
            }
            if (supportSnapElement) { //启用元素吸附
                if (insideStageZone) { //在设计区才判断
                    if (!altPressed && //未按alt键
                        lastHod &&
                        lastElement['l9'] != lastHod['_nb']) {
                        let maskNode = node(lastHod['_nb']);
                        if (maskNode) {
                            let db = maskNode.getBoundingClientRect();
                            nearestElements.push({
                                'm_': Stage_Line,
                                'l9': lastHod['_nb'],
                                'l4': db.x - pos.x - scrollOffsetX,
                                'l5': db.y - pos.y - scrollOffsetY,
                                'l7': db.width,
                                'l8': db.height
                            });
                        }
                    }
                    //console.log(nearestElements);
                    let snapInfo = stage_align_1['l3'](nearestElements, startX, offsetX, startY, offsetY, sizesMap, testX, testY, 0, 0, altPressed, snapOffset, aberration, scrollOffsetX, scrollOffsetY, maxWidth, maxHeight);
                    offsetX = snapInfo['l4'];
                    offsetY = snapInfo['l5'];
                }
                else {
                    stage_align_1['l6']();
                }
            }
            State.fire('me', {
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
            State.fire('mf', moveInfo);
            if (magixEvent && !magixEvent['l4']) {
                magixEvent['l4'] = 1;
                magixEvent['l5']();
            }
        };
        let watchKeypress = e => {
            altPressed = snapElement ? e['l8'] : !e['l8'];
            moveCallback();
        };
        //如果按alt键，则需要实时响应界面，即拖动过程中停下来，未松开鼠标，而此时按alt键，则界面需要实时显示或隐藏吸附线，同时元素做偏移
        State.on('ma', watchKeypress);
        //如果设计区滚动，鼠标未动，则辅助线也需要实时更新
        State.on('mg', moveCallback);
        this['_mz'](e, ex => {
            moveInfo = ex;
            moveCallback();
        }, (ex) => {
            State.off('ma', watchKeypress);
            State.off('mg', moveCallback);
            if (hide) {
                moreNode.style.display = '';
            }
            rootClassList.remove('rd-oL');
            //拖动结束，隐藏矩形
            select_1["_mB"]();
            //恢复鼠标形状
            cursor_1["_nc"]();
            State.set({
                'mb': [src] //一次性添加多个，只需要向这个数组添加其它元素即可
            });
            if (!moved) { //如果未移动过，则是点击添加
                //位置随机到左上角
                State.fire('mh', {
                    // width,
                    // height,
                    pageX: stage.scrollLeft + ((random() * 50) | 0),
                    pageY: stage.scrollTop + ((random() * 50) | 0)
                });
                return;
            }
            if (ex) {
                //获取当前鼠标下的节点，并
                let hoverNode = index_3["_na"](ex.clientX, ex.clientY);
                State.fire('mh', {
                    node: hoverNode,
                    // width,
                    // height,
                    pageX: startX + offsetX + pos.x,
                    pageY: startY + offsetY + pos.y, // + (list.length - i) * 20
                });
                State.fire('mi');
                if (supportSnapElement) {
                    State.fire('l2');
                }
            }
        });
    },
    '_ng<click>'() {
        let cavans = node('_rd_so');
        this['_ne'] = screen.width;
        this['_nf'] = screen.height;
        for (let fs of Fullscreens) {
            if (cavans[fs]) {
                cavans[fs]();
                break;
            }
        }
    },
    '_mO<click>'(e) {
        if (!e['_mW']) {
            State.fire('md');
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
    '_mU<click>'() {
        if (const_1['mu']) {
            //this.alert('打印功能正开发中...');
            let old = this['_nh'];
            if (old) {
                index_4["_ni"](old);
            }
            this['_nj'] = 0;
            let w = window.open(DEBUG ? '/print-debug.html' : './print.html', '_nk');
            w.focus();
            let origin = location.protocol + '//' + location.host;
            let post = () => {
                w.postMessage(tojson_1(), origin);
                this['_nj']++;
                if (this['_nj'] > 20) {
                    index_4["_ni"](post);
                }
            };
            index_4["_nl"](400, this['_nh'] = post);
        }
        else {
            this.mxDialog("5b/print", {
                width: max(1200, screen.width - 100)
            });
        }
    },
    '_nm<click>'() {
        State.fire('ma', {
            'l3': 1,
            'l6': 1,
            'l5': keyboard_1['ma']
        });
    },
    '_nn<click>'() {
        example_1["_mA"](this);
    },
    '$win<message>'(e) {
        let origin = location.protocol + '//' + location.host;
        if (e.origin == origin &&
            e.data == '_no') {
            index_4["_ni"](this['_nh']);
        } /* else if (e.data == '@:{display.message.received}') {
            Runner["@:{task.remove.background}"](this['@:{display.post.fn}']);
        }*/
    },
    '$doc<fullscreenchange,webkitfullscreenchange>'() {
        let doc = document;
        let element = doc.fullscreenElement ||
            doc.webkitCurrentFullScreenElement ||
            doc.mozFullScreenElement || null;
        State.fire('mj', {
            '_np': 1,
            '_nq': this['_ne'],
            '_nr': this['_nf'],
            '_ns': !!element
        });
    }
}).merge(index_3, index_2);

});