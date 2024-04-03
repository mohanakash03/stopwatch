// const timeDisplay = document.querySelector("#timeDisplay");
// const startBtn = document.querySelector("#startBtn");
// const pauseBtn = document.querySelector("#pauseBtn");
// const resetBtn = document.querySelector("#resetBtn");
// const lapBtn=document.querySelector("#lapBtn");

// let startTime = 0;
// let elapsedTime = 0;
// let currentTime = 0;
// let paused = true;
// let intervalid;
// let hrs = 0;
// let mins = 0;
// let secs = 0;

// startBtn.addEventListener("click", () => {
//     if(paused){
//         paused= false;
//         startTime = Date.now() - elapsedTime;
//         intervalid = setInterval(updateTime, 75);
//     }
// });
// pauseBtn.addEventListener("click", () => {
//     if(!paused){
//         paused = true;
//         elapsedTime = Date.now() - startTime;
//         clearInterval(intervalid);
//     }
// });
// resetBtn.addEventListener("click", () => {
//     paused = true;
//     clearInterval(intervalid);
//     startTime = 0;
//     elapsedTime = 0;
//     currentTime = 0;
//     hrs = 0;
//     mins = 0;
//     secs = 0;
//     timeDisplay.textContent = "00:00:00";
// });

// function updateTime(){
//     elapsedTime = Date.now() - startTime;

//     secs = Math.floor(elapsedTime / 1000 % 60);
//     mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
//     hrs = Math.floor((elapsedTime / (1000 * 60 *60))% 60);

    

//     secs = pad(secs);
//     mins = pad(mins);
//     hrs = pad(hrs);

//     timeDisplay.textContent = `${hrs}:${mins}:${secs}` ;


//     function pad(unit){
//         return(("0") + unit).length > 2 ? unit : "0" + unit;
//     }

//     const lapss=document.getElementsByClassName("lapBtn")[0];
//     let lapitems=0;

//     const lap=()=>{
//                 const li=document.createElement("li");
//                 const number=document.createElement("span");
//                 const timestamp=document.createElement("span");

//                 li.setAttribute("class","lap-items");
//                 number.setAttribute("class","number");
//                 timestamp.setAttribute("class","time-stamp");
                
//                 number.innerText=`#${++lapitems}`;
//                 timestamp.innerHTML=`${hrs}:${min}:${sec}`;

//                 li.append(number,timestamp);
//                 lapss.append(li);

//                 clearButton.classList.remove("display-none");
//             }
//             const ClearAll=()=>{
//                 lapss.innerHTML='';
//                 lapss.append(clearButton);
//                 clearButton.classList.add("display-none");
//             }

//             lapBtn.addEventListener("click",lap);
//             clearButton.addEventListener("click",ClearAll);
        

// }

const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");
const lapBtn = document.querySelector("#lapBtn");
const lapsContainer = document.querySelector("#lapsContainer");
const lapClearBtn = document.querySelector("#lapClearBtn");

let startTime = 0;
let elapsedTime = 0;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

function updateTime() {
    elapsedTime = Date.now() - startTime;

    secs = Math.floor(elapsedTime / 1000 % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    timeDisplay.textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function pad(unit) {
    return unit < 10 ? "0" + unit : unit;
}

startBtn.addEventListener("click", () => {
    if (!intervalId) {
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 75);
    }
});

pauseBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
});

resetBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    elapsedTime = 0;
    timeDisplay.textContent = "00:00:00"; // Reset display to "00:00:00"
    clearLaps();
});

lapBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timestamp = document.createElement("span");

    number.classList.add("number");
    timestamp.classList.add("time-stamp");

    number.innerText = `#${lapsContainer.children.length + 1}`;
    timestamp.innerHTML = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;

    li.appendChild(number);
    li.appendChild(timestamp);
    lapsContainer.appendChild(li);
});

lapClearBtn.addEventListener("click", () => {
    clearLaps();
});

function clearLaps() {
    lapsContainer.innerHTML = '';
}
