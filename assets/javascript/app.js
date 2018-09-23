
//global variables
var questionNum = 0;
var wrongAnswer = 0;
var rightAnswer = 0;
var timeleft = 7; 
var displaymessage = {
    correct: "Right!",
    wrong: "Nope, wrong answer...",
   }
var nextQuest;


//create an array of questions with subarray answers and sub of correct answer
var questionArray = [
    {question: "It was originally a Roman City called Lutetia",
    answers: ["Rome", "Monaco", "Paris"],
    correctAnswer: "Paris",
    image: "<img src='assets/images/question0.jpg'>"
}, 
    {question: "This city has the largest metropolitan area in the western hemisphere",
    answers: ["New York","Mexico","Rio de Janeiro"],
    correctAnswer: "Mexico",
    image: "<img src='assets/images/question1.jpg'>"
}, 
    {question: "Called the city of Lions, although there were no lions at the city.",
    answers: ["Singapore","Tokyo","Bangkok"],
    correctAnswer: "Singapore",
    image:"<img src='assets/images/question2.jpg'>"
}, 
    {question: "More than 800 languages are spoken, making it the most linguistically diverse city in the world. ",
    answers: ["New York","London","Beijing"],
    correctAnswer: "New York",
    image:"<img src='assets/images/question3.jpg'>"
},
    {question: "It was originally going to be named Batmania after one of its founding fathers, John Batman. ",
    answers: ["Auckland","Melbourne","Tasmania"],
    correctAnswer: "Melbourne",
    image:"<img src='assets/images/question4.jpg'>"
},
    {question: "The largest city in the world. It's population is around 24 million people.",
    answers: ["Mumbai","Shanghai","Tokyo"],
    correctAnswer: "Shanghai",
    image:"<img src='assets/images/question5.jpg'>"
},
    {question: "The full name? Krung Thep Mahanakhon Amon Rattanakosin Mahinthara. But locally its just called Krungthep or city of angels.",
    answers: ["Bangkok","Kuala Lumpur","Seoul"],
    correctAnswer: "Bangkok",
    image:"<img src='assets/images/question6.jpg'>"
},
    {question: "It's most famous landmark goes by the name The Clock Tower, although it is popularly known otherwise.",
    answers: ["Prague","Dubai ","London"],
    correctAnswer: "London",
    image:"<img src='assets/images/question7.jpg'>"
}];
$(document).ready(function() {
//start game

    $("#results").hide();
    $("#startGame").click(displayQuestion);
    

    function displayQuestion (){
    timer();
    $("#currentQuestion").html(questionArray[questionNum].question);
    $("#answer1").html(questionArray[questionNum].answers[0]);
    $("#answer2").html(questionArray[questionNum].answers[1]);
    $("#answer3").html(questionArray[questionNum].answers[2]);
    $("#startGame").hide();
    $(".clickme").on("click", function answerQuestion(){
    console.log("checking right answer");
    var clicked = $(this).text();
    console.log(clicked);
    
    if(clicked === questionArray[questionNum].correctAnswer){
        rightAnswer++;
        alert(displaymessage.correct);
        nextQuestion();
    }
    else {
        wrongAnswer++;
        alert(displaymessage.wrong);
        nextQuestion();
    }
    })
    }
    
    //answerquestion();
   // }
//select the right answer
//function answerquestion (){
    
//}

//move on to the next question
function nextQuestion (){
    if (questionNum < questionArray.length){
    questionNum ++;
    displayQuestion();
    console.log("im in next question");
    }
    else {
    showresults();
    }
}

function timer (){
timeleft=5;
seconds = setInterval(countdown, 1000);
function countdown (){
    if (timeleft< 1){
        var correctAnswer = questionArray[questionNum].correctAnswer;
        alert ("The correct answer was: " + correctAnswer);
        timeout(); 
    }
    if (timeleft > 0) {
        timeleft--;
    }
    $("#timer").html("Remaining time to answer: " + timeleft);
}
}
//timeout to go onto next question
function timeout (){
if (timeleft === 0){
    wrongAnswer ++;
    setTimeout(nextQuestion,3000)
    //$("#timer").html("Remaining time to answer: " + timeleft);
    }
nextQuestion();
}
//show results function
function showresults (){
    $("#trivia").hide();
    $("#results").show();
    $("right").html(rightAnswer);
    $("wrong").html(wrongAnswer);
   if (rightAnswer < 5){
       $("#last").html("You could have done better, try again!");
       reset();
   }
   else{
       $("#last").html("Way to go!");
       reset();
   }
   }
   
   function reset() {
       questionNum = 0;
       wrongAnswer = 0;
       rightAnswer = 0;
       timeleft = 15;
       $("#results").hide();
       $("#startGame").click(displayQuestion); 
   }
});


