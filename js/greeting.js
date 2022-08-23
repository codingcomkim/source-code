const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting();
}
function paintGreeting() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername == null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit); 
} else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting();
}



































/* <조건문 매커니즘>
    /* 조건문은 실시간으로 발동하지 않는다 예를들어 if절내용이 실행되고 else의 조건 또한 만족한다해서 else절을 실행시키는게 아니라 새로고침한후에 어떤절이 조건에 만족했는지에 따라 실행되는 절이 달라진다 */
// // // // 객체란 객체의 속성을 담을 수 있는 하나의 통을 만드는것
// // // // 따라서 새로운 속성을 업데이트하거나 기존의 것을 변경할 수 있다
// // // // function은 우리가 반복되는 작업을 할때 매우 유용
// // // // 한마디로 객체는 배터리이고 함수는 변압기이다
// // // 서 그 다음 코드는 작동하지 않는다// return함으로써 function을 통해 얻은 결과값을 다양한 곳에 사용할수 있다
// // // // return하면 function내에 그 다음 코드는 무시됨
// // // if의 조건은 무조건 false아님 true로 판별이 가능해야됨
// // // 변환하기는 너가 코드 이해 잘 안될때 큰 도움이 된다 예를 들어 let age=15; console.log(age)==console.log(15);
// // 객체의 고난도 개념 이해하기: 예를들어 const title=document.getElementById("title");이고 id 값이 title은 html의 elemet 내용은 <h1 id="title">hi</hi>이야
// // 그리고 js에서 title.innerText="hello friend"라고 하면 우리가 위에서 title이란 변수를 선언한다는 것은 곧 title이라는 객체를 만든다는 것과 같고 여기서 title의 innertext라는 속성은 우리가 정의하지 않았지만 이미 브라우저에 내장된 title이라는 이름의 객체의 속성이다.
// html의 element를 가져오는 가장 좋은 방법은 document객체의 querySelector속성을 이용하는 것이다
// 객체가 곧 속성이 될수 있다 예를 들어 title.style.color에서 style은 title이라는 객체의 속성이지만 동시에 color라는 속성을 가지고 있는 객체이기도 하다
// 이벤트 함수: test.addEventListener("event",function(envet후에 일어날 일을 적어놓은 함수)); 즉 addEventListener라는 함수의 첫번째 인수는 이벤트가 실행되고 그다음 일어나야 하는 것의 함수가 호출됨.
// // 예시 function test (){
// //     console.log("that was clicked");
// // }
// // title.addEventListener("event",test);
// body 나 title,head는 document 에서 굳이 querySelector나 다른것을 이용하지 않고도 바로 가지고 올수 있음 document.body
// ; 조건문을 사용하는 때 A의 상황에서는 a이고 B의 상황에서는 b이고 싶을 때 사용
// classList라는 함수는 javascript가 class가 2개 이상있을 때 하나만을 남겨두는 오점을 극복하기 위해 className을 변경하지 않고 className의 포함여부만을 통해 className를 추가하고 제거한다
// form태그는 input text태그에 있는 내용을 브라우저에 전달하고 동시에 브라우저를 새로고침하게 됨 근데 여기다 preventDefault라는 함수를 실행시킴으로써 브라우저의 기본동작을 막을 수 있음 그리고 함수의 첫인자는 이벤트에 대한 기본적인 정보들을 담고 있어서 첫 인자.preventDefault 함수를 호출하면 이 이벤트의 기본적인 정보가 담긴 첫인자의 실행을 막아서 브라우저 새로고침 현상을 막을 수 있음.