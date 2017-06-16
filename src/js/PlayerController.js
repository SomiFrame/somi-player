class PlayerController {
    constructor() {

    }

    getDomString() {
        return `<div class="somi-controller-container">
                    <div class="somi-controller"> 
                        <div class="somi-slider-bar">
                            <div class="somi-slider-played"></div>
                            <div class="somi-slider-buffered"></div>
                            <div class=""></div>
                        </div>
                        <button class="somi-main-button"></button>
                        <div class="somi-volume-container"></div>
                        <div class="videoTime"></div>
                        <button class="somi-fullScreen-button">
                            <svg class="svg-fullScreen">
                                
                            </svg>
                        </button>
                    </div>
                </div>`
    }
}