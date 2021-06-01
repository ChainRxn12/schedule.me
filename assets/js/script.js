//assign variables
var timeDisplay = $("#time-display"); //get time display to work in jumbotron
// var scheduleInputElement = $(".schedule-input").attr("id"); //create text/schedule input for user
var currentHour = moment().hour();
var scheduleInput = $(".schedule-input");
var userInput = $(".userText");
var clipboard = $(".saveBtn");

var input= [];

//display time function in jumbotron
function displayTime() {
  var rightNow = moment().format("MMM DD, [at] hh:mm:ss a");
  timeDisplay.text(rightNow);
}
setInterval(displayTime, 1000);

//define rows in 24hr format
const rows = document.getElementsByClassName("row");
var currentTime = parseInt(moment().format("H"));
console.log(currentTime);

//use each loop to add class to each time block according to current time
scheduleInput.each(function () {
    var blockHour = parseInt($(this).attr("id"));
    console.log(blockHour);
  
    if (currentHour > blockHour) {
      $(this).addClass("past");
      //console.log($(this))
    } else if (currentHour === blockHour) {
      $(this).addClass("present");
    } else if (currentHour < blockHour) {
        $(this).addClass ("future");
    }
  });

function renderInput(){
    userInput.innerHTML="";
}

//this function is being called below and runs when page loads
function init() {
    //get stored input from localStorage
    var storedInput = JSON.parse(localStorage.getItem("input"));
    renderInput();
}

function storedInput(){
    localStorage.setItem("input", JSON.stringify(input));
}

//submit item to clipboard
$('.saveBtn').on('click', function(event){
    event.preventDefault();

    let input = $(this).siblings(".userText")[0];
    var userText = input.value;

    if (userText === ""){
        return ('userText');
    }
    storedInput();
    renderInput();
});

//pseudocode//

// //when user types something into textArea and clicks the clipboard
// //what happens? input needs to set
//                 input needs to save to local storage


//console.log(moment().hour());

//$('.schedule-input').attr('id');
//console.log(scheduleInputElement);



// for(var i = 0; i < scheduleInput.length; i++ ){
//     console.log(scheduleInput[i]);
//     console.log(scheduleInput[i].id);
//     var blockHour = scheduleInput[i].id;

// // if currentTime > scheduledTime
// // then what? past class needs to be activated
// //             no future class
// //             no present class

// if(currentHour > blockHour){
//     scheduleInput.addClass("past")
//     //console.log($(this))
// } else if ( currentHour == blockHour){
//     scheduleInput.addClass("present")

// }

// // if currentTime < scheduledTime
// // then what? future class needs to be activated
// //             no past class
// //             no present class

// // if currentTime === scheduledTime
// // then what? present class next to be activated
// //             no future class
// //             no past class

// }

init();