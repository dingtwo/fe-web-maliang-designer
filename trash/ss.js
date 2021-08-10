//#snippet;
//#exclude=define,before
((global, undefined) => {
    let cachedMods = {};
    let get = id => cachedMods[id] || (cachedMods[id] = {});
    let exec = mod => {
        if (mod['@:{execed}']) {
            return mod.exports;
        }
        mod['@:{execed}'] = 1;
        let factory = mod['@:{factory}'];
        let exports = factory(id => exec(get(id)), mod.exports = {}, mod);

        if (exports === undefined) {
            exports = mod.exports;
        }
        // Reduce memory leak
        delete mod['@:{factory}'];
        mod.exports = exports;
        return exports;
    };
    global.define = (id, deps, factory) => {
        let mod = get(id);
        mod['@:{id}'] = id;
        mod['@:{dependencies}'] = deps;
        mod['@:{factory}'] = factory;
    };

    global.require = function (id) {
        let mod = get(id)
        if (!mod['@:{execed}']) {
            exec(mod);
        }
        return mod.exports;
    };
})(this);