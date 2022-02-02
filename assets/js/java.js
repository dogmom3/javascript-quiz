var containerDiv = document.getElementById('container');
var startBtn = document.getElementById('start-btn')
var quizDiv = document.getElementById('quiz');
var questionText = document.getElementById('question');
var answerText = document.getElementById('answers');
var button = document.getElementById('answer-btn'); //do i need this to add css to answr btns?
var answerCheck = document.getElementById('answer-check');
var initialDiv = document.getElementById('initials');
var intialLabel = document.getElementById('initial-label');
var initialInput = document.getElementById('initial-input');
var scoreDiv = document.getElementById('score');
var userScore = document.getElementById('user-score');
var viewHighScores = document.getElementById('view-high-scores');
var quizTimer = document.getElementById('timer');
var timeCounter = document.getElementById('time-counter');

let currentQuestion = 0;
let score = 0;
let totalTime = 50; 

//questions and answers
let questions = [
    {
        question: "Who invented Javascript?",
        answers: [
            { option: "Waldo Puppito", answer: false },
            { option: "Clark Griswold", answer: false },
            { option: "Brendan Eich", answer: true }
        ]
    },
    {
        question: "What year was Javascript invented?",
        answers: [
            { option: "1990", answer: false },
            { option: "1995", answer: true },
            { option: "2002", answer: false }
        ]
    },
    {
        question: "Which is used to check if two variables are equal?",
        answers: [
            { option: "===", answer: true },
            { option: "==", answer: false },
            { option: "=", answer: false }
        ]
    },
    {
        question: "Which of the following is something that Javascript cannot do?",
        answers: [
            { option: "Make interactive websites", answer: false },
            { option: "Design phone apps", answer: false },
            { option: "Brew coffee", answer: true }
        ]
    },
    {
        question: "Which code executes a function?",
        answers: [
            { option: "start function!", answer: false },
            { option: "theFunction();", answer: true },
            { option: "{executeFunction{})", answer: false }
        ]
    }
];

//function to display questions:
function showQuestion() {
    console.log('hit function');
    quizDiv.removeAttribute('class', 'hide')
    quizDiv.classList.add('show');
    startBtn.removeAttribute('class', 'show')
    startBtn.classList.add('hide');

    var question = questions[currentQuestion];
    questionText.innerText = question.question;
     answerText.innerHTML = '';
    question.answers.forEach((answer) => {
        console.log('answer', answer)
        var button = document.createElement('button');
        button.innerText = answer.option;
        button.classList.add('btn');
        button.dataset.correct = answer.answer;
        answerText.append(button);
        button.addEventListener('click', checkAnswer);
    });
}
startBtn.addEventListener('click', showQuestion);
startBtn.addEventListener('click', startTimer);

function checkAnswer(event) {
    var question = questions[currentQuestion];
    if (event.target.dataset.correct ==='true') {
        score++;
        console.log('correct')
    } else {
        console.log('wrong')
       totalTime -= 10;
        quizTimer.textContent = totalTime;
       answerCheck.textContent ='Wrong!'; 
   
    }
     currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        quizOver();
    }
}

function quizOver(){
    quizDiv.removeAttribute('class', 'show')
    quizDiv.classList.add('hide');
    initialDiv.removeAttribute('class', 'hide')
    initialDiv.classList.add('show');
    scoreDiv.removeAttribute('class', 'hide')
    scoreDiv.classList.add('show');


    userScore.innerHTML = score;
    quizTimer.style.display = 'none'
    }


function startTimer() {
    setInterval(function () {
        if (totalTime <= 0) {
            clearInterval(downloadTimer);
            document.getElementById('timer').innerHTML = 'Times up';
        } else {
            document.getElementById('timer').innerHTML = totalTime + ' seconds remaining';
        }
        totalTime -= 1;
    }, 1000);
}