// Set the date we're counting down to
var countDownDate = new Date("Apr 12 2018 18:00:00" ).getTime();

var daysDiv;
var hoursDiv;
var minutesDiv;
var secondsDiv;

window.onload = function(){
  
  // Update the count down every 1 second
  var x = setInterval(function() {

    daysDiv = document.getElementById('days');
  hoursDiv = document.getElementById('hours');
  minutesDiv = document.getElementById('minutes');
  secondsDiv = document.getElementById('seconds');

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysDiv.innerHTML = days;
    hoursDiv.innerHTML = hours;
    minutesDiv.innerHTML = minutes;
    secondsDiv.innerHTML = seconds;
    
    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "Zapraszamy!";
    }
  }, 1000);
}