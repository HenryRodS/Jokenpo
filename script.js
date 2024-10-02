// script.js
const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('resultText');
const restartBtn = document.getElementById('restart');

const options = ['Pedra', 'Papel', 'Tesoura'];

let playerChoice = '';
let computerChoice = '';

choices.forEach(button => {
    button.addEventListener('click', () => {
        playerChoice = button.innerText;
        computerChoice = getComputerChoice();
        const result = checkWinner(playerChoice, computerChoice);
        displayResult(result, playerChoice, computerChoice);
    });
});

restartBtn.addEventListener('click', () => {
    resultText.innerText = 'Faça sua escolha!';
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function checkWinner(player, computer) {
    if (player === computer) {
        return 'Empate!';
    } else if (
        (player === 'Pedra' && computer === 'Tesoura') ||
        (player === 'Papel' && computer === 'Pedra') ||
        (player === 'Tesoura' && computer === 'Papel')
    ) {
        return 'Você venceu!';
    } else {
        return 'Computador venceu!';
    }
}

function displayResult(result, player, computer) {
    resultText.innerText = `Você escolheu ${player}, Computador escolheu ${computer}. ${result}`;
}
