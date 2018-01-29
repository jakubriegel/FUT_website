// Set the date we're counting down to
var countDownDate = new Date("Apr 14 2018 15:37:25" ).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  //document.getElementById("timer").innerHTML = days + "dni " + hours + "godzin "
  //+ minutes + "minut " + seconds + "sekund ";

  document.getElementById("timer").innerHTML ="<ul> <li>" + days + "</li><li> " + hours + "</li><li> "
  + minutes + "</li><li> " + seconds + "</li> ";

  document.getElementById("timerText").innerHTML = "dni " + "godzin "
 + "minut " + "sekund ";

  
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Start";
  }
}, 1000);