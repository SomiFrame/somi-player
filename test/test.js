import Player from "../src/js/Player";
console.log(Player);
let video = document.querySelector('#vid1');
new Player(video,"http://vjs.zencdn.net/v/oceans.mp4");
