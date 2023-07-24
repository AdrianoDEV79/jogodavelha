document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;
  let insert = document.getElementById("winner");

  if (handleMove(position)) {
    let resultPlayer = playerTime;
    var result = 0;

    if (resultPlayer == 0) {
      var result = "JOGADOR 1";
    } else {
      var result = "JOGADOR 2";
    }

    setTimeout(() => {
      let endGame = document.getElementById("winner");
      let gamer = document.getElementById("gamer");
      endGame.style.display = "flex";
      gamer.innerHTML = `${result}`;

      // insert.innerHTML =
      // `<h3 >O JOGO ACABOU!   O VENCEVOR FOI <span>${result}</span></h3><br><br>
      // <input class="button" type="button" value="Reset" onclick="reset()" />`;
    }),
      10;
  }
  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let simbol = board[position];
  square.innerHTML = `<div class='${simbol}'></div>`;
}

function squadClean() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    let position = square.id;
    let simbol = board[position];

    if (simbol != "") {
      square.innerHTML = ``;
    }
  });
}

function reset() {
    let endGame = document.getElementById("winner");
    endGame.style.display = "none";  
  window.location.reload(true);
}
