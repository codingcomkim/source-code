
const API_KEY = "a5d9d07eb8a3dcf722e8b0cf17ba3182";
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response)=> response.json()) 
    .then((data)=> {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


















/* <geolocation함수>
    우리가 이 함수를 사용하면 이 함수는 위치 추적이 성공했을때에 함수의 인자에다가 자신의 객체에 대한 정보를 전달 
    /* 위에서는 geolocation의object date=>position */ 
// /* <fetch>
//     fetch 함수를 사용하면 js가 url를 웹으로 가져온다
