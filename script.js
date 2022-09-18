var currentTime = moment();
$("#currentDay").text("Today is " + currentTime.format("dddd"));
$("#currentDate").text(currentTime.format("MMMM Do, YYYY"));

//Functional digital clock in the header
setInterval(() => {
  document.getElementById("headerClock").textContent = `${moment().format(
    "LTS"
  )}`;
}, 1000);

var dailyHours = 8;

var textEdit = document.getElementById("addEventText");
var saveButton = document.getElementById("saveButt1");

function saveLastEvent() {
  var saveNewEvent = textEdit.value;
  localStorage.setItem("saveNewEvent", JSON.stringify(saveNewEvent));
}

function currentEvent() {
  var currentEventText = JSON.parse(localStorage.getItem("saveNewEvent"));
  if (currentEventText !== null) {
    textEdit.innerHTML = currentEventText;
  } else {
    return;
  }
}

saveButton.addEventListener("click", function (event) {
  event.preventDefault();
  saveLastEvent();
  currentEvent();
});

function init() {
  currentEvent();
}

init();
