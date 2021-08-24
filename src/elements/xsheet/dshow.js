/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/xsheet/dshow",["51","../../5g/xsheet","../../50/5d","../../50/5u"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let xsheet_1 = require("../../5g/xsheet");
let history_1 = require("../../50/5d");
let stage_selection_1 = require("../../50/5u");
let { View, mark, node, dispatch } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,
	error,
	i18n,}=$dataFromView,
$text,
$vnode_2,
$vnode_1;
$text='';if(error){;$text+=' '+(error)+' ';}else{;$text+=' '+(i18n('kz'))+' ';};$vnode_2=[$createVNode(0,$text)];$vnode_1=[$createVNode('div',{'id': '_rd_tip_'+$viewId,'class': 'rd-g9 rd-gO rd-ha rd-hs',},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-gV rd-gj rd-h0 rd-ig rd-iz','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit),'id': '_rd_sheet_'+$viewId,'mx5-pointerdown': $viewId+'_kg()','mx5-contextmenu': $viewId+'_kg()','tabindex': 0,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.on('destroy', () => {
            let sheet = this['_lb'];
            if (sheet && window.luckysheet) {
                luckysheet.destroy({
                    container: '_rd_sheet_' + this.id
                });
            }
        });
    },
    assign(data) {
        this.set(data);
    },
    async render() {
        let m = mark(this, '_gt');
        if (!this['_kV']) {
            await this.digest();
            let sheet = this['_lb'];
            try {
                if (!sheet) {
                    await xsheet_1();
                    if (m()) {
                        let props = this.get('props');
                        luckysheet.create({
                            showtoolbar: false,
                            showsheetbar: false,
                            showinfobar: false,
                            enableAddBackTop: false,
                            enableAddRow: false,
                            cellRightClickConfig: {
                                copy: true,
                                copyAs: true,
                                paste: true,
                                insertRow: true,
                                insertColumn: true,
                                deleteRow: true,
                                deleteColumn: true,
                                deleteCell: true,
                                hideRow: false,
                                hideColumn: false,
                                rowHeight: false,
                                columnWidth: false,
                                clear: false,
                                matrix: false,
                                sort: false,
                                filter: false,
                                chart: false,
                                image: false,
                                link: false,
                                data: false,
                                cellFormat: false // 设置单元格格式
                            },
                            hook: {
                                updated() {
                                    props.sheetData = luckysheet.getAllSheets();
                                }
                            },
                            container: '_rd_sheet_' + this.id
                        });
                        let tipNode = node(`_rd_tip_${this.id}`);
                        tipNode.parentNode.removeChild(tipNode);
                        this['_lb'] = 1;
                    }
                }
                else {
                    dispatch(window, 'resize');
                }
            }
            catch (ex) {
                this.digest({
                    error: this['_kV'] = ex
                });
            }
        }
        else {
            this.digest({
                error: this['_kV']
            });
        }
    },
    '_kg<pointerdown,contextmenu>'(e) {
        if (e['_g8'])
            return;
        // let { target } = e;
        // if (target.id != `${this.id}_pv`) {
        e['_g8'] = 1;
        let element = this.get('element');
        if (stage_selection_1["ge"](element)) {
            history_1["gd"](history_1['gu'], element.props.ename);
        }
        //}
    }
});

});