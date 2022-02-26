var containerDiv = document.getElementById('container');
var startBtn = document.getElementById('start-btn');
var quizDiv = document.getElementById('quiz');
var questionText = document.getElementById('question');
var answerText = document.getElementById('answers');
var button = document.getElementById('answer-btn');
var answerCheck = document.getElementById('answer-check');
var initialScoreDiv = document.getElementById('initials-score');
var intialLabel = document.getElementById('initial-label');
var initialInput = document.getElementById('initial-input');
var submitBtn = document.getElementById('submit-btn')
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
    answerCheck.textContent = '';
    quizDiv.removeAttribute('class', 'hide')
    quizDiv.classList.add('show');
    startBtn.removeAttribute('class', 'show')
    startBtn.classList.add('hide');

    var question = questions[currentQuestion];
    if (question.question) questionText.innerText = question.question;
    answerText.innerHTML = '';
    question.answers.forEach((answer) => {
        var button = document.createElement('button');
        button.innerText = answer.option;
        button.classList.add('btn');
        button.dataset.correct = answer.answer;
        answerText.append(button);
        button.addEventListener('click', checkAnswer);
    });
}

function startTimer() {
    const myInterval = setInterval(
        function () {
            if (totalTime <= 0) {
                document.getElementById('timer').innerHTML = 'Times up';
            } else {
                document.getElementById('timer').innerHTML = totalTime;
                totalTime -= 1;
            }
        }, 1000);
    if (totalTime <= 0) {
        clearInterval(myInterval);
        quizOver()
    }
}

startBtn.addEventListener('click', showQuestion);
startBtn.addEventListener('click', startTimer);

submitBtn.addEventListener('click', function (event) {
    event.preventDefault()
    var userInput = initialInput.value
    let highScoreList = JSON.parse(localStorage.getItem('high-score-list')) || []
    let userScore = { initial: userInput, score }
    highScoreList.push(userScore)
    localStorage.setItem('high-score-list', JSON.stringify(highScoreList));
    console.log(highScoreList)
    viewHighScores.innerHTML = ''
    showHighScores()
})

function showHighScores() {
    let highScoreList = JSON.parse(localStorage.getItem('high-score-list')) || []
    for (let i = 0; i < highScoreList.length; i++) {
        let score = document.createElement("li")
        score.classList.add('userScore')
        var userName = highScoreList[i].initial + ' '
        var scoreResult = highScoreList[i].score
        score.textContent = userName + scoreResult
        viewHighScores.append(score)
    } console.log(score)
}

function checkAnswer(event) {
    var question = questions[currentQuestion];
    if (event.target.dataset.correct === 'true') {
        score++;
        console.log('correct')
    } else {
        console.log('wrong')
        totalTime -= 10;
        quizTimer.textContent = totalTime;
        answerCheck.textContent = 'Wrong!';
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        setTimeout(() => { showQuestion() }, 1000)
    } else {
        quizOver();
    }
}

function quizOver() {
    quizDiv.removeAttribute('class', 'show')
    quizDiv.classList.add('hide');
    initialScoreDiv.removeAttribute('class', 'hide')
    initialScoreDiv.classList.add('show');
    quizTimer.style.display = 'none'
    showHighScores()
}