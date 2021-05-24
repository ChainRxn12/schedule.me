//assign variables
var timeDisplay = $('#time-display'); //get time display to work in jumbotron






//display time function in jumbotron
function displayTime() {
    var rightNow = moment().format('MMM DD, [at] hh:mm:ss a');
    timeDisplay.text(rightNow);
}
setInterval(displayTime, 1000);