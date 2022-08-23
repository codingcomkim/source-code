const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
let toDos = [];
function toDoFormSubmit(event){
    event.preventDefault();
    const newtoDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
    text: newtoDo,
    id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
}

function paintToDo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    const button = document.createElement("button");
    button.innerText = "delete";
    button.addEventListener("click",deleteToDo);
    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
}
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo)=>toDo.id!==parseInt(li.id));
    saveToDo();
}
function saveToDo(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
toDoForm.addEventListener("submit",toDoFormSubmit);
const savedToDo = localStorage.getItem(TODOS_KEY);
if(savedToDo!==null){
    const parsedToDo = JSON.parse(savedToDo);
    toDos = parsedToDo;
    parsedToDo.forEach(paintToDo);
}


































/* <처음>
이벤트 감지 후 handleToDosubmit함수 실행 -> 비어있는 todos 배열에 newToDoObj 가 push됨 -> paintToDo함수와 saveToDos함수가 실행됨 -> paintToDo함수가 실행되어 li,span,button이 생성되고 화면에 출력됨 -> saveToDos함수가 실행되어 toDoList의 value가 localStorage에 저장됨
<데이터타입이 localStorage에 저장후>
    todos가 localStorage에 저장됨-> 조건문이 실행됨 ->저장되어있는 문자열형식의 데이터를 배열과 같은 객체로 바꿈 -> foreach함수를 통해 배열의 각 아이템들이 painttodo함수를 통해 화면에 출력됨 
//  < todos=parsedtodos를 써줘야 하는이유>
//  웹을 새로고침하면 todos는 빈 배열이 되기때문에 이전에 있는 todo들은 사라지고 새로운 todo만을 저장하게 된다. 이문제를 해결하기 위해서는 조건문을 이용해 todos=savedtodos라는 것을 써줘서 이전것과 새것의 데이터가 일치하도록 해줘야 한다.   */
// //  <조건문이 필요한이유>
// //  localStorage에 데이터가 저장되어 있다고 해도 웹 페이지를 새로고침하면 화면에서 todo-list가 사라지기 때문에 조건문을 사용해서 만약 데이터베이스에 데이터가 저장되어있다면 문자열로 데이터베이스에 저장된 데이터를 객체로 바꿔서 사용하기 위해 json.parse를 이용해 객체로 바꾸고 각 아이템 마다 foreach함수를 이용해 화면에 다시 출력하는 것이다.
// <deleteToDo 함수에서 filter함수를 쓰고 다시 saveToDos함수 호출을 해야하는 이유>
//     /* 우리가 toDos함수를 clikc이벤트가 발생한 li를 제외하는 함수로 변경하는 코드를 짰지만 그거를 다시 saveToDos함수 호출을 통해 데이터베이스에 적용시켜줘야 비로소 우리가 원하는 기능이 구현된다 */}
//     / // foreach는 배열의 각 item에대해 함수를 실행시킴
// // JSON함수를 이용해 어떤 데이터타입이든 문자열로 변환시킬수 있음
// // 그리고 JSON.parse함수를 이용해 문자열이 아닌 것들 머 예를 들어 배열을 객체로 만들 수 있음
// // 그러나 이 객체는 배열처럼 인덱스에 접근할수있음 // // 그리고 배열의 각 아이템 별로 함수를 실행 시킬수 있음
// // localStorage은 문자열로 밖에 저장이 안되서 저장할때는 json.stringify를 통해 배열을 문자열로 바꿔서 저장해야된다. 그리고 다시 json.parse함수를 통해 배열로 다시 바꿔서 인덱스를 통해 각 아이템에 접근할수 있다.