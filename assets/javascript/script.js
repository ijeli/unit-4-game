
//window.onload = function () 

    reset = function () {
        totalScore = 0;
        theNumber = theNumberArray[Math.floor(Math.random() * theNumberArray.length)]; console.log(theNumber);
        keyNumber = $("#theNumber").html("THE NUMBER TO MAKE IS: " + theNumber);
        imageOneValue = guessingNumbers[Math.floor(Math.random() * guessingNumbers.length)]; console.log("image one = " + imageOneValue); 
        imageTwoValue = guessingNumbers[Math.floor(Math.random() * guessingNumbers.length)]; console.log("image two = " + imageTwoValue);
        imageThreeValue = guessingNumbers[Math.floor(Math.random() * guessingNumbers.length)]; console.log("image three = " + imageThreeValue);
        imageFourValue = guessingNumbers[Math.floor(Math.random() * guessingNumbers.length)]; console.log("image four = " + imageFourValue);

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


    var keyNumber = $("#theNumber").html("THE NUMBER TO MAKE IS: " + theNumber); console.log("the number " + theNumber);
    var winGame = $("#wingame").html("WINS: " + wins);
    var loseGame = $("#losegame").html("LOSES: " + loses);

    var addedScore = $("#addedScore");
    var firstButton = $("#image1");
    var secondButton = $("#image2");
    var thirdButton = $("#image3");
    var fourthButton = $("#image4");

    firstButton.on("click", function() {
        loses;
        wins;
        if (this) {
            totalScore = totalScore + imageOneValue;
            addedScore.html(totalScore);
            console.log("this is The Number " + theNumber);
            console.log("this is Total Score " + totalScore);
            if (totalScore == theNumber) {
                alert("win");
                wins++;
                winGame = $("#wingame").html("WINS: " + wins);
                totalScore = 0;
                reset();
            }
        
            else if (totalScore >= theNumber) {
                alert("lose");
                loses++
                loseGame = $("#losegame").html("LOSES: " + loses);
                totalScore = 0;
                reset();
            };
        }
    });

    secondButton.on("click", function() {
        loses;
        wins;
        if (this) {
            totalScore = totalScore + imageTwoValue;
            addedScore.html(totalScore);
            console.log("this is The Number " + theNumber);
            console.log("this is Total Score " + totalScore);
            if (totalScore == theNumber) {
                alert("damn");
                wins++
                winGame = $("#wingame").html("WINS: " + wins);
                totalScore = 0;
                reset();
            }
            else if (totalScore >= theNumber) {
                alert("suck");
                loses++
                loseGame = $("#losegame").html("LOSES: " + loses);
                totalScore = 0;
                reset();
            };
        }
    });

    thirdButton.on("click", function() {
        loses;
        wins;
        if (this) {
            totalScore = totalScore + imageThreeValue;
            addedScore.html(totalScore);
            console.log("this is The Number " + theNumber);
            console.log("this is Total Score " + totalScore);
            if (totalScore == theNumber) {
                alert("damn");
                wins++
                winGame = $("#wingame").html("WINS: " + wins);
                totalScore = 0;
                reset();
            }
            else if (totalScore >= theNumber) {
                alert("suck");
                loses++
                loseGame = $("#losegame").html("LOSES: " + loses);
                totalScore = 0;
                reset();
            };
        }
    });

    fourthButton.on("click", function() {
        loses;
        wins;
        if (this) {
            totalScore = totalScore + imageFourValue;
            addedScore.html(totalScore);
            console.log("this is The Number " + theNumber);
            console.log("this is Total Score " + totalScore);
            if (totalScore == theNumber) {
                alert("damn");
                wins++
                winGame = $("#wingame").html("WINS: " + wins);
                totalScore = 0;
                reset();
            }
            else if (totalScore >= theNumber) {
                alert("suck");
                loses++
                loseGame = $("#losegame").html("LOSES: " + loses);
                totalScore = 0;
                reset();
            };
        }
    });



    console.log(theNumber)




    







    
//}