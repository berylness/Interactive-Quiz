$( document ).ready(function() {

/* Array of the Quiz Questions, Answer Choices and Correct Answer Value */
var questions = [
	// Question 1
	{
	    question: "Which breed of dog did NOT originate in the United States?",
        choices: ['Boston Terrier', 'Toy Fox Terrier', 'Chesapeake Bay Retriever', 'Flat-Coated Retriever'],
     	correct: 3
    },

	// Question 2
    {
        question: "Which breed of dog is considered to be the oldest breed in existence?",
        choices: ['Borzoi', 'Pekingese', 'Afghan Hound', 'Samoyed'],
     	correct: 2
    },


 	// Question 3
    {
        question: "In 2015, which was the most popular breed worldwide?",
        choices: ['Beagle', 'Labrador Retriever', 'Golden Retriever', 'German Shephard'],
     	correct: 1
    },

	// Question 4
    {
        question: "Which breed of dog is known for being “bark-less”?",
        choices: ['Basenji', 'Otterhound', 'Chihuahua', 'Puli'],
     	correct: 0
    },

 	// Question 5
    {
        question: "On average which is the tallest breed of dog?",
        choices: ['Irish Wolfhound', 'Great Dane', 'Tibetan Mastiff', 'Scottish Deerhound'],
     	correct: 0
    },
];


/* Function to Kick Off a New Quiz */
function newQuiz() {
  	
  	var currentQuestion = 0;

	/* Sets Question Counter to 1 of 5 */
  	$('#counter').empty().append((currentQuestion+1) + ' of 5');

  	/* Clear Out Any Answer Feedback Text from Previous Quiz*/
  	$('#feedback').hide();

	/* Displays First Question */
  	$('#questions').empty().append(questions[currentQuestion].question);

  	/* Display "Submit Answer" Button */
  	$('#submit-btn').show();

  	/* Hide the Two Unneeded Buttons */
  	$('#next-btn').hide();
  	$('#again-btn').hide();
};

/* Invoking Functions Section */
newQuiz();
progressQuiz();
reviewAnswer();
endQuiz();

/* Function to Move the User Through Questions 2- 5 */
function progressQuiz() {

	/* Move to Next Question in the Index */
 	 currentQuestion++;

	/* Clear Previous Question and Sets the Next Question */
  	$('#questions').empty().append(questions[currentQuestion].question);

    /* Clears Previous Question Feedback */
	for (var i = 0, length = questions[i].answers.length - 1; i <= length; i++) {
    $('#choice' + i).empty().append(questions[currentQuestion].answers[i]);
    console.log(i);
  
	/* Updates the Counter with New Question Count */
    $('#counter').empty();

    /* Display "Submit Answer" Button */
  	$('#submit-btn').show();

    /* Hides Unneeded Buttons */
  	$('#next-btn').hide();
  	$('#again-btn').hide();

 	/* Remove Right or Wrong Answer Indicator from Previous Question */ 
  	$('#correct').hide();
  	$('#wrong').hide();
	};
};



/* Function to Assess User's Answer */
	function reviewAnswer() {

	/* When an Answer is Selected */
	$('.answers').click(function() {
  
	/* Determine Whether the Answer is Correct */
 	if ($(this).text() == questions[currentQuestion].correct) {

	/* Display Correct Answer Text*/
    right++;
    $('#correct').show();
  	}

	/* If Answer is Not Correct, Display Wrong Answer Prompt */
  	else if ($(this).text() != questions[currentQuestion].correct) {
	
   	$('#wrong').show();
 	}

 	/* Show "Next Question" Button After Answer Result is Displayed */
 	$('.next-btn').show(); 

 	/* Hides Unneeded Buttons */
  	$('#submit-btn').hide();
  	$('#again-btn').hide();
	});
};
	

/* Function to End the Quiz After Question 5 */
	function endQuiz() {
	$('#again-btn').show();
	$('#next-btn').hide();
	$('#submit-btn').hide();
    };

});
