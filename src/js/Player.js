import Video from "./Video"
class somiPlayer {
    constructor(videoDom) {
        this.video = new Video(videoDom);
        this.Size = {
            width: this.video.OriginDom.style.width,
            height: this.video.OriginDom.style.height
        };
        this.parentNode = this.video.OriginDom.parentNode;
        console.log(this.Size);
        this.displayPlayer();
    }

    createTotalString() {
        return `<div class="somi-player-box" style="width:${this.Size.width};height:${this.Size.height}">
                    <div class="somi-player-display"></div>
                        ${this.video.createDomString()}
                    </div>`;
    }

    displayPlayer() {
        console.log(this.createTotalString());
        this.parentNode.innerHTML=this.createTotalString();
    }
}

module.exports = somiPlayer;