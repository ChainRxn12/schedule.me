//assign variables
var timeDisplay = $("#time-display"); //get time display to work in jumbotron
// var scheduleInputElement = $(".schedule-input").attr("id"); //create text/schedule input for user
var currentHour = moment().hour();
var scheduleInput = $(".schedule-input");


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
  

//loads when page is available
// $(document).ready(function() {
//    // colorChange();
//     textOutput();
// });

//clipboard/savebtn functionality
// $('.saveBtn').click(function(){
//     scheduleText = $(this).sibling('.schedule-input').val();
//     console.log(scheduleText);
//     localStorage.setItem(scheduleTime, JSON.stringify(scheduleText));

//     textOutput();
// });



//pseudocode//

//need a function for color change colorChange()


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

