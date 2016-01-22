/**
 * Created by frostornge on 2016. 1. 20..
 */

var CANVAS = document.getElementById('test');
var FLOOR = [];

var WIDTH = 1000;
var HEIGHT = 1000;
var CELL_SIZE = 2;
var SPEED = 100;

// Create Ant
var ant = new Ant(300, 500, "LLRR");

function init() {
    var patternText = document.getElementById("pattern");
    patternText.value = pattern;

    CANVAS.setAttribute("width", WIDTH + "");
    CANVAS.setAttribute("height", HEIGHT + "");

    for(var i = 0; i < WIDTH; i++) {
        var arr = [];

        for(var j = 0; j < HEIGHT; j++) {
            arr.push(0);
        }

        FLOOR.push(arr);
    }

    window.setInterval(render, 1);
}

function render(){
    var context = CANVAS.getContext('2d');

    for(var i = 0; i < SPEED; i++) {
        ant.do(context);
    }
}

function changeSpeed(speed) {
    console.log("change to ", SPEED, "=>", speed);
    SPEED = speed;
}

function changePattern(ptn) {
    pattern = ptn;
}