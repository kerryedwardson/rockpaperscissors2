let userChosen
let computerChosen

const displayResult = document.getElementById('result')
var result = results()

const userChoice = document.getElementById('user-choice')
const computerChoice = document.getElementById('computer-choice')
const possibleChoices = document.querySelectorAll('.choices')

const randomNumber = Math.round(Math.random() * (3))



//get user choice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChosen = e.target.id
    generatedComputerChoice()
    results()
    userChoice.innerHTML = userChosen
    computerChoice.innerHTML = computerChosen
    displayResult.innerHTML = result
}))


//get a random computer choice
function generatedComputerChoice() {
    if (randomNumber === 1) {
        return computerChosen = 'rock'
    } else if (randomNumber === 2) {
        return computerChosen = 'paper'
    } else if (randomNumber === 3) {
        return computerChosen = 'scissors'
    }
}

//get results
function results() {
    if (computerChosen === userChosen) {
        return result = "it's a tie"
    } else if (computerChosen === 'rock' && userChosen === 'scissors') {
        return result = "you lost to a machine"
    } else if (computerChosen === 'paper' && userChosen === 'rock') {
        return result = "you lost to a machine"
    } else if (computerChosen === 'scissors' && userChosen === 'paper') {
        return result = "you lost to a machine"
    } else if (computerChosen === 'rock' && userChosen === 'paper') {
        return result = "you win ;)"
    } else if (computerChosen === 'paper' && userChosen === 'scissors') {
        return result = "you win ;)"
    } else if (computerChosen === 'scissors' && userChosen === 'rock') {
        return result = "you win ;)"
    }
}