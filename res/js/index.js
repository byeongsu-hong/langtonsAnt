/**
 * Created by frostornge on 2016. 1. 20..
 */

var CANVAS = document.getElementById('test');
var FLOOR = [];

var WIDTH = 1000;
var HEIGHT = 1000;
var CELL_SIZE = 1;
var SPEED = 100;

// Create Ant
var ant1 = new Ant(400, 500, "LLRR");
var ant2 = new Ant(600, 500, "LLRRRLRLRLLR");

var hey;

function init() {
    CANVAS.setAttribute("width", WIDTH + "");
    CANVAS.setAttribute("height", HEIGHT + "");

    for(var i = 0; i < WIDTH; i++) {
        var arr = [];

        for(var j = 0; j < HEIGHT; j++) {
            arr.push(0);
        }

        FLOOR.push(arr);
    }

    hey = window.setInterval(render, 1);
}

function render(){
    var context = CANVAS.getContext('2d');

    try {
        for(var i = 0; i < SPEED; i++) {
            ant1.do(context);
            ant2.do(context);
        }
    } catch(TypeError) {
        window.clearInterval(hey);
        alert("The End!");
    }
}

function changeSpeed(speed) {
    console.log("change to ", SPEED, "=>", speed);
    SPEED = speed;
}