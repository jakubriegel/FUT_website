// Set the date we're counting down to
var countDownDate;
var distance;

var daysDiv;
var hoursDiv;
var minutesDiv;
var secondsDiv;

function startTimer(){
  countDownDate = new Date("Apr 12 2018 18:00:00" ).getTime();
  
  daysDiv = document.getElementById('days');
  hoursDiv = document.getElementById('hours');
  minutesDiv = document.getElementById('minutes');
  secondsDiv = document.getElementById('seconds');

  var now = new Date().getTime();
  distance = countDownDate - now;

  var timer = setInterval(function() {

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysDiv.innerHTML = days;
    hoursDiv.innerHTML = hours;
    minutesDiv.innerHTML = minutes;
    secondsDiv.innerHTML = seconds;
    
    // case coutdown has finished
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "Zapraszamy!";
    }

    distance -= 1000;

  }, 1000);
}