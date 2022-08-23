const clock = document.querySelector("#clock");
function getClock(){
 const date = new Date();
 const hours = String(date.getHours()).padStart(2,"0");
 const minutes=String(date.getMinutes()).padStart(2,"0");
 const seconds=String(date.getSeconds()).padStart(2,"0");
 clock.innerText = `${hours}:${minutes}:${seconds}`;
}




getClock();
setInterval(getClock,1000);








































// setInterval 함수는 두개의 인자를 가진다 첫번째 인자는 함수 두번째 인자는 몇초 간격으로 함수를 실행할것인지 이다.
// ex) setInterval(function,x); javascript 하다가 어려움이 생긴다면 너보다 앞선 개발자들도 다 그걸 겪었을거야 그리고 그걸 바로 해결할 함수를 만들어 놨겠지

