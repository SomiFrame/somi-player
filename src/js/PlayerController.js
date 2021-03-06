class PlayerController {
    constructor(video) {
        this.video= video;
        this.Button_PlayAndPause = null;
        this.Button_FullScreen = null;
        this.Button_Muted = null;
        this.Slider_Volume = null;
        this.Slider_Propress = null;
    }

    static getDomString() {
        return `<div class="somi-controller-container">
                    <div class="somi-controller-background"></div>
                    <div class="somi-controller"> 
                        <div class="somi-slider-bar">
                            <div class="somi-slider-played"></div>
                            <div class="somi-slider-buffered"></div>
                        </div>
                        <button class="somi-main-button">
                            <svg class="main-button-svg" height="100%" viewBox="0 0 36 36" width="100%">
                                <path class="play-svg-fill" d="M 12 26 18.5 22 18.5 14 12 10 zM 18.5 22 25 18 25 18 18.5 14 z" id="ytp-svg-477"></path>
                            </svg>
                        </button>
                        <div class="somi-volume-container">
                            <button class="somi-volume">
                                <svg class="icon-volume" viewBox="-20 -24 100 110"  fill="currentColor" width="100%" height="100%">
                                    <path fill="#fff" d="M 0 22 L 12 22 L 32 5 L 32 59 L 12 42 L 0 42 M 36,22 A 10,10 0 0 1 36,42 L 36,38 M41,6 A 11,13 0 0 1 41,58 L 37,46 A 11,13 0 0 0 37,18M3,13 L7,3 L 3,13 L 7,3"></path>
                                </svg>
                            </button>
                            <div class="somi-volume-slider-container">
                                <div class="somi-total-volume">
                                    <div claSS="somi-current-volume"></div>
                                </div>
                            </div>
                        </div>
                        <div class="videoTime">
                            <span class="videoCurrentTime">00</span>
                            <span class="">/</span>
                            <span class="videoTotalTime">00</span>
                        </div>
                        <button class="somi-fullScreen-button">
                            <svg class="svg-fullScreen" height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
                                <g class="ytp-fullscreen-button-corner-0">
                                    <path class="ytp-svg-fill" d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"
                                          id="ytp-svg-19"></path>
                                </g>
                                <g class="ytp-fullscreen-button-corner-1">
                                    <path class="ytp-svg-fill" d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"
                                          id="ytp-svg-20"></path>
                                </g>
                                <g class="ytp-fullscreen-button-corner-2">
                                    <path class="ytp-svg-fill" d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"
                                          id="ytp-svg-21"></path>
                                </g>
                                <g class="ytp-fullscreen-button-corner-3">
                                    <path class="ytp-svg-fill" d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"
                                          id="ytp-svg-22"></path>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>`
    }
    BindDomObject(){
        this.Button_PlayAndPause = document.querySelector('.somi-main-button');
        this.Button_FullScreen = document.querySelector('.somi-fullScreen-button');
        this.Button_Muted = document.querySelector('.somi-volume');
        this.Slider_Volume = document.querySelector('.somi-volume-slider-container');
        this.Slider_Propress = document.querySelector('.somi-slider-bar');
    }
    registerEvent(){
        this.Button_PlayAndPause.addEventListener('click',this.PlayAndPause.bind(this));
        this.Button_FullScreen.addEventListener('click',this.fullScreen.bind(this));
        this.Button_Muted.addEventListener('click',this.Muted.bind(this));
    }
    fullScreen() {
        let el = document.querySelector(".somi-player-container");
        let fullscreenEnabled = document.fullscreenEnabled ||
                document.webkitFullscreenEnabled ||
                document.mozFullScreenEnabled ||
                document.msFullscreenEnabled;
        let rfs = el.requestFullscreen || el.webkitRequestFullscreen ||
                el.mozRequestFullScreen || el.msRequestFullscreen;
        let efs = document.exitFullscreen || document.webkitExitFullscreen ||
                document.mozCancelFullScreen || document.msExitFullscreen;
        if (fullscreenEnabled) {
            if(document.fullscreenElement ||
                    document.webkitFullscreenElement ||
                    document.mozFullScreenElement ||
                    document.msFullscreenElement) {
                efs.call(document);
            }
            else {
                rfs.call(el);
            }
        }
    }
    Muted(){
        this.video.muted = !this.video.muted;
    }
    PlayAndPause(){
        if(this.video.paused){
            this.video.play();
            console.log('video has start play')
        } else {
            this.video.pause();
            console.log('video has pause')
        }
    }
    Muted(){
        this.video.muted = !this.video.muted;
    }
}

module.exports = PlayerController
