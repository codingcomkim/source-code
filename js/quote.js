const quotes = [
   {
    quote:"The road to success and the road to failure are almost exactly the same.",
    author:"- Colin R. Davis",
   },
   {
    quote:"It is better to fail in originality than to succeed in imitation.",
    author:"- Herman",
   },
   {
    quote:"Success is walking from failure to failure with no loss of enthusiasm.",
    author:" - Winston",
   },
   {
    quote:"All progress takes place outside the comfort zone.",
    author:"- Michael John Bobak",
   },
   {
    quote:"Success usually comes to those who are too busy to be looking for it.",
    author:"- Henry David",
   },
   {
    quote:"The way to get started is to quit talking and begin doing.",
    author:"- Walt Disney",
   },
];
const chQuotes = quotes[Math.floor(Math.random()*quotes.length)];
const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
quote.innerText = chQuotes.quote;
author.innerText= chQuotes.author;





























// Math.random()의 문법적인 뜻은 Math라는 객체 안에 random()이라는 함수가 존재
// const Math = {
//     value:Math;
//     functino random{
//         asljfklasfjaklsfjl;
// //     }
// // }
// 배열에서 오브젝끼리를 구분하기 위해서 콤마를 써야한다 ex) const array = [
//     {
//         author:aslfa,
//         quote:adfasdf,
//     },
//     {
//         appl:adfafa,
//         banna:asdfasdf,
//     },
// ]