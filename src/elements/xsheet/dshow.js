/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/xsheet/dshow",["magix5","../../provider/xsheet","../../designer/history","../../designer/stage-selection"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let xsheet_1 = require("../../provider/xsheet");
let history_1 = require("../../designer/history");
let stage_selection_1 = require("../../designer/stage-selection");
let { View, mark, node, dispatch } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,
	error,
	i18n,}=$dataFromView,
$text,
$vnode_2,
$vnode_1;
$text=($__line=3,$__art='{{if error}}','');$__ctrl='<%if(error){%>';if(error){;$text+=' '+($__line=4,$__art='{{=error}}',$__ctrl='<%=error%>',(error))+' '+($__line=5,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$text+=' '+($__line=6,$__art='{{=i18n(\'@:{lang#elements.loading.library.tip~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#elements.loading.library.tip~rs}\')%>',(i18n('@:{lang#elements.loading.library.tip~rs}')))+' '+($__line=7,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2=[$createVNode(0,$text)];$vnode_1=[$createVNode('div',{'id': '_rd_tip_'+($__line=2,$__art='{{=$viewId}}','')+$viewId,'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-hp100 rd-_assets_index_less_-justify-content-center',},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-outline-none rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pa rd-_assets_index_less_-touch-action-none rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),'id': '_rd_sheet_'+($__line=1,$__art='{{=$viewId}}','')+$viewId,'mx5-pointerdown': $viewId+'@:{stop~rs}()','mx5-contextmenu': $viewId+'@:{stop~rs}()','tabindex': 0,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/xsheet/dshow.html'; throw msg; }  } ,
    init() {
        this.on('destroy', () => {
            let sheet = this['@:{sheet.instance~rs}'];
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
        let m = mark(this, '@:{render~rs}');
        if (!this['@:{exception~rs}']) {
            await this.digest();
            let sheet = this['@:{sheet.instance~rs}'];
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
                        this['@:{sheet.instance~rs}'] = 1;
                    }
                }
                else {
                    dispatch(window, 'resize');
                }
            }
            catch (ex) {
                this.digest({
                    error: this['@:{exception~rs}'] = ex
                });
            }
        }
        else {
            this.digest({
                error: this['@:{exception~rs}']
            });
        }
    },
    '@:{stop~rs}<pointerdown,contextmenu>'(e) {
        if (e['@:{halt~rs}'])
            return;
        // let { target } = e;
        // if (target.id != `${this.id}_pv`) {
        e['@:{halt~rs}'] = 1;
        let element = this.get('element');
        if (stage_selection_1["@:{selection#set~rs}"](element)) {
            history_1["@:{history#save~rs}"](history_1['@:{history#element.get.focus~rs}'], element.props.ename);
        }
        //}
    }
});

});