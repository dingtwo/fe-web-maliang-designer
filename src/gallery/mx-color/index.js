/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6l/index",["51","../59/index","../6r/index"],(require,exports,module)=>{
let $quick_gX_static_text;
let $quick_gY_static_text;
let $quick_hW_2_static_node;
let $quick_hW_3_static_node;
let $quick_hW_4_static_node;
let $quick_hW_5_static_node;
let $quick_hW_6_static_node;
let $quick_hW_7_static_node;
let $quick_hW_8_static_node;
let $quick_hW_9_static_node;
let $quick_hW_10_static_node;
let $quick_hW_11_static_node;
let $quick_hW_12_static_node;
let $quick_hW_13_static_node;
let $quick_hW_0_static_attr={'class': 'rd-kv',};
let $quick_hW_1_static_attr={'xmlns': 'http://www.w3.org/2000/svg','version': 1.1,'width': '100%','height': '100%',};
let $quick_hW_14_static_attr={'class': 'rd-gW rd-kn',};
let $quick_hW_15_static_attr={'class': 'rd-kA',};
let $special_2={'value':'value',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let index_1 = require("../59/index");
let index_2 = require("../6r/index");
let { node, View, applyStyle, dispatch, inside } = magix_1;
let { abs, min, max, round } = Math;
applyStyle("rd-gt",".rd-kl{border:1px solid #e6e6e6;border-radius:2px;height:22px;padding:1px}.rd-kl:hover{border-color:#ccc}.rd-km,.rd-km:hover{border-color:#47b34e}.rd-kn,.rd-ko{background:#fff;background-image:linear-gradient(45deg,#eee 25%,#0000 0,#0000 75%,#eee 0),linear-gradient(45deg,#eee 25%,#0000 0,#0000 75%,#eee 0);background-position:0 0,6px 6px;background-size:12px 12px}.rd-ko{border:1px solid #ccc;height:18px;min-width:18px;text-indent:-100000em}.rd-kp{padding:3px 4px}.rd-ko:after{border-color:#0000 #ccc;border-style:solid;border-width:6px 6px 0 0;bottom:0;content:\" \";display:block;position:absolute;right:0}.rd-kq{background-color:#fff;border:1px solid #ccc;border-radius:2px;padding:2px;z-index:300}.rd-kr-bottom{margin-top:4px;top:100%}.rd-kr-top{bottom:100%;margin-bottom:4px}.rd-ks{width:176px}.rd-kt{border:1px solid #000;height:12px;margin:-1px 0 0 -1px;width:12px}.rd-ku:before{border:1px inset #e8e8e8;content:\" \";height:6px;left:2px;position:absolute;top:2px;width:6px}.rd-kv{height:150px;margin:5px 0}.rd-kw{height:148px;width:148px}.rd-kx{border-radius:50%;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);height:8px;left:-4px;top:-4px;width:8px}.rd-ky{height:148px;margin-left:10px;width:18px}.rd-kz{background:#fff;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);height:4px;top:-2px;width:14px}.rd-kA{height:25px}.rd-kB{width:80px}.rd-kC,.rd-kB{margin-right:5px;vertical-align:middle}.rd-kC{border:1px solid #ddd;border-radius:2px;height:22px;width:30px}.rd-kD{opacity:.2;right:5px;top:4px}.rd-kD:hover{opacity:.5}.rd-kn{height:12px;margin-bottom:5px;width:174px}.rd-kE{background:#fff;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);height:8px;left:-2px;top:2px;width:4px}.rd-kF{background-color:#f5f5f5;cursor:not-allowed}.rd-kF:hover{border-color:#e6e6e6}.rd-kF:hover .rd-kD{opacity:.1}.rd-kF .rd-ko{opacity:.4}.rd-kF .rd-kD{opacity:.1}.rd-kG{width:56px}");
let ShortCuts = ['d81e06', 'f4ea2a', '1afa29', '1296db', '13227a', 'd4237a', 'ffffff', 'e6e6e6', 'dbdbdb', 'cdcdcd', 'bfbfbf', '8a8a8a', '707070', '515151', '2c2c2c', '000000', 'ea986c', 'eeb174', 'f3ca7e', 'f9f28b', 'c8db8c', 'aad08f', '87c38f', '83c6c2', '7dc5eb', '87a7d6', '8992c8', 'a686ba', 'bd8cbb', 'be8dbd', 'e89abe', 'e8989a', 'e16632', 'e98f36', 'efb336', 'f6ef37', 'afcd51', '7cba59', '36ab60', '1baba8', '17ace3', '3f81c1', '4f68b0', '594d9c', '82529d', 'a4579d', 'db649b', 'dd6572', 'd84e06', 'e0620d', 'ea9518', 'f4ea2a', '8cbb1a', '2ba515', '0e932e', '0c9890', '1295db', '0061b2', '0061b0', '004198', '122179', '88147f', 'd3227b', 'd6204b'];
let HSV2RGB = (h, s, v) => {
    let R, G, B, X, C;
    h = (h % 360) / 60;
    C = v * s;
    X = C * (1 - abs(h % 2 - 1));
    R = G = B = v - C;
    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    let r = R * 255, g = G * 255, b = B * 255;
    return {
        r: r,
        g: g,
        b: b,
        hex: '#' + (16777216 | b | (g << 8) | (r << 16)).toString(16).slice(1)
    };
};
let RGB2HSV = (r, g, b) => {
    //if (r > 0 || g > 0 || b > 0) {
    r /= 255;
    g /= 255;
    b /= 255;
    //}
    let H, S, V, C;
    V = max(r, g, b);
    C = V - min(r, g, b);
    H = (C === 0 ? null : V == r ? (g - b) / C + (g < b ? 6 : 0) : V == g ? (b - r) / C + 2 : (r - g) / C + 4);
    H = (H % 6) * 60;
    S = C === 0 ? 0 : C / V;
    return {
        h: H,
        s: S,
        v: V
    };
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0,
{
	disabled,
	text,
	textWidth,
	color,
	clear,
	i18n,
	placement,
	align,
	renderUI,
	shortcuts,
	alpha,
	current,}=$dataFromView,
$$_class,
$$_style,
$vnode_2,
$vnode_3,
$vnode_7,
$vnode_6,
$vnode_5,
$vnode_4,
$vnode_1;
$vnode_1=[];
if(text){
$vnode_2=[$createVNode(0,(text))];;$$_class='rd-kp rd-g3';if(!disabled){;$$_class+=' rd-hw';};$$_style='';if(textWidth){;$$_style+='width:'+(textWidth)+'px';};$vnode_1.push($createVNode('div',{'mx5-click': $viewId+'_gp()','class': $$_class,'style': $$_style,},$vnode_2));
}$vnode_2=[$quick_gX_static_text||($quick_gX_static_text=$createVNode(0,'p'))];;$$_class='rd-ko rd-gW rd-g3';if(!disabled){;$$_class+=' rd-hw';};if(!text){;$$_class+=' rd-gN';};$$_style='';if(color){;$$_style+='background:'+(color)+';';};$vnode_1.push($createVNode('div',{'mx5-click': $viewId+'_gp()','class': $$_class,'style': $$_style,},$vnode_2));
if(clear&&color){
$vnode_2=[$quick_gY_static_text||($quick_gY_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-kD rd-h6 rd-gV';if(!disabled){;$$_class+=' rd-hw';};$vnode_1.push($createVNode('i',{'mx5-click': $viewId+'_lW()','title': (i18n('mq')),'class': $$_class,},$vnode_2));
}$vnode_2=[];
if(renderUI){
$vnode_3=[];
for(let $q_c_zpwvtin=shortcuts.length,$q_key_ujkkee=0;$q_key_ujkkee<$q_c_zpwvtin;$q_key_ujkkee+=1){
let sc=shortcuts[$q_key_ujkkee];
$vnode_3.push($createVNode('li',{'class': 'rd-gT rd-gW rd-kt','id': '_mx_sc_'+(sc)+'_'+$viewId,'style': 'background:#'+(sc),'mx5-click': $viewId+'_lS({color:\'#'+($encodeQuote(sc))+'\'})',}));
}$vnode_2.push($createVNode('ul',{'class': 'rd-g9 rd-gz rd-hu rd-hw rd-ks','id': '_mx_scs_'+$viewId,},$vnode_3));
if($quick_hW_2_static_node){
$vnode_7=[$quick_hW_2_static_node];
}else{
$vnode_7=[$quick_hW_2_static_node=$createVNode('stop',{'_': 'eD','offset': '0%','stop-color': '#000000','stop-opacity': 1,})];
}

if($quick_hW_3_static_node){
$vnode_7.push($quick_hW_3_static_node);
}else{
$vnode_7.push($quick_hW_3_static_node=$createVNode('stop',{'_': 'eE','offset': '100%','stop-color': '#CC9A81','stop-opacity': 0,}));
}
$vnode_6=[$createVNode('lineargradient',{'id': '_mx_gb_'+$viewId,'x1': '0%','y1': '100%','x2': '0%','y2': '0%',},$vnode_7)];
if($quick_hW_4_static_node){
$vnode_7=[$quick_hW_4_static_node];
}else{
$vnode_7=[$quick_hW_4_static_node=$createVNode('stop',{'_': 'eF','offset': '0%','stop-color': '#FFFFFF','stop-opacity': 1,})];
}

if($quick_hW_3_static_node){
$vnode_7.push($quick_hW_3_static_node);
}else{
$vnode_7.push($quick_hW_3_static_node=$createVNode('stop',{'_': 'eE','offset': '100%','stop-color': '#CC9A81','stop-opacity': 0,}));
}
$vnode_6.push($createVNode('lineargradient',{'id': '_mx_gw_'+$viewId,'x1': '0%','y1': '100%','x2': '100%','y2': '100%',},$vnode_7));$vnode_5=[$createVNode('defs',0,$vnode_6),$createVNode('rect',{'x': 0,'y': 0,'width': '100%','height': '100%','fill': 'url(#_mx_gw_'+$viewId+')',}),$createVNode('rect',{'x': 0,'y': 0,'width': '100%','height': '100%','fill': 'url(#_mx_gb_'+$viewId+')',})];$vnode_4=[$createVNode('svg',$quick_hW_1_static_attr,$vnode_5),$createVNode('div',{'class': 'rd-gV rd-hw rd-kx','id': '_mx_ci_'+$viewId,})];$vnode_3=[$createVNode('div',{'class': 'rd-gT rd-gW rd-iz rd-kw','id': '_mx_cz_'+$viewId,'mx5-pointerdown': $viewId+'_lO()',},$vnode_4)];
if($quick_hW_5_static_node){
$vnode_7=[$quick_hW_5_static_node];
}else{
$vnode_7=[$quick_hW_5_static_node=$createVNode('stop',{'_': 'eG','offset': '0%','stop-color': '#FF0000','stop-opacity': 1,})];
}

if($quick_hW_6_static_node){
$vnode_7.push($quick_hW_6_static_node);
}else{
$vnode_7.push($quick_hW_6_static_node=$createVNode('stop',{'_': 'eH','offset': '13%','stop-color': '#FF00FF','stop-opacity': 1,}));
}

if($quick_hW_7_static_node){
$vnode_7.push($quick_hW_7_static_node);
}else{
$vnode_7.push($quick_hW_7_static_node=$createVNode('stop',{'_': 'eI','offset': '25%','stop-color': '#8000FF','stop-opacity': 1,}));
}

if($quick_hW_8_static_node){
$vnode_7.push($quick_hW_8_static_node);
}else{
$vnode_7.push($quick_hW_8_static_node=$createVNode('stop',{'_': 'eJ','offset': '38%','stop-color': '#0040FF','stop-opacity': 1,}));
}

if($quick_hW_9_static_node){
$vnode_7.push($quick_hW_9_static_node);
}else{
$vnode_7.push($quick_hW_9_static_node=$createVNode('stop',{'_': 'eK','offset': '50%','stop-color': '#00FFFF','stop-opacity': 1,}));
}

if($quick_hW_10_static_node){
$vnode_7.push($quick_hW_10_static_node);
}else{
$vnode_7.push($quick_hW_10_static_node=$createVNode('stop',{'_': 'eL','offset': '63%','stop-color': '#00FF40','stop-opacity': 1,}));
}

if($quick_hW_11_static_node){
$vnode_7.push($quick_hW_11_static_node);
}else{
$vnode_7.push($quick_hW_11_static_node=$createVNode('stop',{'_': 'eM','offset': '75%','stop-color': '#0BED00','stop-opacity': 1,}));
}

if($quick_hW_12_static_node){
$vnode_7.push($quick_hW_12_static_node);
}else{
$vnode_7.push($quick_hW_12_static_node=$createVNode('stop',{'_': 'eN','offset': '88%','stop-color': '#FFFF00','stop-opacity': 1,}));
}

if($quick_hW_13_static_node){
$vnode_7.push($quick_hW_13_static_node);
}else{
$vnode_7.push($quick_hW_13_static_node=$createVNode('stop',{'_': 'eO','offset': '100%','stop-color': '#FF0000','stop-opacity': 1,}));
}
$vnode_6=[$createVNode('lineargradient',{'id': '_mx_ghsv_'+$viewId,'x1': '0%','y1': '100%','x2': '0%','y2': '0%',},$vnode_7)];$vnode_5=[$createVNode('defs',0,$vnode_6),$createVNode('rect',{'x': 0,'y': 0,'width': '100%','height': '100%','fill': 'url(#_mx_ghsv_'+$viewId+')',})];$vnode_4=[$createVNode('svg',$quick_hW_1_static_attr,$vnode_5),$createVNode('div',{'class': 'rd-gV rd-hw rd-it rd-kz','id': '_mx_si_'+$viewId,})];$vnode_3.push($createVNode('div',{'class': 'rd-gT rd-gW rd-iz rd-ky','mx5-pointerdown': $viewId+'_lP()',},$vnode_4));$vnode_2.push($createVNode('div',$quick_hW_0_static_attr,$vnode_3));
if(alpha){
$vnode_4=[$createVNode('div',{'class': 'rd-gV rd-hw rd-kE','id': '_mx_ai_'+$viewId,})];$vnode_3=[$createVNode('div',{'class': 'rd-gO rd-gW rd-iz','id': '_mx_at_'+$viewId,'mx5-pointerdown': $viewId+'_lQ()',},$vnode_4)];$vnode_2.push($createVNode('div',$quick_hW_14_static_attr,$vnode_3));
}$vnode_3=[$createVNode('span',{'class': 'rd-g2 rd-kC','id': '_mx_bc_'+$viewId,}),$createVNode('input',{'class': 'rd-gg rd-kB','readonly': true,'id': '_mx_v_'+$viewId,'value': (current),},1,$special_2)];$vnode_4=[$createVNode(0,(i18n('mr')))];$vnode_3.push($createVNode('button',{'class': 'rd-gS rd-gk rd-gm rd-hw rd-kG','type': 'button','mx5-click': $viewId+'_lR()',},$vnode_4));$vnode_2.push($createVNode('div',$quick_hW_15_static_attr,$vnode_3));
}$vnode_1.push($createVNode('div',{'id': '_mx_bd_'+$viewId,'class': 'rd-kq rd-g3 rd-g0 rd-gV rd-kr-'+(placement),'style': (align)+':-1px',},$vnode_2));;$$_class='rd-kl rd-g9 rd-ha rd-gW';if(disabled){;$$_class+=' rd-kF';};$vnode_0=[$createVNode('div',{'mx5-contextmenu': $viewId+'_h6()','id': '_mx_root_'+$viewId,'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            shortcuts: ShortCuts
        });
        index_2["_lD"]();
        this.on('destroy', () => {
            index_2['_js'](this);
            index_2['_lE']();
        });
    },
    assign(data) {
        let me = this;
        me['_lF'] = data.color || '';
        me['_lG'] = (data.alpha + '') == 'true';
        me['_lH'] = {
            h: 0,
            s: 1,
            v: 1
        };
        me.set({
            clear: (data.clear + '') == 'true',
            text: data.text || '',
            disabled: (data.disabled + '') == 'true',
            align: data.align || 'left',
            textWidth: data.textWidth || 0,
            placement: data.placement || 'bottom'
        });
    },
    render() {
        this.digest({
            alpha: this['_lG'],
            color: this['_lF'],
            current: this['_lF']
        });
    },
    '_lK'(hsv, hex, ignoreSyncUI) {
        let me = this;
        let selfHSV = me['_lH'];
        selfHSV.h = hsv.h;
        selfHSV.s = hsv.s;
        selfHSV.v = hsv.v;
        let rgb = HSV2RGB(hsv.h, hsv.s, hsv.v);
        hex = rgb.hex;
        let cpickerNode = node('_mx_cz_' + me.id);
        let pickerZone = cpickerNode.clientWidth;
        let colorZone = HSV2RGB(hsv.h, 1, 1);
        cpickerNode.style.background = colorZone.hex;
        me['_lI'] = hex;
        me['_lJ']();
        if (!ignoreSyncUI) {
            let selected = node('_mx_scs_' + me.id).querySelector('li[class$="rd-ku"]');
            //debugger;
            if (selected) {
                selected.classList.remove('rd-ku');
            }
            let snode = node('_mx_si_' + me.id);
            let slider = snode.clientHeight / 2;
            let top = round(selfHSV.h * pickerZone / 360 - slider);
            let cnode = node('_mx_ci_' + me.id);
            let pickerIndicator = cnode.clientWidth / 2;
            snode.style.top = top + 'px';
            top = round((1 - selfHSV.v) * pickerZone - pickerIndicator);
            let left = round(selfHSV.s * pickerZone - pickerIndicator);
            cnode.style.left = left + 'px';
            cnode.style.top = top + 'px';
        }
        let sc = node('_mx_sc_' + hex.substr(1, 6) + '_' + me.id);
        if (sc) {
            sc.classList.add('rd-ku');
        }
    },
    '_lN'(hex) {
        let me = this;
        let r = parseInt(hex.substr(1, 2), 16);
        if (isNaN(r))
            r = 255;
        let g = parseInt(hex.substr(3, 2), 16);
        if (isNaN(g))
            g = 255;
        let b = parseInt(hex.substr(5, 2), 16);
        if (isNaN(b))
            b = 255;
        let hsv = RGB2HSV(r, g, b);
        let a = parseInt(hex.substr(7, 2), 16);
        if (isNaN(a)) {
            a = 255;
        }
        me['_lL'] = ('0' + a.toString(16)).slice(-2);
        me['_lK'](hsv, hex);
        if (me['_lG']) {
            me['_lM'](a);
        }
    },
    '_lM'(a) {
        let me = this;
        let ai = node('_mx_ai_' + me.id);
        let alphaWidth = node('_mx_at_' + me.id).clientWidth;
        let slider = ai.clientWidth / 2;
        a /= 255;
        a *= alphaWidth;
        a -= slider;
        ai.style.left = a + 'px';
    },
    '_lJ'() {
        let me = this;
        let n = node('_mx_bc_' + me.id);
        let hex = me['_lI'];
        if (me['_lG']) {
            node('_mx_at_' + me.id).style.background = 'linear-gradient(to right, ' + hex + '00 0%,' + hex + ' 100%)';
            hex += me['_lL'];
        }
        n.style.background = hex;
        let n1 = node('_mx_v_' + me.id);
        n1.value = hex;
    },
    '_lO<pointerdown>'(e) {
        let me = this, pickerZone = node('_mx_cz_' + me.id).clientWidth, pickerIndicator = node('_mx_ci_' + me.id).clientWidth / 2, offset = e.eventTarget.getBoundingClientRect(), left = e.pageX - offset.x - window.pageXOffset, top = e.pageY - offset.y - window.pageYOffset, s = left / pickerZone, v = (pickerZone - top) / pickerZone;
        me['_lK']({
            h: me['_lH'].h,
            s: s,
            v: v
        });
        let current = node('_mx_ci_' + me.id);
        let styles = getComputedStyle(current);
        let sleft = styles.left;
        let stop = styles.top;
        let startX = parseInt(sleft, 10);
        let startY = parseInt(stop, 10);
        let pos = e;
        me['_gL'](e, (event) => {
            let offsetY = event.pageY - pos.pageY;
            let offsetX = event.pageX - pos.pageX;
            offsetY += startY;
            if (offsetY <= -pickerIndicator)
                offsetY = -pickerIndicator;
            else if (offsetY >= (pickerZone - pickerIndicator))
                offsetY = pickerZone - pickerIndicator;
            offsetX += startX;
            if (offsetX <= -pickerIndicator)
                offsetX = -pickerIndicator;
            else if (offsetX >= (pickerZone - pickerIndicator))
                offsetX = pickerZone - pickerIndicator;
            current.style.left = offsetX + 'px';
            current.style.top = offsetY + 'px';
            let s = (offsetX + pickerIndicator) / pickerZone;
            let v = (pickerZone - (offsetY + pickerIndicator)) / pickerZone;
            me['_lK']({
                h: me['_lH'].h,
                s: s,
                v: v
            });
        });
    },
    '_lP<pointerdown>'(e) {
        let me = this;
        let current = e.eventTarget;
        let indicator = node('_mx_si_' + me.id);
        let pickerZone = node('_mx_cz_' + me.id).clientWidth;
        let slider = indicator.clientHeight / 2;
        let offset = current.getBoundingClientRect(), top = e.pageY - offset.y - window.scrollY, h = top / pickerZone * 360;
        me['_lK']({
            h: h,
            s: me['_lH'].s,
            v: me['_lH'].v
        });
        let startY = parseInt(getComputedStyle(indicator).top, 10);
        me['_gL'](e, event => {
            let offsetY = event.pageY - e.pageY;
            offsetY += startY;
            if (offsetY <= -slider)
                offsetY = -slider;
            else if (offsetY >= (pickerZone - slider))
                offsetY = pickerZone - slider;
            indicator.style.top = offsetY + 'px';
            let h = (offsetY + slider) / pickerZone * 360;
            me['_lK']({
                h: h,
                s: me['_lH'].s,
                v: me['_lH'].v
            }, null, true);
        });
    },
    '_lQ<pointerdown>'(e) {
        let current = e.eventTarget;
        let me = this;
        let indicator = node('_mx_ai_' + me.id);
        let alphaWidth = node('_mx_at_' + me.id).clientWidth;
        let slider = indicator.clientWidth / 2;
        let offset = current.getBoundingClientRect(), left = e.pageX - offset.x, a = (left / alphaWidth * 255) | 0;
        me['_lL'] = ('0' + a.toString(16)).slice(-2);
        me['_lM'](a);
        me['_lJ']();
        let styles = getComputedStyle(indicator);
        let startX = parseInt(styles.left, 10);
        me['_gL'](e, (event) => {
            let offsetX = event.pageX - e.pageX;
            offsetX += startX;
            if (offsetX <= -slider)
                offsetX = -slider;
            else if (offsetX >= (alphaWidth - slider))
                offsetX = alphaWidth - slider;
            indicator.style.left = offsetX + 'px';
            let a = round((offsetX + slider) / alphaWidth * 255);
            me['_lL'] = ('0' + a.toString(16)).slice(-2);
            me['_lJ']();
        });
    },
    '_lR<click>'() {
        let me = this;
        me['_gN']();
        let n = node('_mx_v_' + me.id);
        let c = n.value;
        if (c != me['_lF']) {
            me.digest({
                color: c,
                current: c
            });
            dispatch(me.root, 'input', {
                color: me['_lF'] = c
            });
        }
    },
    '_lS<click>'(e) {
        this['_lN'](e.params.color);
        e.eventTarget.classList.add('rd-ku');
    },
    '_lT'(node) {
        return inside(node, this.root);
    },
    async '_gM'() {
        let n = node('_mx_bd_' + this.id);
        let d = getComputedStyle(n).display;
        if (d == 'none') {
            n.style.display = 'block';
            index_2["_lU"](this);
            node('_mx_root_' + this.id).classList.add('rd-km');
            if (!this['_lV']) {
                await this.digest({
                    renderUI: true
                });
                this['_lV'] = 1;
            }
            this['_lN'](this['_lF']);
        }
    },
    '_gN'() {
        let n = node('_mx_bd_' + this.id);
        let d = getComputedStyle(n).display;
        if (d != 'none') {
            node('_mx_root_' + this.id).classList.remove('rd-km');
            n.style.display = 'none';
            index_2["_js"](this);
        }
    },
    '_gp<click>'() {
        if (this.get('disabled'))
            return;
        let n = node('_mx_bd_' + this.id);
        let d = getComputedStyle(n).display;
        if (d == 'none') {
            this['_gM']();
        }
        else {
            this['_gN']();
        }
    },
    '_lW<click>'() {
        if (this.get('disabled'))
            return;
        let me = this, c = '';
        if (me['_lV']) {
            let cr = node('_mx_v_' + me.id).value;
            me['_gN']();
            me.digest({
                color: '',
                current: cr
            });
        }
        else {
            me.digest({
                color: ''
            });
        }
        dispatch(me.root, 'input', {
            color: me['_lF'] = c
        });
    }
}).merge(index_1);

});