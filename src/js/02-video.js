import Player from '@vimeo/player';
import _throttle from "lodash.throttle";

const idIframeRef = document.querySelector('#vimeo-player');

const throttleVideoTime = _throttle((event) =>{
    timeUpdate (event)
}, 1000)  ;

const player = new Player('vimeo-player', {
    id: 'idIframeRef.id',
    width: 640
});

function timeUpdate (event){
    const time = event.seconds;
    localStorage.setItem('videoplayer-current-time', time)
}

player.on('timeupdate', throttleVideoTime);

const getVideoTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(getVideoTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});



