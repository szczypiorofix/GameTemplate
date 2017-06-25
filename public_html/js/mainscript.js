var gameStep = 0;
var gameLatecy = 10;
var tick = false;
var input = null;

var Canvas = {
    canvas: null,
    ctx: null,
    width: 0,
    height: 0,
    init: function() {
        this.canvas = document.getElementById("gamecanvas");
        this.ctx = this.canvas.getContext("2d");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }
};


function gameLoop() {
    Canvas.ctx.clearRect(0, 0, Canvas.width, Canvas.height);
    
    // GAME LOOP
    
    //if (input.keyRight.isDown) { }
}

function game() {
    tick = false;
    gameStep--;
    if (gameStep <= 0) {
        gameStep = gameLatecy;
    }
    if (gameStep === gameLatecy) {
        tick = true;
        gameLoop();
    }
    requestAnimationFrame(game);
}

var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;

window.onload = function() {
    Canvas.init();
    input = new Input();
    requestAnimationFrame(game);
};
