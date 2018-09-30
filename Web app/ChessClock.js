function show(idToShow) {
	document.getElementById(idToShow).className = "visable";	
}
		
function hide(idToHide) {
	document.getElementById(idToHide).className = "hidden";
}

var turn = 1;
var time1;
var time2;
var paused = false;

var time1String;
var time2String;

function GoBack(){
    show("mainMenu");
    hide("timer");
    hide("backButton")
    location.reload();
}

function StartBlitz(){
    hide("mainMenu");
    show("timer");
    show("backButton")
    time1 = 300;
    time2 = 300;
    document.getElementById("timerTitle").innerHTML = "Blitz";
    document.getElementById("player1Time").innerHTML = "5:00";
    document.getElementById("player2Time").innerHTML = "5:00";
}

function Start15Min(){
    hide("mainMenu");
    show("timer");
    show("backButton")
    time1 = 900;
    time2 = 900;
    document.getElementById("timerTitle").innerHTML = "15 Minute Rounds";
    document.getElementById("player1Time").innerHTML = "15:00";
    document.getElementById("player2Time").innerHTML = "15:00";
}

function Start20Min(){
    hide("mainMenu");
    show("timer");
    show("backButton")
    time1 = 1200;
    time2 = 1200;
    document.getElementById("timerTitle").innerHTML = "20 Minute Rounds";
    document.getElementById("player1Time").innerHTML = "20:00";
    document.getElementById("player2Time").innerHTML = "20:00";
}

function Start30Min(){
    hide("mainMenu");
    show("timer");
    show("backButton")
    time1 = 1800;
    time2 = 1800;
    document.getElementById("timerTitle").innerHTML = "30 Minute Rounds";
    document.getElementById("player1Time").innerHTML = "30:00";
    document.getElementById("player2Time").innerHTML = "30:00";
}


function StartGame(){
    hide("startButton");
    show("gameButtons");
    StartClock(time1, time2);
}

function Switch(){
    if(!paused){
    if(turn == 1){
        document.getElementById("player2Time").className="currentTurn";
        document.getElementById("player1Time").className="notcurrentTurn";
        turn =2;
        clearInterval(player1timer);
        player2timer = setInterval(function(){ 
            time2 -=1;
            document.getElementById("player2Time").innerHTML = convertToTime(time2);
        }, 1000);

    }else{
        turn =1;
        document.getElementById("player1Time").className="currentTurn";
        document.getElementById("player2Time").className="notcurrentTurn";

        clearInterval(player2timer);
        player1timer = setInterval(function(){ 
            time1 -=1;
            document.getElementById("player1Time").innerHTML = convertToTime(time1);
        }, 1000);

    }
    }
}


function StartClock(time1, time2){
        if(turn == 1){
            player1timer = setInterval(function(){ 
                document.getElementById("player1Time").className="currentTurn";
                document.getElementById("player2Time").className="notcurrentTurn";
                time1 -=1;
                document.getElementById("player1Time").innerHTML = convertToTime(time1);
            }, 1000);
        }
}


function Pause(){
    if(paused){
        paused=false;
        document.getElementById("pauseButton").innerHTML = "Pause";
        if(turn == 1){
            player1timer = setInterval(function(){ 
                time1 -=1;
                document.getElementById("player1Time").className="currentTurn";
                document.getElementById("player2Time").className="notcurrentTurn";
                document.getElementById("player1Time").innerHTML = convertToTime(time1);
            }, 1000);
        }else{
            player2timer = setInterval(function(){
                document.getElementById("player2Time").className="currentTurn"; 
                document.getElementById("player1Time").className="notcurrentTurn";
                time2 -=1;
                document.getElementById("player2Time").innerHTML = convertToTime(time2);
            }, 1000);
        }

    }else{
        paused=true;
        document.getElementById("pauseButton").innerHTML = "Resume";
        clearInterval(player1timer);
        clearInterval(player2timer);
    }
    


}


function convertToTime(number){
        var minutes = Math.floor(number / 60);
        var seconds = number - minutes * 60;
        var Stringseconds = seconds.toString();
        if(seconds < 10){
            Stringseconds = "0"+seconds.toString();
        }
        return minutes.toString() + ":" + Stringseconds;
}