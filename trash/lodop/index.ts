let clodopService = 'http://127.0.0.1:8000/CLodopfuncs.js';
let getCLodopService = () => {
    try {
        let src = localStorage.getItem('lodop.src');
        if (!src) {
            src = clodopService;
        }
        return src;
    } catch {
        return clodopService;
    }
};
let SrcPools = {};
export default {
    '@:{set.clodop.src}'(src) {
        try {
            localStorage.setItem('lodop.src', src);
        } catch {
        }
    },
    '@:{get.clodop.src}': getCLodopService,
    '@:{get.lodop}'() {
        return new Promise<any>(resolve => {
            let src = getCLodopService();
            let dest = SrcPools[src];
            if (!dest) {
                dest = {
                    '@:{state}': 1,
                    '@:{resolves}': []
                };
                SrcPools[src] = dest;
            }
            dest['@:{resolves}'].push(resolve);
            let fetchCLodop = () => {
                dest['@:{state}'] |= 4;
                let ld;
                if (window.getCLodop) {
                    ld = getCLodop();
                }
                for (let r of dest['@:{resolves}']) {
                    r(ld);
                }
                dest['@:{resolves}'].length = 0;
            };
            if (dest['@:{state}'] & 4) {
                fetchCLodop();
            } else if (!(dest['@:{state}'] & 2)) {
                dest['@:{state}'] |= 2;
                let script = document.createElement('script');
                script.onload = script.onerror = fetchCLodop;
                script.src = getCLodopService();
                document.head.appendChild(script);
            }
        });
    }
};