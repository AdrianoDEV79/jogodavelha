const FRONT = "card-front";
const BACK = "card-back";
const CARD = "card";
const ICON = "icon";

startGame();

function startGame() {
  initializeCards(game.creatCardsFronFlags());
}

function initializeCards(cards) {
  let gameBoard = document.getElementById("gameBoard");
  gameBoard.innerHTML = '';
  game.cards.forEach((card) => {
    let cardElement = document.createElement("div");
    cardElement.id = card.id;
    cardElement.classList.add(CARD);
    cardElement.dataset.icon = card.icon;

    creatCardContent(card, cardElement);

    cardElement.addEventListener("click", flipCard);
    gameBoard.appendChild(cardElement);
  });
}

function creatCardContent(card, cardElement) {
  creatCardFace(FRONT, card, cardElement);
  creatCardFace(BACK, card, cardElement);
}

function creatCardFace(face, card, element) {
  let cardElementFace = document.createElement("div");
  cardElementFace.classList.add(face);

  if (face === FRONT) {
    let iconElement = document.createElement("img");
    iconElement.classList.add(ICON);
    iconElement.src = "../img/" + card.icon + ".png";
    cardElementFace.appendChild(iconElement);
  } else {
    let iconElement = document.createElement("img");
    iconElement.classList.add(ICON);
    iconElement.src = "../img/acho.png";
    cardElementFace.appendChild(iconElement);
  }

  element.appendChild(cardElementFace);
}

function flipCard() {
  if (game.setCard(this.id)) {
    this.classList.add("flip");

    if (game.secondCard) {
      if (game.checkMatch()) {
        game.cleanCards();
        if (game.checkGameOver()) {
          let gameOverLayer = document.getElementById("gameOver");
          gameOverLayer.style.display = "flex";
        }
      } else {
        setTimeout(() => {
          let firstCardView = document.getElementById(game.firstCard.id);
          let secondCardView = document.getElementById(game.secondCard.id);

          firstCardView.classList.remove("flip");
          secondCardView.classList.remove("flip");

          game.unFlippedCards();
        }, 1000);
      }
    }
  }
}

function restart(){
  game.cleanCards();
  startGame();
  let gameOverLayer = document.getElementById("gameOver");
  gameOverLayer.style.display = "none";
}
