var timernumber = 5;
var intervalID;


reset = function () {
    theNumber = theNumberArray[Math.floor(Math.random() * theNumberArray.length)]; console.log(theNumber);
    keyNumber = $("#theNumber").html(theNumber + " V");
    imageOneValue = guessingNumbers[Math.floor(Math.random() * guessingNumbers.length)]; console.log("image one = " + imageOneValue); 
    imageTwoValue = guessingNumbers[Math.floor(Math.random() * guessingNumbers.length)]; console.log("image two = " + imageTwoValue);
    imageThreeValue = guessingNumbers[Math.floor(Math.random() * guessingNumbers.length)]; console.log("image three = " + imageThreeValue);
    imageFourValue = guessingNumbers[Math.floor(Math.random() * guessingNumbers.length)]; console.log("image four = " + imageFourValue);
    totalScore = 0;
    addedScore.html(totalScore + " V");
    var audio = new Audio('#');
    audio.play();
}   

function runlose() {
    clearInterval(intervalID)
    intervalID = setInterval(decrement, 1000)
    $(".container").addClass("hidden");
    document.body.style.backgroundImage = "url('assets/images/zombie.gif')"
}

function runwin() {
    clearInterval(intervalID)
    intervalID = setInterval(decrement, 1000)
    $(".container").addClass("hidden");
    document.body.style.backgroundImage = "url('assets/images/victory.gif')"
}

function stop() {
    clearInterval(intervalID)
    $(".container").removeClass("hidden");
    document.body.style.backgroundImage = "url('assets/images/zombiebackground.jpg')"
    timernumber = 5
}

function decrement() {
    timernumber--;
    if (timernumber === 0) {
        stop();
        timernumber = 5;
    }
}



var wins = 0;
var loses = 0;
var makeRange = Array(range(19, 120)); console.log(makeRange);
var theNumberArray = makeRange[Math.floor(Math.random() * makeRange.length)]; console.log(theNumberArray);
var theNumber = theNumberArray[Math.floor(Math.random() * theNumberArray.length)]; console.log(theNumber);
var guessingNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var totalScore = 0;


function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}


var imageOneValue = guessingNumbers[Math.floor(Math.random() * guessingNumbers.length)]; console.log("image one = " + imageOneValue); 
var imageTwoValue = guessingNumbers[Math.floor(Math.random() * guessingNumbers.length)]; console.log("image two = " + imageTwoValue);
var imageThreeValue = guessingNumbers[Math.floor(Math.random() * guessingNumbers.length)]; console.log("image three = " + imageThreeValue);
var imageFourValue = guessingNumbers[Math.floor(Math.random() * guessingNumbers.length)]; console.log("image four = " + imageFourValue);


var keyNumber = $("#theNumber").html(theNumber + " V"); console.log("the number " + theNumber);
var winGame = $("#wingame").html("SYSTEM O.K.: <br>" + wins);
var loseGame = $("#losegame").html("SYSTEM ERROR: <br>" + loses);


var addedScore = $("#addedScore");
var firstButton = $("#image1");
var secondButton = $("#image2");
var thirdButton = $("#image3");
var fourthButton = $("#image4");
var statusImage = $("#statusImage"); console.log(statusImage);

addedScore.html(totalScore);

firstButton.on("click", function() {
    loses;
    wins;
    if (this) {
        totalScore = totalScore + imageOneValue;
        addedScore.html(totalScore + " V");
        console.log("this is The Number " + theNumber);
        console.log("this is Total Score " + totalScore);
        var audio = new Audio('assets/audio/zap.mp3');
        audio.play();
        if (totalScore == theNumber) {
            var audio = new Audio('assets/audio/Juggernog.mp3');
            audio.play();
            // statusImage.html("<img src = 'assets/images/giphy.gif' alt = 'power' width = '350' height = '350'/>"); 
            wins++;
            winGame = $("#wingame").html("SYSTEM O.K.: <br>" + wins);
            totalScore = 0;
            runwin()
            reset();
        }
    
        else if (totalScore >= theNumber) {
            // statusImage.html("<h1>YOU'RE DEAD</h1>");
            loses++
            loseGame = $("#losegame").html("SYSTEM ERROR: <br>" + loses);
            totalScore = 0;
            // document.body.style.backgroundImage = "url('assets/images/tenor.gif')";
            runlose()

            reset();
        };
    }
});

