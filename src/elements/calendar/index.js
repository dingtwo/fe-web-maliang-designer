/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/calendar/index",["magix5","../../gallery/mx-runner/index"],(require,exports,module)=>{
let $quick_gu_0_static_attr={'class': 'rd-_assets_index_less_-hp100 rd-_assets_index_less_-table rd-_assets_index_less_-tc rd-_assets_index_less_-wp100',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let index_1 = require("../../gallery/mx-runner/index");
let { View } = magix_1;
let weeks = '日一二三四五六'.split('');
let GetNumOfDays = (year, month) => {
    return 32 - new Date(year, month - 1, 32).getDate();
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,
	weekText,
	weeks,}=$dataFromView,
$vnode_5,
$vnode_4,
$text,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_3=[];$vnode_4=[];$__line=6;$__art="{{each weekText as wt}}";$__ctrl="for(let $q_c_wzqmbwscr=weekText.length,$q_key_dptebno=0;$q_key_dptebno<$q_c_wzqmbwscr;$q_key_dptebno++){let wt=weekText[$q_key_dptebno];";
for(let $q_c_wzqmbwscr=weekText.length,$q_key_dptebno=0;$q_key_dptebno<$q_c_wzqmbwscr;$q_key_dptebno+=1){
let wt=weekText[$q_key_dptebno];
$vnode_5=[$createVNode(0,($__line=7,$__art='{{=wt}}',$__ctrl='<%=wt%>',(wt)))];$vnode_4.push($createVNode('td',{'style': 'font-size:'+($__line=7,$__art='{{=props.theadFontsize}}',$__ctrl='<%=props.theadFontsize%>',(props.theadFontsize))+($__line=7,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';background:'+($__line=7,$__art='{{=props.theadRowBackground}}',$__ctrl='<%=props.theadRowBackground%>',(props.theadRowBackground)),},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));$__line=11;$__art="{{each weeks as weekDays}}";$__ctrl="for(let $q_c_vflglae=weeks.length,$q_key_sdojntzkb=0;$q_key_sdojntzkb<$q_c_vflglae;$q_key_sdojntzkb++){let weekDays=weeks[$q_key_sdojntzkb];";
for(let $q_c_vflglae=weeks.length,$q_key_sdojntzkb=0;$q_key_sdojntzkb<$q_c_vflglae;$q_key_sdojntzkb+=1){
let weekDays=weeks[$q_key_sdojntzkb];
$vnode_4=[];$__line=13;$__art="{{each weekDays as wd}}";$__ctrl="for(let $q_c_qmuww=weekDays.length,$q_key_pyuiq=0;$q_key_pyuiq<$q_c_qmuww;$q_key_pyuiq++){let wd=weekDays[$q_key_pyuiq];";
for(let $q_c_qmuww=weekDays.length,$q_key_pyuiq=0;$q_key_pyuiq<$q_c_qmuww;$q_key_pyuiq+=1){
let wd=weekDays[$q_key_pyuiq];
($__line=14,$__art='{{set date=`${wd.year}-${wd.month}-${wd.day}`}}','');$__ctrl='<%let date=`${wd.year}-${wd.month}-${wd.day}`;%>';let date=`${wd.year}-${wd.month}-${wd.day}`;;$text=($__line=17,$__art='{{if !wd.otherMonth}}','');$__ctrl='<%if(!wd.otherMonth){%>';if(!wd.otherMonth){;$text+=' '+($__line=18,$__art='{{=wd.day}}',$__ctrl='<%=wd.day%>',(wd.day))+' '+($__line=19,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_5=[$createVNode(0,$text)];$vnode_4.push($createVNode('td',{'style': 'font-size:'+($__line=15,$__art='{{=props.tbodyFontsize}}',$__ctrl='<%=props.tbodyFontsize%>',(props.tbodyFontsize))+($__line=15,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),'title': (($__line=16,$__art='{{=!wd.otherMonth}}',$__ctrl='<%=!wd.otherMonth%>',!wd.otherMonth))&&(($__line=16,$__art='{{=date}}',$__ctrl='<%=date%>',(date))),},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1=[$createVNode('table',$quick_gu_0_static_attr,$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=2,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=2,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=2,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=2,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=2,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=2,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=2,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=2,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=2,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=2,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg)',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/calendar/index.html'; throw msg; }  } ,
    init() {
        let update = this.render.bind(this);
        index_1['@:{task.add~rs}'](5 * 60 * 1000, update);
        this.on('destroy', () => {
            index_1['@:{task.remove~rs}'](update);
        });
    },
    assign(data) {
        this.set(data);
        let weekStart = data.props.weekStart;
        let weekText = weeks.slice(weekStart);
        if (weekStart > 0) {
            weekText = weekText.concat(weeks.slice(0, weekStart));
        }
        this.set({
            weekText,
            weekStart
        });
    },
    render() {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();
        now.setHours(0, 0, 0, 0);
        let weekStart = this.get('weekStart');
        let startOffset = (7 - weekStart + new Date(year, month - 1, 1).getDay()) % 7;
        let trs = [], tds = [];
        let days = GetNumOfDays(year, month), i;
        //let preDays = GetNumOfDays(year, month - 1);
        //let day, date, y;
        for (i = 1; i <= startOffset; i++) {
            //day = preDays - (startOffset - i);
            //date = new Date(year, month - 2, day);
            //y = date.getFullYear();
            tds.push({
                //year: y,
                //month: month - 1,
                //day: day,
                //lunar: getLunarCalendar(y, month, day),
                otherMonth: true
            });
        }
        for (i = 1; i <= days; i++) {
            //date = new Date(year, month - 1, i);
            tds.push({
                year,
                day: i,
                month: month
            });
            if (((i + startOffset) % 7) === 0) {
                trs.push(tds);
                tds = [];
            }
        }
        let fillStart = tds.length; //补充
        if (fillStart) {
            let fillEnd = 7; //2周
            for (i = fillStart; i < fillEnd; i++) {
                //day = i - fillStart + 1;
                //date = new Date(year, month, day);
                tds.push({
                    //month: month + 1,
                    //day: day,
                    //year: date.getFullYear(),
                    otherMonth: true
                });
                if ((i + 1) % 7 === 0) {
                    trs.push(tds);
                    tds = [];
                    if (trs.length == 6)
                        break;
                }
            }
        }
        this.digest({
            year,
            month,
            day,
            weeks: trs
        });
    }
});

});