var userScore = document.getElementById('score');
var timeCount = document.getElementById('timer');
var questionText = document.getElementById('question');
var answer1 = document.getElementById('btn1');
var answer2 = document.getElementById('btn2');
var answer3 = document.getElementById('btn3');
var answer4 = document.getElementById('btn4');
var checkAnswer = document.getElementById('right-wrong');

let currentQuestion = 0;
var score = 0;

let questions = [
    {
        question: "Is Javascript difficult to learn?",
        answers: [
            {option:"Yes",answer:false},
            {option:"No",answer:false},
            {option:"Hell yeah!",answer:false},
            {option:"The worst!",answer:true}
        ]
    },
    {
        question: "What day is it?",
        answers: [
            {option: "Today",answer:false},
            {option: "Tomorrow",answer:false},
            {option: "Yesterday",answer:false},
            {option: "Who knows?!",answer:true}
        ]
    },
    {
        question: "When was my last shower?",
        answers: [
            {option: "Yesterday",answer:false},
            {option: "2 days ago",answer:false},
            {option: "4 days ago",answer:false},
            {option: "I have no idea",answer:true}
        ]
    }
]
//not sure if this is correct
btn1.addEventListener('click',false);
btn2.addEventListener('click',false);
btn3.addEventListener('click',false);
btn4.addEventListener('click',true);

function beginQuiz(){
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;
    
    
}