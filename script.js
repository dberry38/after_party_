var currentTime = moment();
$("#currentDay").text("Today is " + currentTime.format("MMM Do, YYYY"));

setInterval(() => {
    document.getElementById("headerClock").textContent = `${moment().format("LTS")}`;
}, 1000);
