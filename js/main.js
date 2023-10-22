let currentMove = '';
let moves = [
    { notation: 'e4', name: 'Ouverture du pion du roi' },
    { notation: 'c5', name: 'Défense sicilienne' },
    { notation: 'd4', name: 'Ouverture de la dame' },
    { notation: 'e6', name: 'Défense française' }
];

function randomMove() {
    return moves[Math.floor(Math.random() * moves.length)];
}

function displayMove() {
    let move = randomMove();
    currentMove = move.name;
    document.getElementById('notationDisplay').textContent = move.notation;
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

// Initialiser le jeu
displayMove();
