var min = 0;
var sec = 0;
var milisec = 0;
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var miliseconds = document.getElementById("miliseconds");
var interval;

function timer(){
    milisec++
    miliseconds.innerHTML = milisec;
    if(milisec >=100){
        sec++;
        seconds.innerHTML = sec;
        milisec = 0;
    }
    else if (sec >=60){
        min++;
        minutes.innerHTML = min;
        sec = 0;
    }
}

function start(){
    interval = setInterval(timer,10);
    var btn = document.getElementById("starts");
    btn.disabled = true;
}

// function disableBtn{
//     var btn = document.getElementById("minutes")
//     btn.disable = false;
// }

function pause(){
     clearInterval(interval);
     var btn = document.getElementById("starts");
     btn.disabled = false;
   }

    


function reset(){
    min = 0;
    sec = 0;
    milisec = 0;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    miliseconds.innerHTML = milisec;
    clearInterval(interval);
    var btn = document.getElementById("starts");
    btn.disabled = false;

}




// let starts = document.querySelector('#start');
// let stops = document.querySelector('#stop');
// let resets = document.querySelector('#reset');
// let min = 0;
// let sec = 0;
// let mili_sec = 0;
// let min_head = document.querySelector('#min');
// let sec_head = document.querySelector('#sec');
// let mili_head = document.querySelector('#mili_sec');
// let interval;

// function timer() {
//     mili_sec++;
//     mili_head.innerHTML = mili_sec;
//     if (mili_sec >= 100) {
//         sec++;
//         sec_head.innerHTML = sec;
//         mili_sec = 0;
//     } else if (sec >= 60) {
//         min++;
//         min_head.innerHTML = min;
//         sec = 0;
//     }
// };


// starts.addEventListener('click', function() {
//     interval = setInterval(timer, 10);
//     starts.style.pointerEvents = 'none';
//     starts.style.opacity = '.4';
// });

// stops.addEventListener('click', function() {
//     clearInterval(interval);
//     starts.style.pointerEvents = 'auto';
//     starts.style.opacity = '1';
// });

// resets.addEventListener('click', function() {
//     min = 0;
//     sec = 0;
//     mili_sec = 0;
//     mili_head.innerHTML = mili_sec;
//     sec_head.innerHTML = sec;
//     min_head.innerHTML = min;
//     clearInterval(interval);
//     starts.style.pointerEvents = 'auto';
//     starts.style.opacity = '1';
// });