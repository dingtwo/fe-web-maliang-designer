/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import I18n from '../../i18n/index';
import Const from '../../designer/const';
import Transform from '../../designer/transform';
let { View, dispatch } = Magix;
let BorderTypeList = Const['@:{const#border.types}'];
let Borders = ['Top', 'Right', 'Bottom', 'Left'];
let BorderRadius = ['LeftTop', 'RightTop', 'LeftBottom', 'RightBottom'];
let BordersText = [I18n('@:{lang#dir.top}'),
I18n('@:{lang#dir.right}'),
I18n('@:{lang#dir.bottom}'),
I18n('@:{lang#dir.left}')];
let BorderRadiusText = [I18n('@:{lang#dir.lefttop}'),
I18n('@:{lang#dir.righttop}'),
I18n('@:{lang#dir.rightbottom}'),
I18n('@:{lang#dir.leftbottom}')];
export default View.extend({
    tmpl: '@:./style.html',
    init() {
        this.set({
            step: Const["@:{const#unit.step}"],
            fixed: Const["@:{const#unit.fixed}"],
            max: () => Const["@:{const#to.unit}"](10),
            read: Transform["@:{transform#to.show.value}"],
            bt: BordersText,
            brt: BorderRadiusText,
            brs: BorderRadius,
            borders: Borders,
            borderTypes: BorderTypeList
        });
    },
    assign(data) {
        let { props, disabled } = data;
        let { rows, focusRow, focusCol } = props;
        if (focusRow == -1) {
            focusRow = 0;
        }
        if (focusCol == -1) {
            focusCol = 0;
        }
        let cell = rows[focusRow].cols[focusCol];
        this.set({
            disabled,
            cell,
            rows,
            focusRow,
            focusCol
        });
    },
    render() {
        this.digest();
    },
    '@:{update.border.width}<input>'(e) {
        this['@:{stop.propagation}'](e);
        let { key } = e.params;
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell[`border${key}Width`] = Transform["@:{transform#to.real.value}"](e.value);
        dispatch(this.root, 'change', {
            rows
        });
    },
    '@:{update.border.radius}<input>'(e) {
        this['@:{stop.propagation}'](e);
        let { key } = e.params;
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell[`border${key}Radius`] = Const['@:{const#scale.to.unit}'](Transform["@:{transform#to.real.value}"](e.value));
        dispatch(this.root, 'change', {
            rows
        });
    },
    '@:{change.border.style}<change>'(e) {
        this['@:{stop.propagation}'](e);
        let { key } = e.params;
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell[`border${key}Style`] = e.value;
        dispatch(this.root, 'change', {
            rows
        });
    },
    '@:{update.border.color}<input>'(e) {
        this['@:{stop.propagation}'](e);
        let { key } = e.params;
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell[`border${key}Color`] = e.color;
        dispatch(this.root, 'change', {
            rows
        });
    }
});