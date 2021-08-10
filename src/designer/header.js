/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/52",["4e","../53/index","../4l/54/index","../4l/4m/index","../4l/4n/cursor","../4l/4n/select","../4l/4o/index","../4t/fs","./4g","./content","./50","./4r","./55","./56","./57","./4u"],(require,exports,module)=>{
let $quick_dK_1_static_node;
let $quick_dK_2_static_node;
let $quick_dK_6_static_node;
let $quick_dK_9_static_node;
let $quick_dK_10_static_node;
let $quick_dK_11_static_node;
let $quick_dK_12_static_node;
let $quick_dK_13_static_node;
let $quick_dK_14_static_node;
let $quick_dK_15_static_node;
let $quick_dK_16_static_node;
let $quick_dK_17_static_node;
let $quick_dK_18_static_node;
let $quick_dK_19_static_node;
let $quick_dK_20_static_node;
let $quick_dK_21_static_node;
let $quick_dK_22_static_node;
let $quick_dK_23_static_node;
let $quick_dK_0_static_attr={'class': 'rd-eB rd-ej rd-ez rd-fy',};
let $quick_dK_3_static_attr={'class': 'rd-eB rd-eX rd-em rd-gl rd-go rd-gs',};
let $quick_dK_4_static_attr={'class': 'rd-dF rd-gt',};
let $quick_dK_5_static_attr={'class': 'rd-fw rd-gu',};
let $quick_dK_7_static_attr={'class': 'rd-eY rd-el rd-eq rd-fS rd-gq',};
let $quick_dK_8_static_attr={'class': 'rd-eB rd-ek rd-et rd-ez',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let index_1 = require("../53/index");
let index_2 = require("../4l/54/index");
let index_3 = require("../4l/4m/index");
let cursor_1 = require("../4l/4n/cursor");
let select_1 = require("../4l/4n/select");
let index_4 = require("../4l/4o/index");
let fs_1 = require("../4t/fs");
let const_1 = require("./4g");
let content_1 = require("./content");
let example_1 = require("./50");
let keyboard_1 = require("./4r");
let stage_align_1 = require("./55");
let stage_elements_1 = require("./56");
let stage_generic_1 = require("./57");
let tojson_1 = require("./4u");
let { node, State, applyStyle, config, View, inside, mix, isFunction } = magix_1;
let Stage_Line = 1;
let { random, max, round } = Math;
let StagePadding = const_1['dT'];
applyStyle("rd-dI",".rd-gl,.rd-gm{display:grid;grid-template-rows:20px 20px;height:40px;justify-items:center;margin:0 2px;width:50px}.rd-gn{z-index:400}.rd-go{grid-template-columns:50px 10px;width:60px}.rd-gm{border-radius:2px}.rd-gm:hover{background:#ec5706}.rd-gp{max-height:90%;max-width:90%}.rd-gq{left:0;width:278px}.rd-gq,.rd-gr{background:#f96412;border-radius:0 0 2px 2px;top:100%}.rd-gr{min-width:160px}.rd-gl:hover{background:#f96412}.rd-gl:hover .rd-gq,.rd-gl:hover .rd-gr{display:block}.rd-gs:hover{z-index:700}.rd-gt{align-self:flex-end;grid-column:1/2;grid-row:1/2}.rd-gu{font-weight:400;grid-column:1/2;grid-row:2/3;line-height:12px}.rd-gv{grid-column:2/3;grid-row:1/3;margin-left:-10px;opacity:.6;transition:all .25s}.rd-gl:hover .rd-gv{transform:rotate(180deg)}.rd-gw{background:linear-gradient(hsla(0,0%,100%,.25),#fff 30%,#fff 70%,hsla(0,0%,100%,.25));height:30px;margin:2px 12px}.rd-gx{white-space:nowrap;word-break:keep-all}.rd-gy{border-radius:2px;height:28px;line-height:1.5;margin:2px;padding:0 8px}.rd-gy:hover{background:#ec5706}.rd-gz{color:hsla(0,0%,100%,.6);margin-left:20px}.rd-gA{margin-right:5px}");
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

if($quick_dK_1_static_node){
$vnode_1=[$quick_dK_1_static_node];
}else{
$vnode_2=[$createVNode(0,'')];$vnode_1=[$quick_dK_1_static_node=$createVNode('i',{'_': 'cH','class': 'rd-d9 rd-dF',},$vnode_2)];
}
$vnode_1.push($createVNode(0,(i18n('dX'))));$vnode_0.push($createVNode('div',$quick_dK_0_static_attr,$vnode_1));
}$vnode_1=[];
for(let $q_c_xlyugmv=elements.length,$q_key_btxzrrfq=0;$q_key_btxzrrfq<$q_c_xlyugmv;$q_key_btxzrrfq+=1){
let e=elements[$q_key_btxzrrfq];

if(e.spliter){

if($quick_dK_2_static_node){
$vnode_1.push($quick_dK_2_static_node);
}else{
$vnode_1.push($quick_dK_2_static_node=$createVNode('div',{'_': 'cI','class': 'rd-eQ rd-ej rd-gw',}));
}

}else{

if(e.subs){
$vnode_3=[$createVNode(0,(e.icon),1)];$vnode_2=[$createVNode('i',$quick_dK_4_static_attr,$vnode_3)];$vnode_3=[$createVNode(0,(i18n(e.title)))];$vnode_2.push($createVNode('b',$quick_dK_5_static_attr,$vnode_3));
if($quick_dK_6_static_node){
$vnode_2.push($quick_dK_6_static_node);
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2.push($quick_dK_6_static_node=$createVNode('i',{'_': 'cJ','class': 'rd-dF rd-fv rd-gv',},$vnode_3));
}
$vnode_3=[];
for(let $q_a_rdawbv=e.subs,$q_c_rtpl=$q_a_rdawbv.length,$q_key_wdhzkvon=0;$q_key_wdhzkvon<$q_c_rtpl;$q_key_wdhzkvon+=1){
let es=$q_a_rdawbv[$q_key_wdhzkvon];
$vnode_4=[];
if(e.image){
$vnode_4.push($createVNode('img',{'class': 'rd-d2 rd-ef rd-gp','src': (es.image),},1));
}else{
$vnode_5=[$createVNode(0,(es.icon||es.ctrl.icon),1)];$vnode_4.push($createVNode('i',$quick_dK_4_static_attr,$vnode_5));
}$vnode_5=[$createVNode(0,(i18n(es.title||es.ctrl.title)))];$vnode_4.push($createVNode('b',$quick_dK_5_static_attr,$vnode_5));$vnode_3.push($createVNode('div',{'class': 'rd-eB rd-eX rd-ej rd-f0 rd-gm','mx5-pointerdown': $viewId+'_eQ({src:\''+$keyOf($refData,es,'cH.'+($q_key_btxzrrfq)+'.cI.'+($q_key_wdhzkvon)+'.cJ')+'\',hide:true})',},$vnode_4));
}$vnode_2.push($createVNode('div',$quick_dK_7_static_attr,$vnode_3));$vnode_1.push($createVNode('div',$quick_dK_3_static_attr,$vnode_2));
}else{
$vnode_3=[$createVNode(0,(e.icon||e.ctrl.icon),1)];$vnode_2=[$createVNode('i',$quick_dK_4_static_attr,$vnode_3)];$vnode_3=[$createVNode(0,(i18n(e.title||e.ctrl.title)))];$vnode_2.push($createVNode('b',$quick_dK_5_static_attr,$vnode_3));$vnode_1.push($createVNode('div',{'class': 'rd-eB rd-eX rd-em rd-f0 rd-gl','mx5-pointerdown': $viewId+'_eQ({src:\''+$keyOf($refData,e,'cH.'+($q_key_btxzrrfq)+'.cK')+'\'})',},$vnode_2));
}
}
};$$_class='rd-ez rd-eB rd-ej rd-et';if(!mini){;$$_class+=' rd-eE';};$vnode_0.push($createVNode('div',{'class': $$_class,},$vnode_1));$vnode_1=[];
if(template){

if($quick_dK_9_static_node){
$vnode_2=[$quick_dK_9_static_node];
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2=[$quick_dK_9_static_node=$createVNode('i',{'_': 'cK','class': 'rd-dF',},$vnode_3)];
}

if($quick_dK_10_static_node){
$vnode_2.push($quick_dK_10_static_node);
}else{
$vnode_3=[$createVNode(0,'示例')];$vnode_2.push($quick_dK_10_static_node=$createVNode('b',{'_': 'cL','class': 'rd-fw rd-gu',},$vnode_3));
}
$vnode_1.push($createVNode('div',{'class': 'rd-eB rd-eX rd-gl','mx5-click': $viewId+'_e0()',},$vnode_2));
}
if(su||cssc||cunf){
$vnode_2=[];
if($quick_dK_11_static_node){
$vnode_2.push($quick_dK_11_static_node);
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2.push($quick_dK_11_static_node=$createVNode('i',{'_': 'cM','class': 'rd-dF',},$vnode_3));
}

if($quick_dK_12_static_node){
$vnode_2.push($quick_dK_12_static_node);
}else{
$vnode_3=[$createVNode(0,'保存')];$vnode_2.push($quick_dK_12_static_node=$createVNode('b',{'_': 'cN','class': 'rd-fw rd-gu',},$vnode_3));
}

if(dd){

if($quick_dK_6_static_node){
$vnode_2.push($quick_dK_6_static_node);
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2.push($quick_dK_6_static_node=$createVNode('i',{'_': 'cJ','class': 'rd-dF rd-fv rd-gv',},$vnode_3));
}
$vnode_3=[];
if(su){

if($quick_dK_13_static_node){
$vnode_4=[$quick_dK_13_static_node];
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4=[$quick_dK_13_static_node=$createVNode('i',{'_': 'cO','class': 'rd-dF rd-fx rd-gA',},$vnode_5)];
}
$vnode_5=[$createVNode(0,(i18n('er')))];$vnode_4.push($createVNode('span',{'class': 'rd-ey rd-gx','title': (i18n('er')),},$vnode_5));
if($quick_dK_14_static_node){
$vnode_4.push($quick_dK_14_static_node);
}else{
$vnode_5=[$createVNode(0,'Ctrl+S')];$vnode_4.push($quick_dK_14_static_node=$createVNode('code',{'_': 'cP','class': 'rd-fw rd-gz','title': '快捷键:Ctrl+S',},$vnode_5));
}
$vnode_3.push($createVNode('div',{'class': 'rd-eB rd-ez rd-gy','mx5-click': $viewId+'_eq()',},$vnode_4));
}
if(cssc){

if($quick_dK_15_static_node){
$vnode_4=[$quick_dK_15_static_node];
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4=[$quick_dK_15_static_node=$createVNode('i',{'_': 'cQ','class': 'rd-dF rd-fx rd-gA',},$vnode_5)];
}
$vnode_5=[$createVNode(0,(i18n('dZ')))];$vnode_4.push($createVNode('span',{'class': 'rd-ey rd-gx','title': (i18n('dZ')),},$vnode_5));$text='Ctrl+';if(su){;$text+='Shift+';};$text+='S';$vnode_5=[$createVNode(0,$text)];;$$_title='快捷键:Ctrl+';if(su){;$$_title+='Shift+';};$$_title+='S';$vnode_4.push($createVNode('code',{'class': 'rd-gz','title': $$_title,},$vnode_5));$vnode_3.push($createVNode('div',{'class': 'rd-eB rd-ez rd-gy','mx5-click': $viewId+'_eA()',},$vnode_4));
}
if(cunf){

if($quick_dK_16_static_node){
$vnode_4=[$quick_dK_16_static_node];
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4=[$quick_dK_16_static_node=$createVNode('i',{'_': 'cR','class': 'rd-dF rd-fx rd-gA',},$vnode_5)];
}
$vnode_5=[$createVNode(0,(i18n('es')))];$vnode_4.push($createVNode('span',{'class': 'rd-ey rd-gx','title': (i18n('es')),},$vnode_5));$vnode_3.push($createVNode('div',{'class': 'rd-eB rd-ez rd-gy','mx5-click': $viewId+'_eB()',},$vnode_4));$vnode_4=[];
if($quick_dK_17_static_node){
$vnode_4.push($quick_dK_17_static_node);
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4.push($quick_dK_17_static_node=$createVNode('i',{'_': 'cS','class': 'rd-dF rd-fx rd-gA',},$vnode_5));
}
$vnode_5=[$createVNode(0,(i18n('et')))];$vnode_4.push($createVNode('span',{'class': 'rd-ey rd-gx','title': (i18n('et')),},$vnode_5));
if(native){
$vnode_4.push($createVNode('input',{'type': 'file','accept': '.rd','class': 'rd-el rd-fX rd-fa','mx5-change': $viewId+'_eD()',},1));
}$vnode_3.push($createVNode('div',{'class': 'rd-eB rd-em rd-ez rd-gy','mx5-click': $viewId+'_eC()',},$vnode_4));
}$vnode_2.push($createVNode('div',{'class': 'rd-eY rd-el rd-eq rd-fB rd-fT rd-gr','mx5-click': $viewId+'_ez()',},$vnode_3));
};$$_class='rd-gl rd-eX rd-eB';if(dd){;$$_class+=' rd-gs rd-go rd-em';};$vnode_1.push($createVNode('div',{'mx5-click': $viewId+'_eq()','class': $$_class,},$vnode_2));
}
if(!mini){

if($quick_dK_2_static_node){
$vnode_1.push($quick_dK_2_static_node);
}else{
$vnode_1.push($quick_dK_2_static_node=$createVNode('div',{'_': 'cI','class': 'rd-eQ rd-ej rd-gw',}));
}

if($quick_dK_18_static_node){
$vnode_2=[$quick_dK_18_static_node];
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2=[$quick_dK_18_static_node=$createVNode('i',{'_': 'cT','class': 'rd-dF',},$vnode_3)];
}

if($quick_dK_19_static_node){
$vnode_2.push($quick_dK_19_static_node);
}else{
$vnode_3=[$createVNode(0,'大屏预览')];$vnode_2.push($quick_dK_19_static_node=$createVNode('b',{'_': 'cU','class': 'rd-fw rd-gu',},$vnode_3));
}
$vnode_1.push($createVNode('div',{'class': 'rd-eB rd-eX rd-gl','mx5-click': $viewId+'_eT()',},$vnode_2));
}
if($quick_dK_20_static_node){
$vnode_2=[$quick_dK_20_static_node];
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2=[$quick_dK_20_static_node=$createVNode('i',{'_': 'cV','class': 'rd-dF',},$vnode_3)];
}

