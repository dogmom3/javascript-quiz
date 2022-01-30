var userScore = document.getElementById('user-score');
var quizTimer = document.getElementById('timer');
var questionText = document.getElementById('question-text');
var btnOne = document.getElementById('btn1');
var btnTwo = document.getElementById('btn2');
var btnThree = document.getElementById('btn3');
var quizContainer = document.getElementById('container');

let currentQuestion = 0;
var score = 0;


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

//event listeners for button clicks
btnOne.addEventListener('click', btn1);
btnTwo.addEventListener('click', btn2);
btnThree.addEventListener('click', btn3);

questionText.innerHTML = questions[currentQuestion].question;
   btnOne.setAttribute("data-correct", questionText[currentQuestion].answers[0].answer)
   btnTwo.setAttribute("data-correct", questionText[currentQuestion].answers[1].answer)
   btnThree.setAttribute("data-correct", questionText[currentQuestion].answers[2].answer)


//function to begin the quiz
function beginQuiz(){
    // currentQuestion = 0;
    // questionText.innerHTML = questions[currentQuestion].question;
    // btnOne.innerHTML = questions[currentQuestion].answers[0].option;
    btnOne.onclick = () => {
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score < 3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }
    btnTwo.innerHTML = questions[currentQuestion].answers[0].option;
    btnTwo.onclick = () => {
        let ano=1;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }
    btnThree.innerHTML = questions[currentQuestion].answers[0].option;
    btnThree.onclick = () => {
        let ano =2;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }
}

// function next(){
//     currentQuestion++;
//     if(currentQuestion>=2){

//     }
// }

//function call for beginQuiz
beginQuiz();


// var quizLength = quiz.length

// // event listeners for the answer button clicks
// btn1.addEventListener('click', function (event) {
//     console.log(event.target.dataset.correct)
//     if (event.target.dataset.correct === 'true') {
//         score = score + 1
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
//             currentQuestion++;
//             if (currentQuestion < quizLength) {
//                 beginQuiz();
//             }
//             else {
//                 //write gameover function that asks for conditions
//                 alert('Game over ' + score)
//             }
//         }
//     });
// btn2.addEventListener('click', function (event) {
//     console.log(event.target.dataset.correct)
//     if (event.target.dataset.correct === 'true') {
//         score = score + 1
//         currentQuestion++
//         console.log(currentQuestion, quizLength)
//         //if current question is < questions length then begin quiz
//         if (currentQuestion < quizLength) {
//             beginQuiz();
//         }
//         else {
//             //write gameover function that asks for conditions
//             alert('Game over ' + score)
//         }
//     }
//     else {
//             currentQuestion++;
//             if (currentQuestion < quizLength) {
//                 beginQuiz();
//             }
//             else {
//                 //write gameover function that asks for conditions
//                 alert('Game over ' + score)
//             }
//         }
// });
// btn3.addEventListener('click', function (event) {
//     console.log(event.target.dataset.correct)
//     if (event.target.dataset.correct === 'true') {
//         score = score + 1
//         currentQuestion++
//         console.log(currentQuestion, quizLength)
//         //if current question is < questions length then begin quiz
//         if (currentQuestion < quizLength) {
//             beginQuiz();
//         }
//         else {
//             //write gameover function that asks for conditions
//             alert('Game over')
//         }
//     }
//     else {
//             currentQuestion++;
//             if (currentQuestion < quizLength) {
//                 beginQuiz();
//             }
//             else {
//                 //write gameover function that asks for conditions
//                 alert('Game over')
//             }
//         }
//     });


//     questionText.innerHTML = questions[currentQuestion].question;
//     btn1.setAttribute("data-correct", question[currentQuestion].answers[0].answer)
//     btn2.setAttribute("data-correct", question[currentQuestion].answers[1].answer)
//     btn3.setAttribute("data-correct", question[currentQuestion].answers[2].answer)
// }

//timer function


//show score function
// function showScore() {
//     const answerContainers = quizContainer.querySelectorAll('.answers');
//     let numCorrect = 0;
// }

// function showScore() {
//     var intitials = getDocumentById('score');
// }
