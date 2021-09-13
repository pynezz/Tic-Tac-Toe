const whosTurnIsIt = document.querySelector("p");

let player1playing = true;

let cells = [,];

let player1XValue = 0;
let player1YValue = 0;

let player2YValue = 0;
let player2XValue = 0;

let turnsPlayed = 0;

function addImg(x, y) {
    turnsPlayed++;
    console.log(`x: ${x}, y: ${y}`);
    let tile = document.getElementById(`${x}_${y}`);
    tile.removeAttribute("onclick");
    if (player1playing) {
        sumPlayer1Values(x, y);
        tile.classList.add("setPlayer1");
    }
    else {
        sumPlayer2Values(x, y);
        tile.classList.add("setPlayer2");
    }
    checkWin();
    
    player1playing = !player1playing;
    whosTurnIsIt.innerHTML = player1playing ? "Player 1's turn!" : "Player 2's turn!";
}

let win = false;
function checkWin() {
    if (turnsPlayed > 4) {
        if ((player1XValue + player1YValue) % 3 == 0) {
            alert("Player 1 won!");
        }
        else if ((player2XValue + player2YValue) % 3 == 0) {
            alert("Player 2 won!"); 
        }
    }
}

function sumPlayer1Values(x, y) {
    player1YValue += y;
    player1XValue += x;
}

function sumPlayer2Values(x, y) {
    player2XValue += x;
    player2YValue += y;
}