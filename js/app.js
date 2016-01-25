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
    userScore = 0;

/* (Re)Sets Question Counter to "1 of 5" */
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

    $('#finalScore').hide();

    $('#next-btn span').text('Next Question'); 
};


   
/* Global Variable outside of the function */
var currentQuestion = 0;
var userScore = 0;

/* Invoking New Quiz Function */
newQuiz();



/* FUNCTION to Assess User's Answer */
  function reviewAnswer() {
  
/* If Statement to Determine Whether the Answer is Correct */
  if ($(".answers input[type='radio']:checked").val() == questions[currentQuestion].correct) {

/* Increment User Score By +1 */
    userScore++;

/* Display "Correct" Answer Text*/
   $('#correct').show();
  }

/* If Answer is Wrong Display Incorrect Answer Prompt */
   else {
    $('#wrong').show();
  };


/* If Statement to Prompt "Check Your Score" button when Question 5 is reached */
  if(currentQuestion == 4) {
    $('#next-btn span').text('Check Your Score'); 
  }

/* Switch "Submit" Button to "Next Question" Button */
    $('#next-btn').show(); 

/* Hides Unneeded Buttons */
    $('#submit-btn').hide();
    $('#again-btn').hide();

 };


/* FUNCTION to Move the User Through Quiz Questions 2-5 */
function progressQuiz() {

/* Increments to the Next Question in the Index */
 	 currentQuestion++;

/* If Statement to Prevent the Quiz from Progressing Past Question 5 */
  if(currentQuestion < questions.length){


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

/* Hides the Answer Feedback from the Previous Question */ 
  	$('#correct').hide();
  	$('#wrong').hide();
    
    } else {
    endQuiz();
    } 
	}; 
 
/* Invokes the reviewAnswer Function if "Submit" Button is Clicked */ 
    $('#submit-btn').click(function(){
    reviewAnswer();
    }); 

/* Invokes the progressQuiz function if "Next Question" Button is Clicked */ 
    $('#next-btn').click(function(){
    progressQuiz();
    }); 

/* If "Take Quiz Again" Button is Clicked, Refresh Quiz */ 
   $('#again-btn').click(function(){
    newQuiz();
    }); 


/* FUNCTION to End the Quiz After Question 5 */
	function endQuiz() {
	  $('#again-btn').show();
  	$('#next-btn').hide();
  	$('#submit-btn').hide();

/* Suppresses Feedback text from Question 5 */
    $('#correct').hide();
    $('#wrong').hide();

/* After "Check Your Final Score" button is Clicked, Displays Score */
    $('#finalScore span').text('Congratulations! You scored ' + userScore + ' out of 5');
  
    $('#finalScore').show();
  };

});
