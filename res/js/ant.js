/**
 * Created by frostornge on 2016. 1. 21..
 */

/**
 *
 * - Destination
 * 0 - left
 * 1 - up
 * 2 - right
 * 3 - down
 *
 */

var pattern= "LRRRRRLLR";
var colors = ["blue", "red", "yellow", "green", "#333333", "aquamarine", "chartreuse", "mediumslateblue", "purple"];

function Ant() {
    this.posx = WIDTH / 2;
    this.posy = HEIGHT / 2;
    this.dest = 3;

    this.getColor = function() {
        return FLOOR[this.posx][this.posy];
    };

    this.drawColor = function(color, context) {
        FLOOR[this.posx][this.posy] = color;

        context.fillStyle = colors[color];
        context.fillRect(this.posx, this.posy, CELL_SIZE, CELL_SIZE);
    };

    this.move = function() {
        switch (this.dest) {
            case 0:
                this.posx -= CELL_SIZE;
                break;
            case 1:
                this.posy -= CELL_SIZE;
                break;
            case 2:
                this.posx += CELL_SIZE;
                break;
            case 3:
                this.posy += CELL_SIZE;
                break;
            default:
                alert("엥");
        }
    };

    this.left = function() {
        if(this.dest == 3) {
            this.dest = 0;
        } else {
            this.dest += 1;
        }
    };

    this.right = function() {
        if(this.dest == 0) {
            this.dest = 3;
        } else {
            this.dest -= 1;
        }
    };

    this.nextColor = function(color) {
        if(color == pattern.length - 1) {
            return 0;
        } else {
            return color + 1;
        }
    };

    this.do = function(context) {
        var color = this.getColor();

        if (pattern[color] == "L") {
            this.left();
        }

        if (pattern[color] == "R") {
            this.right();
        }

        this.drawColor(this.nextColor(color), context);
        this.move();
    };
}

