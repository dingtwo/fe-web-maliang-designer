/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("printer/unit/richtext",["magix5","../../designer/const","../../provider/html2canvas","../generic/index"],(require,exports,module)=>{


let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let html2canvas_1 = require("../../provider/html2canvas");
let index_1 = require("../generic/index");
let { task, lowTaskFinale, isArray, has } = magix_1;
let ignoreTagNames = {
    TD: 1,
    BR: 1
};
let ascSort = (a, b) => a - b;
let ascRect = (a, b) => a.y - b.y;
let collectRect = (rects, range) => {
    let rect = range.getBoundingClientRect();
    if (rect.height) {
        let key = `${rect.y}~${rect.height}`;
        if (!rects[key]) {
            rects[key] = 1;
            rects.push({
                //x: window.pageXOffset + rect.x,
                y: window.pageYOffset + rect.y,
                //width: rect.width,
                height: rect.height
            });
        }
    }
};
let getRectsFromNode = async (nodes) => {
    let range = document.createRange();
    let rects = [];
    let collectRects = node => {
        window.scrollTo(0, 0);
        if (node.nodeType == 3) {
            let len = 0;
            while (len < node.length) {
                range.setStart(node, len);
                range.setEnd(node, len + 1);
                collectRect(rects, range);
                len++;
            }
        }
        else {
            range.setStartBefore(node);
            range.setEndAfter(node);
            collectRect(rects, range);
        }
    };
    let walk = nodes => {
        for (let e of nodes) {
            if (e.nodeType == 3) {
                task(collectRects, [e]);
            }
            else if (e.nodeType == 1) {
                if (e.childNodes.length) {
                    task(walk, e.childNodes);
                }
                else if (!has(ignoreTagNames, e.tagName.toUpperCase())) {
                    task(collectRects, [e]);
                }
            }
        }
    };
    walk(nodes);
    await lowTaskFinale();
    //console.log(rects);
    return rects.sort(ascRect);
};
let getSplitLines = async (rootBound, rects) => {
    let lines = [];
    let test = rect => {
        let line = rect.y + rect.height;
        let canInsert = 1, minTop;
        for (let r of rects) {
            let bottomLine = r.y + r.height;
            if (bottomLine > line &&
                r.y < line) {
                canInsert = 0;
                break;
            }
            if (r.y > line &&
                (minTop == null || r.y < minTop)) {
                minTop = r.y;
            }
        }
        if (canInsert) {
            let realInsert = line - rootBound.y;
            if (minTop != null) {
                minTop -= rootBound.y;
                realInsert += (minTop - realInsert) / 2;
            }
            if (lines.indexOf(realInsert) == -1) {
                lines.push(realInsert);
            }
        }
    };
    for (let rect of rects) {
        task(test, [rect]);
    }
    await lowTaskFinale();
    return lines.sort(ascSort);
};
let fillPieceImages = async (lines, canvas, scale, images) => {
    let temp = document.createElement('canvas');
    let ctx = temp.getContext('2d');
    let pre = 0;
    let width = canvas.width;
    temp.width = width;
    lines[lines.length - 1] = canvas.height / scale; //最后一个强制是canvas的末尾
    let add = last => {
        let h = (last - pre) * scale;
        if (h > 0) {
            temp.height = h;
            ctx.drawImage(canvas, 0, pre * scale, width, h, 0, 0, width, h);
            images.push({
                '@:{data~rs}': temp.toDataURL('image/png', 1.0),
                '@:{width~rs}': width / scale,
                '@:{height~rs}': h / scale
            });
        }
        ctx.clearRect(0, 0, width, h);
        pre = last;
    };
    for (let l of lines) {
        task(add, [l]);
    }
    await lowTaskFinale();
};
let getImages = async (props, unit, type) => {
    let scale = 2;
    let images = [];
    let oldX = props.x, oldY = props.y;
    props.x = 0;
    props.y = 0;
    index_1['@:{show.msg~rs}']('富文本:正在检测图片...');
    let root = await index_1['@:{mount.display.of.element~rs}'](type, {
        props,
        unit
    });
    props.x = oldX;
    props.y = oldY;
    let textNode = root.firstElementChild;
    await index_1['@:{double.check.images~rs}'](textNode, false);
    index_1['@:{show.msg~rs}']('富文本:正在准备环境和数据...');
    await html2canvas_1();
    window.scrollTo(0, 0);
    let canvas = await html2canvas(textNode, {
        useCORS: true,
        scale
    });
    // canvas.style.cssText='position:absolute;left:0;top:0';
    // document.body.appendChild(canvas);
    index_1['@:{show.msg~rs}']('富文本:正在检测分割点...');
    let rootBound = textNode.getBoundingClientRect();
    let rects = await getRectsFromNode([textNode]);
    let lines = await getSplitLines(rootBound, rects);
    index_1['@:{show.msg~rs}']('富文本:正在分割...');
    await fillPieceImages(lines, canvas, scale, images);
    return images;
};
module.exports= async (dataCenter, resLoader, richText, fromIndex, page, pageFooterHeight, unit, newPage) => {
    let { props, type, id } = richText;
    let validHeight = const_1['@:{const#to.px~rs}'](page.height - pageFooterHeight - props.y);
    let useType = 'richtext';
    if (type == 'data-richtext') {
        richText.type = 'richtext';
        let bind = props.bind;
        if (bind.url) {
            props.splitToPages = true;
            let { '@:{error~rs}': err, '@:{data~rs}': list } = dataCenter[bind.url];
            let bindField = bind.fields[0];
            if (err) {
                props.text = err;
            }
            else {
                let first = isArray(list) ? list[0] : list;
                props.text = first[bindField.id];
            }
        }
        else {
            props.height = const_1['@:{const#to.unit~rs}'](30);
        }
    }
    else if (type == 'html') {
        let bind = props.bind;
        props.splitToPages = true;
        if (bind.url) {
            let { '@:{error~rs}': err, '@:{data~rs}': list } = dataCenter[bind.url];
            if (!err) {
                bind._data = list;
            }
        }
        richText.type = 'richtext';
        useType = 'html';
    }
    if (props.splitToPages) {
        try {
            let imgs = resLoader[`@:{source.of.images~rs}_${id}`];
            if (!imgs) {
                imgs = await getImages(props, unit, useType);
                resLoader[`@:{source.of.images~rs}_${id}`] = imgs;
            }
            let start = fromIndex;
            let end = imgs.length;
            let usedImages = [];
            while (start < end) {
                let i = imgs[start];
                if (validHeight < i['@:{height~rs}']) {
                    if (!usedImages.length) {
                        start++;
                        usedImages.push(i);
                    }
                    break;
                }
                else {
                    validHeight -= i['@:{height~rs}'];
                    usedImages.push(i);
                }
                start++;
            }
            let recastHTML = `<div style="display:flex;flex-direction:column;">`;
            for (let i of usedImages) {
                recastHTML += `<img src="${i['@:{data~rs}']}" style="width:${i['@:{width~rs}']}px;height:${i['@:{height~rs}']}px"/>`;
            }
            recastHTML += `</div>`;
            props.text = recastHTML;
            newPage.push(richText);
            return start < end ? start : -1;
        }
        catch (ex) {
            props.text = ex.message || ex.name;
        }
        finally {
            index_1['@:{hide.msg~rs}']();
        }
    }
    newPage.push(richText);
    return -1;
};

});