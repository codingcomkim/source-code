const containerImg = ["1.jpg","2.jpg","3.jpg"];
const changeImg = containerImg[Math.floor(Math.random()*containerImg.length)];
const bgImg = document.createElement("img");
document.body.appendChild(bgImg);
bgImg.src = `img/${changeImg}`;
bgImg.classList.add("bgImg")