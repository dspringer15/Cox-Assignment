// Creates contents of timeslot dropdown. 
var timePicker = angular.module('myApp', []);
timePicker.controller('myCtrl', function ($scope) {
    $scope.times = [
        {time: "9am-10am", apptName: "", apptNumber: ""},
        { time: "10am-11am", apptNames: "", apptNumbers: ""},
        { time: "11am-12pm", apptNames: "", apptNumbers: ""},
        { time: "12pm-1pm", apptNames: "", apptNumbers: ""},
        { time: "1pm-2pm", apptNames: "", apptNumbers: ""},
        { time: "2pm-3pm", apptNames: "", apptNumbers: ""},
        { time: "3pm-4pm", apptNames: "", apptNumbers: ""},
        { time: "4pm-5pm", apptNames: "", apptNumbers: ""}
    ]
});

// Creates action variables. 
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");
var bookButton = document.querySelector(".bookTrigger");
var timeSelector = document.getElementById(".timeSelector");
var backgroundChange = document.getElementById("timeSelector");
var selectedTime = backgroundChange.options[backgroundChange.selectedIndex].time;



// Creates action functions.   
function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

function Choice() {
    timePicker.apptNames = formName.value;
    timePicker.apptNumbers = formNumber.value;


    if (timePicker.apptNames != "" && timePicker.apptNumbers != "") {
        alert('Thank you ' + timePicker.apptNames + ' for your request. We will call you shortly at ' + timePicker.apptNumbers + ' to confirm your appointment.')
        backgroundChange.style.backgroundColor = "red"
        document.getElementById("apptForm").reset();
    }

    else if (timePicker.apptNames == "" && timePicker.apptNumbers == ""){
        alert('Please make sure your enter both you name and your number.')
    }

    else if (timePicker.apptNames == ""){
        alert('Please enter a valid name.')
    }

    else if (timePicker.apptNumbers == "") {
        alert('Please enter a valid number.')
    }
}


// Action listeners for action functions. 
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
bookButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);