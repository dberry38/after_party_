var currentTime = moment();
$("#currentDay").text("Today is " + currentTime.format("dddd"));
$("#currentDate").text(currentTime.format("MMMM Do, YYYY"));

//Functional digital clock in the header
setInterval(() => {
  document.getElementById("headerClock").textContent = `${moment().format(
    "LTS"
  )}`;
}, 1000);


//This for loop will generate the HTML elements
var container = $('#container');

for (var i = 9; i < 17; i++) {
    var newRow = $('<div>', {class: 'row'});

    var hourTag = $('<div>', {class: 'hour col-1'});
    newRow.append(hourTag);

    //this little if statement here makes the hours display in regular, not military time, with correct 'am' or 'pm' designation.
    if (i<12) {
      hourTag.text(i + ' am')
    } else if (i==12) {
      hourTag.text(i + ' pm')
    } else {
      hourTag.text((i-12) + ' pm')
    };

    var eventText = $('<textarea>', {class: 'textarea col-10', id:i});
    newRow.append(eventText);

    var saveButton = $('<button>', {class: 'saveBtn col-1'});
    var icon = $('<i>', {class: 'fas fa-save'});

    icon.appendTo(saveButton);
    saveButton.appendTo(newRow);

    newRow.appendTo(container);
    //and with that, we have our dynamic HTML working, for the most part.

    //lets see if we can make a loop to assign the past, present, future attributes
    console.log(currentTime.format('H'));
    if (i < currentTime.format('H')) {
      eventText.addClass('past')
    } else if (i == currentTime.format('H')) {
      eventText.addClass('present')
    } else {
      eventText.addClass('future')
    };



};


//--------BIG THANKS to Dominick Simone from AskBCS for helping me figure out how everything goes together at the end here

var generatedButtons = document.getElementsByClassName("saveBtn");

function saveNewText() {
  var textToSave = $(this).siblings("textarea").val();
  var textId = $(this).siblings("textarea").attr("id");
  localStorage.setItem("hour-" + textId, JSON.stringify(textToSave));
};

for (var i = 0; i < generatedButtons.length; i++) {
  generatedButtons[i].addEventListener("click", saveNewText)
};


for (i = 9; i < generatedButtons.length + 9; i++) {
  var currentText = JSON.parse(localStorage.getItem("hour-" + i));
  $('#' + i).text(currentText)
};