secondButton.on("click", function() {
    loses;
    wins;
    if (this) {
        totalScore = totalScore + imageTwoValue;
        addedScore.html(totalScore + " V");
        console.log("this is The Number " + theNumber);
        console.log("this is Total Score " + totalScore);
        var audio = new Audio('assets/audio/zap.mp3');
        audio.play();
        if (totalScore == theNumber) {
            var audio = new Audio('assets/audio/DoubleTap.mp3');
            audio.play();
            // statusImage.html("<img src = 'assets/images/giphy.gif' alt = 'power' width = '350' height = '350'/>"); 
            var audioLose = new Audio('assets/audio/zombie_scream.mp3');
            audioLose.play();
            wins++
            winGame = $("#wingame").html("SYSTEM O.K.: <br>" + wins);
            totalScore = 0;
            runwin()
            reset();
        }
        else if (totalScore >= theNumber) {
            // statusImage.html("<h1>YOU'RE DEAD</h1>");
            var audioLose = new Audio('assets/audio/zombie_scream.mp3');
            audioLose.play();
            loses++
            loseGame = $("#losegame").html("SYSTEM ERROR: <br>" + loses);
            totalScore = 0;
            // document.body.style.backgroundImage = "url('assets/images/tenor.gif')";
            runlose()

            reset();


        };
    }
});

thirdButton.on("click", function() {
    loses;
    wins;
    if (this) {
        totalScore = totalScore + imageThreeValue;
        addedScore.html(totalScore + " V");
        console.log("this is The Number " + theNumber);
        console.log("this is Total Score " + totalScore);
        var audio = new Audio('assets/audio/zap.mp3');
        audio.play();
        if (totalScore == theNumber) {
            var audio = new Audio('assets/audio/Revive.mp3');
            audio.play();
            // statusImage.html("<img src = 'assets/images/giphy.gif' alt = 'power' width = '350' height = '350'/>"); 
            wins++
            winGame = $("#wingame").html("SYSTEM O.K.: <br>" + wins);
            totalScore = 0;
            runwin()
            reset();
        }
        else if (totalScore >= theNumber) {
            // statusImage.html("<h1>YOU'RE DEAD</h1>");
            var audioLose = new Audio('assets/audio/zombie_scream.mp3');
            audioLose.play();
            loses++
            loseGame = $("#losegame").html("SYSTEM ERROR: <br>" + loses);
            totalScore = 0;
            // document.body.style.backgroundImage = "url('assets/images/tenor.gif')";
            runlose()

            reset();
            
        };
    }
});

fourthButton.on("click", function() {
    loses;
    wins;
    if (this) {
        totalScore = totalScore + imageFourValue;
        addedScore.html(totalScore + " V");
        console.log("this is The Number " + theNumber);
        console.log("this is Total Score " + totalScore);
        var audio = new Audio('assets/audio/zap.mp3');
        audio.play();
        if (totalScore == theNumber) {
            var audio = new Audio('assets/audio/SpeedCola.mp3');
            audio.play();
            // statusImage.html("<img src = 'assets/images/giphy.gif' alt = 'power' width = '350' height = '350'/>"); 
            wins++
            winGame = $("#wingame").html("SYSTEM O.K.: <br>" + wins);
            totalScore = 0;
            runwin()
            reset();
        }
        else if (totalScore >= theNumber) {
            // statusImage.html("<h1>YOU'RE DEAD</h1>");
            var audioLose = new Audio('assets/audio/zombie_scream.mp3');
            audioLose.play();
            loses++
            loseGame = $("#losegame").html("SYSTEM ERROR: <br>" + loses);
            totalScore = 0;
            // document.body.style.backgroundImage = "url('assets/images/tenor.gif')";
            runlose()
            reset();
        };
    }
});



console.log(theNumber)













