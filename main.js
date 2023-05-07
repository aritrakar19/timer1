import './style.css'
let startingSecs = 0;
let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById("displayTime")
let timer;
function myFunction() {
  let person = prompt("Please enter your time");
  if (person != null) {
    startingSecs = person * 60
    count()
  }
}
function showTime() {
    hours = Math.floor(startingSecs/3600)
    minutes = Math.floor((startingSecs%3600)/60)
    seconds = (startingSecs % 3600) % 60
    displayTime.innerText = hours + '.' + minutes + '.' + seconds 
}
function count() {
    showTime()
    timer = setInterval(() => {
        startingSecs--;
        showTime()
        if(startingSecs == 0) {
            clearInterval(timer);
            var mp3_url = 'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3';
            (new Audio(mp3_url)).play()
        }
    }, 1000)
}

start.onclick = ()=> {
    myFunction()
}
pause.onclick = ()=> {
    clearInterval(timer);
}
reset.onclick = ()=> {
    seconds =0
     minutes =0
     hours = 0
    displayTime.innerText = hours + '.' + minutes + '.' + seconds 
    clearInterval(timer);
}