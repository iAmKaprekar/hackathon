// Listen for user inputs of one sort or another
// Have an array? of elements that we want to interact with on the page

console.log("Hi");

let images;

// attribute[Math.floor(Math.random() * attribute.length)] <- Access random message
const attribute = ['Quokka says: I hope you\'re having a wonderful day!', 
"Quokka says: Don't click me",
"Quokka reminds: Remember to drink water",
"Quokka asks: Have you drinked water today?",
"Quokka says: Close your eyes, now.",
"Quokka asks: How's weather today?"];

//const quokkaSound = document.createElement('audio');
const quokkaSound = new Audio(chrome.runtime.getURL("resources/quokka.mp3")); // /codesmith/hackathon/quokka.mp3
const sayNameSound = new Audio(chrome.runtime.getURL("resources/say.wav"));
const sayNameSound1 = new Audio(chrome.runtime.getURL("resources/say1.wav"));
const sayNameSound2 = new Audio(chrome.runtime.getURL("resources/say2.wav"));
const sayNameSound3 = new Audio(chrome.runtime.getURL("resources/say3.wav"));
const sayNameSound4 = new Audio(chrome.runtime.getURL("resources/say4.wav"));
const sayNameSound5 = new Audio(chrome.runtime.getURL("resources/say5.wav"));
const sayNameSound6 = new Audio(chrome.runtime.getURL("resources/say6.wav"));
const sayNameSound7 = new Audio(chrome.runtime.getURL("resources/say7.wav"));
const sayNameSound8 = new Audio(chrome.runtime.getURL("resources/say8.wav"));
const soundArr = [sayNameSound, sayNameSound1, sayNameSound2,
sayNameSound3, sayNameSound4, sayNameSound5, sayNameSound6, sayNameSound7, sayNameSound8];
// .mozPreservesPitch = false;
// quokkaSound.setAttribute('src', './quokka.mp3');
// const body = document.querySelector('body');

// body.appendChild(quokkaSound);

function setNewTitles () {
  images = document.querySelectorAll('img');
  console.log(images);
  images.forEach(image => {
    image.setAttribute('title', attribute[Math.floor(Math.random() * attribute.length)]);
    // image.setAttribute('onmouseover', playSound);
    image.addEventListener('mouseover', playSound);
  })
}

function playSound () {
  quokkaSound.play();
  // sayNameSound.playbackRate = 1 + Math.random();
  soundArr[Math.floor(Math.random() * soundArr.length)].play();
}


/*
function setNewTitles () {
  images = document.querySelectorAll('img');
  console.log(images);
  images.forEach(image => {
    const message = document.createElement('div');
    message.setAttribute('class', 'wellWishes');
    message.innerText = attribute[Math.floor(Math.random() * attribute.length)]
    image.appendChild(message);
    console.log("Appended child");
    // message.setAttribute('data-title', attribute[Math.floor(Math.random() * attribute.length)]);
  })
}
*/

window.setInterval(setNewTitles, 2000);