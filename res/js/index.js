/**
 * Created by frostornge on 2016. 1. 20..
 */

var CANVAS = document.getElementById('test');
var FLOOR = [[]];

var WIDTH = 100;
var HEIGHT = 100;
var CELL_SIZE = 1;
var SPEED = 1;

// Create Ant
var ant1 = new Ant(50, 50, "LLRR");

var hey;

function init() {
    CANVAS.setAttribute("width", WIDTH + "");
    CANVAS.setAttribute("height", HEIGHT + "");

    for(var i = 0; i < WIDTH; i++) {
        var arr = [];

        for(var j = 0; j < HEIGHT; j++) {
            arr[j] = 0;
        }

        FLOOR[i] = arr[j];
    }

    hey = window.setInterval(render, 10);
}

function render(){
    var context = CANVAS.getContext('2d');

    try {
        for(var i = 0; i < SPEED; i++) {
            ant1.do(context);
        }
    } catch(TypeError) {
        window.clearInterval(hey);
        alert("The End!");
    }
}
