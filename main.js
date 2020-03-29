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
        
        restartGame();
    }
}

/* Function to reload the page and restarts the game with a new timer and shuffle */
function restartGame() {
    document.getElementById('game-over-text').classList.add('visible');

    document.getElementById('game-over-text').addEventListener('click', () => {
        location.reload();
    });
}

/* Removes the overlay on the welcome screen*/
let overlays = Array.from(document.getElementsByClassName('overlay-text'));
   
overlays.forEach(overlay => {
    overlay.addEventListener('click', () => {
        overlay.classList.remove('visible',);
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

/* Checking if the cards match and stopping them from being clicked on again
    during that game */
function checkCardsMatch() {

    if (firstCard.dataset.names === secondCard.dataset.names) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');

        checkForVictory();

    } else {

        lockGameArea = true;
        

        setTimeout(() => {
            firstCard.classList.remove('visible');
            secondCard.classList.remove('visible');

            lockGameArea = false;
        }, 1500);
    }
}    

/* Function counting the matches and returning the victory screen overlay 
   This also stops the timer when the victory is shown so it doesn'nt countdown
   to Zero and display the game over message */
let victoryCounter = 0;

function checkForVictory() {
    victoryCounter++;
    if (victoryCounter ===6) {
        clearInterval(timerSetup);

        document.getElementById('victory').classList.add('visible');

        document.getElementById('victory').addEventListener('click', () => {
            location.reload();
        });
    }
}



/* Shuffle function to have the cards in a random order */
(function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
  })();


/* Global attribute for the cards to flip the cards on click */
cards.forEach(card => card.addEventListener('click', flipCard));