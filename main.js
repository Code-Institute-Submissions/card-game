class CardMatchingGame {
    constructor(totalTime, cards){
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('timer')
        this.flipCounter = document.getElementById('score')
    }

    /* Starting the game and reseting the score and timer*/
    startGame() {
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.cardsToCheck = null;
        this.matchedCards = [];
        this.busy = true;
        setTimeout(() => {
            this.shuffleCards(this.cardsArray);
            this.countdown = this.startCountdown();
            this.busy = false;
        }, 500)
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.flipCounter.innerText = this.totalClicks;
    }

    /* Starting the coundown timer and setting the time limit before game over */
    startCountdown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if(this.timeRemaining === 0)
                this.gameOver();
        }, 1000);
    }



}
