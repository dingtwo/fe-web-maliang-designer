/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:none
 */
if (typeof DEBUG == 'undefined')
    DEBUG = true;

/**
 * Sea.js 2.2.3 | seajs.org/LICENSE.md
 */
/*!Sea.js 2.2.3|https://github.com/seajs/seajs/blob/master/LICENSE.md*/
((global, undefined) => {

  // Avoid conflicting when `sea.js` is loaded multiple times
  if (global.seajs) {
    return
  }

  let seajs = global.seajs = {
    // The current version of Sea.js being used
    //version: "2.2.3"
  }

  let data = seajs.data = {}


  /**
   * util-lang.js - The minimal language enhancement
   */

  let isType = (type) => {
    return (obj) => {
      return {}.toString.call(obj) == `[object ${type}]`
    }
  }

  //let isObject = isType("Object")
  let isString = isType("String")
  let isArray = Array.isArray
  let isFunction = isType("Function")

  let _cid = 0
  let cid = () => {
    return _cid++
  }

  // /**
  //  * util-events.js - The minimal events support
  //  */

  // let events = data.events = {}

  // // Bind event
  // seajs.on = function(name, callback) {
  //   var list = events[name] || (events[name] = [])
  //   list.push(callback)
  //   return seajs
  // }

  // // Remove event. If `callback` is undefined, remove all callbacks for the
  // // event. If `event` and `callback` are both undefined, remove all callbacks
  // // for all events
  // seajs.off = function(name, callback) {
  //   // Remove *all* events
  //   if (!(name || callback)) {
  //     events = data.events = {}
  //     return seajs
  //   }

  //   var list = events[name]
  //   if (list) {
  //     if (callback) {
  //       for (var i = list.length - 1; i >= 0; i--) {
  //         if (list[i] === callback) {
  //           list.splice(i, 1)
  //         }
  //       }
  //     }
  //     else {
  //       delete events[name]
  //     }
  //   }

  //   return seajs
  // }

  // Emit event, firing all bound callbacks. Callbacks receive the same
  // arguments as `emit` does, apart from the event name
  //var emit = seajs.emit = function(name, data) {
  // var list = events[name], fn

  // if (list) {
  //   // Copy callback lists to prevent modification
  //   list = list.slice()

  //   // Execute event callbacks
  //   while ((fn = list.shift())) {
  //     fn(data)
  //   }
  // }

  // return seajs
  //}


  /**
   * util-path.js - The utilities for operating path such as id, uri
   */

  let DIRNAME_RE = /[^?#]*\//

  let DOT_RE = /\/\.\//g
  let DOUBLE_DOT_RE = /\/[^/]+\/\.\.\//
  let DOUBLE_SLASH_RE = /([^:/])\/\//g

  // Extract the directory portion of a path
  // dirname("a/b/c.js?t=123#xx/zz") ==> "a/b/"
  // ref: http://jsperf.com/regex-vs-split/2
  let dirname = (path) => {
    return path.match(DIRNAME_RE)[0]
  }

  // Canonicalize a path
  // realpath("http://test.com/a//./b/../c") ==> "http://test.com/a/c"
  let realpath = (path) => {
    // /a/b/./c/./d ==> /a/b/c/d
    path = path.replace(DOT_RE, "/")

    // a/b/c/../../d  ==>  a/b/../d  ==>  a/d
    while (path.match(DOUBLE_DOT_RE)) {
      path = path.replace(DOUBLE_DOT_RE, "/")
    }

    // a//b/c  ==>  a/b/c
    path = path.replace(DOUBLE_SLASH_RE, "$1/")

    return path
  }

  // Normalize an id
  // normalize("path/to/a") ==> "path/to/a.js"
  // NOTICE: substring is faster than negative slice and RegExp
  let normalize = (path) => {
    let last = path.length - 1
    let lastC = path.charAt(last)

    // If the uri ends with `#`, just return it without '#'
    if (lastC === "#") {
      return path.substring(0, last)
    }

    return (path.substring(last - 2) === ".js" ||
      path.indexOf("?") > 0 ||
      path.substring(last - 3) === ".css" ||
      lastC === "/") ? path : path + ".js"
  }


  let PATHS_RE = /^([^/:]+)(\/.+)$/

  let parseAlias = (id) => {
    let alias = data.alias
    return alias && isString(alias[id]) ? alias[id] : id
  }

  let parsePaths = (id) => {
    let paths = data.paths
    let m

    if (paths && (m = id.match(PATHS_RE)) && isString(paths[m[1]])) {
      id = paths[m[1]] + m[2]
    }

    return id
  }



  let ABSOLUTE_RE = /^\/\/.|:\//
  let ROOT_DIR_RE = /^.*?\/\/.*?\//

  let addBase = (id, refUri) => {
    let ret
    let first = id.charAt(0)

    // Absolute
    if (ABSOLUTE_RE.test(id)) {
      ret = id
    }
    // Relative
    else if (first === ".") {
      ret = realpath((refUri ? dirname(refUri) : data.cwd) + id)
    }
    // Root
    else if (first === "/") {
      let m = data.cwd.match(ROOT_DIR_RE)
      ret = m ? m[0] + id.substring(1) : id
    }
    // Top-level
    else {
      ret = data.base + id
    }

    // Add default protocol when uri begins with "//"
    if (ret.indexOf("//") === 0) {
      ret = location.protocol + ret
    }

    return ret
  }

  let id2Uri = (id, refUri) => {
    if (!id) return ""

    id = parseAlias(id)
    id = parsePaths(id)
    id = normalize(id)

    let uri = addBase(id, refUri)

    return uri
  }


  let doc = document
  let cwd = dirname(doc.URL)
  let scripts = doc.scripts
  let getScriptAbsoluteSrc = (node) => {
    return node.hasAttribute ? // non-IE6/7
      node.src :
      // see http://msdn.microsoft.com/en-us/library/ms536429(VS.85).aspx
      node.getAttribute("src", 4)
  }
  // Recommend to add `seajsnode` id for the `sea.js` script element
  let loaderScript = scripts[scripts.length - 1]

  // When `sea.js` is inline, set loaderDir to current working directory
  let loaderDir = dirname(getScriptAbsoluteSrc(loaderScript) || cwd)




  // For Developers
  //seajs.resolve = id2Uri


  /**
   * util-request.js - The utilities for requesting script and style files
   * ref: tests/research/load-js-css/test.html
   */

  let head = doc.head;
  let baseElement = head.getElementsByTagName("base")[0]

  let IS_CSS_RE = /\.css(?:\?|$)/i
  let currentlyAddingScript
  let interactiveScript

  // `onload` event is not supported in WebKit < 535.23 and Firefox < 9.0
  // ref:
  //  - https://bugs.webkit.org/show_activity.cgi?id=38995
  //  - https://bugzilla.mozilla.org/show_bug.cgi?id=185236
  //  - https://developer.mozilla.org/en/HTML/Element/link#Stylesheet_load_events
  let isOldWebKit = +navigator.userAgent
    .replace(/.*(?:AppleWebKit|AndroidWebKit)\/(\d+).*/, "$1") < 536


  let request = (url, callback, charset, crossorigin) => {
    let isCSS = IS_CSS_RE.test(url)
    let node = doc.createElement(isCSS ? "link" : "script")

    if (charset) {
      node.charset = charset
    }

    // crossorigin default value is `false`.
    if (crossorigin != null) {
      node.setAttribute("crossorigin", crossorigin)
    }


    addOnload(node, callback, isCSS, url)

    if (isCSS) {
      node.rel = "stylesheet"
      node.href = url
    }
    else {
      node.async = true
      node.src = url
    }

    // For some cache cases in IE 6-8, the script executes IMMEDIATELY after
    // the end of the insert execution, so use `currentlyAddingScript` to
    // hold current node, for deriving url in `define` call
    currentlyAddingScript = node

    // ref: #185 & http://dev.jquery.com/ticket/2709
    baseElement ?
      head.insertBefore(node, baseElement) :
      head.appendChild(node)

    currentlyAddingScript = null
  }

  let addOnload = (node, callback, isCSS) => {
    let supportOnload = "onload" in node

    // for Old WebKit and Old Firefox
    if (isCSS && (isOldWebKit || !supportOnload)) {
      setTimeout(() => {
        pollCss(node, callback)
      }, 1) // Begin after node insertion
      return
    }

    let onload = () => {
      // Ensure only run once and handle memory leak in IE
      node.onload = node.onerror = node.onreadystatechange = null

      // Remove the script to reduce memory leak
      if (!isCSS && !data.debug) {
        head.removeChild(node)
      }

      // Dereference the node
      node = null

      callback()
    }

    if (supportOnload) {
      node.onload = onload
      node.onerror = onload
    }
    else {
      node.onreadystatechange = () => {
        if (/loaded|complete/.test(node.readyState)) {
          onload()
        }
      }
    }

  }

  let pollCss = (node, callback) => {
    let sheet = node.sheet
    let isLoaded

    // for WebKit < 536
    if (isOldWebKit) {
      if (sheet) {
        isLoaded = true
      }
    }
    // for Firefox < 9.0
    else if (sheet) {
      try {
        if (sheet.cssRules) {
          isLoaded = true
        }
      } catch (ex) {
        // The value of `ex.name` is changed from "NS_ERROR_DOM_SECURITY_ERR"
        // to "SecurityError" since Firefox 13.0. But Firefox is less than 9.0
        // in here, So it is ok to just rely on "NS_ERROR_DOM_SECURITY_ERR"
        if (ex.name === "NS_ERROR_DOM_SECURITY_ERR") {
          isLoaded = true
        }
      }
    }

    setTimeout(() => {
      if (isLoaded) {
        // Place callback here to give time for style rendering
        callback()
      }
      else {
        pollCss(node, callback)
      }
    }, 20)
  }

  let getCurrentScript = () => {
    if (currentlyAddingScript) {
      return currentlyAddingScript
    }

    // For IE6-9 browsers, the script onload event may not fire right
    // after the script is evaluated. Kris Zyp found that it
    // could query the script nodes and the one that is in "interactive"
    // mode indicates the current script
    // ref: http://goo.gl/JHfFW
    if (interactiveScript && interactiveScript.readyState === "interactive") {
      return interactiveScript
    }

    let scripts = head.getElementsByTagName("script")

    for (let i = scripts.length; i--;) {
      let script = scripts[i]
      if (script.readyState === "interactive") {
        interactiveScript = script
        return interactiveScript
      }
    }
  }


  // For Developers
  //seajs.request = request



  /**
   * module.js - The core of module loader
   */

  let cachedMods = seajs.cache = {}
  let anonymousMeta

  let fetchingList = {}
  let fetchedList = {}
  let callbackList = {}

  let STATUS = {
    // 1 - The `module.uri` is being fetched
    '_ld': 1,
    // 2 - The meta data has been saved to cachedMods
    '_le': 2,
    // 3 - The `module['@:{deps}']` are being loaded
    '_lf': 3,
    // 4 - The module are ready to execute
    '_lg': 4,
    // 5 - The module is being executed
    '_lh': 5,
    // 6 - The `module.exports` is available
    '_li': 6
  }


  function Module(uri, deps) {
    this.uri = uri
    this['_lj'] = deps || []
    this.exports = null
    this.status = 0

    // Who depends on me
    this['_lk'] = {}

    // The number of unloaded dependencies
    this['_ll'] = 0
  }

  // Resolve module['@:{deps}']
  Module.prototype.resolve = function () {
    let mod = this
    let ids = mod['_lj']
    let uris = []

    for (let i = 0, len = ids.length; i < len; i++) {
      uris[i] = id2Uri(ids[i], mod.uri)
    }
    return uris
  }

  // Load module['@:{deps}'] and fire onload when all done
  Module.prototype.load = function () {
    let mod = this

    // If the module is being loaded, just wait it onload call
    if (mod.status >= STATUS['_lf']) {
      return
    }

    mod.status = STATUS['_lf']

    // Emit `load` event for plugins such as combo plugin
    let uris = mod.resolve()
    //emit("load", uris)

    let len = mod['_ll'] = uris.length

    let m;
    // Initialize modules and register waitings
    for (let i = 0; i < len; i++) {
      m = Module.get(uris[i])

      if (m.status < STATUS['_lg']) {
        // Maybe duplicate: When module has dupliate dependency, it should be it's count, not 1
        m['_lk'][mod.uri] = (m['_lk'][mod.uri] || 0) + 1
      }
      else {
        mod['_ll']--
      }
    }

    if (mod['_ll'] === 0) {
      mod.onload()
      return
    }

    // Begin parallel loading
    let requestCache = {}

    for (let i = 0; i < len; i++) {
      m = cachedMods[uris[i]]

      if (m.status < STATUS['_ld']) {
        m.fetch(requestCache)
      }
      else if (m.status === STATUS['_le']) {
        m.load()
      }
    }

    // Send all requests at last to avoid cache bug in IE6-9. Issues#808
    for (let requestUri in requestCache) {
      if (requestCache.hasOwnProperty(requestUri)) {
        requestCache[requestUri]()
      }
    }
  }

  // Call this method when module is loaded
  Module.prototype.onload = function () {
    let mod = this
    mod.status = STATUS['_lg']

    if (mod['_lm']) {
      mod['_lm']()
    }

    // Notify waiting modules to fire onload
    let waitings = mod['_lk']
    let uri, m

    for (uri in waitings) {
      if (waitings.hasOwnProperty(uri)) {
        m = cachedMods[uri]
        m['_ll'] -= waitings[uri]
        if (m['_ll'] === 0) {
          m.onload()
        }
      }
    }

    // Reduce memory taken
    delete mod['_lk']
    delete mod['_ll']
  }

  // Fetch a module
  Module.prototype.fetch = function (requestCache) {
    let mod = this
    let requestUri = mod.uri

    mod.status = STATUS['_ld']

    // Emit `fetch` event for plugins such as combo plugin
    //let emitData = { uri: uri }
    //emit("fetch", emitData)
    //let requestUri = emitData.requestUri || uri

    // Empty uri or a non-CMD module
    if (!requestUri || fetchedList[requestUri]) {
      mod.load()
      return
    }

    if (fetchingList[requestUri]) {
      callbackList[requestUri].push(mod)
      return
    }

    fetchingList[requestUri] = true
    callbackList[requestUri] = [mod]

    let onRequest = () => {
      delete fetchingList[requestUri]
      fetchedList[requestUri] = true

      // Save meta data of anonymous module
      if (anonymousMeta) {
        Module.save(requestUri, anonymousMeta)
        anonymousMeta = null
      }

      // Call callbacks
      let m, mods = callbackList[requestUri]
      delete callbackList[requestUri]
      while ((m = mods.shift())) m.load()
    }

    let sendRequest = () => {
      request(requestUri, onRequest, data.charset, data.crossorigin)
    }
    requestCache ?
      requestCache[requestUri] = sendRequest :
      sendRequest()

  }

  // Execute a module
  Module.prototype.exec = function () {
    let mod = this

    // When module is executed, DO NOT execute it again. When module
    // is being executed, just return `module.exports` too, for avoiding
    // circularly calling
    if (mod.status >= STATUS['_lh']) {
      return mod.exports
    }

    mod.status = STATUS['_lh']

    // Create require
    let uri = mod.uri

    let require = (id) => {
      return Module.get(require.resolve(id)).exec()
    }

    require.resolve = (id) => {
      return id2Uri(id, uri)
    }

    require.async = (ids, callback) => {
      Module.use(ids, callback, uri + "__ln_" + cid())
      return require
    }

    // Exec factory
    let factory = mod.factory

    let exports = isFunction(factory) ?
      factory(require, mod.exports = {}, mod) :
      factory

    if (exports === undefined) {
      exports = mod.exports
    }

    // Reduce memory leak
    delete mod.factory

    mod.exports = exports
    mod.status = STATUS['_li']

    // Emit `exec` event
    //emit("exec", mod)

    return exports
  }

  // Define a module
  Module.define = function (id, deps, factory) {
    let argsLen = arguments.length

    // define(factory)
    if (argsLen === 1) {
      factory = id
      id = undefined
    }
    else if (argsLen === 2) {
      factory = deps

      // define(deps, factory)
      if (isArray(id)) {
        deps = id
        id = undefined
      }
      // define(id, factory)
      else {
        deps = undefined
      }
    }

    // Parse dependencies according to the module factory code
    if (!isArray(deps) && isFunction(factory)) {
      deps = [];
    }

    let meta = {
      id: id,
      uri: id2Uri(id),
      deps: deps,
      factory: factory
    }

    // Try to derive uri in IE6-9 for anonymous modules
    if (!meta.uri && doc.attachEvent) {
      let script = getCurrentScript()

      if (script) {
        meta.uri = script.src
      }

      // NOTE: If the id-deriving methods above is failed, then falls back
      // to use onload event to get the uri
    }

    // Emit `define` event, used in nocache plugin, seajs node version etc
    //emit("define", meta)

    meta.uri ? Module.save(meta.uri, meta) :
      // Save information for "saving" work in the script onload event
      anonymousMeta = meta
  }

  // Save meta data to cachedMods
  Module.save = (uri, meta) => {
    let mod = Module.get(uri)

    // Do NOT override already saved modules
    if (mod.status < STATUS['_le']) {
      mod.id = meta.id || uri
      mod['_lj'] = meta.deps || []
      mod.factory = meta.factory
      mod.status = STATUS['_le']
    }
  }

  // Get an existed module or create a new one
  Module.get = (uri, deps) => {
    return cachedMods[uri] || (cachedMods[uri] = new Module(uri, deps))
  }

  // Use function is equal to load a anonymous module
  Module.use = (ids, callback, uri) => {
    let mod = Module.get(uri, isArray(ids) ? ids : [ids])

    mod['_lm'] = () => {
      let exports = []
      let uris = mod.resolve()

      for (let i = 0, len = uris.length; i < len; i++) {
        exports[i] = cachedMods[uris[i]].exec()
      }

      if (callback) {
        callback.apply(global, exports)
      }

      delete mod['_lm'];
    }

    mod.load()
  }


  // Public API

  seajs.use = (ids, callback) => {
    Module.use(ids, callback, data.cwd + "__es_" + cid())
  }

  //Module.define.cmd = {}
  global.define = Module.define


  // For Developers

  //seajs.Module = Module
  //data.fetchedList = fetchedList
  //data.cid = cid

  seajs.require = (id) => {
    let mod = Module.get(id2Uri(id))
    if (mod.status < STATUS['_lh']) {
      mod.onload()
      mod.exec()
    }
    return mod.exports
  }


  /**
   * config.js - The configuration for the loader
   */

  // The root path to use for id2uri parsing
  // If loaderUri is `http://test.com/libs/seajs/[??][seajs/1.2.3/]sea.js`, the
  // baseUri should be `http://test.com/libs/`
  data.base = loaderDir;

  // The loader directory
  //data.dir = loaderDir

  // The current working directory
  data.cwd = cwd

  // The charset for requesting files
  data.charset = "utf-8"

  // The history of every config
  //data.history = {}

  // The CORS options, Do't set CORS on default.
  //data.crossorigin = undefined


  // data.alias - An object containing shorthands of module id
  // data.paths - An object containing path shorthands in module id
  // data.vars - The {xxx} variables in module id
  // data.map - An array containing rules to map module uri
  // data.debug - Debug mode. The default value is false

  seajs.config = (configData) => {

    for (let key in configData) {
      let curr = configData[key]
      // let prev = data[key]


      // // Merge object config such as alias, lets
      // if (prev && isObject(prev)) {
      //   for (let k in curr) {
      //     prev[k] = curr[k]
      //   }
      // }
      // else {
      //   // Concat array config such as map, preload
      //   if (isArray(prev)) {
      //     curr = prev.concat(curr)
      //   }

      // Set config
      data[key] = curr
      //}
    }

    //emit("config", configData)
    return seajs
  }

})(window);
/*
version:5.0.2 Licensed MIT
author:kooboy_li@163.com
loader:umd
enables:mxevent,richVframe,xml,async,service,state,wait,lang
optionals:router,routerHash,routerState,routerTip,routerTipLockUrl,richView,innerView,recast,require,customTags,checkAttr,webc,xview,taskComplete,spreadMxViewParams,lockSubWhenBusy,taskIdle
*/
if (typeof DEBUG == 'undefined')
    window.DEBUG = true;
(factory => {
    if (window.define) {
        define('4e', factory);
    }
    else {
        window.Magix = factory();
    }
})(() => {
    //VARS
    let Counter = 0;
    let Empty = '';
    let Empty_Array = [];
    let Comma = ',';
    let Null = null;
    let Doc_Window = window;
    let Thousand = 1000;
    let GPromise = Promise;
    let Undefined = void Counter;
    let Doc_Document = document;
    let Timeout = Doc_Window.setTimeout; //setTimeout;
    let Encode = encodeURIComponent;
    let Value = 'value';
    let Tag_Static_Key = '_';
    let Tag_View_Params_Key = '$';
    let Tag_Prop_Id = 'id';
    let Hash_Key = '#';
    function Noop() { }
    let JSON_Stringify = JSON.stringify;
    let Header = Doc_Document.head;
    let Doc_Body;
    let Pfm = Doc_Window.performance;
    let Date_Now = Pfm.now.bind(Pfm);
    /*
        关于spliter
        出于安全考虑，使用不可见字符\u0000，然而，window手机上ie11有这样的一个问题：'\u0000'+"abc",结果却是一个空字符串，好奇特。
     */
    let Spliter = '\x1e';
    let Prototype = 'prototype';
    let Params = 'params';
    let Path = 'path';
    let MX_PREFIX = 'mx5-';
    //let Tag_Porp_MX_Key = MX_PREFIX + 'key';
    let MX_View = MX_PREFIX + 'view';
    let MX_OWNER = MX_PREFIX + 'owner';
    let GUID = (prefix) => (prefix || Tag_Static_Key) + Counter++;
    let GetById = id => Doc_Document.getElementById(id);
    let SetInnerHTML = (n, html) => n.innerHTML = html;
    let isRString = s => s[0] == Spliter;
    let Empty_Object = {};
    let Mx_Cfg = {
        rootId: GUID(),
        wait: Noop,
        error(e) {
            throw e;
        }
    };
    let IsPrimitive = args => !args || typeof args != 'object';
    let NodeIn = (a, b, r) => {
        if (a && b) {
            r = a == b;
            if (!r) {
                try {
                    r = (b.compareDocumentPosition(a) & 16) == 16;
                }
                catch (_magix) { }
            }
        }
        return r;
    };
    let Mark = (me, key, host, m, k) => {
        k = Spliter + 'dE';
        if (me[k] != 0) {
            host = me[k] || (me[k] = {});
            if (!Has(host, key)) {
                host[key] = 0;
            }
            m = ++host[key];
        }
        return t => (t = me[k], t && m === t[key]);
    };
    let Unmark = me => {
        me[Spliter + 'dE'] = 0;
    };
    let { assign: Assign, keys: Keys, hasOwnProperty: HasProp, prototype: ObjectProto } = Object;
    let ToString = ObjectProto.toString;
    let Type = o => ToString.call(o).slice(8, -1);
    let strObject = 'Object';
    let IsObject = o => Type(o) == strObject;
    let IsArray = Array.isArray;
    let strFunction = 'Function';
    let IsFunction = o => Type(o) == strFunction;
    let strString = 'String';
    let IsString = o => Type(o) == strString;
    let strNumber = 'Number';
    let IsNumber = o => Type(o) == strNumber;
    let GA = Header.getAttribute;
    let GetAttribute = (node, attr) => GA.call(node, attr);
    let ApplyStyle = (key, css, node) => {
        if (DEBUG && IsArray(key)) {
            let result = [];
            for (let i = 0; i < key.length; i += 2) {
                result.push(ApplyStyle(key[i], key[i + 1]));
            }
            return result;
        }
        if (css && !ApplyStyle[key]) {
            ApplyStyle[key] = 1;
            if (DEBUG) {
                if (key.indexOf('$throw_') === 0) {
                    throw new Error(css);
                }
                node = Doc_Document.createElement('style');
                node.id = key;
                SetInnerHTML(node, css);
                Header.appendChild(node);
            }
            else {
                node = Doc_Document.createElement('style');
                SetInnerHTML(node, css);
                Header.appendChild(node);
            }
        }
    };
    let ToTry = (fn, args, context, r) => {
        try {
            if (IsArray(args)) {
                r = fn.apply(context, args);
            }
            else {
                r = fn.call(context, args);
            }
        }
        catch (x) {
            Mx_Cfg.error(x);
        }
        return r;
    };
    let Has = (owner, prop) => owner && HasProp.call(owner, prop);
    let TranslateData = (data, params) => {
        let p, val;
        if (IsPrimitive(params)) {
            p = params + Empty;
            if (isRString(p)) {
                params = data.get(p);
            }
        }
        else {
            for (p in params) {
                val = params[p];
                val = TranslateData(data, val);
                params[p] = val;
            }
        }
        return params;
    };
    let CacheSort = (a, b) => b['dE'] - a['dE'];
    //let CacheCounter = 0;
    function MxCache(max, buffer /*, remove?: (item: any) => void*/, me) {
        me = this;
        me['dE'] = [];
        me['dF'] = buffer || 20; //buffer先取整，如果为0则再默认5
        me['dG'] = me['dF'] + (max || 50);
        //me['@:{cache#remove.callback}'] = remove;
    }
    Assign(MxCache[Prototype], {
        get(key) {
            let me = this;
            let c = me['dE'];
            let r = c[Spliter + key];
            if (r) {
                r['dE']++;
                //r['@:{cache-item#add.time}'] = CacheCounter++;
                r = r['dF'];
            }
            return r;
        },
        set(okey, value) {
            let me = this;
            let c = me['dE'];
            let key = Spliter + okey;
            let r = c[key];
            let t = me['dF'];
            if (!r) {
                if (c.length > me['dG']) {
                    c.sort(CacheSort);
                    while (t--) {
                        r = c.pop();
                        if (r['dE']) { //important
                            me.del(r['dG']); //如果没有引用，则删除
                        }
                    }
                }
                r = {
                    'dG': okey
                };
                c.push(r);
                c[key] = r;
            }
            r['dF'] = value;
            r['dE'] = 1;
            //r['@:{cache-item#add.time}'] = CacheCounter++;
        },
        del(k) {
            k = Spliter + k;
            let c = this['dE'];
            let r = c[k] /*,
            m = this['@:{cache#remove.callback}']*/;
            if (r) {
                r['dE'] = 0;
                r['dF'] = Empty;
                delete c[k]; // = Null;
                //if (m) {
                //ToTry(m, r['@:{cache-item#origin.key}']);
                //}
            }
        },
        has(k) {
            return Has(this['dE'], Spliter + k);
        }
    });
    let EventDefaultOptions = {
        bubbles: true,
        cancelable: true
    };
    //https://www.w3.org/TR/dom/#interface-event
    let DispatchEvent = (element, type, data) => {
        let e = new Event(type, EventDefaultOptions);
        Assign(e, data);
        element.dispatchEvent(e);
    };
    let AttachEventHandlers = [];
    let EventListen = (element, type, fn, options) => element.addEventListener(type, fn, options);
    let EventUnlisten = (element, type, fn, options) => element.removeEventListener(type, fn, options);
    let AddEventListener = (element, type, fn, eventOptions, viewId, view) => {
        let h = {
            'dE': viewId,
            'dF': fn,
            'dG': type,
            'dH': element,
            'dI'(e) {
                if (viewId) {
                    ToTry(fn, e, view);
                }
                else {
                    fn(e);
                }
            }
        };
        AttachEventHandlers.push(h);
        EventListen(element, type, h['dI'], eventOptions);
    };
    let RemoveEventListener = (element, type, cb, eventOptions, viewId) => {
        for (let c, i = AttachEventHandlers.length; i--;) {
            c = AttachEventHandlers[i];
            if (c['dG'] == type &&
                c['dE'] == viewId &&
                c['dH'] == element &&
                c['dF'] === cb) {
                AttachEventHandlers.splice(i, 1);
                EventUnlisten(element, type, c['dI'], eventOptions);
                break;
            }
        }
    };
    let ToObjectCache = new MxCache();
    let ToObject = (expr, cache = 1, result) => {
        if (cache &&
            ToObjectCache.has(expr)) {
            result = ToObjectCache.get(expr);
        }
        else {
            result = ToTry(Function(`return ${expr}`));
            if (cache) {
                if (DEBUG) {
                    result = Safeguard(result);
                }
                ToObjectCache.set(expr, result);
            }
        }
        return result;
    };
    let Decode = decodeURIComponent;
    let PathToObject = new MxCache();
    let ParseUri = path => {
        //把形如 /xxx/?a=b&c=d 转换成对象 {path:'/xxx/',params:{a:'b',c:'d'}}
        //1. /xxx/a.b.c.html?a=b&c=d  path /xxx/a.b.c.html
        //2. /xxx/?a=b&c=d  path /xxx/
        //5. /xxx/index.html  => path /xxx/index.html
        //11. ab?a&b          => path ab  params:{a:'',b:''}
        let r = PathToObject.get(path), pathname, key, value, po, q, rest;
        if (!r) {
            po = {};
            q = path.indexOf('?');
            if (q == -1) {
                pathname = path;
                rest = Empty;
            }
            else {
                pathname = path.substring(0, q);
                rest = path.substring(q + 1);
            }
            if (rest) {
                for (q of rest.split('&')) {
                    [key, value = Empty] = q.split('=');
                    po[Decode(key)] = isRString(value) ? value : Decode(value);
                }
            }
            PathToObject.set(path, r = {
                a: pathname,
                b: po
            });
        }
        return {
            path: r.a,
            params: Assign({}, r.b)
        };
    };
    let ToUri = (path, params, keo) => {
        let arr = [], v, p, f;
        for (p in params) {
            v = params[p] + Empty;
            if (v || Has(keo, p)) {
                v = Encode(v);
                arr.push(f = p + '=' + v);
            }
        }
        if (f) {
            path += (path && (path.includes('?') ? '&' : '?')) + arr.join('&');
        }
        return path;
    };
    let ToMap = (list, key) => {
        let e, map = {};
        if (list) {
            for (e of list) {
                map[(key && e) ? e[key] : e] = key ? e : (map[e] | 0) + 1; //对于简单数组，采用累加的方式，以方便知道有多少个相同的元素
            }
        }
        return map;
    };
    let ParseExprCache = new MxCache();
    let ParseExpr = (expr, data, result) => {
        if (ParseExprCache.has(expr)) {
            result = ParseExprCache.get(expr);
        }
        else {
            result = ToObject(expr, 0);
            if (expr.includes(Spliter)) {
                TranslateData(data, result);
                if (DEBUG) {
                    result = Safeguard(result, true);
                }
            }
            else {
                if (DEBUG) {
                    result = Safeguard(result, true);
                }
                ParseExprCache.set(expr, result);
            }
        }
        return result;
    };
    let CallBreakTime = 9, CallWorked, CallCurrent, CallCurrentExec, CallLogicTail, CallRealTail;
    let lastWaitState;
    let ns = navigator.scheduling;
    let StartCall = () => {
        let last = Date_Now(), out = last + CallBreakTime, args, fn, context, wait = Mx_Cfg.wait;
        for (;;) {
            if (CallCurrent) { //有待执行的任务
                if (DEBUG) {
                    CallFunction['dE']++;
                }
                if (CallLogicTail == CallCurrent) { //如果当前节点是逻辑末尾，则删除逻辑末尾
                    CallLogicTail = Null;
                }
                CallCurrentExec = CallCurrent; //当前正在执行的任务，先保存一下，有可能在fn中再追加新的任务，需要使用该节点进行调整关系
                context = CallCurrent['dE'];
                args = CallCurrent['dF'];
                fn = CallCurrent['dG'];
                ToTry(fn, args, context);
                CallCurrent = CallCurrent['dH'];
                CallCurrentExec = Null; //clear current;
                if (CallCurrent && ((Date_Now() > out) ||
                    (ns && ns.isInputPending()))) {
                    if (lastWaitState != 1) {
                        wait(lastWaitState = 1);
                    }
                    console.log(`CF take a break at ${CallFunction['dE']} of ${CallFunction['dF']}`);
                    Timeout(StartCall);
                    break;
                }
            }
            else {
                CallRealTail = CallWorked = Null;
                if (DEBUG) {
                    delete CallFunction['dF'];
                    delete CallFunction['dE'];
                }
                if (lastWaitState != 0) {
                    wait(lastWaitState = 0);
                }
                break;
            }
        }
    };
    let CallFunction = (fn, args, context, /*id?,*/ last, current) => {
        if (DEBUG) {
            if (!CallFunction['dF']) {
                CallFunction['dF'] = 0;
                CallFunction['dE'] = 0;
            }
            CallFunction['dF']++;
        }
        // if (id &&
        //     CallCurrent) {
        //     current = CallCurrent['@:{call#next}'];
        //     while (current) {
        //         if (current['@:{call#id}'] == id) {
        //             current['@:{call#function}'] =
        //                 current['@:{call#context}'] =
        //                 current['@:{call#args}'] =
        //                 current['@:{call#id}'] = Null;
        //         }
        //         current = current['@:{call#next}'];
        //     }
        // }
        current = {
            //'@:{call#id}': id,
            'dG': fn,
            'dE': context,
            'dF': args
        };
        if (last) { //指明放在真正的末尾
            if (CallRealTail) { //如果有，则直接追加
                CallRealTail['dH'] = current;
            }
            else { //没有，则把当前待执行的头指定当前元素
                CallCurrent = current;
            }
            CallRealTail = current; //更新末尾
        }
        else { //需要放逻辑末尾
            last = CallLogicTail || CallCurrentExec; //合并统一判断
            //不存在逻辑末尾，但当前正在执行中，1种情况：执行已过逻辑末尾，此时需要把执行节点的下一个指向当前节点，以提高优先级
            if (last) { //有节点则更新
                //prev = last['@:{call#next}'];
                current['dH'] = last['dH'];
                last['dH'] = current;
                if (CallRealTail == last) { //如果逻辑末尾或当前执行的与真实是同一个节点，则真实末尾节点需要移动
                    CallRealTail = current;
                }
            }
            else if (CallCurrent) { //即不存在逻辑末尾，也不在执行中，比如先调用lastTask，再调用普通的task，则需要把普通的任务放在最前面
                current['dH'] = CallCurrent;
                CallCurrent = current;
            }
            else { //初始化的情况
                CallCurrent = CallRealTail = current;
            }
            CallLogicTail = current; //更新逻辑末尾为当前节点
        }
        if (!CallWorked) {
            CallWorked = 1;
            Timeout(StartCall);
        }
    };
    let LastCallFunction = (fn, args, context /*, id?*/) => {
        CallFunction(fn, args, context /*, id*/, 1);
    };
    let isEsModule = o => o.__esModule || (window.Symbol && o[Symbol.toStringTag] === 'Module');
    let Async_Require = (name, fn) => {
        if (name) {
            let a = [];
            //if (window.seajs) {
            seajs.use(name, (...g) => {
                for (let m of g) {
                    a.push(isEsModule(m) ? m.default : m);
                }
                CallFunction(fn, a);
            });
            /*} else {
                if (!Array.isArray(name)) {
                    name = [name];
                }
                for (let n of name) {
                    let m = require(n);
                    a.push(isEsModule(m) ? m.default : m);
                }
                CallFunction(fn, a);
            }*/
        }
        else {
            CallFunction(fn);
        }
    };
    let Extend = (ctor, base, props, cProto) => {
        //bProto.constructor = base;
        Noop[Prototype] = base[Prototype];
        cProto = new Noop();
        Assign(cProto, props);
        //Assign(ctor, statics);
        cProto.constructor = ctor;
        ctor[Prototype] = cProto;
        return ctor;
    };
    let Safeguard = data => data;
    if (DEBUG && window.Proxy) {
        let ProxiesPool = new Map();
        Safeguard = (data, allowDeep, setter, prefix = '') => {
            if (IsPrimitive(data)) {
                return data;
            }
            let key = prefix + '\x01' + setter;
            let p = data['\x01_sf_\x01'];
            if (p && p.proxy) {
                data = p.entity;
            }
            let list = ProxiesPool.get(data);
            if (list) {
                for (let e of list) {
                    if (e.key == key) {
                        return e.entity;
                    }
                }
            }
            let entity = new Proxy(data, {
                set(target, property, value) {
                    if (!setter && (!prefix || !allowDeep)) {
                        throw new Error('avoid writeback, key: "' + prefix + property + '" value: ' + value + ' more info: https://github.com/thx/magix/issues/38');
                    }
                    if (setter) {
                        setter(prefix + property, value);
                    }
                    target[property] = value;
                    return true;
                },
                get(target, property) {
                    if (property == '\x01_sf_\x01') {
                        return {
                            entity: data,
                            proxy: true
                        };
                    }
                    let out = target[property];
                    if (!allowDeep &&
                        Has(target, property) &&
                        (IsArray(out) || IsObject(out))) {
                        return Safeguard(out, allowDeep, setter, prefix + property + '.');
                    }
                    return out;
                }
            });
            if (!prefix) {
                if (!list) {
                    list = [];
                }
                list.push({
                    key,
                    entity
                });
                ProxiesPool.set(data, list);
            }
            return entity;
        };
    }
    if (DEBUG) {
        Empty_Object = Safeguard(Empty_Object);
    }
    let MxEvent = {
        fire(name, data) {
            let key = Spliter + name, me = this, list = me[key], idx = 0, len, t;
            if (!data)
                data = {};
            data.type = name;
            if (list) {
                for (len = list.length; idx < len; idx++) {
                    t = list[idx];
                    if (t['dE']) {
                        t['dF'] = 1;
                        ToTry(t['dE'], data, me);
                        if (!t['dE']) {
                            list.splice(idx--, 1);
                            len--;
                        }
                        t['dF'] = Null;
                    }
                }
            }
            // if (!cancel) {
            //     list = me[`on${name}`];
            //     if (list) ToTry(list, data, me);
            // }
            // return me;
        },
        on(name, fn, priority = 0) {
            let me = this;
            let key = Spliter + name;
            let list = me[key] || (me[key] = []), added, len, i, definition = {
                'dE': fn,
                'dG': priority
            };
            for (i = 0, len = list.length; i < len; i++) {
                if (list[i]['dG'] < priority) {
                    list.splice(i, 0, definition);
                    added = 1;
                    break;
                }
            }
            if (!added) {
                list.push(definition);
            }
            // return me;
        },
        off(name, fn) {
            let key = Spliter + name, me = this, list = me[key], t;
            if (fn) {
                if (list &&
                    (t = list.length)) {
                    for (; t--;) {
                        key = list[t];
                        if (key['dE'] == fn) {
                            if (key['dF']) {
                                key['dE'] = Null;
                            }
                            else {
                                list.splice(t, 1);
                            }
                            break;
                        }
                    }
                }
            }
            else {
                me[key] = Null;
                //me[`on${name}`] = Null;
            }
            // return me;
        }
    };
    let Vframe_RootVframe;
    let Vframe_Vframes = {};
    let Vframe_RootId;
    let Vframe_TranslateQuery = (pId, src, params, pVf) => {
        if (src.includes(Spliter) &&
            (pVf = Vframe_Vframes[pId])) {
            TranslateData(pVf['dE'], params);
        }
    };
    let Vframe_Root = (rootId, e) => {
        if (!Vframe_RootVframe) {
            Doc_Body = Doc_Document.body;
            rootId = Vframe_RootId = Mx_Cfg.rootId;
            e = GetById(rootId);
            if (!e) {
                if (DEBUG) {
                    console.warn('can not find element:"' + rootId + '",use document.body as default');
                }
                e = Doc_Body;
            }
            Vframe_RootVframe = new Vframe(e);
        }
        return Vframe_RootVframe;
    };
    let Vframe_Unroot = () => {
        if (Vframe_RootVframe) {
            Vframe_RootVframe.unmount();
            Vframe_RootVframe = Null;
        }
    };
    let Vframe_AddVframe = (id, vframe) => {
        if (!Has(Vframe_Vframes, id)) {
            Vframe_Vframes[id] = vframe;
            // Vframe.fire('add', {
            //     vframe
            // });
        }
    };
    let Vframe_RemoveVframe = (id, vframe, root) => {
        vframe = Vframe_Vframes[id];
        if (vframe) {
            delete Vframe_Vframes[id];
            root = vframe.root;
            root['dE'] = 0;
            root['dF'] = 0;
            // Vframe.fire('remove', {
            //     vframe
            // });
            vframe.id = vframe.root = vframe.pId = vframe['dF'] = Null; //清除引用,防止被移除的view内部通过setTimeout之类的异步操作有关的界面，影响真正渲染的view
            if (DEBUG) {
                let nodes = Doc_Document.querySelectorAll('#' + id);
                if (nodes.length > 1) {
                    Mx_Cfg.error(Error(`remove vframe error. dom id:"${id}" duplicate`));
                }
            }
        }
    };
    let Vframe_RunInvokes = (vf, list, name, resolve, view, fn, args) => {
        list = vf['dG']; //invokeList
        view = vf['dH'];
        while (list.length) {
            [name, args, resolve] = list.shift();
            CallFunction(resolve, (fn = view[name]) && ToTry(fn, args, view));
        }
    };
    let Vframe_UnmountZone = (owner, root, onlyInnerView) => {
        let p, vf, unmount;
        for (p in owner['dF']) {
            if (root) {
                vf = Vframe_Vframes[p];
                unmount = vf && NodeIn(vf.root, root) && (!onlyInnerView || vf.root != root);
            }
            else {
                unmount = 1;
            }
            if (unmount) {
                owner.unmount(p, unmount);
            }
        }
    };
    let Vframe_MountZone = (owner, zone, it, vframes) => {
        zone = zone || owner.root;
        vframes = zone.querySelectorAll(`[${MX_View}][${MX_OWNER}="${owner.id}"]`);
        /*
            body(#mx-root)
                div(mx-vframe=true,mx-view='xx')
                    div(mx-vframe=true,mx-view=yy)
            这种结构，自动构建父子关系，
            根结点渲染，获取到子列表[div(mx-view=xx)]
                子列表渲染，获取子子列表的子列表
                    加入到忽略标识里
            会导致过多的dom查询
    
            现在使用的这种，无法处理这样的情况，考虑到项目中几乎没出现过这种情况，先采用高效的写法
            上述情况一般出现在展现型页面，dom结构已经存在，只是附加上js行为
            不过就展现来讲，一般是不会出现嵌套的情况，出现的话，把里面有层级的vframe都挂到body上也未尝不可，比如brix2.0
         */
        //me['@:{vframe#hold.fire}'] = 1; //hold fire creted
        //me.unmountZone(zoneId, 1); 不去清理，详情见：https://github.com/thx/magix/issues/27
        for (it of vframes) {
            if (!it['dE']) { //防止嵌套的情况下深层的view被反复实例化
                it['dE'] = 1;
                owner.mount(it, GetAttribute(it, MX_View));
            }
        }
        //me['@:{vframe#hold.fire}'] = 0;
    };
    /**
      * 销毁对应的view
      */
    let Vframe_unmountView = owner => {
        let { 'dH': v, 'dG': list, root } = owner;
        list.length = 0;
        if (v) {
            owner['dH'] = 0; //unmountView时，尽可能早的删除vframe上的$v对象，防止$v销毁时，再调用该 vfrmae的类似unmountZone方法引起的多次created
            if (v['dE']) {
                v['dE'] = 0;
                Unmark(v);
                Vframe_UnmountZone(owner);
                v.fire('destroy');
                View_DelegateEvents(v, 1);
                //v.owner = v.root = Null;
                if (root && owner['dI'] /*&&!keepPreHTML*/) { //如果$v本身是没有模板的，也需要把节点恢复到之前的状态上：只有保留模板且$v有模板的情况下，这条if才不执行，否则均需要恢复节点的html，即$v安装前什么样，销毁后把节点恢复到安装前的情况
                    SetInnerHTML(root, owner['dJ']);
                }
            }
        }
        owner['dK']++; //增加signature，阻止相应的回调，见mountView
    };
    let Vframe_mountView = (owner, viewPath, viewInitParams /*,keepPreHTML*/) => {
        let { id, root } = owner;
        let po, sign, view, params, pId;
        if (!owner['dI'] && root) { //alter
            owner['dI'] = 1;
            owner['dJ'] = root.innerHTML;
        }
        Vframe_unmountView(owner);
        if (root && viewPath) {
            po = ParseUri(viewPath);
            view = po[Path];
            owner[Path] = viewPath;
            params = po[Params];
            pId = GetAttribute(root, MX_OWNER);
            Vframe_TranslateQuery(pId, viewPath, params);
            owner['dL'] = view;
            Assign(params, viewInitParams);
            sign = owner['dK'];
            Async_Require(view, TView => {
                if (sign == owner['dK']) { //有可能在view载入后，vframe已经卸载了
                    if (TView) {
                        View_Prepare(TView);
                        view = new TView(id, root, owner, params);
                        if (DEBUG) {
                            let viewProto = TView.prototype;
                            let importantProps = {
                                id: 1,
                                owner: 1,
                                root: 1,
                                'dF': 1,
                                'dG': 1,
                                'dE': 1,
                                'dH': 1,
                                'dI': 1
                            };
                            for (let p in view) {
                                if (Has(view, p) && viewProto[p]) {
                                    throw new Error(`avoid write ${p} at file ${viewPath}!`);
                                }
                            }
                            view = Safeguard(view, true, (key, value) => {
                                if (Has(viewProto, key) ||
                                    (Has(importantProps, key) &&
                                        (key != 'dE' || !isFinite(value)) &&
                                        ((key != 'owner' && key != 'root') || value !== Null))) {
                                    throw new Error(`avoid write ${key} at file ${viewPath}!`);
                                }
                            });
                        }
                        owner['dH'] = view;
                        View_DelegateEvents(view);
                        ToTry(view.init, params, view);
                        ToTry(view['dJ'], [params, owner['dJ']], view);
                        view['dK']();
                        if (!view['dL'] &&
                            !view['dM']) { //无模板且未触发渲染
                            View_EndUpdate(view);
                        }
                    }
                    else {
                        //if (DEBUG) {
                        Mx_Cfg.error(Error(`${id} cannot load:${view}`));
                        //}
                    }
                }
            });
        }
    };
    let Vframe_GetVfId = node => node['dF'] || (node['dF'] = GUID(Vframe_RootId));
    function Vframe(root, pId) {
        let me = this;
        let vfId = Vframe_GetVfId(root);
        me.id = vfId;
        me.root = root;
        me['dK'] = 1; //signature
        me['dF'] = {}; //childrenMap
        me.pId = pId;
        me['dG'] = []; //invokeList
        me['dE'] = new Map();
        Vframe_AddVframe(vfId, me);
    }
    Assign(Vframe, {
        root() {
            return Vframe_RootVframe;
        },
        all() {
            return Vframe_Vframes;
        },
        byId(id) {
            return Vframe_Vframes[id];
        },
        byNode(node) {
            return Vframe_Vframes[node['dF']];
        }
    });
    //    , MxEvent
    Assign(Vframe[Prototype], {
        mount(node, viewPath, viewInitParams) {
            let me = this, vf, id = me.id, c = me['dF'];
            let vfId = Vframe_GetVfId(node);
            vf = Vframe_Vframes[vfId];
            if (!vf) {
                if (!Has(c, vfId)) { //childrenMap,当前子vframe不包含这个id
                    me['dM'] = 0; //childrenList 清空缓存的子列表
                }
                c[vfId] = vfId; //map
                vf = new Vframe(node, id);
            }
            Vframe_mountView(vf, viewPath, viewInitParams);
            return vf;
        },
        unmount(node, isVframeId) {
            let me = this, vf, pId;
            node = node ? me['dF'][isVframeId ? node : node['dF']] : me.id;
            vf = Vframe_Vframes[node];
            if (vf) {
                pId = vf.pId;
                Vframe_unmountView(vf);
                Vframe_RemoveVframe(node);
                vf = Vframe_Vframes[pId];
                if (vf && Has(vf['dF'], node)) { //childrenMap
                    delete vf['dF'][node]; //childrenMap
                    vf['dM'] = 0;
                }
            }
        },
        children() {
            return this['dM'] || (this['dM'] = Keys(this['dF']));
        },
        parent(level, vf) {
            vf = this;
            level = (level >>> 0) || 1;
            while (vf && level--) {
                vf = Vframe_Vframes[vf.pId];
            }
            return vf;
        },
        invoke(name, args) {
            let vf = this, view, fn, list = vf['dG'];
            return new GPromise(resolve => {
                if ((view = vf['dH']) &&
                    view['dM']) { //view rendered
                    resolve((fn = view[name]) && ToTry(fn, args, view));
                }
                else {
                    list.push([name, args, resolve]);
                }
            });
        }
    });
    /*
    dom event处理思路

    性能和低资源占用高于一切，在不特别影响编程体验的情况下，向性能和资源妥协

    1.所有事件代理到body上
    2.优先使用原生冒泡事件，使用mouseover+Magix.inside代替mouseenter
        'over<mouseover>':function(e){
            if(!Magix.inside(e.relatedTarget,e.eventTarget)){
                //enter
            }
        }
    3.事件支持嵌套，向上冒泡
    4.如果同一节点上同时绑定了mx-event和选择器事件，如
        <div data-menu="true" mx-click="clickMenu()"></div>

        'clickMenu<click>'(e){
            console.log('direct',e);
        },
        '$div[data-menu="true"]<click>'(e){
            console.log('selector',e);
        }

        那么先派发选择器绑定的事件再派发mx-event绑定的事件


    5.在当前view根节点上绑定事件，目前只能使用选择器绑定，如
        '$<click>'(e){
            console.log('view root click',e);
        }
    
    range:{
        app:{
            20:{
                mouseover:1,
                mousemove:1
            }
        }
    }
    view:{
        linkage:{
            40:1
        }
    }
 */
    let Body_EvtInfoCache = new MxCache();
    let Body_EvtInfoReg = /^([\w\-]+)\x1e(\d+)?(\x1e)?([^(]+)\(([\s\S]*?)\)$/;
    let Body_RootEvents = {};
    let Body_RootEvents_Modifier = {};
    let Body_RootEvents_Passive = {};
    let Body_RootEvents_Capture = {};
    let Body_SearchSelectorEvents = {};
    let Body_Passive_Flag = 4;
    let Body_Capture_Flag = 8;
    let Body_Capture_Modifier = { capture: true };
    let Body_Passive_Modifier = { passive: false };
    let Body_Passive_Capture_Modifier = { passive: false, capture: true };
    let Body_FindVframeInfo = (current, eventType) => {
        let vf, tempId, selectorObject, eventSelector, eventInfos = [], begin = current, info = GetAttribute(current, MX_PREFIX + eventType), match, view, vfs, selectorVfId, backtrace;
        if (info) {
            match = Body_EvtInfoCache.get(info);
            if (!match) {
                match = info.match(Body_EvtInfoReg) || Empty_Array;
                match = {
                    v: match[1],
                    b: match[2] | 0,
                    t: match[3],
                    n: match[4],
                    i: match[5]
                };
                if (DEBUG) {
                    match = Safeguard(match);
                }
                Body_EvtInfoCache.set(info, match);
            }
            match = Assign({}, match);
            if (DEBUG) {
                match = Assign(match, { r: info });
            }
        }
        //如果有匹配但没有处理的vframe或者事件在要搜索的选择器事件里
        if ((match && !match.v) || Body_SearchSelectorEvents[eventType]) {
            selectorVfId = begin['dG'];
            if (selectorVfId == Null) { //先找最近的vframe
                vfs = [begin];
                while (begin != Doc_Body && (begin = begin.parentNode)) {
                    if (Vframe_Vframes[tempId = begin['dF']] ||
                        (tempId = begin['dG'])) {
                        selectorVfId = tempId;
                        break;
                    }
                    vfs.push(begin);
                }
                for (info of vfs) {
                    info['dG'] = selectorVfId || Empty;
                }
            }
            begin = current['dF'];
            if (Vframe_Vframes[begin]) {
                /*
                    如果当前节点是vframe的根节点，则把当前的vf置为该vframe
                    该处主要处理这样的边界情况
                    <mx-vrame src="./test" mx-click="parent()"/>
                    //.test.js
                    export default Magix.View.extend({
                        '$<click>'(){
                            console.log('test clicked');
                        }
                    });
     
                    当click事件发生在mx-vframe节点上时，要先派发内部通过选择器绑定在根节点上的事件，然后再派发外部的事件
                */
                backtrace = selectorVfId = begin;
            }
            // if (!selectorVfId) {
            //     selectorVfId = Mx_Cfg.rootId;
            // }
            if (selectorVfId) { //从最近的vframe向上查找带有选择器事件的view
                do {
                    vf = Vframe_Vframes[selectorVfId];
                    if (vf && (view = vf['dH'])) {
                        selectorObject = view['dN'];
                        eventSelector = selectorObject[eventType];
                        if (eventSelector) {
                            for (begin = eventSelector.length; begin--;) {
                                tempId = eventSelector[begin];
                                selectorObject = {
                                    r: tempId,
                                    v: selectorVfId,
                                    n: tempId
                                };
                                if (tempId) {
                                    /*
                                        事件发生时，做为临界的根节点只能触发`$`绑定的事件，其它事件不能触发
                                    */
                                    if (!backtrace &&
                                        current.matches(tempId)) {
                                        eventInfos.push(selectorObject);
                                    }
                                }
                                else if (backtrace) {
                                    eventInfos.push(selectorObject);
                                }
                            }
                        }
                        //防止跨view选中，到带模板的view时就中止或未指定
                        if (view['dL'] && !backtrace) {
                            break; //带界面的中止
                        }
                        backtrace = 0;
                    }
                } while (vf && (selectorVfId = vf.pId));
            }
        }
        if (match) {
            eventInfos.push(match);
        }
        return eventInfos;
    };
    let Body_DOMEventProcessor = domEvent => {
        let { target, type } = domEvent;
        let eventInfos;
        let ignore;
        let vframe, view, eventName, fn;
        //let lastVfId;
        let params, arr = [], offset;
        while (target &&
            target != Doc_Body &&
            !domEvent.cancelBubble &&
            (!(ignore = target['dH']) || !ignore[type])) {
            offset = 1;
            if (target.nodeType == offset) {
                eventInfos = Body_FindVframeInfo(target, type);
                if (eventInfos.length) {
                    arr.length = 0;
                    for (fn of eventInfos) {
                        let { v, n, i, t, b } = fn;
                        if (!v && DEBUG) {
                            return Mx_Cfg.error(Error(`bad ${type}:${fn.r}`));
                        }
                        // if (lastVfId != v) {
                        //     if (lastVfId && domEvent.cancelBubble) {
                        //         break;
                        //     }
                        //     lastVfId = v;
                        // }
                        vframe = Vframe_Vframes[v];
                        view = vframe && vframe['dH'];
                        if (view) {
                            if (view['dM'] &&
                                view['dE']) {
                                eventName = n + Spliter + type;
                                fn = view[eventName];
                                if (fn) {
                                    domEvent.eventTarget = target;
                                    params = i ? ParseExpr(i, vframe['dE']) : Empty_Object;
                                    domEvent[Params] = params;
                                    ToTry(fn, domEvent, view);
                                }
                                if (DEBUG) {
                                    if (!fn) { //检测为什么找不到处理函数
                                        console.error('can not find event processor:' + n + '<' + type + '> from view:' + vframe.path);
                                    }
                                }
                                if (target != view.root &&
                                    !view['dN'][type]) {
                                    if (t) {
                                        offset = b || offset;
                                    }
                                    else {
                                        target = view.root;
                                        offset = 0;
                                    }
                                }
                            }
                        }
                        else { //如果处于删除中的事件触发，则停止事件的传播
                            if (DEBUG) {
                                if (view !== 0) { //销毁
                                    console.error('can not find vframe:' + v);
                                }
                            }
                        }
                    }
                }
                else {
                    arr.push(target);
                }
                if (offset) {
                    vframe = target['dF'];
                    if (vframe) {
                        vframe = Vframe_Vframes[vframe];
                        view = vframe && vframe['dH'];
                        if (view &&
                            view['dO'][type]) {
                            arr.length = 0;
                        }
                    }
                }
            }
            while (offset--)
                target = target.parentNode;
        }
        for (target of arr) {
            ignore = target['dH'] || (target['dH'] = {});
            ignore[type] = 1;
        }
    };
    let Body_DOMEventBind = (type, searchSelector, remove, flags) => {
        let counter = Body_RootEvents[type] | 0;
        let passiveCount = Body_RootEvents_Passive[type] | 0;
        let captureCount = Body_RootEvents_Capture[type] | 0;
        let offset = (remove ? -1 : 1), fn = remove ? RemoveEventListener : AddEventListener;
        if (flags & Body_Passive_Flag) {
            passiveCount += offset;
            Body_RootEvents_Passive[type] = passiveCount;
        }
        if (flags & Body_Capture_Flag) {
            captureCount += offset;
            Body_RootEvents_Capture[type] = captureCount;
        }
        let mod, lastMod = Body_RootEvents_Modifier[type];
        if (passiveCount && captureCount) {
            mod = Body_Passive_Capture_Modifier;
        }
        else if (passiveCount) {
            mod = Body_Passive_Modifier;
        }
        else if (captureCount) {
            mod = Body_Capture_Modifier;
        }
        if (!counter || remove === counter) { // remove=1  counter=1
            fn(Doc_Body, type, Body_DOMEventProcessor, remove ? lastMod : mod);
        }
        else if (mod != lastMod) {
            RemoveEventListener(Doc_Body, type, Body_DOMEventProcessor, lastMod);
            AddEventListener(Doc_Body, type, Body_DOMEventProcessor, mod);
        }
        Body_RootEvents_Modifier[type] = mod;
        Body_RootEvents[type] = counter + offset;
        if (searchSelector) { //记录需要搜索选择器的事件
            Body_SearchSelectorEvents[type] = (Body_SearchSelectorEvents[type] | 0) + offset;
        }
    };
    if (DEBUG) {
        var Updater_CheckInput = (view, html) => {
            if (/<(?:input|textarea|select)/i.test(html)) {
                let url = ParseUri(view.owner.path);
                let found = false, hasParams = false;
                for (let p in url.params) {
                    hasParams = true;
                    if (url.params[p][0] == Spliter) {
                        found = true;
                    }
                }
                if (hasParams && !found) {
                    console.warn('[!use at to pass parameter] path:' + view.owner.path + ' at ' + (view.owner.parent().path));
                }
            }
        };
    }
    let Updater_EM = {
        '&': 38,
        '<': 60,
        '>': 62,
        '"': 34,
        '\'': 39,
        '\`': 96
    };
    let Updater_ER = /[&<>"'\`]/g;
    //let Updater_Safeguard = v => v == Null ? Empty : Empty + v;
    let Updater_EncodeReplacer = m => `&#${Updater_EM[m]};`;
    let Updater_Encode = v => (v + Empty).replace(Updater_ER, Updater_EncodeReplacer);
    let Updater_UM = {
        '!': 1,
        '\'': 7,
        '(': 8,
        ')': 9,
        '*': 'A'
    };
    let Updater_URIReplacer = m => '%2' + Updater_UM[m];
    let Updater_URIReg = /[!')(*]/g;
    let Updater_EncodeURI = v => Encode(v).replace(Updater_URIReg, Updater_URIReplacer);
    let Updater_QR = /[\\'"]/g;
    let Updater_EncodeQ = v => (v + Empty).replace(Updater_QR, '\\$&');
    let Updater_Ref = ($$, v, k) => {
        if ($$.has(v)) {
            k = $$.get(v);
        }
        else {
            if (DEBUG) {
                if (k && $$.has(k)) {
                    console.error(`map has different value for same key:${k},current value:${v},previous value:${$$.get(k)}`);
                }
            }
            k = Spliter + (k || $$['dE']++);
            if (!$$.has(k)) {
                $$.set(v, k);
                $$.set(k, v);
            }
        }
        return k;
        // if (DEBUG && k === undefined) {
        //     console.error('check ref data!');
        // }
        // $$[k] = v;
        // return k;
    };
    // let Updater_Ready_List = [];
    // let Updater_Ready_Checker = ready => {
    //     let findUnready = 0,
    //         findCurrent = 0;
    //     for (let r of Updater_Ready_List) {
    //         if (r['@:{ready#callback}'] == ready) {
    //             r['@:{ready#ok}'] = 1;
    //             findCurrent = 1;
    //         }
    //         if (r['@:{ready#ok}']) {
    //             if (!findUnready &&
    //                 !r['@:{ready#invoke}']) {
    //                 r['@:{ready#invoke}'] = 1;
    //                 r['@:{ready#callback}']();
    //                 r['@:{ready#callback}'] = Empty;
    //             }
    //         } else {
    //             findUnready = 1;
    //         }
    //         if (findUnready &&
    //             findCurrent) {
    //             break;
    //         }
    //     }
    //     findCurrent = Updater_Ready_List[Updater_Ready_List.length - 1];
    //     if (findCurrent['@:{ready#callback}'] === Empty) {
    //         Updater_Ready_List.length = 0;
    //     }
    // };
    let Updater_Digest = (view, fire, tmpl) => {
        if (view['dE'] &&
            (tmpl = view['dL'])) {
            let keys = view['dP'], viewId = view.id, vf = Vframe_Vframes[viewId], ref = {
                'dE': [],
                'dF': [],
                'dG': 0
            }, vdom, data = view['dH'], refData = vf['dE'];
            view['dQ'] = 0;
            view['dP'] = {};
            if (fire) {
                view.fire('dompatch');
            }
            refData['dE'] = 0;
            refData.clear();
            vdom = tmpl(data, Q_Create, viewId, Updater_EncodeURI, refData, Updater_Ref, Updater_EncodeQ, IsArray);
            if (DEBUG) {
                Updater_CheckInput(view, vdom['dE']);
            }
            let ready = () => {
                view['dR'] = vdom;
                if (view['dE']) {
                    tmpl = ref['dH'] || !view['dM'];
                    if (tmpl) {
                        View_EndUpdate(view);
                    }
                    for (vdom of ref['dE']) {
                        CallFunction(vdom['dK'], Empty_Array, vdom);
                        //CallFunction(View_CheckAssign, [vdom]);
                    }
                }
                if (view['dS'] > 1) {
                    view['dS'] = 1;
                    ref['dF'].length = 0;
                    Updater_Digest(view);
                }
                else {
                    view['dS'] = 0;
                    /*
                        在dom diff patch时，如果已渲染的vframe有变化，则会在vom tree上先派发created事件，同时传递inner标志，vom tree处理alter事件派发状态，未进入created事件派发状态
            
                        patch完成后，需要设置vframe hold fire created事件，因为带有assign方法的view在调用render后，vom tree处于就绪状态，此时会导致提前派发created事件，应该hold，统一在endUpdate中派发
            
                        有可能不需要endUpdate，所以hold fire要视情况而定
                    */
                    for ([vdom, viewId, refData] of ref["dF"]) {
                        if (vdom[viewId] != refData) {
                            vdom[viewId] = refData;
                        }
                    }
                    view.fire('domready');
                    keys = view['dT'];
                    for (vdom of keys) {
                        vdom();
                    }
                    keys.length = 0;
                }
            };
            // Updater_Ready_List.push({
            //     '@:{ready#callback}': ready
            // });
            CallFunction(V_SetChildNodes, [view.root, view['dR'], vdom, ref, vf, keys, view, ready]);
            //V_SetChildNodes(view.root, view['@:{view#updater.vdom}'], vdom, ref, vf, keys, view, ready);
        }
    };
    let Q_TEXTAREA = 'textarea';
    let Q_Create = (tag, props, children, specials) => {
        //html=tag+to_array(attrs)+children.html
        let token;
        if (tag) {
            props = props || Empty_Object;
            let compareKey = Empty, unary = children == 1, mxvKeys = specials, hasSpecials = specials, prop, value, c, reused, reusedTotal = 0, 
            //outerHTML = '<' + tag,
            attrs = `<${tag}`, innerHTML = Empty, newChildren, prevNode, mxView = 0;
            if (children &&
                children != 1) {
                for (c of children) {
                    if (c['dF']) {
                        value = c['dF'] + (c['dG'] ? '/>' : `>${c['dH']}</${c['dI']}>`);
                    }
                    else {
                        value = c['dH'];
                        if (c['dI'] == V_TEXT_NODE) {
                            if (value) {
                                value = Updater_Encode(value);
                            }
                            else {
                                continue;
                            }
                        }
                    }
                    innerHTML += value;
                    //merge text node
                    if (prevNode &&
                        c['dI'] == V_TEXT_NODE &&
                        prevNode['dI'] == V_TEXT_NODE) {
                        //prevNode['@:{v#node.html}'] += c['@:{v#node.html}'];
                        prevNode['dH'] += c['dH'];
                    }
                    else {
                        //reused node if new node key equal old node key
                        if (c['dJ']) {
                            if (!reused)
                                reused = {};
                            reused[c['dJ']] = (reused[c['dJ']] || 0) + 1;
                            reusedTotal++;
                        }
                        //force diff children
                        mxvKeys = mxvKeys || c['dK'];
                        prevNode = c;
                        if (!newChildren)
                            newChildren = [];
                        newChildren.push(c);
                    }
                }
            }
            specials = specials || Empty_Object;
            for (prop in props) {
                value = props[prop];
                //布尔值
                if (value === false ||
                    value == Null) {
                    if (!specials[prop]) {
                        delete props[prop];
                    }
                    continue;
                }
                else if (value === true) {
                    props[prop] = value = specials[prop] ? value : Empty;
                }
                if ((prop == Hash_Key ||
                    prop == Tag_Prop_Id ||
                    prop == Tag_Static_Key) &&
                    !compareKey) {
                    compareKey = value;
                    if (prop != Tag_Prop_Id) {
                        delete props[prop];
                        continue;
                    }
                }
                if (prop == MX_View &&
                    value) {
                    mxView = 1;
                    if (!compareKey) {
                        //否则如果是组件,则使用组件的路径做为key
                        compareKey = tag + Spliter + ParseUri(value)[Path];
                    }
                }
                if (prop == Value &&
                    tag == Q_TEXTAREA) {
                    innerHTML = value;
                    //attrs += value;
                }
                else if (prop == Tag_View_Params_Key) {
                    mxvKeys = value;
                    delete props[prop];
                }
                else {
                    attrs += ` ${prop}="${value && Updater_Encode(value)}"`;
                }
            }
            //attrs += outerHTML;
            //outerHTML += unary ? '/>' : `>${innerHTML}</${tag}>`;
            token = {
                'dH': innerHTML,
                'dJ': compareKey,
                'dI': tag,
                'dL': mxView,
                'dK': mxvKeys,
                'dM': specials,
                'dN': hasSpecials,
                'dF': attrs,
                'dO': props,
                'dP': newChildren,
                'dQ': reused,
                'dR': reusedTotal,
                'dG': unary
            };
        }
        else {
            token = {
                'dI': children ? Spliter : V_TEXT_NODE,
                'dH': props + Empty
            };
        }
        return token;
    };
    if (DEBUG) {
        var CheckNodes = (realNodes, vNodes) => {
            let index = 0;
            if (vNodes.length &&
                vNodes[0]['dI'] != Spliter) {
                for (let e of realNodes) {
                    if (e.nodeName.toLowerCase() != vNodes[index]['dI'].toLowerCase()) {
                        console.error('real not match virtual!');
                    }
                    index++;
                }
            }
        };
    }
    //let V_Active_Is_Diff = currentNode => Doc_Document.activeElement != currentNode;
    let V_TEXT_NODE = Counter;
    if (DEBUG) {
        V_TEXT_NODE = '#text';
    }
    let V_W3C = 'http://www.w3.org/';
    let V_NSMap = {
        svg: `${V_W3C}2000/svg`,
        math: `${V_W3C}1998/Math/MathML`
    };
    let V_SetAttributes = (oldNode, newVDOM, lastVDOM, ref) => {
        let key, value, changed = 0, nsMap = newVDOM['dM'], nMap = newVDOM['dO'], osMap, oMap, sValue;
        if (lastVDOM) {
            osMap = lastVDOM['dM'];
            oMap = lastVDOM['dO'];
            for (key in oMap) {
                if (!Has(nMap, key)) { //如果旧有新木有
                    changed = 1;
                    if ((sValue = osMap[key])) {
                        if (ref) {
                            ref['dF'].push([oldNode, sValue, Empty]);
                        }
                        else {
                            oldNode[sValue] = Empty;
                        }
                    }
                    else {
                        oldNode.removeAttribute(key);
                    }
                }
            }
        }
        for (key in nMap) {
            value = nMap[key];
            if ((sValue = nsMap[key])) {
                if (!lastVDOM || oldNode[sValue] != value) {
                    changed = 1;
                    if (ref) {
                        ref['dF'].push([oldNode, sValue, value]);
                    }
                    else {
                        oldNode[sValue] = value;
                    }
                }
            }
            else if (!lastVDOM || oMap[key] != value) {
                changed = 1;
                oldNode.setAttribute(key, value);
            }
        }
        return changed;
    };
    let V_CreateNode = (vnode, owner, ref) => {
        let tag = vnode['dI'], c;
        if (tag == V_TEXT_NODE) {
            c = Doc_Document.createTextNode(vnode['dH']);
        }
        else {
            c = Doc_Document.createElementNS(V_NSMap[tag] || owner.namespaceURI, tag);
            V_SetAttributes(c, vnode);
            SetInnerHTML(c, vnode['dH']);
        }
        return c;
    };
    let V_GetKeyNodes = (list, nodes, start, end, realEnd) => {
        let keyedNodes = {}, i, oc, cKey; //, iKey;
        for (i = end; i >= start; i--, realEnd--) {
            oc = list[i];
            cKey = oc['dJ'];
            if (cKey) {
                //iKey = Spliter + cKey;
                //keyedNodes[iKey] = (keyedNodes[iKey] || 0) + 1;
                oc = keyedNodes[cKey] || (keyedNodes[cKey] = []);
                oc.push(nodes[realEnd]);
            }
        }
        return keyedNodes;
    };
    let V_IsSameVNode = (aVNode, bVNode) => {
        return (aVNode['dJ'] &&
            bVNode['dJ'] == aVNode['dJ']) ||
            (!aVNode['dJ'] &&
                !bVNode['dJ'] &&
                aVNode['dI'] == bVNode['dI']) ||
            aVNode['dI'] == Spliter ||
            bVNode['dI'] == Spliter;
    };
    let V_Remove_Vframe_By_Node = (node, parentVf, elementNode, vf) => {
        if (elementNode) {
            vf = Vframe_Vframes[node['dF']];
            if (vf) {
                vf.unmount();
            }
            else {
                Vframe_UnmountZone(parentVf, node);
            }
        }
    };
    let V_Remove_Node_Task = (node, parent, parentVf, ref, view, ready) => {
        if (view['dE']) {
            V_Remove_Vframe_By_Node(node, parentVf, node.nodeType == 1);
            if (DEBUG) {
                if (!node.parentNode) {
                    console.error('Avoid remove node on view.destroy in digesting');
                }
            }
            parent.removeChild(node);
            if (!(--ref['dG'])) {
                CallFunction(ready);
            }
        }
    };
    let V_Insert_Node_Task = (realNode, oc, nodes, offset, view, ref, ready) => {
        if (view['dE']) {
            if (oc['dI'] == Spliter) {
                Vframe_UnmountZone(realNode);
                SetInnerHTML(realNode, oc['dH']);
            }
            else {
                realNode.insertBefore(V_CreateNode(oc, realNode, ref), nodes[offset]);
            }
            if (!(--ref['dG'])) {
                CallFunction(ready);
            }
        }
    };
    // let V_DecreaseUsed = (reused, resuedTotal, vnode, keyedNodes, list?) => {
    //     if (reused[vnode['@:{v#node.compare.key}']]) {
    //         reused[vnode['@:{v#node.compare.key}']]--;
    //         resuedTotal--;
    //         if (keyedNodes &&
    //             (list = keyedNodes[vnode['@:{v#node.compare.key}']]) &&
    //             list.length > 1) {
    //             keyedNodes = Null;
    //         }
    //     }
    //     return [resuedTotal, keyedNodes];
    // };
    let V_SetChildNodes = (realNode, lastVDOM, newVDOM, ref, vframe, keys, view, ready) => {
        if (view['dE']) {
            if (lastVDOM) { //view首次初始化，通过innerHTML快速更新
                if (lastVDOM['dK'] ||
                    lastVDOM['dH'] != newVDOM['dH']) {
                    let i, oi, oc, oldChildren = lastVDOM['dP'] || Empty_Array, newChildren = newVDOM['dP'] || Empty_Array, reused = newVDOM['dQ'] || Empty_Object, resuedTotal = newVDOM['dR'], oldReusedTotal = lastVDOM['dR'], nodes = realNode.childNodes, compareKey, keyedNodes, oldRangeStart = 0, newCount = newChildren.length, oldRangeEnd = oldChildren.length - 1, newRangeStart = 0, newRangeEnd = newCount - 1;
                    if (DEBUG &&
                        lastVDOM['dI'] != Q_TEXTAREA) {
                        CheckNodes(nodes, oldChildren);
                    }
                    // let newCount = newChildren.length - 1;
                    // let oldCount = oldChildren.length - 1,
                    //     nc,
                    //     realNodeStep;
                    // keyedNodes = {};
                    // while (oldCount &&
                    //     newCount) {
                    //     oc = oldChildren[oldRangeStart];
                    //     nc = newChildren[newRangeStart];
                    //     if (oc['@:{v#node.outer.html}'] ==
                    //         nc['@:{v#node.outer.html}']) {
                    //         if (oc['@:{v#node.has.mxv}']) {
                    //             V_SetNode(nodes[oldRangeStart], realNode, oc, nc, ref, vframe, keys);
                    //         }
                    //         if (reused[oc['@:{v#node.compare.key}']]) {
                    //             reused[oc['@:{v#node.compare.key}']]--;
                    //             resuedTotal--;
                    //         }
                    //         ++oldRangeStart;
                    //         ++newRangeStart;
                    //         --oldCount;
                    //         --newCount;
                    //     } else {
                    //         break;
                    //     }
                    // }
                    // while (oldCount > 1 &&
                    //     newCount > 1) {
                    //     oc = oldChildren[oldRangeEnd];
                    //     nc = newChildren[newRangeEnd];
                    //     if (oc && nc &&
                    //         oc['@:{v#node.outer.html}'] ==
                    //         nc['@:{v#node.outer.html}']) {
                    //         if (oc['@:{v#node.has.mxv}']) {
                    //             V_SetNode(nodes[oldRangeEnd], realNode, oc, nc, ref, vframe, keys);
                    //         }
                    //         if (reused[oc['@:{v#node.compare.key}']]) {
                    //             reused[oc['@:{v#node.compare.key}']]--;
                    //             resuedTotal--;
                    //         }
                    //         --oldRangeEnd;
                    //         --newRangeEnd;
                    //         --oldCount;
                    //         --newCount;
                    //     } else {
                    //         break;
                    //     }
                    // }
                    // if (resuedTotal > 0 &&
                    //     oldReusedTotal > 0) {
                    //     for (i = oldRangeEnd; i >= oldRangeStart; i--) {
                    //         oc = oldChildren[i];
                    //         compareKey = oc['@:{v#node.compare.key}'];
                    //         if (compareKey) {
                    //             compareKey = keyedNodes[compareKey] || (keyedNodes[compareKey] = []);
                    //             compareKey.push(nodes[i]);
                    //         }
                    //     }
                    // }
                    // for (i = newRangeStart; i <= newRangeEnd; i++) {
                    //     nc = newChildren[i];
                    //     oc = oldRangeStart <= oldRangeEnd && oldChildren[oldRangeStart++];
                    //     compareKey = keyedNodes[nc['@:{v#node.compare.key}']];
                    //     if (compareKey && (compareKey = compareKey.pop())) {
                    //         if (compareKey != nodes[i]) {
                    //             for (oi = oldRangeStart, realNodeStep = 1;
                    //                 oi <= oldRangeEnd;
                    //                 oi++, realNodeStep++) {
                    //                 oc = oldChildren[oi];
                    //                 if (oc && nodes[i + realNodeStep] == compareKey) {
                    //                     oldChildren.splice(oi, 1);
                    //                     oldRangeStart--;
                    //                     break;
                    //                 }
                    //             }
                    //             realNode.insertBefore(compareKey, nodes[i]);
                    //         }
                    //         if (reused[oc['@:{v#node.compare.key}']]) {
                    //             reused[oc['@:{v#node.compare.key}']]--;
                    //         }
                    //         
                    //         ref['@:{updater-ref#async.count}']++;
                    //         CallFunction(V_SetNode, [compareKey, realNode, oc, nc, ref, vframe, keys, view, ready]);
                    //         
                    //     } else if (oc) {//有旧节点，则更新
                    //         if (keyedNodes[oc['@:{v#node.compare.key}']] &&
                    //             reused[oc['@:{v#node.compare.key}']]) {
                    //             oldCount++;
                    //             ref['@:{updater-ref#changed}'] = 1;
                    //             realNode.insertBefore(V_CreateNode(nc, realNode), nodes[i]);
                    //             oldRangeStart--;
                    //         } else {
                    //             ref['@:{updater-ref#async.count}']++;
                    //             CallFunction(V_SetNode, [nodes[i], realNode, oc, nc, ref, vframe, keys, view, ready]);
                    //             
                    //         }
                    //     } else {//添加新的节点
                    //         if (nc['@:{v#node.tag}'] == Spliter) {
                    //             SetInnerHTML(realNode, nc['@:{v#node.outer.html}']);
                    //         } else {
                    //             realNode.insertBefore(V_CreateNode(nc, realNode), nodes[i]);
                    //         }
                    //         ref['@:{updater-ref#changed}'] = 1;
                    //     }
                    // }
                    // for (i = newCount; i < oldCount; i++) {
                    //     oi = nodes[newRangeEnd + 1];//删除多余的旧节点
                    //     if (oi.nodeType == 1) {
                    //         vframe.unmountZone(oi);
                    //     }
                    //     if (DEBUG) {
                    //         if (!oi.parentNode) {
                    //             console.error('Avoid remove node on view.destroy in digesting');
                    //         }
                    //     }
                    //     realNode.removeChild(oi);
                    // }
                    //-------new alg-------
                    let oldStartNode = oldChildren[oldRangeStart], oldEndNode = oldChildren[oldRangeEnd], newStartNode = newChildren[newRangeStart], newEndNode = newChildren[newRangeEnd], realNodeRangeStart = oldRangeStart, realNodeRangeEnd = oldRangeEnd, currentNode;
                    while (oldRangeStart <= oldRangeEnd &&
                        newRangeStart <= newRangeEnd) {
                        if (!oldStartNode) {
                            oldStartNode = oldChildren[++oldRangeStart];
                        }
                        else if (!oldEndNode) {
                            oldEndNode = oldChildren[--oldRangeEnd];
                        }
                        else if (V_IsSameVNode(newStartNode, oldStartNode)) {
                            if (newStartNode['dI'] == Spliter ||
                                oldStartNode['dI'] == Spliter) {
                                ref['dH'] = 1;
                                Vframe_UnmountZone(realNode);
                                if (newStartNode['dI'] == Spliter) {
                                    realNodeRangeEnd = 0;
                                    SetInnerHTML(realNode, newStartNode['dH']);
                                }
                                else {
                                    SetInnerHTML(realNode, Empty);
                                    realNode.appendChild(V_CreateNode(newStartNode, realNode, ref));
                                }
                            }
                            else {
                                ref['dG']++;
                                CallFunction(V_SetNode, [nodes[realNodeRangeStart], realNode, oldStartNode, newStartNode, ref, vframe, keys, view, ready]);
                            }
                            //更新需要保留的节点，加速对节点索引
                            //如果当前节点已经在索引中，则要按顺序移除
                            //[resuedTotal, keyedNodes] = V_DecreaseUsed(reused, resuedTotal, oldStartNode, keyedNodes);
                            if (reused[oldStartNode['dJ']]) {
                                reused[oldStartNode['dJ']]--;
                                resuedTotal--;
                                compareKey = keyedNodes &&
                                    keyedNodes[oldStartNode['dJ']];
                                if (compareKey) {
                                    --keyedNodes[oldStartNode['dJ']];
                                }
                            }
                            realNodeRangeStart++;
                            oldStartNode = oldChildren[++oldRangeStart];
                            newStartNode = newChildren[++newRangeStart];
                        }
                        else if (V_IsSameVNode(newEndNode, oldEndNode)) {
                            ref['dG']++;
                            CallFunction(V_SetNode, [nodes[realNodeRangeEnd], realNode, oldEndNode, newEndNode, ref, vframe, keys, view, ready]);
                            //[resuedTotal, keyedNodes] = V_DecreaseUsed(reused, resuedTotal, oldEndNode, keyedNodes);
                            if (reused[oldEndNode['dJ']]) {
                                reused[oldEndNode['dJ']]--;
                                resuedTotal--;
                            }
                            realNodeRangeEnd--;
                            oldEndNode = oldChildren[--oldRangeEnd];
                            newEndNode = newChildren[--newRangeEnd];
                        }
                        else if (V_IsSameVNode(newEndNode, oldStartNode)) {
                            oi = nodes[realNodeRangeStart];
                            realNode.insertBefore(oi, nodes[realNodeRangeEnd + 1]);
                            ref['dG']++;
                            CallFunction(V_SetNode, [oi, realNode, oldStartNode, newEndNode, ref, vframe, keys, view, ready]);
                            //[resuedTotal, keyedNodes] = V_DecreaseUsed(reused, resuedTotal, oldStartNode, keyedNodes);
                            if (reused[oldStartNode['dJ']]) {
                                reused[oldStartNode['dJ']]--;
                                resuedTotal--;
                            }
                            realNodeRangeEnd--;
                            oldStartNode = oldChildren[++oldRangeStart];
                            newEndNode = newChildren[--newRangeEnd];
                        }
                        else if (V_IsSameVNode(newStartNode, oldEndNode)) {
                            oi = nodes[realNodeRangeEnd];
                            realNode.insertBefore(oi, nodes[realNodeRangeStart++]);
                            ref['dG']++;
                            CallFunction(V_SetNode, [oi, realNode, oldEndNode, newStartNode, ref, vframe, keys, view, ready]);
                            if (reused[oldEndNode['dJ']]) {
                                reused[oldEndNode['dJ']]--;
                                resuedTotal--;
                            }
                            //[resuedTotal, keyedNodes] = V_DecreaseUsed(reused, resuedTotal, oldEndNode, keyedNodes);
                            oldEndNode = oldChildren[--oldRangeEnd];
                            newStartNode = newChildren[++newRangeStart];
                        }
                        else {
                            if (!keyedNodes &&
                                resuedTotal > 0 &&
                                oldReusedTotal > 0) {
                                keyedNodes = V_GetKeyNodes(oldChildren, nodes, oldRangeStart, oldRangeEnd, realNodeRangeEnd);
                            }
                            currentNode = nodes[realNodeRangeStart];
                            compareKey = keyedNodes &&
                                keyedNodes[newStartNode['dJ']];
                            /**
                             * <div>{{=f}}</div>   =>  <div>aa</div>
                             * <div>aa</div>
                             * <div>bb</div>
                             */
                            if (compareKey &&
                                (compareKey = compareKey.pop() /*[--keyedNodes[Spliter + newStartNode['@:{v#node.compare.key}']]]*/)) {
                                oc = oldStartNode;
                                if (compareKey != currentNode) {
                                    /**
                                     * <div>{{=x}}</div>    =>    <div>aa</div>
                                     * <div>aa</div>              <div>bb</div>
                                     * <div>bb</div>
                                     * <div>{{=y}}</div>
                                     */
                                    for (oi = oldRangeStart + 1,
                                        i = realNodeRangeStart + 1; oi <= oldRangeEnd; oi++) {
                                        oc = oldChildren[oi];
                                        if (oc &&
                                            nodes[i++] == compareKey) {
                                            oldChildren[oi] = Null;
                                            break;
                                        }
                                    }
                                    oldRangeStart--;
                                    realNode.insertBefore(compareKey, currentNode);
                                }
                                if (reused[oc['dJ']]) {
                                    reused[oc['dJ']]--;
                                }
                                ref['dG']++;
                                CallFunction(V_SetNode, [compareKey, realNode, oc, newStartNode, ref, vframe, keys, view, ready]);
                            }
                            else {
                                /**
                                 * <div>aa</div>    =>    <div>{{=f}}</div>
                                 *                        <div>aa</div>
                                 *                        <div>bb</div>
                                 */
                                if ((keyedNodes &&
                                    keyedNodes[oldStartNode['dJ']] &&
                                    reused[oldStartNode['dJ']]) ||
                                    (Vframe_Vframes[currentNode['dF']] &&
                                        !newStartNode['dL'])) {
                                    ref['dH'] = 1;
                                    realNode.insertBefore(V_CreateNode(newStartNode, realNode, ref), currentNode);
                                    oldRangeStart--;
                                    realNodeRangeEnd++;
                                }
                                else {
                                    ref['dG']++;
                                    CallFunction(V_SetNode, [currentNode, realNode, oldStartNode, newStartNode, ref, vframe, keys, view, ready]);
                                }
                            }
                            ++realNodeRangeStart;
                            oldStartNode = oldChildren[++oldRangeStart];
                            newStartNode = newChildren[++newRangeStart];
                        }
                    }
                    for (i = newRangeStart, oi = 1; i <= newRangeEnd; i++, oi++) {
                        oc = newChildren[i];
                        ref['dH'] = 1;
                        ref['dG']++;
                        CallFunction(V_Insert_Node_Task, [realNode, oc, nodes, realNodeRangeEnd + oi, view, ref, ready]);
                        // if (oc['@:{v#node.tag}'] == Spliter) {
                        //     Vframe_UnmountZone(realNode);
                        //     SetInnerHTML(realNode, oc['@:{v#node.html}']);
                        // } else {
                        //     realNode.insertBefore(V_CreateNode(oc, realNode), nodes[realNodeRangeEnd + oi]);
                        // }
                    }
                    if (!newCount &&
                        oldStartNode &&
                        oldStartNode['dI'] == Spliter) {
                        realNodeRangeEnd = nodes.length - 1;
                    }
                    for (i = realNodeRangeEnd; i >= realNodeRangeStart; i--) { //删除多余的旧节点
                        ref['dH'] = 1;
                        ref['dG']++;
                        CallFunction(V_Remove_Node_Task, [nodes[i], realNode, vframe, ref, view, ready]);
                    }
                }
            }
            else {
                ref['dH'] = 1;
                SetInnerHTML(realNode, newVDOM['dH']);
                if (DEBUG) {
                    if (vframe.root.nodeType == 1 && !vframe.root.parentNode) {
                        throw new Error(`unsupport mount "${vframe.path}". the root element is removed by other views`);
                    }
                    let pId = vframe.pId;
                    let vf = Vframe_Vframes[pId];
                    if (vf) {
                        let cs = vf.children();
                        for (let c of cs) {
                            if (c != vframe.id) {
                                let nv = Vframe_Vframes[c];
                                if (nv &&
                                    nv['dH'] &&
                                    nv['dH']['dL'] &&
                                    NodeIn(vframe.root, nv.root)) {
                                    throw new Error(`unsupport nest "${vframe.path}" within "${nv.path}"`);
                                }
                            }
                        }
                    }
                }
            }
        }
        if (!ref['dG']) {
            CallFunction(ready);
        }
    };
    let V_SetNode = (realNode, oldParent, lastVDOM, newVDOM, ref, vframe, keys, rootView, ready) => {
        if (rootView['dE']) {
            if (DEBUG) {
                if (lastVDOM['dI'] != Spliter &&
                    newVDOM['dI'] != Spliter) {
                    if (oldParent.nodeName == 'TEMPLATE') {
                        console.error('unsupport template tag');
                    }
                    if ((realNode.nodeName == '#text' &&
                        lastVDOM['dI'] != '#text') ||
                        (realNode.nodeName != '#text' &&
                            realNode.nodeName.toLowerCase() != lastVDOM['dI'].toLowerCase())) {
                        console.error('Your code is not match the DOM tree generated by the browser. near:' + lastVDOM['dH'] + '. Is that you lost some tags or modified the DOM tree?');
                    }
                }
            }
            let lastAMap = lastVDOM['dO'], newAMap = newVDOM['dO'];
            if (lastVDOM['dK'] ||
                lastVDOM['dF'] != newVDOM['dF'] ||
                lastVDOM['dH'] != newVDOM['dH']) {
                if (lastVDOM['dI'] == newVDOM['dI']) {
                    if (lastVDOM['dI'] == V_TEXT_NODE) {
                        ref['dH'] = 1;
                        realNode.nodeValue = newVDOM['dH'];
                    }
                    else if (!lastAMap[Tag_Static_Key] ||
                        lastAMap[Tag_Static_Key] != newAMap[Tag_Static_Key]) {
                        let newMxView = newAMap[MX_View], newHTML = newVDOM['dH'], updateAttribute = lastVDOM['dF'] != newVDOM['dF'] || newVDOM['dN'], updateChildren, unmountOld, oldVf = Vframe_Vframes[realNode['dF']], assign, view, uri = newMxView && ParseUri(newMxView), params, htmlChanged, paramsChanged;
                        /*
                            如果存在新旧view，则考虑路径一致，避免渲染的问题
                         */
                        /*
                            只检测是否有参数控制view而不检测数据是否变化的原因：
                            例：view内有一input接收传递的参数，且该input也能被用户输入
                            var d1='xl';
                            var d2='xl';
                            当传递第一份数据时，input显示值xl，这时候用户修改了input的值且使用第二份数据重新渲染这个view，问input该如何显示？
                        */
                        if (updateAttribute) {
                            updateAttribute = V_SetAttributes(realNode, newVDOM, lastVDOM, ref);
                            if (updateAttribute) {
                                ref['dH'] = 1;
                            }
                        }
                        //旧节点有view,新节点有view,且是同类型的view
                        if (newMxView && oldVf &&
                            oldVf['dL'] == uri[Path] &&
                            (view = oldVf['dH'])) {
                            htmlChanged = newHTML != lastVDOM['dH'];
                            paramsChanged = newMxView != oldVf[Path];
                            assign = newVDOM['dK'];
                            if (!htmlChanged && !paramsChanged && assign) {
                                params = assign.split(Comma);
                                for (assign of params) {
                                    if (assign == Hash_Key || Has(keys, assign)) {
                                        paramsChanged = 1;
                                        break;
                                    }
                                }
                            }
                            if (paramsChanged ||
                                htmlChanged) {
                                assign = view['dJ'];
                                //如果有assign方法,且有参数或html变化
                                //if (assign) {
                                params = uri[Params];
                                //处理引用赋值
                                Vframe_TranslateQuery(newAMap[MX_OWNER], newMxView, params);
                                oldVf[Path] = newMxView; //update ref
                                oldVf['dJ'] = newHTML;
                                //如果需要更新，则进行更新的操作
                                // uri = {
                                //     //node: newVDOM,//['@:{v#node.children}'],
                                //     //html: newHTML,
                                //     //mxv: hasMXV,
                                //     node: realNode,
                                //     attr: updateAttribute,
                                //     deep: !view.tmpl,
                                //     inner: htmlChanged,
                                //     query: paramsChanged
                                // };
                                //updateAttribute = 1;
                                if (DEBUG) {
                                    let result = ToTry(assign, [params, newHTML], /*[params, uri],*/ view);
                                    if (result !== false) {
                                        if (assign == View.prototype.assign) {
                                            console.error(`override ${uri[Path]} "assign" method and make sure returned true or false value`);
                                        }
                                        ref['dE'].push(view);
                                    }
                                }
                                else if (ToTry(assign, [params, newHTML], /*[params, uri],*/ view) !== false) {
                                    ref['dE'].push(view);
                                }
                                //默认当一个组件有assign方法时，由该方法及该view上的render方法完成当前区域内的节点更新
                                //而对于不渲染界面的控制类型的组件来讲，它本身更新后，有可能需要继续由magix更新内部的子节点，此时通过deep参数控制
                                updateChildren = !view['dL']; //uri.deep;
                                // } else {
                                //     unmountOld = 1;
                                //     updateChildren = 1;
                                //     if (DEBUG) {
                                //         if (updateAttribute) {
                                //             console.warn(`There is no "assign" method in ${uri[Path]},so magix remount it when attrs changed`);
                                //         }
                                //     }
                                // }
                            } // else {
                            // updateAttribute = 1;
                            //}
                        }
                        else {
                            updateChildren = 1;
                            unmountOld = oldVf;
                        }
                        if (unmountOld) {
                            ref['dH'] = 1;
                            oldVf.unmount();
                        }
                        // Update all children (and subchildren).
                        //自闭合标签不再检测子节点
                        if (updateChildren &&
                            !newVDOM['dG']) {
                            V_SetChildNodes(realNode, lastVDOM, newVDOM, ref, vframe, keys, rootView, ready);
                        }
                    }
                }
                else {
                    ref['dH'] = 1;
                    V_Remove_Vframe_By_Node(realNode, vframe, 1);
                    oldParent.replaceChild(V_CreateNode(newVDOM, oldParent, ref), realNode);
                }
            }
        }
        if (!(--ref['dG'])) {
            CallFunction(ready);
        }
    };
    let State_Data = {};
    let State = Assign({
        get(key) {
            return key ? State_Data[key] : State_Data;
        },
        /**
         * 设置数据
         * @param {Object} data 数据对象
         */
        set(data) {
            Assign(State_Data, data);
        }
    }, MxEvent);
    //like 'login<click>' or '$<click>' or '$win<scroll>' or '$win<scroll>&{capture:true}'
    let View_EvtMethodReg = /^(\$?)([^<]*)<([^>]+)>(?:\s*&(.+))?$/;
    let processMixinsSameEvent = (exist, additional, temp) => {
        if (exist['dE']) {
            temp = exist;
        }
        else {
            temp = function (e, f) {
                for (f of temp['dE']) {
                    ToTry(f, e, this);
                }
            };
            temp['dE'] = [exist];
            temp['dF'] = 1;
        }
        temp['dE'] = temp['dE'].concat(additional['dE'] || additional);
        return temp;
    };
    let View_EndUpdate = view => {
        let o, f;
        if (view['dE']) {
            f = view['dM'];
            view['dM'] = 1;
            o = view.owner;
            Vframe_MountZone(o);
            if (!f) {
                CallFunction(Vframe_RunInvokes, o);
            }
        }
    };
    let View_DelegateEvents = (me, destroy) => {
        let e, { 'dO': eventsObject, 'dN': selectorObject, 'dU': eventsList, id } = me; //eventsObject
        for (e in eventsObject) {
            Body_DOMEventBind(e, selectorObject[e], destroy, eventsObject[e]);
        }
        eventsObject = destroy ? RemoveEventListener : AddEventListener;
        for (e of eventsList) {
            eventsObject(e['dE'], e['dF'], e['dG'], e['dH'], id, me);
        }
    };
    let View_Globals = {
        win: Doc_Window,
        doc: Doc_Document,
        root: Empty
    };
    function staticExtend(...args) {
        return Assign(this, ...args), this;
    }
    let View_MergeMixins = (mixins, proto, ctors) => {
        let temp = {}, p, node, fn, exist;
        for (node of mixins) {
            for (p in node) {
                fn = node[p];
                exist = temp[p];
                if (p == 'ctor') {
                    ctors.push(fn);
                    continue;
                }
                else if (View_EvtMethodReg.test(p)) {
                    if (exist) {
                        fn = processMixinsSameEvent(exist, fn);
                    }
                    else {
                        fn['dF'] = 1;
                    }
                }
                else if (DEBUG &&
                    exist &&
                    fn != exist) { //只在开发中提示
                    Mx_Cfg.error(Error('plugins duplicate property:' + p));
                }
                temp[p] = fn;
            }
        }
        for (p in temp) {
            if (!Has(proto, p)) {
                proto[p] = temp[p];
            }
            else if (DEBUG) {
                console.error('already exist ' + p + ',avoid override it!');
            }
        }
    };
    function merge(...args) {
        let me = this, _ = me['dE'] || (me['dE'] = []);
        View_MergeMixins(args, me[Prototype], _);
        return me;
    }
    let safeRender = render => function (...args) { return this['dE'] && ToTry(render, args, this); };
    let execCtors = (list, params, me, cx) => {
        if (list) {
            for (cx of list) {
                ToTry(cx, params, me);
            }
        }
    };
    function extend(props) {
        let me = this;
        props = props || {};
        let ctor = props.ctor;
        function NView(viewId, rootNode, ownerVf, initParams, z) {
            me.call(z = this, viewId, rootNode, ownerVf, initParams);
            if (ctor)
                ToTry(ctor, initParams, z);
            execCtors(NView['dE'], initParams, z);
        }
        NView.merge = merge;
        NView.extend = extend;
        NView.static = staticExtend;
        return Extend(NView, me, props);
    }
    let View_Prepare = oView => {
        if (!oView[Spliter]) { //只处理一次
            oView[Spliter] = 1;
            let prop = oView[Prototype], currentFn, matches, selectorOrCallback, events, eventsObject = {}, eventsList = [], selectorObject = {}, node, isSelector, p, item, mask, mod, modifiers;
            for (p in prop) {
                currentFn = prop[p];
                matches = p.match(View_EvtMethodReg);
                if (matches) {
                    [, isSelector, selectorOrCallback, events, modifiers] = matches;
                    mod = modifiers ? ToObject(modifiers) : Empty_Object;
                    events = events.split(Comma);
                    for (item of events) {
                        node = View_Globals[selectorOrCallback];
                        mask = 1;
                        if (mod.passive === false) {
                            mask |= Body_Passive_Flag;
                        }
                        if (mod.capture) {
                            mask |= Body_Capture_Flag;
                        }
                        if (isSelector) {
                            if (node) {
                                eventsList.push({
                                    'dG': currentFn,
                                    'dE': node,
                                    'dF': item,
                                    'dH': mod
                                });
                                continue;
                            }
                            if (node === Empty) {
                                selectorOrCallback = Empty;
                            }
                            mask |= 2;
                            node = selectorObject[item];
                            if (!node) {
                                node = selectorObject[item] = [];
                            }
                            if (!node[selectorOrCallback]) {
                                node[selectorOrCallback] = 1;
                                node.push(selectorOrCallback);
                            }
                        }
                        eventsObject[item] |= mask;
                        item = selectorOrCallback + Spliter + item;
                        node = prop[item];
                        //for in 就近遍历，如果有则忽略
                        if (!node) { //未设置过
                            prop[item] = currentFn;
                        }
                        else if (node['dF']) { //现有的方法是mixins上的
                            if (currentFn['dF']) { //2者都是mixins上的事件，则合并
                                prop[item] = processMixinsSameEvent(currentFn, node);
                            }
                            else if (Has(prop, p)) { //currentFn方法不是mixin上的，也不是继承来的，在当前view上，优先级最高
                                prop[item] = currentFn;
                            }
                        }
                    }
                }
            }
            prop['dK'] = prop.render = safeRender(prop.render);
            prop['dO'] = eventsObject;
            prop['dU'] = eventsList;
            prop['dN'] = selectorObject;
            prop['dJ'] = prop.assign;
            prop['dL'] = prop.tmpl;
        }
    };
    function View(id, root, owner, params, me) {
        me = this;
        me.root = root;
        me.owner = owner;
        me.id = id;
        //me[Spliter] = id;
        me['dE'] = 1; //标识view是否刷新过，对于托管的函数资源，在回调这个函数时，不但要确保view没有销毁，而且要确保view没有刷新过，如果刷新过则不回调
        me['dQ'] = 1;
        me['dH'] = {};
        me['dP'] = {};
        //me['@:{view#assign.sign}'] = 0;
        me['dS'] = 0;
        me['dT'] = [];
        execCtors(View['dE'], params, me);
    }
    Assign(View, {
        merge,
        extend
    });
    Assign(View[Prototype], MxEvent, {
        init: Noop,
        render: Noop,
        assign: Noop,
        get(key, result) {
            result = this['dH'];
            if (key) {
                result = result[key];
            }
            return result;
        },
        set(newData, force) {
            let me = this, oldData = me['dH'], keys = me['dP'];
            let changed = me['dQ'], now, old, p;
            for (p in newData) {
                now = newData[p];
                old = oldData[p];
                if (!IsPrimitive(now) ||
                    old != now ||
                    force) {
                    keys[p] = 1;
                    changed = 1;
                }
                oldData[p] = now;
            }
            me['dQ'] = changed;
            return me;
        },
        digest(data, force) {
            data = this.set(data, force);
            /*
                view:
                <div>
                    <mx-dropdown mx-focusout="rerender()"/>
                <div>
    
                view.digest=>dropdown.focusout=>view.redigest=>view.redigest.end=>view.digest.end
    
                view.digest中嵌套了view.redigest，view.redigest可能操作了view.digest中引用的dom,这样会导致view.redigest.end后续的view.digest中出错
    
                expect
                view.digest=>dropdown.focusout=>view.digest.end=>view.redigest=>view.redigest.end
    
                如果在digest的过程中，多次调用自身的digest，则后续的进行排队。前面的执行完成后，排队中的一次执行完毕
            */
            return new GPromise(resolve => {
                if (data['dQ']) {
                    data['dS']++;
                    data['dT'].push(resolve);
                    if (data['dS'] == 1) {
                        Updater_Digest(data, 1);
                    }
                }
                else if (data['dS']) {
                    data['dT'].push(resolve);
                }
                else {
                    resolve();
                }
            });
        },
        finale() {
            let me = this;
            return new GPromise(resolve => {
                if (me['dS']) {
                    me['dT'].push(resolve);
                }
                else {
                    resolve();
                }
            });
        },
        parse(origin) {
            return ParseExpr(origin, this.owner['dE']);
        }
    });
    /*
        一个请求send后，应该取消吗？
        参见xmlhttprequest的实现
            https://chromium.googlesource.com/chromium/blink/+/master/Source/core
            https://chromium.googlesource.com/chromium/blink/+/master/Source/core/xmlhttprequest/XMLHttpService.cpp
        当请求发出，服务器接受到之前取消才有用，否则连接已经建立，数据开始传递，中止只会浪费。
        但我们很难在合适的时间点abort，而且像jsonp的，我们根本无法abort掉，只能任数据返回
    
        然后我们在自已的代码中再去判断、决定回调是否调用
    
        那我们是否可以这样做：
            1. 不取消请求
            2. 请求返回后尽可能的处理保留数据，比如缓存。处理完成后才去决定是否调用回调（Service_Send中的Done实现）
    
        除此之外，我们还要考虑
            1. 跨请求对象对同一个缓存的接口进行请求，而某一个销毁了。
                Service.add([{
                    name:'Test',
                    url:'/test',
                    cache:20000
                }]);
    
                let r1=new Service();
                r1.all('Test',function(e,m){
    
                });
    
                let r2=new Service();
                r2.all('Test',function(e,m){
    
                });
    
                r1.destroy();
    
                如上代码，我们在实现时：
                r2在请求Test时，此时Test是可缓存的，并且Test已经处于r1请求中了，我们不应该再次发起新的请求，只需要把回调排队到r1的Test请求中即可。参见代码：Service_Send中的for,Service.cached。
    
                当r1进行销毁时，并不能贸然销毁r1上的所有请求，如Test请求不能销毁，只能从回调中标识r1的回调不能再被调用。r1的Test还要继续，参考上面讨论的请求应该取消吗。就算能取消，也需要查看Test的请求中，除了r1外是否还有别的请求要用，我们示例中是r2，所以仍然继续请求。参考Service#.destroy
    
    
     */
    function Bag() {
        this.id = GUID('b');
        this['dE'] = {};
    }
    Assign(Bag[Prototype], {
        get(key, dValue) {
            let me = this;
            //let alen = arguments.length;
            /*
                目前只处理了key中不包含.的情况，如果key中包含.则下面的简单的通过split('.')的方案就不行了，需要改为：
    
                let reg=/[^\[\]]+(?=\])|[^.\[\]]+/g;
                let a=['a.b.c','a[b.c].d','a[0][2].e','a[b.c.d][eg].a.b.c','[e.g.d]','a.b[c.d.fff]'];
    
                for(let i=0,one;i<a.length;i++){
                  one=a[i];
                  console.log(one.match(reg))
                }
    
                但考虑到key中有.的情况非常少，则优先使用性能较高的方案
    
                或者key本身就是数组
             */
            let attrs = me['dE'];
            if (key) {
                let tks = IsArray(key) ? key.slice() : (key + Empty).split('.'), tk;
                while ((tk = tks.shift()) && attrs) {
                    attrs = attrs[tk];
                }
                if (tk) {
                    attrs = Undefined;
                }
            }
            let type;
            if (dValue !== Undefined && (type = Type(dValue)) != Type(attrs)) {
                if (DEBUG) {
                    console.warn('type neq:' + key + ' is not a(n) ' + type);
                }
                attrs = dValue;
            }
            if (DEBUG && me['dF'] && me['dF']['dE']) { //缓存中的接口不让修改数据
                attrs = Safeguard(attrs);
            }
            return attrs;
        },
        set(data) {
            Assign(this['dE'], data);
        }
    });
    let Service_FetchFlags_ONE = 1;
    let Service_FetchFlags_ALL = 2;
    let Service_Cache_Done = (bagCacheKeys, cacheKey, fns) => error => {
        fns = bagCacheKeys[cacheKey];
        if (fns) {
            delete bagCacheKeys[cacheKey]; //先删除掉信息
            for (let fn of fns) {
                ToTry(fn, error, fns['dE']); //执行所有的回调
            }
        }
    };
    // function Service_CacheDone(cacheKey, err, fns) {
    //     fns = this[cacheKey]; //取出当前的缓存信息
    //     if (fns) {
    //         delete this[cacheKey]; //先删除掉信息
    //         ToTry(fns, err, fns['@:{service-cache-list#entity}']); //执行所有的回调
    //     }
    // }
    let Service_Task = (done, host, service, total, flag, bagCache) => {
        let doneArr = [];
        let errorArgs = Null;
        let currentDoneCount = 0;
        return (bag, idx, error) => {
            currentDoneCount++; //当前完成加1.
            let newBag;
            let mm = bag['dF'];
            let cacheKey = mm['dE'], temp;
            doneArr[idx + 1] = bag; //完成的bag
            if (error) { //出错
                errorArgs = error;
                //errorArgs[idx] = err; //记录相应下标的错误信息
                //Assign(errorArgs, err);
                newBag = 1; //标记当前是一个新完成的bag,尽管出错了
            }
            else if (!bagCache.has(cacheKey)) { //如果缓存对象中不存在，则处理。注意在开始请求时，缓存与非缓存的都会调用当前函数，所以需要在该函数内部做判断处理
                if (cacheKey) { //需要缓存
                    bagCache.set(cacheKey, bag); //缓存
                }
                //bag.set(data);
                mm['dF'] = Date_Now(); //记录当前完成的时间
                temp = mm['dG'];
                if (temp) { //有after
                    ToTry(temp, bag, bag);
                }
                newBag = 1;
            }
            if (!service['dE']) { //service['@:{service#destroyed}'] 当前请求被销毁
                let finish = currentDoneCount == total;
                if (finish) {
                    service['dF'] = 0;
                    if (flag == Service_FetchFlags_ALL) { //all
                        doneArr[0] = errorArgs;
                        ToTry(done, doneArr, service);
                    }
                }
                if (flag == Service_FetchFlags_ONE) { //如果是其中一个成功，则每次成功回调一次
                    ToTry(done, [error || Null, bag, finish, idx], service);
                }
            }
            if (newBag) { //不管当前request或回调是否销毁，均派发end事件，就像前面缓存一样，尽量让请求处理完成，该缓存的缓存，该派发事件派发事件。
                host.fire('end', {
                    bag,
                    error
                });
            }
        };
    };
    let Service_Send = (me, attrs, done, flag, save) => {
        if (me['dE'])
            return me; //如果已销毁，返回
        if (me['dF']) { //繁忙，后续请求入队
            return me.enqueue(Service_Send.bind(me, me, attrs, done, flag, save));
        }
        me['dF'] = 1; //标志繁忙
        if (!IsArray(attrs)) {
            attrs = [attrs];
        }
        let host = me.constructor, requestCount = 0;
        //let bagCache = host['@:{service#cache}']; //存放bag的Cache对象
        let bagCacheKeys = host['dG']; //可缓存的bag key
        let removeComplete = Service_Task(done, host, me, attrs.length, flag, host['dH']);
        for (let bag of attrs) {
            if (bag) {
                let [bagEntity, update] = host.get(bag, save); //获取bag信息
                let cacheKey = bagEntity['dF']['dE']; //从实体上获取缓存key
                let complete = removeComplete.bind(bagEntity, bagEntity, requestCount++);
                let cacheList;
                if (cacheKey && bagCacheKeys[cacheKey]) { //如果需要缓存，并且请求已发出
                    bagCacheKeys[cacheKey].push(complete); //放到队列中
                }
                else if (update) { //需要更新
                    if (cacheKey) { //需要缓存
                        cacheList = [complete];
                        cacheList['dE'] = bagEntity;
                        bagCacheKeys[cacheKey] = cacheList;
                        complete = Service_Cache_Done(bagCacheKeys, cacheKey); //替换回调，详见Service_CacheDone
                    }
                    host['dI'](bagEntity, complete);
                }
                else { //不需要更新时，直接回调
                    complete();
                }
            }
        }
        return me;
    };
    function Service() {
        let me = this;
        me.id = GUID('s');
        me['dJ'] = [];
    }
    Assign(Service[Prototype], {
        all(attrs, done) {
            return Service_Send(this, attrs, done, Service_FetchFlags_ALL);
        },
        save(attrs, done) {
            return Service_Send(this, attrs, done, Service_FetchFlags_ALL, 1);
        },
        one(attrs, done) {
            return Service_Send(this, attrs, done, Service_FetchFlags_ONE);
        },
        enqueue(callback) {
            let me = this;
            if (!me['dE']) {
                me['dJ'].push(callback);
                me.dequeue(me['dK']);
            }
            return me;
        },
        dequeue(...a) {
            let me = this, one;
            if (!me['dF'] && !me['dE']) {
                me['dF'] = 1;
                Timeout(() => {
                    me['dF'] = 0;
                    if (!me['dE']) { //不清除setTimeout,但在回调中识别是否调用了destroy方法
                        one = me['dJ'].shift();
                        if (one) {
                            ToTry(one, me['dK'] = a);
                        }
                    }
                });
            }
        },
        destroy(me) {
            me = this;
            me['dE'] = 1; //只需要标记及清理即可，其它的不需要
            me['dJ'] = 0;
        }
    });
    let Manager_DefaultCacheKey = (meta, attrs, arr) => {
        arr = [JSON_Stringify(attrs), JSON_Stringify(meta)];
        return arr.join(Spliter);
    };
    let Service_Manager = Assign({
        add(attrs) {
            let me = this;
            let metas = me['dL'], bag;
            if (!IsArray(attrs)) {
                attrs = [attrs];
            }
            for (bag of attrs) {
                if (bag) {
                    let { name, cache } = bag;
                    bag.cache = cache | 0;
                    if (DEBUG && Has(metas, name)) {
                        throw new Error('service already exists:' + name);
                    }
                    metas[name] = bag;
                }
            }
        },
        create(attrs) {
            let me = this;
            let meta = me.meta(attrs);
            let cache = (attrs.cache | 0) || meta.cache;
            let entity = new Bag();
            entity.set(meta);
            entity['dF'] = {
                'dG': meta.after,
                'dE': cache && Manager_DefaultCacheKey(meta, attrs)
            };
            if (IsObject(attrs)) {
                entity.set(attrs);
            }
            let before = meta.before;
            if (before) {
                ToTry(before, entity, entity);
            }
            me.fire('begin', {
                bag: entity
            });
            return entity;
        },
        meta(attrs) {
            let me = this;
            let metas = me['dL'];
            let name = attrs.name || attrs;
            let ma = metas[name];
            return ma || attrs;
        },
        get(attrs, createNew) {
            let me = this;
            let e, u;
            if (!createNew) {
                e = me.cached(attrs);
            }
            if (!e) {
                e = me.create(attrs);
                u = 1;
            }
            return [e, u];
        },
        cached(attrs) {
            let me = this;
            let bagCache = me['dH'];
            let entity;
            let cacheKey;
            let meta = me.meta(attrs);
            let cache = (attrs.cache | 0) || meta.cache;
            if (cache) {
                cacheKey = Manager_DefaultCacheKey(meta, attrs);
            }
            if (cacheKey) {
                let requestCacheKeys = me['dG'];
                let info = requestCacheKeys[cacheKey];
                if (info) { //处于请求队列中的
                    entity = info['dE'];
                }
                else { //缓存
                    entity = bagCache.get(cacheKey);
                    if (entity && Date_Now() - entity['dF']['dF'] > cache) {
                        bagCache.del(cacheKey);
                        entity = 0;
                    }
                }
            }
            return entity;
        }
    }, MxEvent);
    Service.extend = (sync, cacheMax, cacheBuffer) => {
        function NService() {
            Service.call(this);
        }
        NService['dI'] = sync;
        NService['dH'] = new MxCache(cacheMax, cacheBuffer);
        NService['dG'] = {};
        NService['dL'] = {};
        Assign(NService, Service_Manager);
        return Extend(NService, Service);
    };
    let Magix_Booted = 0;
    let Magix = {
        config(cfg, ...args) {
            let r = Mx_Cfg;
            if (cfg) {
                if (IsObject(cfg)) {
                    r = Assign(r, cfg, ...args);
                }
                else {
                    r = r[cfg];
                }
            }
            return r;
        },
        boot(cfg) {
            if (!Magix_Booted) {
                Magix_Booted = 1;
                Assign(Mx_Cfg, cfg); //先放到配置信息中，供ini文件中使用
                Vframe_mountView(Vframe_Root(), Mx_Cfg.defaultView);
            }
        },
        unboot() {
            if (Magix_Booted) {
                Magix_Booted = 0;
                Vframe_Unroot();
            }
        },
        HIGH: Thousand,
        LOW: -Thousand,
        isObject: IsObject,
        isArray: IsArray,
        isFunction: IsFunction,
        isString: IsString,
        isNumber: IsNumber,
        //isPrimitive:IsPrimitive,
        attach: EventListen,
        detach: EventUnlisten,
        mix: Assign,
        toMap: ToMap,
        toTry: ToTry,
        toUrl: ToUri,
        parseUrl: ParseUri,
        guid: GUID,
        use: Async_Require,
        dispatch: DispatchEvent,
        guard: Safeguard,
        type: Type,
        has: Has,
        inside: NodeIn,
        applyStyle: ApplyStyle,
        Cache: MxCache,
        View,
        Vframe,
        State,
        Service,
        Event: MxEvent,
        mark: Mark,
        unmark: Unmark,
        node: GetById,
        task: CallFunction,
        lowTask: LastCallFunction,
        taskFinale() {
            return new GPromise(CallFunction);
        },
        lowTaskFinale() {
            return new GPromise(LastCallFunction);
        },
        delay(time) {
            return new GPromise(r => Timeout(r, time));
        },
        /**
         * let checkIfReady=Matix.taskComplete((a,b,c)=>{
         *  console.log(a,b,c);
         * });
         * let process=index=>console.log(index);
         * for(let i=0;i<10;i++){
         *  Magix.task(process,[index]);
         *  checkIfReady(a,b,c);
         * }
         */
    };
    return Magix;
});

/*!report-desinger|https://github.com/xinglie/report-designer/blob/master/LICENSE*/
window.designer = {
    setup(ops) {
        if (DEBUG) {
            let node = document.getElementById('boot');
            let src = node.src.replace(/\/[^\/]+$/, '/');
            seajs.config({
                paths: {
                    designer: src + 'designer',
                    elements: src + 'elements',
                    gallery: src + 'gallery',
                    i18n: src + 'i18n',
                    mini: src + 'mini',
                    panels: src + 'panels',
                    provider: src + 'provider'
                },
                alias: {
                    magix: '4e'
                }
            });
        }
        seajs.use([
            '4e',
            '4p/index'
        ], ({ applyStyle, config, State, View, node, boot, guid, mark, parseUrl }, I18n) => {
            config(ops);
            if (!designer['_lo']) {
                designer['_lo'] = 1;
                applyStyle("rd-dE","@font-face{font-family:rd-dE;src:url(//at.alicdn.com/t/font_890516_0d9vo6gyyqb6.woff2?t=1628133270767) format(\"woff2\"),url(//at.alicdn.com/t/font_890516_0d9vo6gyyqb6.woff?t=1628133270767) format(\"woff\"),url(//at.alicdn.com/t/font_890516_0d9vo6gyyqb6.ttf?t=1628133270767) format(\"truetype\")}.rd-dE{all:initial;box-sizing:border-box;display:block;font-family:Arial,sans-serif;font-size:14px;line-height:1.5}*,:after,:before{box-sizing:inherit}.rd-dF{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font:400 normal normal 16px/1 rd-dE;position:relative}.rd-dE ::-moz-placeholder{color:#999}.rd-dE :-ms-input-placeholder{color:#999}.rd-dE ::placeholder{color:#999}.rd-dE ::-moz-selection{background:rgba(250,116,43,.2)}.rd-dE ::selection{background:rgba(250,116,43,.2)}.rd-dG{margin:0}.rd-dH,.rd-dI{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border:1px solid #e6e6e6;border-radius:2px;box-shadow:none;box-sizing:border-box;caret-color:#fa742b;color:#333;display:inline-block;font-size:100%;height:22px;margin:0;max-width:100%;outline:0;padding:1px 4px;width:140px}.rd-dH:hover,.rd-dI:hover{border-color:#ccc}.rd-dH:focus,.rd-dI:focus,.rd-dJ{border-color:#fa742b;outline:0}.rd-dI{font-family:Arial,sans-serif;height:auto;line-height:1.5;overflow:auto;padding:3px 4px;resize:none}.rd-dK{outline:0}.rd-dH[disabled],.rd-dI[disabled]{background-color:#f5f5f5;color:#999;cursor:not-allowed}.rd-dH:-moz-placeholder,.rd-dI:-moz-placeholder{color:#a9a9a9;opacity:1}.rd-dH:-moz-focus-inner{border-style:none;padding:0}.rd-dH[disabled]:hover,.rd-dI[disabled]:hover{border-color:#e6e6e6;cursor:not-allowed}.rd-dJ:hover{border-color:#fa742b}.rd-dL{background-color:#ccc;background-image:none;border:0;border-radius:2px;color:#333;display:inline-block;font-size:14px;line-height:1;margin:0;outline:0;padding:4px 14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.rd-dL,.rd-dM{font-weight:400}.rd-dL:focus,.rd-dL:hover{background-color:#bbb;color:#333}.rd-dN{background-color:#fa742b;color:#fff}.rd-dN:focus,.rd-dN:hover{background-color:#f96412;color:#fff}.rd-dL[disabled]{background-color:#f5f5f5;color:#999;cursor:not-allowed}.rd-dL[disabled]:hover{border-color:#e6e6e6;color:#999}.rd-dL:-moz-focus-inner{border-style:none;padding:0}.rd-dO{border-bottom:1px solid hsla(0,0%,90%,.4);color:#333;line-height:1.5;margin:0;padding:8px 25px}.rd-dP{margin-top:-20px}.rd-dQ{box-shadow:0 0 6px #ccc;height:10px;margin-top:10px;top:28px}.rd-dR{line-height:1.1}.rd-dS{padding:18px 25px}.rd-dT{bottom:28px;box-shadow:0 0 6px #ccc;height:10px;margin-bottom:10px}.rd-dU{border-top:1px solid hsla(0,0%,90%,.4);padding:8px 25px}.rd-dV{margin-bottom:-20px}.rd-dW{line-height:0;margin:0 auto;padding:150px 0;width:150px}.rd-dW:after,.rd-dW:before,.rd-dX{-webkit-animation:rd-dE 1s ease-in-out infinite both;animation:rd-dE 1s ease-in-out infinite both;background-color:#ccc;border-radius:100%;content:\"\";display:inline-block;height:14px;width:14px}.rd-dW:before{-webkit-animation-delay:-.32s;animation-delay:-.32s}.rd-dX{-webkit-animation-delay:-.16s;animation-delay:-.16s;margin:0 10px}@-webkit-keyframes rd-dE{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}@keyframes rd-dE{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}.rd-dY{display:inline-block;font-weight:400}.rd-dZ{font-size:14px}.rd-d0,.rd-dZ{margin:0;padding:0}.rd-d0{list-style-image:none;list-style-type:none}.rd-d1{color:#fa742b;text-decoration:none}.rd-d1:focus,.rd-d1:hover{color:#e25305}.rd-d1:active,.rd-d1:focus,.rd-d1:hover,.rd-d1:visited{outline:0}.rd-d2{border-style:none;height:auto;vertical-align:top}.rd-d3{margin-right:2px}.rd-d4{margin-left:5px}.rd-d5{transform:rotate(180deg)}.rd-d6{transform:rotate(90deg)}.rd-d7{transform:rotate(270deg)}.rd-d8{margin-right:5px}.rd-d9{margin-right:10px}.rd-e_{margin-left:10px}.rd-ea{padding-left:10px}.rd-eb{background-color:rgba(250,116,43,.6)}.rd-ec{background-color:#fff}.rd-ed{width:100%}.rd-ee{height:100%}.rd-ef{max-width:100%}.rd-eg{max-height:100%}.rd-eh{text-align:right}.rd-ei{text-align:center}.rd-ej{float:left}.rd-ek{float:right}.rd-el{position:absolute}.rd-em{position:relative}.rd-en{pointer-events:none}.rd-eo{pointer-events:all}.rd-ep{margin:30px 0}html .rd-eq{display:none}.rd-er{display:block}.rd-es{display:inline-block}.rd-et{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rd-eu::-webkit-scrollbar,.rd-eu::-webkit-scrollbar-corner{background:#edeef3;height:4px;width:4px}.rd-eu::-webkit-scrollbar-thumb{background:#fa742b;border-radius:2px}.rd-eu::-webkit-scrollbar-thumb:hover{background:#ec5706}.rd-ev{scroll-behavior:smooth;scrollbar-width:thin}.rd-ev::-webkit-scrollbar,.rd-ev::-webkit-scrollbar-corner{background:#fafafa;height:2px;width:2px}.rd-ew{word-wrap:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rd-ex{background:linear-gradient(90deg,#0000,#7d768454 50%,#0000);height:1px;margin:5px 0}.rd-ey{flex:1}.rd-ez{display:flex}.rd-eA{flex-direction:column}.rd-eB{align-items:center}.rd-eC{transform:scaleX(-1)}.rd-eD{transform:scaleY(-1)}.rd-eE{margin-left:80px}.rd-eF{position:sticky}.rd-eG{top:0}.rd-eH{margin-bottom:4px}.rd-eI{margin-top:4px}.rd-eJ{width:60px}.rd-eK{width:140px}.rd-eL{width:113px}.rd-eM{width:220px}.rd-eN{height:100px}.rd-eO{height:1px}.rd-eP{height:4px}.rd-eQ{width:1px}.rd-eR{width:4px}.rd-eS{justify-content:space-between}.rd-eT{justify-content:center}.rd-eU{justify-content:flex-end}.rd-eV{flex-wrap:wrap}.rd-eW{color:#e6e6e6}.rd-eX{cursor:pointer}.rd-eY{cursor:default}.rd-eZ{cursor:text}.rd-e0{word-break:break-all}.rd-e1{border-collapse:collapse}.rd-e2{border:1px solid #000;padding:0}.rd-e3{background:rgba(250,116,43,.05)}.rd-e4{overflow:hidden;white-space:pre}.rd-e5{border:2px solid #fa742b}.rd-e6,.rd-e7{border-radius:2px;border-right:6px solid #fa742b}.rd-e6{right:-4px}.rd-e7{left:-4px}.rd-e8,.rd-e9{border-bottom:6px solid #fa742b;border-radius:2px}.rd-e8{bottom:-4px}.rd-e9{top:-4px}.rd-f_{inset:-1px}.rd-fa{inset:0}.rd-fb{background-color:rgba(250,116,43,.1);box-shadow:inset 2px 2px 10px rgba(0,0,0,.2);outline:2px solid #fa742b}.rd-fc{width:80px}.rd-fd{background:rgba(250,116,43,.2)}.rd-fe{align-items:flex-start}.rd-ff{visibility:hidden}.rd-fg{background:#ccc;border-radius:22px;display:inline-block;height:16px;width:32px}.rd-fg:before{background:#fff;border-radius:50%;content:\"\";height:12px;left:0;margin:2px;position:absolute;width:12px}.rd-fg:before,.rd-fh{transition:all .25s}.rd-ff:checked+.rd-fg{background:#fa742b}.rd-ff:checked+.rd-fg:before{left:100%;margin-left:-14px}.rd-ff:disabled+.rd-fg{background:#e6e6e6;cursor:not-allowed}.rd-fi{background:#e0e0e0;border-radius:2px;height:20px;line-height:20px;margin:0 1px;width:20px}.rd-fi:hover{background:#ccc}.rd-fj,.rd-fj:hover{background:#fa742b;color:#fff}.rd-fk,.rd-fk .rd-fi{cursor:not-allowed;opacity:.7}.rd-fk .rd-fi,.rd-fk .rd-fi:hover{background:#e9e9e9}.rd-fk .rd-fj,.rd-fk .rd-fj:hover{background:#fb955d}.rd-fl{cursor:not-allowed}.rd-fm,.rd-fn{color:#999}.rd-fo{fill:#999}.rd-fm:hover,.rd-fp{color:#666}.rd-fq{overflow:hidden}.rd-fr{overflow:visible}.rd-fs{overflow:auto}.rd-ft{overflow:scroll}.rd-fu{overflow-y:scroll}.rd-fv{font-size:10px}.rd-fw{font-size:12px}.rd-fx{font-size:14px}.rd-fy{font-size:16px}.rd-fz{font-size:26px}.rd-fA{right:2px}.rd-fB{right:0}.rd-fC{top:2px}.rd-fD{bottom:2px}.rd-fE{bottom:0}.rd-fF{border:1px dashed #fa742b;display:none;z-index:2}.rd-fG{border:1px dotted #999}.rd-fH{z-index:1}.rd-fI{z-index:5}.rd-fJ{z-index:6}.rd-fK{z-index:7}.rd-fL{z-index:8}.rd-fM:before{align-items:center;content:attr(data-tip);display:flex;height:100%;justify-content:center;position:absolute;width:100%}.rd-fN{min-height:80px}.rd-fO{min-height:500px}.rd-fP{min-height:100vh}.rd-fQ{border-style:dashed}.rd-fR{contain:paint}.rd-fS{padding:4px}.rd-fT{padding:2px}.rd-fU{left:2px}.rd-fV{border-radius:2px;padding:2px}.rd-fW{opacity:0}.rd-fW:focus{opacity:1}.rd-fX{opacity:0}.rd-fY{transform:translateY(-50%)}.rd-fZ{transform:translateX(-50%)}.rd-f0{touch-action:none}");
                let lang = navigator.language.toLowerCase();
                try {
                    let store = window.localStorage;
                    if (store) {
                        lang = store.getItem('rd.lang') || lang;
                    }
                }
                catch (_a) {
                }
                config({
                    lang
                });
                //处理textarea中的回车换行
                let returnReg = /(?:\r\n|\r|\n)/g;
                let charMap = {
                    '&': 38,
                    '<': 60,
                    '>': 62,
                    '"': 34,
                    '\'': 39,
                    '\`': 96
                };
                let charReg = /[&<>"'\`]/g;
                let charReplacer = m => `&#${charMap[m]};`;
                let TextReturn = str => {
                    if (str == null) {
                        str = '';
                    }
                    else {
                        str += '';
                    }
                    return str.replace(charReg, charReplacer).replace(returnReg, '<br/>');
                };
                let CursorShape = (rotate, offset) => {
                    rotate = (rotate + offset) % 180;
                    if (rotate <= 22.5 ||
                        rotate > 157.5) {
                        return 'ew';
                    }
                    if (rotate <= 67.5) {
                        return 'nwse';
                    }
                    if (rotate <= 112.5) {
                        return 'ns';
                    }
                    if (rotate <= 157.5) {
                        return 'nesw';
                    }
                };
                let toExcelColTitle = (index, base = 65) => {
                    let str = '', rest;
                    index += 1;
                    while (index) {
                        rest = (index - 1) % 26;
                        str = String.fromCharCode(rest + base) + str;
                        index = (index - rest - 1) / 26;
                    }
                    return str;
                };
                let scriptStyleReg = /<(script|style)[^>]*>[\S\s]*<\/\1[^>]*>/gi;
                let safeHTML = v => v.replace(scriptStyleReg, '');
                View.merge({
                    ctor() {
                        this.set({
                            excelTitle: toExcelColTitle,
                            textReturn: TextReturn,
                            i18n: I18n,
                            safeHTML,
                            cursor: CursorShape
                        });
                    },
                    /*'@:{throttle}'(fn, timespan) {
                        timespan = timespan || 150;
                        let last = Date.now();
                        let timer;
                        return (...args) => {
                            let now = Date.now();
                            clearTimeout(timer);
                            if ((now - last) > timespan) {
                                last = now;
                                fn.apply(this, args);
                            } else {
                                timer = setTimeout(() => {
                                    fn.apply(this, args);
                                }, timespan - (now - last));
                            }
                        };
                    },*/
                    '_if': safeHTML,
                    '_dO'(fn, timespan) {
                        timespan = timespan || 150;
                        let timer, markKey = guid('dm_'), view = this;
                        return (...args) => {
                            clearTimeout(timer);
                            let m = mark(view, markKey);
                            timer = setTimeout(() => {
                                if (m()) {
                                    fn.apply(this, args);
                                }
                            }, timespan);
                        };
                    },
                    '_fu'(e) {
                        e.preventDefault();
                    },
                    '_hR'(e) {
                        e.stopPropagation();
                    },
                    '_hE<change>'(e) {
                        this['_hR'](e);
                    },
                    '_fv<contextmenu>'(e) {
                        this['_fu'](e);
                    }
                });
                let lastBusy = 0;
                let root = node(config('rootId'));
                root.classList.add('rd-dE', 'rd-em', 'rd-fq');
                config({
                    defaultPath: '/index',
                    wait(f) {
                        if (f != lastBusy) {
                            State.fire('dZ', {
                                busy: lastBusy = f
                            });
                        }
                    },
                    error(e) {
                        setTimeout(() => {
                            throw e;
                        }, 0);
                    }
                });
            }
            let { params } = parseUrl(location.href);
            let path = '6i/index';
            if (params.mode == 'notr') {
                path += '-notr';
            }
            boot({
                defaultView: path
            });
        });
    },
    destroy() {
        seajs.use([
            '4e',
        ], ({ unboot }) => {
            unboot();
        });
    }
};
