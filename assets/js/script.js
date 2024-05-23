$(document).ready(function () {
    // Game constant and variable 
    let snakeValocity = {x: 0, y: 0};
    const foodSound = new Audio("food.mp3"),
    gameoverSound = new Audio("gameover.mp3"),
    moveSound = new Audio("move.mp3"),
    musicSound = new Audio("music.mp3"),
    display = document.querySelector('.display');
    let speed = 3;
    let score = 0;
    let lastPaintTime = 0;
    let snakeArr = [
        {x: 10, y: 10}
    ],
    food = {x: 15, y: 12};

    // Game function 
    function main(ctime){
        window.requestAnimationFrame(main)
        // console.log(ctime)
        if((ctime - lastPaintTime)/1000  < 1/speed){
            return;
        }
        lastPaintTime = ctime;
        gameEngine();
    }
    function isCollide(snakearr){
        return false;
    }
    function gameEngine(){
        // part 1: Updating the snake array & Food
        if(isCollide(snakeArr)){
            gameoverSound.play();
            moveSound.pause();
            snakeValocity = {x: 0, y: 0};
            snakeArr = [{x: 10, y: 10}];
            moveSound.play();
            score = 0;
        }
        // If you have eaten the food, increament the score and regenerate the food.
        if(snakeArr[0].x === food.x && snakeArr[0].y === food.y){
            foodSound.play();
            snakeArr.unshift({x: snakeArr[0].x, y: snakeArr[0].y})
            let a = 0;
            let b = 19;
            food = {x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random())}
        }

        // moving the snake
        for(let i = snakeArr.length - 2; i >= 0; i--){
            snakeArr[i+1] = {...snakeArr[i]};
        }

        snakeArr[0].x += snakeValocity.x;
        snakeArr[0].y += snakeValocity.y;

        // part 2: Dispaly the snake and food
        // Display the snake 
        display.innerHTML = '';
        snakeArr.forEach((e, i)=>{
            snakeEle = document.createElement("div");
            snakeEle.style.gridRowStart = e.y;
            snakeEle.style.gridColumnStart = e.x;
            if(i === 0){
                snakeEle.classList.add("head")
            }else{
                snakeEle.classList.add("snake")
            }
            display.appendChild(snakeEle)
        })
        // Display the food 
        foodEle = document.createElement("div");
        foodEle.style.gridRowStart = food.y;
        foodEle.style.gridColumnStart = food.x;
        foodEle.classList.add("food")
        display.appendChild(foodEle)
    }


    // Main logic start here 
    window.requestAnimationFrame(main);
    window.addEventListener("keydown", e => {
        snakeValocity = {x: 0, y: 1};
        moveSound.play();
        switch(e.key){
            case "ArrowUp":
                console.log("up");
                snakeValocity.x = 0;
                snakeValocity.y = -1;
                break;

            case "ArrowDown":
                console.log("down");
                snakeValocity.x = 0;
                snakeValocity.y = 1;
                break;

            case "ArrowLeft":
                console.log("left");
                snakeValocity.x = -1;
                snakeValocity.y = 0;
                break;

            case "ArrowRight":
                console.log("right");
                snakeValocity.x = 1;
                snakeValocity.y = 0;
                break;
            
        }
    })
    
    
    
    
    
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
