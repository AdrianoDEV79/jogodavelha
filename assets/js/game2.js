let game = {

    lockMode: false,
    firstCard: null,
    secondCard: null,

    setCard: function(id){

        let card = this.cards.filter(card=>card.id===id)[0];
      console.log(card);
        if(card.flipped || this.lockMode){
            return false;
        }

        if(!this.firstCard){
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;
        }else{
            this.secondCard = card;
            this.secondCard.flipped = true
            this.lockMode = true;
            return true;
        }

    },

    checkMatch:function(){
      if(!this.firstCard || !this.secondCard){
        return false;
      }
        return this.firstCard.icon === this.secondCard.icon;
    },

    cleanCards: function(){
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },

    unFlippedCards: function(){
      this.firstCard.flipped = false;
      this.secondCard.flipped = false;
      this.cleanCards();
    },

    checkGameOver: function(){
      return this.cards.filter(card=>!card.flipped).length == 0;
    },


  flags: [
    "argentina",
    "brazil",
    "canada",
    "china",
    "germany",
    "israel",
    "south-africa",
    "switzerland",
    "united-states",
    "uruguay",
  ],

  cards: null,

  creatCardsFronFlags: function () {
    this.cards = [];

    this.flags.forEach((flag) => {
      this.cards.push(this.creatPairFronFlags(flag));
    });

    this.cards = this.cards.flatMap((pair) => pair);
    this.shuffleCards();
    return this.cards;
  },

  creatPairFronFlags: function (flag) {
    return [
      {
        id: this.createIdWithFlag(flag),
        icon: flag,
        flipped: false,
      },
      {
        id: this.createIdWithFlag(flag),
        icon: flag,
        flipped: false,
      },
    ];
  },

  createIdWithFlag: function (flag) {
    return flag + parseInt(Math.random() * 1000);
  },

  shuffleCards: function (cards) {
    let currentIndex = this.cards.length;
    let ramdomIndex = 0;

    while (currentIndex != 0) {
      ramdomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.cards[ramdomIndex], this.cards[currentIndex]] = [
        this.cards[currentIndex],
        this.cards[ramdomIndex],
      ];
    }
  },
};
