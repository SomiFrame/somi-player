class Video {
    constructor(dom,src) {
        if (Video.isNode(dom)) {
            this.OriginDom = dom;
        } else {
            throw `${dom} => is not a domElement or node!`;
        }
        this.currentDom = null;
        this.src = src;
    }

    static isNode(o) {
        return (
            typeof Node === "object" ? o instanceof Node :
            o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName === "string"
        );
    }
    
    createDomString() {
        return `<video id="${this.OriginDom.id}" src="${this.src}" style="width: 100%;height: 100%;"></video>`;
    }
}
module.exports = Video;
