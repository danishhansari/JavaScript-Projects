import { paragraphs } from "./paragraph.js";
const typingText = document.querySelector('.typing-text p'),
inField  = document.querySelector('.wrapper .input-field'),
mistakeTag = document.querySelector('.mistake span'),
timeTag = document.querySelector('.time span'),
wpmTag = document.querySelector('.wpm span'),
cpmTag = document.querySelector('.cpm span'),
tryAgain = document.querySelector('.try-again');

let charIndex = 0,
mistake = 0

let timer, 
maxTime = 60, 
timeLeft = maxTime,
isTyping = 0;

function randomPara() {
    let random = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = ""
    paragraphs[random].split("").forEach(span => {
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });
    // focussing input field on keydown
    typingText.querySelectorAll('span')[0].classList.add('active')
    document.addEventListener('keydown', () => inField.focus())
    typingText.addEventListener('click', () => inField.focus())
}
function initTyping () {
    const character  = typingText.querySelectorAll('span');
    let typeChar  = inField.value.split("")[charIndex];
   if(charIndex < character.length - 1 && timeLeft > 0){
    if(!isTyping ){
        timer = setInterval(initTimer,1000);
        isTyping = true;
    }
    if(typeChar == null){
        charIndex--;
        if(character[charIndex].classList.contains('incorrect')){
            mistake--;
        }
        character[charIndex].classList.remove('correct','incorrect')
    }else{

        if(character[charIndex].innerText === typeChar){
            character[charIndex].classList.add('correct');
        }
        else{
            mistake++;
            character[charIndex].classList.add('incorrect')
        }
        charIndex++;
    }
    character.forEach(span => span.classList.remove('active'))
    character[charIndex].classList.add('active')
    let wpm = Math.round(((( charIndex - mistake) / 5) / (maxTime - timeLeft)) * 60)
    wpm = wpm< 0 || !wpm || wpm === Infinity ? 0 : wpm;
    wpmTag.innerText = wpm
    mistakeTag.innerText = mistake;
    cpmTag.innerText = charIndex - mistake;
   }else{
    inField.value = ""
    clearInterval(timer)
   }
}

function initTimer(){
    if(timeLeft > 0){
        timeLeft--;
        timeTag.textContent = timeLeft;
    }else{
        clearInterval(timer)
    }
}
const resetGame = () => {
    inField.value = ""
    clearInterval(timer)
    timeLeft = maxTime;
    charIndex = 0;
    mistake = 0;
    isTyping = 0;
    timeTag.innerText = timeLeft;
    mistakeTag.innerText = mistake;
    wpmTag.innerText = 0;
    cpmTag.innerText = 0;
    window.location.reload()
}
randomPara()
inField.addEventListener('input', initTyping)
tryAgain.addEventListener('click', resetGame)