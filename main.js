/* Countdown timer for the game length */
const startingMinutes = 1;
let time = startingMinutes * 60;

const countDownEl = document.getElementById('time-remaining');

let timerSetup = setInterval(upDateCountDown, 1000);

function upDateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    if(time === 0){
        clearInterval(timerSetup);
        countDownEl.innerHTML = ": Game over";
    }
}


/* Removes the overlay on the welcome screen*/
let overlays = Array.from(document.getElementsByClassName('overlay-text'));
   
overlays.forEach(overlay => {
    overlay.addEventListener('click', () => {
        overlay.classList.remove('visible');
    });
});


/* Flipping the card and checking for a matching pair of cards */

const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockGameArea = false;
let firstCard, secondCard;

function flipCard(){
    if (lockGameArea) return;
    if (this === firstCard) return;

    this.classList.add('visible');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;

       checkCardsMatch();
    }
}     

    function checkCardsMatch() {

      if (firstCard.dataset.names === secondCard.dataset.names) {
          firstCard.classList.add('matched');
          secondCard.classList.add('matched');
      } else {

        lockGameArea = true;

        setTimeout(() => {
          firstCard.classList.remove('visible');
          secondCard.classList.remove('visible');

          lockGameArea = false;
      }, 1500);
    }
}    



function shuffleCards(){
    cards.forEach(card => {
        let randomShuffle = Math.floor(Math.random() * 12);
        card.style.order = randomShuffle;
    });
};

window.onload = shuffleCards();

cards.forEach(card => card.addEventListener('click', flipCard));