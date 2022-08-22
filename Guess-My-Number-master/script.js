'use strict';

//////////Functions///////////
//function to return input value 
const inputValue = () => {
    return Number(document.querySelector('.guess').value);
}

// function to display message
const displayMessage = message => {
    document.querySelector('.message').textContent = message;
}

// function to display score
const displayScore = score => {
    document.querySelector('.score').textContent = score;
}

// function to show correct number on winning
const showCorrectNumber = () => {
    const number = document.querySelector('.number');

    //show correct number
    number.textContent = randomNumber;

    //set width to 30rem
    number.style.width = '20rem';

}

//fucntion to set background gradient of body
const setBackground = (color1, color2) => {
    document.querySelector('body').style.backgroundImage = `linear-gradient(to right bottom, ${color1} , ${color2})`;
}

//fucntion to set and display highscore
const setHighscore = () => {
    if (score > highscore) {
        highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
}

//fuction to make 'check' button to 'again' button
const againButton = () => {
    document.querySelector('.check').textContent = 'Again!';
}

//fucntion to reset everthing
const reset = () => {
    //make 'again' button to 'check'
    document.querySelector('.check').textContent = 'Check!';
    //generate new random number
    randomNumber = Math.trunc(Math.random() * 20 + 1);
    //set inputvalue = ''
    document.querySelector('.guess').value = '';
    displayScore(score = 20);
    setBackground('#232526', '#414345');
    //reset hidden number to '?'
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...')
}

// Generate a random number
let randomNumber = Math.trunc(Math.random() * 20 + 1);

// Create global score and highscore variables
let score = 20;
let highscore = 0;

//add click event listener to 'Check' button
document.querySelector('.check').addEventListener('click', () => {
    if (score > 1) {
        if (!inputValue()) {
            displayMessage('Please enter a number between 1 and 20!');
        } else {
            if (inputValue() !== randomNumber) {
                displayMessage(inputValue() > randomNumber ? 'Too High!!' : 'Too Low!!');
                displayScore(--score);
            } else {
                displayMessage('Correct!!');
                setBackground('#11998e', '#38ef7d');
                setHighscore();
                showCorrectNumber();
            }
        }
    } else if (score === 1) {
        displayScore(--score);
        displayMessage('You lost the game :(');
        setBackground('#cb2d3e', '#ef473a');
        againButton();

    } else {
        reset();
    }
});

//enter key to take input
document.querySelector('.guess').addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector('.check').click();
    }
})

//reset everything except highscore on 'Again' click event
document.querySelector('.again').addEventListener('click', () => {
    reset();
})