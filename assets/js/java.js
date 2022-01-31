var startBtn = document.getElementById('start-btn')
var userScore = document.getElementById('user-score');
var quizTimer = document.getElementById('timer');
var quizContainer = document.getElementById('container');
var questionText = document.getElementById('question');
var answerText = document.getElementsByClassName('answers');
var answerCheck = document.getElementById('answer-check');
var timeLeft = document.getElementById('time-left');

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
        question: "What does MVP stand for in reference to Javascript?",
        answers: [
            { option: "Maximum View Port", answer: false },
            { option: "Minimal Viable Product", answer: true },
            { option: "Most Visited Page", answer: false }
        ]
    }
];

//function to display questions:
function showQuestion() {
    var question = questions[currentQuestion];
    questionText.innerText = question.question;
    answerText.innerHTML = '';
    question.answers.forEach((answer) => {
        var button = document.createElement('button');
        button.innerText = answer.option;
        button.classList.add('btn');
        button.dataset.correct = answer.answer;
        button.addEventListener('click', checkAnswer);
        answerText.appenChild(button);
    });
}

function checkAnswer(event) {
    var question = questions[currentQuestion];
    if (event.target.dataset.correct ==='true') {
        score++;
    } else {
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        answerCheck.textContent =
            'Wrong! The correct answer was: ' + questions[currentQuestion].answers;
    }
     currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        gameOver();
    }
}

function quizOver(){
    alert('Quiz Over!')
    alert('Score is ' + score);
}

//function call to display the questions
showQuestion();


//function call to begin the quiz
startQuiz();
   



    
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