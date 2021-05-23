// MODAL BUTTON VARIABLES
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');

// MODAL BUTTON FUNCTIONS
openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// GAME VARIABLES
const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const footer = document.getElementById('footer');
const reset = document.getElementById('reset');
const userSelect = document.getElementById('user-select');
const computerSelect = document.getElementById('computer-select');
const winner = document.getElementById('winner');

const choices = ['paper', 'scissors', 'rock'];

let score = 0;
let userChoice = undefined;

// GAME FUNCTIONS
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');
        
        checkWinner();
    });    
});

reset.addEventListener('click', () => {
        // SHOW THE SELECTION | HIDE THE MAIN
        main.style.display = 'flex';
        selection.style.display= 'none';
        footer.style.display= 'block';
});

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
};

function checkWinner() {
    const computerChoice = pickRandomChoice();

    // UPDATE VIEW
    updateSelection(userSelect, userChoice);
    updateSelection(computerSelect, computerChoice);

    if (userChoice === computerChoice) {
        // DRAW
        winner.innerText = 'draw';
    } else if (
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
        // USER WON
        updateScore(1);
        winner.innerText = 'win';
    } else {
        // USER LOST
        updateScore(-1);
        winner.innerText = 'lose';
    }

    // SHOW THE SELECTION | HIDE THE MAIN
    main.style.display = 'none';
    selection.style.display= 'flex';
    footer.style.display= 'none';
};

function updateScore(value) {
    score += value;

    scoreEl.innerText = score;
};

function updateSelection(selectionEl, choice) {
    // CLASS RESET
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-rock');
    selectionEl.classList.remove('btn-scissors');

    // UPDATE IMG
    const img = selectionEl.querySelector('img');
    selectionEl.classList.add(`btn-${choice}`);
    img.src = `./resources/images/icon-${choice}.svg`;
    img.alt = choice;
};