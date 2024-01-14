// grabs start button element
var startBtn = document.querySelector('.start');
var text = document.querySelector('.questions');
var timerElement = document.querySelector('.timer');
let timer;
let timerInterval;
let timeRemaining = 130;
let incorrectAnswers = 0;

// Adds event listener for startBtn
startBtn.addEventListener('click', startQuiz);

var quizQuestions = [
    {
      question: "What is the correct way to write a comment in JavaScript?",
      option: [
        "// This is a comment",
        "<!-- This is a comment -->",
        "/* This is a comment */",
        "# This is a comment"
      ],
      answer: 0 // Index of the correct option in the 'options' array
    },
    {
      question: "How do you declare a function in JavaScript?",
      option: [
        "function myFunction()",
        "def myFunction()",
        "void myFunction()",
        "func myFunction()"
      ],
      answer: 0
    },
    {
      question: "What is the output of the following code: console.log(10 + 20)?",
      option: [
        "1020",
        "30",
        "102",
        "20"
      ],
      answer: 1
    },
    {
      question: "What is the purpose of the querySelector() method in JavaScript?",
      option: [
        "To select an HTML element by its class name",
        "To select an HTML element by its ID",
        "To select an HTML element by its tag name",
        "All of the above"
      ],
      answer: 3
    },
    {
      question: "What is the result of the expression 5 == '5' in JavaScript?",
      option: [
        "true",
        "false",
        "undefined",
        "NaN"
      ],
      answer: 0
    }
  ];
  let currentQuestionIndex = 0;

// function to start the quiz
function startQuiz(){  
    // displays fisrt question
    displayQuestion(currentQuestionIndex);
    // hides startBtn
    startBtn.style.display = 'none';
}

    // function to display a question and its options
    function displayQuestion(questionIndex){
        // get the question and options from the Quiz Questions array
        var question = quizQuestions[questionIndex].question;
        var option = quizQuestions[questionIndex].option;
        timerInterval = setInterval(updateTimer, 1000);

        var questionElement = document.querySelector('.questions');
        questionElement.textContent = question;

        var answersElement = document.querySelector('.answers');
        answersElement.innerHTML = '';

     for (var i = 0; i < option.length; i++) {

     var optionButton = document.createElement('button');
     optionButton.textContent = option[i];

     // adds event listener to handle user selection
     optionButton.addEventListener('click', handleOptionsSelection);

     answersElement.appendChild(optionButton);
     }
    }

    function updateTimer(){
        timerElement.textContent = `Time: ${timeRemaining}`;
        // decrease the time by 1 second
        timeRemaining--;

        if(timeRemaining <= 0){
            clearInterval(timerInterval);
            endQuiz();
        }
    }
    // function to handle user input
    function handleOptionsSelection(event){
        var selectedOption = event.target.textContent;
         // get the current question
         var currentQuestion = quizQuestions[currentQuestionIndex];

    if(curentQuestionIndex < quizQuestions.length) {
        var currentQuestion = quizQuestions[currentQuestionIndex];
          // check if the selected option is correct
          if (selectedOption === currentQuestion.option[currentQuestion.answer]) {
    


    // correct answer
    // proceed to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion(currentQuestionIndex);
    } else {

      // reached the end of the quiz
      // display the final score or redirect to the next page
      // Add your code here to handle the end of the quiz
    }
  } else {       
     incorrectAnswers++;
     // subtracts twenty seconds for each incorrect answer
     timeRemaining -= 20; }

    // Add your code here to deduct time from the timer
    // proceed to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion(currentQuestionIndex);
    } else {
      // reached the end of the quiz
      // display the final score or redirect to the next page
      // Add your code here to handle the end of the quiz
      }
    }
  }
    
