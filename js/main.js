let currentMove = '';
let moves = [
    { 
        notation: 'e4 e5', 
        name: 'le pion blanc joue de e2 en e4 et le pion noir joue de e7 en e5' 
    },
    { 
        notation: 'Cf3 Cc6', 
        name: 'cavalier blanc joue de g1 en f3 et cavalier noir joue de b8 en c6' 
    },
    { 
        notation: 'Fb5 a6', 
        name: 'fou blanc en b5, pion en a6' 
    },
    { 
        notation: 'Fxc6 dxc6', 
        name: 'fou prend cavalier et pion d7 prend fou' 
    }
];

function randomMove() {
    return moves[Math.floor(Math.random() * moves.length)];
}

function displayMove() {
  let move = randomMove();
  currentMove = move.name;
  document.getElementById('notationDisplay').textContent = move.notation;

  // Mise à jour des boutons
  let shuffledMoves = shuffleArray(moves);
  document.getElementById('option1').textContent = shuffledMoves[0].name;
  document.getElementById('option2').textContent = shuffledMoves[1].name;
  document.getElementById('option3').textContent = shuffledMoves[2].name;
  document.getElementById('option4').textContent = shuffledMoves[3].name;
}


function checkAnswer(answer) {
    let feedback = document.getElementById('feedback');
    if (answer === currentMove) {
        feedback.textContent = 'Correct!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Incorrect. La bonne réponse était : ' + currentMove;
        feedback.style.color = 'red';
    }
}

function nextMove() {
    displayMove();
    document.getElementById('feedback').textContent = '';
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Initialiser le jeu
displayMove();
