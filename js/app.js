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
  	
    currentQuestion=0;

/* Sets Question Counter to "1 of 5" */
  	$('#counter').text((currentQuestion+1));

/* Hides Any Visible Answer Feedback From Previous Quizzes*/
    $('#correct').hide();
    $('#wrong').hide();

/* Displays First Question */
  	$('#questions').text(questions[currentQuestion].question);

/* Displays the Four Answer Options */
    $('#answer1').text(questions[currentQuestion].choices[0]);
    $('#answer2').text(questions[currentQuestion].choices[1]);
    $('#answer3').text(questions[currentQuestion].choices[2]);
    $('#answer4').text(questions[currentQuestion].choices[3]);

/* Displays the "Submit Answer" Button */
  	$('#submit-btn').show();

/* Hides the "Next Question" and "Take Quiz Again" Buttons */
  	$('#next-btn').hide();
  	$('#again-btn').hide();
};


   
/* Global Variable outside of the function */
var currentQuestion = 0;

/* Invoking New Quiz Function */
newQuiz();



/* FUNCTION to Assess User's Answer */
  function reviewAnswer() {
  
/* Determine Whether the Answer is Correct */
   if ($(this).text() == questions[currentQuestion].correct) {

/* Display "Correct" Answer Text*/
   $('#correct').show();
  }

/* If Answer is Wrong Display Incorrect Answer Prompt */
   else {
    $('#wrong').show();
  };

 /* Switch "Submit" Button to "Next Question" Button */
    $('.next-btn').show(); 

/* Hides Unneeded Buttons */
    $('#submit-btn').hide();
    $('#again-btn').hide();

 };


/* FUNCTION to Move the User Through Quiz Questions 2-5 */
function progressQuiz() {

/* Move to Next Question in the Index */
 	 currentQuestion++;

/* Advance the Question Counter */
    $('#counter').text((currentQuestion+1));
	
/* Display the Next Question */
    $('#questions').text(questions[currentQuestion].question);

/* Displays the Four Answer Options */
    $('#answer1').text(questions[currentQuestion].choices[0]);
    $('#answer2').text(questions[currentQuestion].choices[1]);
    $('#answer3').text(questions[currentQuestion].choices[2]);
    $('#answer4').text(questions[currentQuestion].choices[3]);

/* Display "Submit Answer" Button */
  	$('#submit-btn').show();

/* Hides Unneeded Buttons */
  	$('#next-btn').hide();
  	$('#again-btn').hide();

/* Removes Right or Wrong Answer Text from Previous Question */ 
  	$('#correct').hide();
  	$('#wrong').hide();
	};




  
/* Invokes the reviewAnswer function if "Submit" button is clicked */ 
    $('#submit-btn').click(function(){
    reviewAnswer();
    }); 

/* Invokes the progressQuiz function if "Next Question" button is clicked */ 
    $('#next-btn').click(function(){
    progressQuiz();
    }); 

/* FUNCTION to End the Quiz After Question 5 */
	function endQuiz() {
	$('#again-btn').show();
	$('#next-btn').hide();
	$('#submit-btn').hide();
  };

});
