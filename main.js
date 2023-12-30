import Manager from './js/manager.js';
import Grid from './js/utils/grid.js';

const cityCanvas = document.querySelector('#cityCanvas');
const CANVASHEIGHT = document.body.clientHeight / 1.5;
const CANVASWIDTH = document.body.clientWidth;
cityCanvas.width = CANVASWIDTH;
cityCanvas.height = CANVASHEIGHT;
const ctx = cityCanvas.getContext('2d');

const manager = new Manager(ctx);
// manager.draw();

const grid = new Grid();
// grid.draw(ctx);