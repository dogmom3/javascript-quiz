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
            {btn1: "Yes",answer:false},
            {btn2: "No",answer:false},
            {btn3: "Hell yeah!",answer:false},
            {btn4: "The worst!",answer:true}
        ]
    },
    {
        question: "What day is it?",
        answers: [
            {btn1: "Today",answer:true},
            {btn2: "Tomorrow",answer:false},
            {btn3: "Yesterday",answer:false},
            {btn4: "Who knows?!",answer:false}
        ]
    },
    {
        question: "When was my last shower?",
        answers: [
            {btn1: "Yesterday",answer:false},
            {btn2: "2 days ago",answer:false},
            {btn3: "4 days ago",answer:false},
            {btn4: "I have no idea",answer:true}
        ]
    }
]

btn1.addEventListener('click');
btn2.addEventListener('click');
btn3.addEventListener('click');
btn4.addEventListener('click');