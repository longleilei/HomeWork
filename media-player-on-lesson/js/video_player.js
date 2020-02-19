class VideoPlayerBasic{
    constructor(settings) {
        this._settings = settings;
    }

    init(){
       if(!this._settings.videoURL) return;
       if(!this._settings.videoContainer) return;

        this._addTemplate();

        this._initElements();

        this._setEvents();
    }

    _initElements(){
        this._videoContainer = document.querySelector(this._settings.videoContainer);
        this._video = this._videoContainer.querySelector('video');
        this._toggleBtn = this._videoContainer.querySelector('button.toggle');
        this._progress = this._videoContainer.querySelector('.progress__filled');
        this._progressContainer = this._videoContainer.querySelector('.progress');
        this._volumeSlider = this._videoContainer.querySelector('.player__slider-1'); 
        this._speedSlider = this._videoContainer.querySelector('.player__slider-2'); 
        this._skipBtnB = this._videoContainer.querySelector('.skip-1'); 
        this._skipBtnF = this._videoContainer.querySelector('.skip-2'); 
    }

    _setEvents(){
        this._video.addEventListener("click", () => this._togglePlay());
        this._toggleBtn.addEventListener("click", () => this._togglePlay());
        this._video.addEventListener("timeupdate", () => this._handlerProgress());
        this._progressContainer.addEventListener('click', (e) => this._scrub(e));
        this._progressContainer.addEventListener('mousemove', (e) => this._mouseDown && this._scrub(e));
        this._progressContainer.addEventListener('mousedown', (e) => this._mouseDown = true);
        this._progressContainer.addEventListener('mouseup', (e) => this._mouseDown = false);
        this._volumeSlider.addEventListener('input', () => this._changeVolume()); 
        this._speedSlider.addEventListener('input', () => this._changeSpeed()); 
        this._skipBtnB.addEventListener("click", () => this._skipBack());
        this._skipBtnF.addEventListener("click", () => this._skipForward());
    }
    _togglePlay(){
        this._toggleBtn.textContent = this._video.paused ? '❚ ❚' :  '►';
        this._video.paused ? this._video.play() : this._video.pause();
    }
    _handlerProgress(){
        const percent = (this._video.currentTime / this._video.duration) *100;
        this._progress.style.flexBasis = `${percent}%`;
    }

    _scrub(e){
        this._video.currentTime = (e.offsetX / this._progressContainer.offsetWidth) * this._video.duration;
    }

    _changeSpeed(){
        this._video.playbackRate = this._speedSlider.value; 
    }

    _changeVolume(){
        this._video.volume = this._volumeSlider.value; 
    }

    _skipBack(){
        this._video.currentTime = this._video.currentTime-this._settings.skipValue; 
    }
    _skipForward(){
        this._video.currentTime = this._video.currentTime+1; 
    }

    _addTemplate(){
        let container = document.querySelector(this._settings.videoContainer);
        container ? container.insertAdjacentHTML("beforeend", this._generateVideoTmpl()) : console.log('container not found!')
    }
    _generateVideoTmpl(){
        return /* html */ ` <div class="player">
        <video class ="custom-video" src="${this._settings.videoURL}"></video>
        <div class="player__controls">
            <div class="progress">
             <div class="progress__filled"></div>
            </div>
            <button class="player__button toggle" title="Toggle Play">►</button>
            <input type="range" name="volume" class="player__slider-1" min=0 max="1" step="0.05" value="${this._settings.volume}">
            <input type="range" name="playbackRate" class="player__slider-2" min="0.5" max="2" step="0.1" value="1">
            <button data-skip="-1" class="player__button skip-1">«${this._settings.skipValue}</button>
            <button data-skip="1" class="player__button skip-2">${this._settings.skipValue}»</button>
          </div>
    </div>`
    }
    
}


let myPlayer = new VideoPlayerBasic({
    videoURL : './video/mov_bbb.mp4',
    videoContainer: 'body',
    volume: 0.5, 
    skipValue: 2 
})
myPlayer.init();