import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let currentTime = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', throttle(ResumePlayTime, 1000));

function ResumePlayTime(play) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(play.seconds));
};

player.setCurrentTime(currentTime);