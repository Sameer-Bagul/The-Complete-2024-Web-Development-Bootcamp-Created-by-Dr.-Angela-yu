var gamePattern = [];

function nextSequence(){
    var randomNum = Math.floor(Math.random() * 4);
    var buttonColours = ["red", "blue", "green", "yellow"];
    var randomChosenColour = buttonColours[randomNum];
    gamePattern.push(randomChosenColour);
    // console.log(gamePattern);
}