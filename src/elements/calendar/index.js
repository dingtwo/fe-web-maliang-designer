/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/calendar/index",["4e","../../4l/4o/index"],(require,exports,module)=>{
let $quick_d9_0_static_attr={'class': 'rd-e1 rd-ed rd-ee rd-ei',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let index_1 = require("../../4l/4o/index");
let { View } = magix_1;
let weeks = '日一二三四五六'.split('');
let GetNumOfDays = (year, month) => {
    return 32 - new Date(year, month - 1, 32).getDate();
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
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
$vnode_3=[];$vnode_4=[];
for(let $q_c_ulcwtfcx=weekText.length,$q_key_bugbqeql=0;$q_key_bugbqeql<$q_c_ulcwtfcx;$q_key_bugbqeql+=1){
let wt=weekText[$q_key_bugbqeql];
$vnode_5=[$createVNode(0,(wt))];$vnode_4.push($createVNode('td',{'style': 'font-size:'+(props.theadFontsize)+(unit)+';background:'+(props.theadRowBackground),},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
for(let $q_c_jskpudd=weeks.length,$q_key_winsj=0;$q_key_winsj<$q_c_jskpudd;$q_key_winsj+=1){
let weekDays=weeks[$q_key_winsj];
$vnode_4=[];
for(let $q_c_ejpcepzc=weekDays.length,$q_key_guygvpqd=0;$q_key_guygvpqd<$q_c_ejpcepzc;$q_key_guygvpqd+=1){
let wd=weekDays[$q_key_guygvpqd];
let date=`${wd.year}-${wd.month}-${wd.day}`;;$text='';if(!wd.otherMonth){;$text+=' '+(wd.day)+' ';};$vnode_5=[$createVNode(0,$text)];$vnode_4.push($createVNode('td',{'style': 'font-size:'+(props.tbodyFontsize)+(unit),'title': ((!wd.otherMonth))&&((date)),},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1=[$createVNode('table',$quick_d9_0_static_attr,$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-el rd-fH rd-fq','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        index_1['_d4'](5 * 60 * 1000, update);
        this.on('destroy', () => {
            index_1['_d3'](update);
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