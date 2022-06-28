/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
let { node, applyStyle, View } = Magix;
applyStyle('@:content.less');

export default View.extend({
  tmpl: '@:formatModal.html',
  init(data) {
    this['@:{dialog}'] = data.dialog;
    this['@:{itemData}'] = data.itemData;
  },
  render(data) {
    console.log('render data', data);
    this.digest({
      body: 123123,
      itemData: this['@:{itemData}'],
    });
  },
  '@:{cancel}<click>'() {
    this['@:{dialog}'].close();
  },
  '@:{apply}<click>'() {
    let value = (node('_rd_ta_' + this.id) as HTMLTextAreaElement).value.trim();
    console.log('value value', value);
    console.log('this.id this.id', this.id);
    console.log(" this['@:{itemData}']", this['@:{itemData}']);

    this['@:{dialog}'].close();
  },
}).static({
  // async '@:{read.file}'(target: HTMLElement) {
  //   console.log('123132', 123123);
  //   let readMark = mark(this, '@:{save.async}');
  //   try {
  //     let content = await FileSystemProvider['@:{read.file}'](target as HTMLInputElement);
  //     tryApplyContent(content);
  //   } catch (ex) {
  //     if (readMark() && ex.name != 'AbortError') {
  //       Vframe.root().invoke('alert', [ex.message]);
  //     }
  //   }
  // },
  // async '@:{save}'() {
  //   let saveMark = mark(this, '@:{save.async}');
  //   try {
  //     await FileSystemProvider['@:{prepare}']();
  //   } catch (ex) {
  //     Vframe.root().invoke('alert', [ex.message]);
  //     return;
  //   }
  //   if (saveMark()) {
  //     Toast.show(I18n('@:{lang#export.file.processing}'));
  //     let now = new Date();
  //     let time = [
  //       now.getFullYear(),
  //       padStart(now.getMonth() + 1, 2, '0'),
  //       padStart(now.getDate(), 2, '0'),
  //       padStart(now.getHours(), 2, '0'),
  //       padStart(now.getMinutes(), 2, '0'),
  //       padStart(now.getSeconds(), 2, '0'),
  //     ].join('');
  //     let value = ToJSON();
  //     try {
  //       value = prefix + btoa(encodeURIComponent(value));
  //       await FileSystemProvider['@:{save.file}'](
  //         `${I18n('@:{lang#site.name}')}-${time}.rd`,
  //         value,
  //       );
  //       Toast.show(I18n('@:{lang#export.success}'), 3e3);
  //     } catch (ex) {
  //       Toast.hide();
  //       if (saveMark() && ex.name != 'AbortError') {
  //         Vframe.root().invoke('alert', [ex.message]);
  //       }
  //     }
  //   }
  // },
});
