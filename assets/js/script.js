$(document).ready(function(){
    // Game constant and variable 
    let inputDir = {x: 0, y: 0}; 
    const foodSound = new Audio('assets/music/food.mp3');
    const gameOverSound = new Audio('assets/music/gameover.mp3');
    const moveSound = new Audio('assets/music/move.mp3');
    const musicSound = new Audio('assets/music/music.mp3');
    let speed = 5;
    let score = 0;
    let lastPaintTime = 0;
    let snakeArr = [
        {x: 13, y: 15}
    ];
    let food = {x: 6, y: 7};
    // let status = true;

    // Game Functions
    function main(ctime, status) {
        if(status){
            return;
        }
        window.requestAnimationFrame(main);
        if((ctime - lastPaintTime)/1000 < 1/speed){
            return;
        }
        lastPaintTime = ctime;
        gameEngine();
    }

    function isCollide(snake) {
        // If you bump into yourself 
        for (let i = 1; i < snakeArr.length; i++) {
            if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
                return true;
            }
        }
        // If you bump into the wall
        if(snake[0].x >= 19 || snake[0].x <=0 || snake[0].y >= 19 || snake[0].y <=0 ){
            return true;
        }        
        return false;
    }

    function gameEngine(){
        // Part 1: Updating the snake array & Food
        if(isCollide(snakeArr)){
            gameOverSound.play();
            musicSound.pause();
            inputDir =  {x: 0, y: 0}; 
            alert("Game Over. Press any key to play again!");
            snakeArr = [{x: 13, y: 15}];
            musicSound.play();
            score = 0; 
        }
    
        // If you have eaten the food, increment the score and regenerate the food
        if(snakeArr[0].y === food.y && snakeArr[0].x ===food.x){
            foodSound.play();
            score += 1;
            // if(score>hiscoreval){
            //     hiscoreval = score;
            //     localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
            //     hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
            // }
            // scoreBox.innerHTML = "Score: " + score;
            snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
            let a = 2;
            let b = 16;
            food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
        }
    
        // Moving the snake
        for (let i = snakeArr.length - 2; i>=0; i--) { 
            snakeArr[i+1] = {...snakeArr[i]};
        }
    
        snakeArr[0].x += inputDir.x;
        snakeArr[0].y += inputDir.y;
    
        // Part 2: Display the snake and Food
        // Display the snake
        $(".display").html("");
        snakeArr.forEach((e, index)=>{
            snakeElement = document.createElement('div');
            snakeElement.style.gridRowStart = e.y;
            snakeElement.style.gridColumnStart = e.x;
            if(index === 0){
                snakeElement.classList.add('head');
            }
            else{
                snakeElement.classList.add('snake');
            }
            $(".display").append(snakeElement);
        });
        // Display the food
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food')
        $(".display").append(foodElement);    
    }
    
    
    window.requestAnimationFrame(main);

    window.addEventListener('keydown', e =>{
        inputDir = {x: 0, y: 1} // Start the game
        moveSound.play();
        switch (e.key) {
            case "ArrowUp":
                inputDir.x = 0;
                inputDir.y = -1;
                break;
    
            case "ArrowDown":
                inputDir.x = 0;
                inputDir.y = 1;
                break;
    
            case "ArrowLeft":
                inputDir.x = -1;
                inputDir.y = 0;
                break;
    
            case "ArrowRight":
                inputDir.x = 1;
                inputDir.y = 0;
                break;
            default:
                break;
        }
    
    });

    // defaulty pause button hide
    $("#pause").hide();


    // event perform on click play button
    $("#play").click(function () {
        $(this).hide();
        $("#pause").show();
        main(ctime, true);
    })

    // event perform on click pause button
    $("#pause").click(function () {
        $(this).hide();
        $("#play").show();
        main(ctime, false);
    })

    // event perform on click up button
    $("#up").click(function () {
        moveSound.play();
        inputDir.x = 0;
        inputDir.y = -1;
    })
    // event perform on click down button
    $("#down").click(function () {
        moveSound.play();
        inputDir.x = 0;
        inputDir.y = 1;
    })
    // event perform on click left button
    $("#left").click(function () {
        moveSound.play();
        inputDir.x = -1;
        inputDir.y = 0;


    })
    // event perform on click right button
    $("#right").click(function () {
        moveSound.play();
        inputDir.x = 1;
        inputDir.y = 0;
    })
})