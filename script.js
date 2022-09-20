var currentTime = moment();
$("#currentDay").text("Today is " + currentTime.format("dddd"));
$("#currentDate").text(currentTime.format("MMMM Do, YYYY"));

//Functional digital clock in the header
setInterval(() => {
  document.getElementById("headerClock").textContent = `${moment().format(
    "LTS"
  )}`;
}, 1000);

// var hourTabs = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm']
// var thisHour = [9, 10, 11, 12, 13, 14, 15, 16];

for (var i = 9; i < 17; i++) {
    var container = $('#container');
    var newRow = $('<div></div>')

    var hourTag = $('<div></div>', {class: 'hour'});
    hourTag.innerHTML(i);
    hourTag.appendTo(newRow);

    var eventText = $('<textarea></textarea>', {class: 'textarea'});
    eventText.appendTo(newRow);

    var saveButton = $('<div></div>', {class: 'saveBtn'});
    saveButton.appendTo(newRow);



}