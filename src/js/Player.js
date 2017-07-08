import Video from "./Video"
import PlayerController from "./PlayerController"
class somiPlayer {
    constructor(videoDom,href) {
        this.video = new Video(videoDom,href);
        console.log(this.video)
        this.Size = {
            width: this.video.OriginDom.style.width,
            height: this.video.OriginDom.style.height
        };
        this.parentNode = this.video.OriginDom.parentNode;
        this.displayPlayer();
    }

    createTotalString() {
        return `<div class="somi-player-box" style="width:${this.Size.width};height:${this.Size.height}">
                    <div class="somi-player-display">
                        <div class="somi-event-div">
                            <svg class="" width="100%" height="100%" viewBox="-18 -19 70 70">
                                <g class="time-back" transform="scale(0.03125 0.03125)">
                                    <path d="M512 64c-141.384 0-269.376 57.32-362.032 149.978l-149.968-149.978v384h384l-143.532-143.522c69.496-69.492 165.492-112.478 271.532-112.478 212.068 0 384 171.924 384 384 0 114.696-50.292 217.636-130.018 288l84.666 96c106.302-93.816 173.352-231.076 173.352-384 0-282.77-229.23-512-512-512z"></path>
                                </g>
                                <g class="time-ahead" transform="scale(0.03125 0.03125)">
                                    <path d="M0 576c0 152.924 67.048 290.184 173.35 384l84.666-96c-79.726-70.364-130.016-173.304-130.016-288 0-212.076 171.93-384 384-384 106.042 0 202.038 42.986 271.53 112.478l-143.53 143.522h384v-384l-149.97 149.978c-92.654-92.658-220.644-149.978-362.030-149.978-282.77 0-512 229.23-512 512z"></path>
                                </g>
                                <g class="video-pause" transform="scale(0.03125 0.03125)">
                                    <path d="M192 128l640 384-640 384z"></path>
                                </g>
                                <g class="video-play" transform="scale(0.03125 0.03125)">
                                    <path d="M128 128h320v768h-320zM576 128h320v768h-320z"></path>
                                </g>
                                <g class="volume-up" transform="scale(0.03125 0.03125)">
                                    <path d="M1024 576h-192v192h-128v-192h-192v-128h192v-192h128v192h192v128z"></path>
                                    <path d="M416.006 960c-8.328 0-16.512-3.25-22.634-9.374l-246.626-246.626h-114.746c-17.672 0-32-14.326-32-32v-320c0-17.672 14.328-32 32-32h114.746l246.626-246.628c9.154-9.154 22.916-11.89 34.874-6.936 11.958 4.952 19.754 16.622 19.754 29.564v832c0 12.944-7.796 24.612-19.754 29.564-3.958 1.64-8.118 2.436-12.24 2.436z"></path>
                                </g>
                                <g class="volume-down" transform="scale(0.03125 0.03125)">
                                    <path d="M512 448h512v128h-512v-128z"></path>
                                    <path d="M416.006 960c-8.328 0-16.512-3.25-22.634-9.374l-246.626-246.626h-114.746c-17.672 0-32-14.326-32-32v-320c0-17.672 14.328-32 32-32h114.746l246.626-246.628c9.154-9.154 22.916-11.89 34.874-6.936 11.958 4.952 19.754 16.622 19.754 29.564v832c0 12.944-7.796 24.612-19.754 29.564-3.958 1.64-8.118 2.436-12.24 2.436z"></path>
                                </g>
                            </svg>
                        </div>
                        ${PlayerController.getDomString()}
                    </div>
                        ${this.video.createDomStrig()}
                    </div>`;
    }

    displayPlayer() {
        this.parentNode.innerHTML = this.createTotalString();
    }
}

module.exports = somiPlayer;