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
    }

    _setEvents(){
        this._video.addEventListener("click", () => this._togglePlay());
        this._toggleBtn.addEventListener("click", () => this._togglePlay());
        this._video.addEventListener("timeupdate", () => this._handlerProgress());
        this._progressContainer.addEventListener('click', (e) => this._scrub(e));
        this._progressContainer.addEventListener('mousemove', (e) => this._mouseDown && this._scrub(e));
        this._progressContainer.addEventListener('mousedown', (e) => this._mouseDown = true);
        this._progressContainer.addEventListener('mouseup', (e) => this._mouseDown = false);
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
            <input type="range" name="volume" class="player__slider" min=0 max="1" step="0.05" value="${this._settings.volume}">
            <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1">
            <button data-skip="-1" class="player__button">« 1s</button>
            <button data-skip="1" class="player__button">1s »</button>
          </div>
    </div>`
    }
    
}


let myPlayer = new VideoPlayerBasic({
    videoURL : './video/mov_bbb.mp4',
    videoContainer: 'body',
    volume: 0.5
})
myPlayer.init();