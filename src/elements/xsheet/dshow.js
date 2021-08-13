/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/xsheet/dshow",["5c","../../5r/xsheet","../../5b/5o","../../5b/69"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let xsheet_1 = require("../../5r/xsheet");
let history_1 = require("../../5b/5o");
let stage_selection_1 = require("../../5b/69");
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
$text='';if(error){;$text+=' '+(error)+' ';}else{;$text+=' '+(i18n('qo'))+' ';};$vnode_2=[$createVNode(0,$text)];$vnode_1=[$createVNode('div',{'id': '_rd_tip_'+$viewId,'class': 'rd-mC rd-mX rd-mZ rd-ng',},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-l8 rd-mJ rd-n5 rd-nO rd-on','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit),'id': '_rd_sheet_'+$viewId,'mx5-pointerdown': $viewId+'_p2()','mx5-contextmenu': $viewId+'_p2()','tabindex': 0,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.on('destroy', () => {
            let sheet = this['_qX'];
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
        let m = mark(this, '_mh');
        if (!this['_qG']) {
            await this.digest();
            let sheet = this['_qX'];
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
                        this['_qX'] = 1;
                    }
                }
                else {
                    dispatch(window, 'resize');
                }
            }
            catch (ex) {
                this.digest({
                    error: this['_qG'] = ex
                });
            }
        }
        else {
            this.digest({
                error: this['_qG']
            });
        }
    },
    '_p2<pointerdown,contextmenu>'(e) {
        if (e['_mW'])
            return;
        // let { target } = e;
        // if (target.id != `${this.id}_pv`) {
        e['_mW'] = 1;
        let element = this.get('element');
        if (stage_selection_1["l3"](element)) {
            history_1["l2"](history_1['mi'], element.props.ename);
        }
        //}
    }
});

});