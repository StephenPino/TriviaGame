//--------------------------------------------------------------------------------------------------------
// GLOBAL VARIABLES
//--------------------------------------------------------------------------------------------------------

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var answerArray = [];
var counter = 60;
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/nbatheme.mp3");


//--------------------------------------------------------------------------------------------------------
// FUNCTIONS
//--------------------------------------------------------------------------------------------------------

// Hides the start container and reveals the game container
function startGame() {
	$("#start-container").hide();
	$("#game-container").show();
};

// Hides the game container and reveals the score container
function goToScore() {
	$("#game-container").hide();
	$("#score-container").show();
}

// Refreshes the UI
function updateUi() {
	$("#correct-answers-div").html(correctAnswers);
	$("#incorrect-answers-div").html(incorrectAnswers);
	$("#unanswered-div").html(unanswered);
	$("#time-remaining").text(counter);
};

// Submits the game form
function submitForm() {
	var answer1 = $('input[name="questionOne"]:checked').val();   // stores the value of the x question that is checked into a variable
	var answer2 = $('input[name="questionTwo"]:checked').val();   
	var answer3 = $('input[name="questionThree"]:checked').val();
	var answer4 = $('input[name="questionFour"]:checked').val();
	var answer5 = $('input[name="questionFive"]:checked').val();
	var answer6 = $('input[name="questionSix"]:checked').val();
	var answer7 = $('input[name="questionSeven"]:checked').val();
	var answer8 = $('input[name="questionEight"]:checked').val();
	var answer9 = $('input[name="questionNine"]:checked').val();
	var answer10 = $('input[name="questionTen"]:checked').val();
	answerArray.push(answer1);                                    // pushes the first response into an array
	answerArray.push(answer2);                                    // pushes the second response into an array
	answerArray.push(answer3);                                    // pushes the third response into an array
	answerArray.push(answer4);                                    // pushes the fourth response into an array
	answerArray.push(answer5);                                    // pushes the fifth response into an array
	answerArray.push(answer6);                                    // pushes the sixth response into an array
	answerArray.push(answer7);                                    // pushes the seventh response into an array
	answerArray.push(answer8);                                    // pushes the eight response into an array
	answerArray.push(answer9);                                    // pushes the ninth response into an array
	answerArray.push(answer10);                                    // pushes the tenth response into an array


	// Checks whether each answer in the array is correct,incorrect,or unanswered and increments the appropriate variables
	for (var i = 0; i < answerArray.length; i++) {

		if (answerArray[i] === "correct") {
			correctAnswers++;
			updateUi();
		}

		else if (answerArray[i] === "incorrect") {
			incorrectAnswers++;
			updateUi();
		}

		else {
			unanswered++;
			updateUi();
		}
	};
};


//--------------------------------------------------------------------------------------------------------
// GAME FLOW
//--------------------------------------------------------------------------------------------------------

// On document load...
$(document).ready(function() {

	// On start button click...
	$("#start-button").on("click", function(){
		startGame();
		audioElement.play();
		updateUi();
		var interval = setInterval(function() {
	   	 	counter--;                              // decrements the counter
	    	$("#time-remaining").text(counter);     // updates the counter in the UI

	    	// When the counter reaches 0...
	    	if (counter == 0) {               
        		submitForm();                       // submits answers
        		clearInterval(interval);            // stops the clock from ticking
        		goToScore();                        // sends user to the score menu 
    		}
		}, 1000);
		updateUi();

		// On submit button click...
		$("#submit-button").on("click", function(){
			event.preventDefault();                  // prevents the page from refreshing
			submitForm();                            // submits answers
			goToScore();
			clearInterval(interval);                 // stops the clock from ticking so it won't re-submit the form
		});
	});
});