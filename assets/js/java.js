var startBtn = document.getElementById('start-btn')
var userScore = document.getElementById('user-score');
var viewHighScores = document.getElementById('view-high-scores');
var quizTimer = document.getElementById('timer');
var containerDiv = document.getElementById('container');
var questionText = document.getElementById('question');
var answerText = document.getElementById('answers');
var answerCheck = document.getElementById('answer-check');
var timeLeft = document.getElementById('time-left');
var quizDiv = document.getElementById('quiz');
var initialDiv = document.getElementById('initials');

let currentQuestion = 0;
var score = 0;
let totalTime = 75;

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

function checkAnswer(event) {
    var question = questions[currentQuestion];
    if (event.target.dataset.correct ==='true') {
        score++;
        console.log('correct')
    } else {
        console.log('wrong')
       //  totalTime -= 10;
        // timeLeft.textContent = totalTime;
      //  answerCheck.textContent ='Wrong!';
    }
     currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        quizOver();
    }
}

function quizOver(){
    // dont want this alert. replace with score showing on final screen.
    alert('Score is ' + score);
    quizDiv.removeAttribute('class', 'show')
    quizDiv.classList.add('hide');
    initialDiv.removeAttribute('class', 'hide')
    initialDiv.classList.add('show');
    viewHighScores.removeAttribute('class', 'hide')
    viewHighScores.classList.add('show');
}
//function call to display the questions
// showQuestion();


//function call to begin the quiz
// startQuiz();
   



    
//     answerText.onclick = () => {
//         let ano = 0;
//         if (questions[currentQuestion].answers[ano].answer) {
//             if (score < 3) {
//                 score++;
//             }
//         }
//         userScore.innerHTML = score;
//         if (currentQuestion < 2) {
//             next();
//         }
//     };
// }


// function showAnswers(answers) {
//     option.answers.foreach(option =>{

//     })
// }




// questionText.innerHTML = questions[currentQuestion].question;
// answerText.setAttribute("data-correct", questionText[currentQuestion].answers[0].answer)

// // event listeners for the answer button clicks
// answerText.addEventListener('click', function (event) {
//     console.log(event.target.dataset.correct)
//     if (event.target.dataset.correct === 'true') {
//         userScore = score + 1
//         currentQuestion++
//         console.log(currentQuestion, quizLength)
//         //if current question is < questions length then begin quiz
//         if (currentQuestion < quizLength) {
//             beginQuiz();
//         }
//         else {
//             //write gameover function that asks for conditions
//             alert('Game over! Your score is ' + score)
//         }
//     }
//     else {
//         currentQuestion++;
//         if (currentQuestion < quizLength) {
//             beginQuiz();
//         }
//         else {
//             //write gameover function that asks for conditions
//             alert('Game over ' + score)
//         }
//     }
// });