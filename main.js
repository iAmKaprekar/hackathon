// Listen for user inputs of one sort or another
// Have an array? of elements that we want to interact with on the page

console.log("Hi");

let images;

console.log(0 == []);

// attribute[Math.floor(Math.random() * attribute.length)] <- Access random message
const attribute = ['Quokka says: I hope you\'re having a wonderful day!', 
"Quokka says: Click me to hear me talk!",
"Quokka reminds: Remember to drink water!",
"Quokka asks: Have you had anything to drink recently?",
"Quokka says: Close your eyes, now.",
"Quokka asks: How's the weather today?",
"Quokka asks: Would you like to take a walk?",
"Quokka reminds: Remember to take breaks!",
"Quokka reminds: Remember to breathe!",
"Quokka asks: How about you take a moment to stretch?",
"Quokka reminds: Stay hydrated!",
"Quokka says: Treat yourself kindly.",
"Quokka reminds: You belong here!",
"Quokka reminds: You matter!",
"Quokka says: Take a moment to appreciate all you've done to get to this moment.",
"Quokka says: Remember to take it slow sometimes.",
"Quokka reminds: It's okay to be silly! It's okay to have fun!",
"Quokka says: You deserve to respect yourself.",
"Quokka says: It will always be lovely outside, even when it rains.",
"Quokka says: It's a beautiful world to be a part of.",
"Quokka asks: Do you need to take a short break?",
"Quokka says: The sun is always pulling you to its warmth.",
"Quokka reminds: You assign yourself your own meaning!",
"Quokka says: Your value in this universe is boundless.",
"Quokka says: You are an integral part of the evaluated result of invoking all that came before.",
"Quokka reminds: There's no conditional to your self-care!",
"Quokka says: Seek closure in all the world returns to you."/*,
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
""*/];

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
    image.addEventListener('click', playSound);
    // image.addEventListener('mouseover', playSqueak);
  })
}

function playSound () {
  // quokkaSound.play();
  const sound = soundArr[Math.floor(Math.random() * soundArr.length)]
  sound.playbackRate = 0.5 + Math.random();
  sound.play();
}

// function playSqueak () {
//   quokkaSound.play();
// }

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