function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const start = document.querySelector("button[data-start]");
  const stop = document.querySelector("button[data-stop]");
  const body = document.querySelector("body");

  stop.addEventListener("click", onClickButtonStop);
  start.addEventListener("click",onClickButtonStart);

  stop.disabled = true
  let timerId = 0;

  function onClickButtonStart(){ 
    timerId = setInterval(() => body.style.backgroundColor = getRandomHexColor(), 1000)
    start.disabled = true
    stop.disabled = false
    return timerId
  };
  
  
function onClickButtonStop (){
    start.disabled = false
    stop.disabled = true
    clearInterval(timerId)
}
  

