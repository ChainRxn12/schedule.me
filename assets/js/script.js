//assign variables
var timeDisplay = $('#time-display'); //get time display to work in jumbotron
var scheduleInputElement = $('#schedule-input');//create text/schedule input for user

var scheduledTime;

//display time function in jumbotron
function displayTime() {
    var rightNow = moment().format('MMM DD, [at] hh:mm:ss a');
    timeDisplay.text(rightNow);
}
setInterval(displayTime, 1000);

//define rows in 24hr format
const rows = document.getElementsByClassName("row");
let currentTime = parseInt(moment().format('H'));
console.log(currentTime);


            //pseudocode//

// if currentTime > scheduledTime
// then what? past class needs to be activated
//             no future class
//             no present class

// if currentTime < scheduledTime
// then what? future class needs to be activated
//             no past class
//             no present class

// if currentTime === scheduledTime
// then what? present class next to be activated
//             no future class
//             no past class

//need a function for color change colorChange()

//save the users schedule input
