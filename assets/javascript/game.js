// pseudo code

// a game with 4 crystal and random result
// every crystal needs to have a random number between 1-12
// a new random number should be generated every single time we win or lose
// to those 4 crystal 
// when clicking any crystal, it should be adding with the previous result
// until it equals to the random result
// if it is greater then the random result, we decrement a lost counter
// if it is equal, then we increment a win counter

// golbal variables
var random_result;
var lost = 0;
var win = 0;
var previous = 0;

// setting attr
// getting vaule

// $(".crystal").attr('class');


// 4 crystals / forloop / random result/ random #

var resetAndStart = function () {

    $(".crystals").empty();

    random_result = Math.floor(Math.random() * 50 ) + 30;
// console.log(random_result); used to verify output

$("#result").html('Random Result: ' + random_result);


for(var i = 0; i < 4; i++){
    var random = Math.floor(Math.random() * 11) + 1;
    // console.log(random) used to verify output
    

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random 
        });

    $(".crystals").append(crystal);

    }
    $("#previous").html("Total Score: " + previous);
}

resetAndStart();



    // event delegator
$(document).on('click',".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;
    // console.log(previous);

    $("#previous").html("Total Score: " + previous);
    // console.log(previous);


    if(previous > random_result){
        lost++;
        $("#lost").html("Loss: " + lost);
        previous = 0;
        resetAndStart();
    }
    else if(previous === random_result){
        win++;
        $("#win").html("Win: " + win);
        previous = 0;
        resetAndStart();
    }
    

    console.log(previous);

});
