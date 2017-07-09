class Video {
    constructor(dom,src) {
        if (Video.isNode(dom)) {
            this.OriginDom = dom;
        } else {
            throw `${dom} => is not a domElement or node!`;
        }
        this.CurrentDom= null;
        this.src = src;
        this.CurrentTime = 0;
        this.CurrentTime_str = "";
        this.Duration = 0;
        this.Duration_str = "";
        this.Played_Persontage = 0;

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
    setCurrentDom(data) {
        this.CurrentDom= data;
        console.log(`setVideoDom`,data);
    }
    registerVideoEvent(){
        console.log(`register video event`)
        this.CurrentDom.addEventListener('error',this.on_error.bind(this));
        this.CurrentDom.addEventListener('play',this.on_play.bind(this));
        this.CurrentDom.addEventListener('progress',this.on_progress.bind(this));
        this.CurrentDom.addEventListener('pause',this.on_pause.bind(this));
        this.CurrentDom.addEventListener('loadstart',this.on_loadstart.bind(this));
        this.CurrentDom.addEventListener('timeupdate',this.on_timeupdate.bind(this));
        this.CurrentDom.addEventListener('loadedmetadata',this.on_loadedmetadata.bind(this));
    }
    /*
     * number transform time string
     */
    toHHMMSS (_string) {
        var sec_num = parseInt(_string, 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours) {
            if (hours < 10) {
                hours = "0" + hours + ":";
            }
            else {
                hours = hours + ":";
            }
        }
        else {
            hours = "";
        }
        if (minutes < 10) {
            minutes = "0" + minutes + ":";
        }
        else {
            minutes = minutes + ":";
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        return hours + minutes + seconds;
    }
    on_progress(e) {
        let el = e.target||e.srcElement;
        console.log('video is progressing');
    }
    on_pause(e) {
        let el = e.target||e.srcElement;
        console.log('video has pause');
    }
    on_error(e) {
        let el = e.target||e.srcElement;
        console.log('some error heppened');
    }
    on_play(e){
        let el = e.target||e.srcElement;
        console.log('video is playing');
    }
    on_loadstart(e){
        let el = e.target||e.srcElement;
        console.log('video start load');
    }
    on_timeupdate(e){
        let el = e.target||e.srcElement;
        this.CurrentTime = el.currentTime;
        this.CurrentTime_str = this.toHHMMSS(this.CurrentTime);
        this.Played_Persontage = parseFloat(this.CurrentTime/this.Duration).toFixed(2);
        document.querySelector(".videoCurrentTime").innerHTML = this.CurrentTime_str;
        document.querySelector(".somi-slider-played").style.width = `${this.Played_Persontage*100}%`;
        console.log('video time update');
    }
    on_loadedmetadata(e){
        let el = e.target||e.srcElement;
        this.Duration = el.duration;
        this.Duration_str = this.toHHMMSS(this.Duration);
        document.querySelector(".videoTotalTime").innerHTML = this.Duration_str;
    }

    
}
module.exports = Video;
