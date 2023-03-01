import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let currentTime = JSON.parse(localStorage.getItem('videoplayer-current-time') ?? 0);

function ResumePlayTime(play) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(play.seconds));
};
player.on('timeupdate', throttle(ResumePlayTime, 1000));

player.setCurrentTime(currentTime);