if($quick_dK_21_static_node){
$vnode_2.push($quick_dK_21_static_node);
}else{
$vnode_3=[$createVNode(0,'打印')];$vnode_2.push($quick_dK_21_static_node=$createVNode('b',{'_': 'cW','class': 'rd-fw rd-gu',},$vnode_3));
}
$vnode_1.push($createVNode('div',{'class': 'rd-eB rd-eX rd-gl','mx5-click': $viewId+'_ew()',},$vnode_2));
if(help){

if($quick_dK_2_static_node){
$vnode_1.push($quick_dK_2_static_node);
}else{
$vnode_1.push($quick_dK_2_static_node=$createVNode('div',{'_': 'cI','class': 'rd-eQ rd-ej rd-gw',}));
}

if($quick_dK_22_static_node){
$vnode_2=[$quick_dK_22_static_node];
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2=[$quick_dK_22_static_node=$createVNode('i',{'_': 'cX','class': 'rd-dF',},$vnode_3)];
}

if($quick_dK_23_static_node){
$vnode_2.push($quick_dK_23_static_node);
}else{
$vnode_3=[$createVNode(0,'帮助')];$vnode_2.push($quick_dK_23_static_node=$createVNode('b',{'_': 'cY','class': 'rd-fw rd-gu',},$vnode_3));
}
$vnode_1.push($createVNode('div',{'class': 'rd-eB rd-eX rd-gl','mx5-click': $viewId+'_eZ()',},$vnode_2));
}$vnode_0.push($createVNode('div',$quick_dK_8_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            help: const_1['dQ'],
            mini: State.get('dL'),
            template: config('getTemplateUrl')
        });
        let watchKeypress = (e) => {
            let { 'dH': keyCode, 'dJ': ctrlKey, 'dK': altKey, 'dI': shiftKey } = e;
            if (keyCode == keyboard_1['dM'] &&
                ctrlKey &&
                !shiftKey &&
                !altKey) {
                e['dL']();
                this['_ew<click>']();
            }
        };
        State.on('dN', watchKeypress);
        this.on('destroy', () => {
            State.off('dN', watchKeypress);
        });
    },
    render() {
        let elements = index_1["dE"]();
        let saveUrl = config('saveContentUrl');
        let canShowStageContent = const_1['dP'];
        let canUseNativeFile = const_1['dO'];
        /**
         * 如果要对项目中可使用的设计元素控制，则在这里对elements数组进行控制即可
         * 比如在这里发送请求，根据服务端返回的数据进行控制
         */
        this.digest({
            native: fs_1['_ex'](),
            dd: canUseNativeFile || (saveUrl && canShowStageContent),
            su: saveUrl,
            cssc: canShowStageContent,
            cunf: canUseNativeFile,
            elements
        });
    },
    '_ez<click>'(e) {
        e['_ey'] = 1;
    },
    '_eA<click>'() {
        State.fire('dQ', {
            'dE': 1
        });
    },
    '_eB<click>'() {
        content_1['_eq']();
    },
    '_eC<click>'(e) {
        let native = this.get('native');
        if (!native) {
            content_1['_en'](e.eventTarget);
        }
    },
    '_eD<change>'(e) {
        content_1['_en'](e.eventTarget);
    },
    /**
     * 当鼠标在设计元素上按下时，可能是拖动或点击动作
     * @param e 鼠标事件
     */
    '_eQ<pointerdown>'(e) {
        let { params, eventTarget, altKey, pageX: beginX, pageY: beginY } = e;
        beginY -= window.scrollY;
        beginX -= window.screenX;
        let { classList: rootClassList } = this.root;
        rootClassList.add('rd-gn'); //让header在拖动的虚线框之上
        let { src, hide } = params;
        let { props: definedProps, ctrl } = src; //获取鼠标下的元素控制对象和预设属性
        let moreNode = eventTarget.parentNode; //有可能是更多面板里的元素
        //Follower["@:{update}"](ctrl.icon);
        let moved;
        let stage = node('_rd_stage');
        //以下props仅为了拿到尺寸，鼠标松开添加时，会在stage-elements.ts的add.element里重新生成一份新的props，因此不要在这里对props做修改，否则会不生效
        let props = ctrl['_eE'](0, 0); //获取元素的属性，主要是为了拿到尺寸，生成相应的鼠标跟随矩形
        //如果有预设属性，则需要合并进去
        if (isFunction(definedProps)) {
            definedProps = definedProps();
        }
        mix(props, definedProps);
        if (ctrl['_eF']) { //如果元素需要动态确定属性，则调用
            ctrl['_eF'](props);
        }
        let { width, height } = props; //拿到元素的尺寸
        width = round(const_1['eo'](width));
        height = round(const_1['eo'](height));
        let scale = State.get('dF');
        width *= scale; //根据当前缩放，生成相应的尺寸
        height *= scale;
        select_1["_eG"](); //准备显示矩形
        cursor_1["_eH"]('move'); //全局显示可移动的鼠标样式
        let allowedTotalCount = ctrl['_eI'], //获取当前元素一共能添加多少个
        allowedStageCount = ctrl['_eJ'], //获取当前元素允许向设计区添加多少个
        allCount = 0, stageCount = 0;
        if (allowedTotalCount || allowedStageCount) {
            let { 'dE': allElements } = stage_generic_1["dE"]();
            allCount = stage_generic_1["dF"](allElements, ctrl.type).length; //获取当前一共添加了多少个
            stageCount = stage_generic_1["dF"](State.get('dM'), ctrl.type).length; //获取当前设计区添加了多少个
        }
        let nearestElements = []; //吸附对齐的其它元素
        let page = State.get('dN'), isSpecialHod = ctrl.type == 'hod-header' ||
            ctrl.type == 'hod-footer', supportSnapElement = const_1['d0'] &&
            !isSpecialHod && !page.readonly, //头尾元素手动时，不需要使用吸附对齐到其它元素，只读模式关闭对齐功能
        snapElement = page.snapElement; //
        let pos = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }, snapOffset = const_1['e_'] * scale;
        let startX = beginX, startY = beginY, testX, testY, sizesMap, aberration;
        //元素吸附
        if (supportSnapElement) {
            aberration = const_1['ep']();
            //先计算出其它元素的可对齐坐标
            let { 'dE': allElements } = stage_generic_1['dE']();
            let alignElements = stage_align_1['dE'](allElements);
            nearestElements = alignElements['dE'];
            pos = alignElements['dF'];
            let sInfo = stage_generic_1['dG'](0, 0, [{
                    'dG': 0,
                    'dH': 0,
                    'dI': ctrl,
                    'dJ': width,
                    'dK': height,
                }]);
            testX = sInfo['_eK'];
            testY = sInfo['_eL'];
            sizesMap = sInfo['_eM'];
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
                scrollOffsetY = -magixEvent['dE'];
                scrollOffsetX - magixEvent['dF'];
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
            let hoverNode = index_3["_eN"](moveInfo.clientX, moveInfo.clientY), insideStageZone = inside(hoverNode, stage);
            let lastElement = nearestElements[nearestElements.length - 1];
            if (hoverNode != lastHoverNode) {
                lastHod = stage_elements_1['dE'](hoverNode, ctrl);
                lastHoverNode = hoverNode;
                //新容器装入，旧容器移除
                if (lastElement && (!lastHod ||
                    lastElement['dL'] != lastHod['_eO'])) {
                    if (lastElement['dL']) {
                        nearestElements.pop();
                    }
                }
            }
            if (supportSnapElement) { //启用元素吸附
                if (insideStageZone) { //在设计区才判断
                    if (!altPressed && //未按alt键
                        lastHod &&
                        lastElement['dL'] != lastHod['_eO']) {
                        let maskNode = node(lastHod['_eO']);
                        if (maskNode) {
                            let db = maskNode.getBoundingClientRect();
                            nearestElements.push({
                                'dM': Stage_Line,
                                'dL': lastHod['_eO'],
                                'dG': db.x - pos.x - scrollOffsetX,
                                'dH': db.y - pos.y - scrollOffsetY,
                                'dJ': db.width,
                                'dK': db.height
                            });
                        }
                    }
                    //console.log(nearestElements);
                    let snapInfo = stage_align_1['dF'](nearestElements, startX, offsetX, startY, offsetY, sizesMap, testX, testY, 0, 0, altPressed, snapOffset, aberration, scrollOffsetX, scrollOffsetY, maxWidth, maxHeight);
                    offsetX = snapInfo['dG'];
                    offsetY = snapInfo['dH'];
                }
                else {
                    stage_align_1['dI']();
                }
            }
            State.fire('dR', {
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
            State.fire('dS', moveInfo);
            if (magixEvent && !magixEvent['dG']) {
                magixEvent['dG'] = 1;
                magixEvent['dH']();
            }
        };
        let watchKeypress = e => {
            altPressed = snapElement ? e['dK'] : !e['dK'];
            moveCallback();
        };
        //如果按alt键，则需要实时响应界面，即拖动过程中停下来，未松开鼠标，而此时按alt键，则界面需要实时显示或隐藏吸附线，同时元素做偏移
        State.on('dN', watchKeypress);
        //如果设计区滚动，鼠标未动，则辅助线也需要实时更新
        State.on('dT', moveCallback);
        this['_eb'](e, ex => {
            moveInfo = ex;
            moveCallback();
        }, (ex) => {
            State.off('dN', watchKeypress);
            State.off('dT', moveCallback);
            if (hide) {
                moreNode.style.display = '';
            }
            rootClassList.remove('rd-gn');
            //拖动结束，隐藏矩形
            select_1["_ed"]();
            //恢复鼠标形状
            cursor_1["_eP"]();
            State.set({
                'dO': [src] //一次性添加多个，只需要向这个数组添加其它元素即可
            });
            if (!moved) { //如果未移动过，则是点击添加
                //位置随机到左上角
                State.fire('dU', {
                    // width,
                    // height,
                    pageX: stage.scrollLeft + ((random() * 50) | 0),
                    pageY: stage.scrollTop + ((random() * 50) | 0)
                });
                return;
            }
            if (ex) {
                //获取当前鼠标下的节点，并
                let hoverNode = index_3["_eN"](ex.clientX, ex.clientY);
                State.fire('dU', {
                    node: hoverNode,
                    // width,
                    // height,
                    pageX: startX + offsetX + pos.x,
                    pageY: startY + offsetY + pos.y, // + (list.length - i) * 20
                });
                State.fire('dV');
                if (supportSnapElement) {
                    State.fire('dE');
                }
            }
        });
    },
    '_eT<click>'() {
        let cavans = node('_rd_so');
        this['_eR'] = screen.width;
        this['_eS'] = screen.height;
        for (let fs of Fullscreens) {
            if (cavans[fs]) {
                cavans[fs]();
                break;
            }
        }
    },
    '_eq<click>'(e) {
        if (!e['_ey']) {
            State.fire('dQ');
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
    '_ew<click>'() {
        if (const_1['d7']) {
            //this.alert('打印功能正开发中...');
            let old = this['_eU'];
            if (old) {
                index_4["_eV"](old);
            }
            this['_eW'] = 0;
            let w = window.open(DEBUG ? './print-debug.html' : './print.html', '_eX');
            w.focus();
            let origin = location.protocol + '//' + location.host;
            let post = () => {
                w.postMessage(tojson_1(), origin);
                this['_eW']++;
                if (this['_eW'] > 20) {
                    index_4["_eV"](post);
                }
            };
            index_4["_eY"](400, this['_eU'] = post);
        }
        else {
            this.mxDialog("4d/print", {
                width: max(1200, screen.width - 100)
            });
        }
    },
    '_eZ<click>'() {
        State.fire('dN', {
            'dF': 1,
            'dI': 1,
            'dH': keyboard_1['dN']
        });
    },
    '_e0<click>'() {
        example_1["_ec"](this);
    },
    '$win<message>'(e) {
        let origin = location.protocol + '//' + location.host;
        if (e.origin == origin &&
            e.data == '_e1') {
            index_4["_eV"](this['_eU']);
        } /* else if (e.data == '@:{display.message.received}') {
            Runner["@:{task.remove.background}"](this['@:{display.post.fn}']);
        }*/
    },
    '$doc<fullscreenchange,webkitfullscreenchange>'() {
        let doc = document;
        let element = doc.fullscreenElement ||
            doc.webkitCurrentFullScreenElement ||
            doc.mozFullScreenElement || null;
        State.fire('dW', {
            '_e2': 1,
            '_e3': this['_eR'],
            '_e4': this['_eS'],
            '_e5': !!element
        });
    }
}).merge(index_3, index_2);

});