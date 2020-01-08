var gamePattern=[];
var userClickedPattern=[];
var level= 0;
var started=false;
var buttonColours=["red","green","blue","yellow"];

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
      
    }
});
$(".btn").click(function(){
    var userChosenButton=$(this).attr("id");
    userClickedPattern.push(userChosenButton);
    playSound(userChosenButton);
    animatedPressed(userChosenButton);
     checkAnswer(userClickedPattern.length-1);
});
function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function(){nextSequence();},1000);
        }
    }

    else{
    console.log("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
        $("body").removeClass("game-over");
            
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
startOver();
    }

}
function startOver(){started=false;
                     level=0;
                     gamePattern=[];
    
}
function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber= Math.floor(Math.random() *4);
    var randomChosenColour= buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
    
}

function playSound(name){
    var audio = new Audio(name + ".mp3");
    audio.play();
}
function animatedPressed(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){$("#"+currentColor).removeClass("pressed")},100);

}

