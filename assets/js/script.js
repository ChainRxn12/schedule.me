//assign variables
var timeDisplay = $("#time-display"); //get time display to work in jumbotron
var currentHour = moment().hour();
var scheduleInput = $(".schedule-input");


//display time function in jumbotron
function displayTime() {
  var rightNow = moment().format("MMM DD, [at] hh:mm:ss a");
  timeDisplay.text(rightNow);
}
setInterval(displayTime, 1000);

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

//ensures DOM is ready to execute
$(document).ready(function(){
    renderInput();
});

//save and clear buttons + event listener + functions
var userInput;
var eventTime;

$(".saveBtn").click(function() {
    userInput = $(this).siblings(".userText").val();
    console.log(userInput);
    eventTime = $(this).siblings(".hour").text();
    console.log(eventTime);
    localStorage.setItem(eventTime, JSON.stringify(userInput));

    
    renderInput();
});

$(".clearBtn").click(function() {
    userInput = $(this).siblings(".userText").val("");
    userInput = $(this).siblings(".userText").val();
    eventTime = $(this).siblings(".hour").text();
    console.log(eventTime);
    localStorage.setItem(eventTime, JSON.stringify(userInput));

    
    renderInput();
});

function renderInput() {
    var textBox7 = JSON.parse(localStorage.getItem("07am"));
    $("#7").val("");
    $("#7").val(textBox7);

    var textBox8 = JSON.parse(localStorage.getItem("08am"));
    $("#8").val("");
    $("#8").val(textBox8);

    var textBox9 = JSON.parse(localStorage.getItem("09am"));
    $("#9").val("");
    $("#9").val(textBox9);

    var textBox10 = JSON.parse(localStorage.getItem("10am"));
    $("#10").val("");
    $("#10").val(textBox10);

    var textBox11 = JSON.parse(localStorage.getItem("11am"));
    $("#11").val("");
    $("#11").val(textBox11);

    var textBox12 = JSON.parse(localStorage.getItem("12pm"));
    $("#12").val("");
    $("#12").val(textBox12);

    var textBox13 = JSON.parse(localStorage.getItem("01pm"));
    $("#13").val("");
    $("#13").val(textBox13);

    var textBox14 = JSON.parse(localStorage.getItem("02pm"));
    $("#14").val("");
    $("#14").val(textBox14);

    var textBox15 = JSON.parse(localStorage.getItem("03pm"));
    $("#15").val("");
    $("#15").val(textBox15);

    var textBox16 = JSON.parse(localStorage.getItem("04pm"));
    $("#16").val("");
    $("#16").val(textBox16);

    var textBox17 = JSON.parse(localStorage.getItem("05pm"));
    $("#17").val("");
    $("#17").val(textBox17);

    var textBox18 = JSON.parse(localStorage.getItem("06pm"));
    $("#18").val("");
    $("#18").val(textBox18);

    var textBox19 = JSON.parse(localStorage.getItem("07pm"));
    $("#19").val("");
    $("#19").val(textBox19);
};




// function storedInput(){

//     var storedInput = $('.userText')[0];
//     localStorage.getItem("input", storedInput);

//     renderInput();
// }

// //submit item to clipboard
// $('.saveBtn').on('click', function(event){
//     event.preventDefault();

//     let input = $(this).siblings(".userText")[0];
//     var userText = input.value;

//     if (userText === ""){
//         return ('userText');
//     }
//      storedInput();
//      renderInput();

//     localStorage.setItem('input', userText);
// });

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

