/**
 * Variables
 */
var x = y = 1;

const up = 1;
const right = 2;
const down = 3;
const left = 4;

var started = false;
var stopper;
var nextDirection = 1;

var snake = [];

document.addEventListener("DOMContentLoaded", function(event) { 
    init();
});

document.getElementById('submit').onclick = function (event) {
    event.preventDefault();
    var row = document.getElementById('row').value;
    var col = document.getElementById('col').value;
    // document.getElementById('table').innerHTML = createTable(row, col);
    // document.getElementById('table').innerHTML = createTable(20, 20);
};

document.getElementById('switch').onclick = function (event) {
    event.preventDefault();
    if(!started) {
        // init();
        stopper = setInterval('move()', 1000);
        started = true;
    } else {
        window.clearInterval(stopper);
        started = !started;
    }
};

document.onkeydown = function (e) {
    // console.log(e.keyCode);
    switch(e.keyCode) {
        case 37:
            nextDirection = left;
            break;
        case 38:
            nextDirection = up;
            break;
        case 39:
            nextDirection = right;
            break;
        case 40:
            nextDirection = down;
            break;
        default:
            break;
    }
};

function init() {
    document.getElementById('table').innerHTML = createTable(20, 20);
    
    snake = ['9_10', '9_9'];

    render(snake);
    // var cell;
    for(i = 0; i < snake.length; i++) {
        var pos = snake[i].split('_');
        console.log(pos);
        var snakePart = document.getElementById(pos[0] + '_' + pos[1]);
        snakePart.classList.add('snakebody');
    }
    
    x = 9;
    y = 10;
}

function render(snake) {

}

function log() {
    x++;
    y++;
    console.log(x + ' ' +  y);

}
function update() {

}


//---------------functions----------------------
function createTable(row, col) {
    var table = '<table><tbody>';
    for(var i = row; i > 0; i--) {
        table += createRow(i - 1, col);
    }
    table += '</tbody></table>';
    return table;
}

function createRow(r, col) {
    var row = '<tr>';
    for(var i = col; i > 0; i--) {
        row += createCell(r, col - i);
    }
    row += '</tr>';
    return row;
}

function createCell(y, x) {
    var id = x + '_' + y;
    return '<td id = ' + id + '></td>';
}

function move() {
    switch(nextDirection) {
        case up:
            y++;
            break;
        case right:
            x++;
            break;
        case down:
            y--;
            break;
        case left:
            x--;
            break;
        default:
            break;
    }

    var el = document.getElementById(x + '_' + y);
    el.classList.add('snakebody');

}

function render() {

}