class Memorama {
    constructor() {
        this.cantPlay = false;
        this.card1 = null;
        this.card2 = null;

        this.availableImages = [1, 2, 3, 4];
        this.orderForThisRound = [];
        this.cards = Array.from( document.querySelectorAll(".board-game figure") );

        this.maxPairNumber = this.availableImages.length;
        this.foundPairs = 0;

        this.startGame();

        console.log(this.orderForThisRound)
    }


setNewOrder() {
    this.orderForThisRound = this.availableImages.concat(this.availableImages);
    this.orderForThisRound.sort( () => Math.random() - 0.5 );
} 

startGame() {
    this.setNewOrder();
    this.setImagesInCards();
    this.openCards();
}

setImagesInCards(){

  for (const key in this.cards) {
   
        const card = this.cards[key]
        const image = this.orderForThisRound[key];
        const imgLabel = card.children[1].children[0];
        
        card.dataset.image = image;
        imgLabel.src = `images/${image}.png`;
    }

  }

  openCards(){
      this.cards.forEach( card => card.classList.add("open") );
      setTimeout(() => {
        this.closecards();
      }, 900);
  }

  closecards(){
     this.cards.forEach( card => card.classList.remove("open") );
     this.addClickEvents();
     this.cantPlay = true;

  }

  addClickEvents(){
    this.cards.forEach(card => card.addEventListener("click", this.flipCard.bind(this)) );
  }

  flipCard(e){
    
    const clickedCard = e.target;

    //if (this.cantplay && !clickedCard.classList.contains("open")) {

        clickedCard.classList.add("open");
        this.checkPair( clickedCard.dataset.image );
   // }

  }

  checkPair(image){
    
    if (!this.card1) {
        this.card1 = image;
    }
    else {
        this.card2 = image;
    }
    

      if(this.card1 && this.card2){

        if(this.card1 === this.card2){
            this.ckeckIfWon();
        }

        else{
            this.cantPlay = false;
            setTimeout(this.resetOpenCards.bind(this), 800);
            
        }
      }


   }


    resetOpenCards(){
        const firstOpen = document.querySelector(`.board-game figure.open[data-image='${this.card1}']`);
        const secondOpen = document.querySelector(`.board-game figure.open[data-image='${this.card2}']`);

        firstOpen.classList.remove("open");
        secondOpen.classList.remove("open");

        this.card1 = null;
        this.card2 = null;

        this.cantPlay = true;


    }


    ckeckIfWon(){
       this.foundPairs++;

       this.card1 = null;
       this.card2 = null;

       if(this.maxPairNumber === this.foundPairs)

       alert("Winnerr");
    }



}

document.addEventListener("DOMContentLoaded", () => {
   
    
    new Memorama();
})