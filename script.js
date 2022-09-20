var currentTime = moment();
$("#currentDay").text("Today is " + currentTime.format("dddd"));
$("#currentDate").text(currentTime.format("MMMM Do, YYYY"));

//Functional digital clock in the header
setInterval(() => {
  document.getElementById("headerClock").textContent = `${moment().format(
    "LTS"
  )}`;
}, 1000);



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

    var eventText = $('<textarea>', {class: 'textarea col-10'});
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


//ok, so now the hard part. get all this to save to local.
