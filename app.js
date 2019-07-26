//global variables (need to keep track of correct answers, incorrect answers, and a counter for time)
var right = 0;
var wrong = 0;
var counter = 30;
var timer;

//function that handles countdown
function countdown() {
    //decrement the counter by one
    counter--;
    //update the time remaining text with jquery
    $("#counter-text").text("time remaing; " + counter);
    //if counter gets to zero display times up
    if(counter = 0) {
         //alert to user that time is up
        alert("Time UP!");
    
      //stop the timer
      clearInterval(timer);
      //invoke the checkAnswer function
      checkAnswers();
    }  
    
  }
  
  //function that starts timer
  function start() {
    //start the timer
    timer = setInterval(countdown, 1000);
    //remove the start button from the screen
    $("#start").hide();
    //dynamically create the done button
    $("#done").append("<button id='done-button'>Done</button>")
    
  }
  
  //function to check answers
  function checkAnswers() {
    //store all of the user's answers in a variable
    var inputs = $("#questions-area").children("input:checked");
    //loop through each of users answers and compare to the correct answer
    for (var i = 0; i < inputs.length; i++) {
      //if user answer equals correct answer
     if($(input[i]).val() === "t") {
        //increase correct count by one
        right++;
     //else
     }else {
     //increase incorrect count by one
      wrong++;
     }
    }
    //invoke showResults function
    showResults();
  }
  
  //function to show results
  function showResults() {
    //stop the timer
   clearInterval(timer);
    //remove all of the questions from the screen
    $("#questions-area").remove();
    //create html that shows the results
    $("#results").html("<h2>Results:</h2>");
    $("#results").append("<h3>Correct Answers: " + right + "</h3>");
     $("#results").append("<h3>Wrong Answers: " + wrong + "</h3>");
  }
  
  //On Click to start game/timer
  $(document).on("click", "#start", function() {
    //Invoke the start function
  start();
   
  });
  
  //On Click to finish and check answers
  $(document).on("click", "#done", function() {
    //Invoke the checkAnswers function
    checkAnswers();
   
  });
  
   