 var timerElement;
 var hours = 0;
 var mintues = 0;


function increase() {
  getTime()

  formatTime('+')

}

function decrease() {
  getTime()

  formatTime('-')
}

function getTime() {
  var time = timerElement.innerText
  for (var i = 0; i < time.length; i++) {
    if (time[i] === ':') {
      hours = time.slice(0, i);
      mintues = time.slice(i + 1, time.length)
    }
  }
}

function formatTime(action) {
  let intHours = parseInt(hours, 10)
  let intMinutes = parseInt(mintues, 10)
  let numOfMinutes = 0

  for (var i = 0; i < intHours; i++) {
    numOfMinutes += 60;
  }

  numOfMinutes += intMinutes
  if (action === '+') {
    numOfMinutes++
  } else {
    numOfMinutes--
  }

 var h = Math.floor(numOfMinutes / 60);
 var m = numOfMinutes % 60;
 h = h < 10 ? '0' + h : h;
 m = m < 10 ? '0' + m : m;
 timerElement.innerHTML = h + ':' + m;
 console.log(timerElement)
}


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
        timerElement = document.getElementById('set')

    startTimer(fiveMinutes, display);
};
