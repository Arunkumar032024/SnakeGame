$(document).ready(function () {
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
