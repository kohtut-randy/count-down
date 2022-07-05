const countMin = document.querySelector("#countMin");
const countSec = document.querySelector("#countSec");

let count = 180;
let timerId =0;
const min =Math.floor(count/60);
const sec = count %60;
countMin.innerText= min;
countSec.innerText =sec;
countMin.innerText = min<10 ?   `0${min}`:min;
countSec.innerText = sec <10 ?  `0${sec}`:sec;
function countingStart(){
  if (timerId !== 0) return;
  timerId = setInterval(function(){
    if(count > 0){
      count --;
    }
    updateText(count);
  },1000);
  console.log("timer",timerId)
}
function countingStop(){
  countSec.innerText = "00";
  clearInterval(timerId);
  timerId=0;
  count=180;
  updateText(count);
}
function updateText(timer){
  const min =Math.floor(timer/60);
  const sec = timer %60;
  countMin.innerText = min<10 ?   `0${min}`:min;
  countSec.innerText = sec <10 ?  `0${sec}`:sec;
  
}