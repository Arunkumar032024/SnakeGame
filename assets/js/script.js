$(document).ready(function () {
    // Game constant and variable 
    let direction = {x: 0, y: 0};
    const foodSound = new Audio("../music/food.mp3"),
    gameoverSound = new Audio("../music/gameover.mp3"),
    moveSound = new Audio("../music/move.mp3"),
    musicSound = new Audio("../music/music.mp3");
    let speed = 2;
    let lastPaintTime = 0;
    

    // Game function 
    function main(ctime){
        window.requestAnimationFrame(main)
        console.log(ctime)
        if((ctime - lastPaintTime)/1000  < 1/speed){
            return;
        }
        lastPaintTime = ctime;
        gameEngine();
    }

    function gameEngine(){
        // part 1: Updating teh snake array
        // part 2: Render the snake and food
    }


    // Main logic start here 
    window.requestAnimationFrame(main);
    // defaulty pause button hide
    $("#pause").hide();


    // event perform on click play button
    $("#play").click(function () {
        console.log("play")
        $(this).hide();
        $("#pause").show();
    })

    // event perform on click pause button
    $("#pause").click(function () {
        console.log("pause");
        $(this).hide();
        $("#play").show();
    })

    // event perform on click up button
    $("#up").on({
        "click": function () {
            console.log("up")
        },
        "keypress" : function(e){
            if(e.Key === "ArrowUp"){
                console.log("up by keyboard")
            }
        }
    })
    // event perform on click down button
    $("#down").click(function () {
        console.log("down")
    })
    // event perform on click left button
    $("#left").click(function () {
        console.log("left")
    })
    // event perform on click right button
    $("#right").click(function () {
        console.log("right")
    })

})
