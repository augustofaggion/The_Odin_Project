const getUserInput = (userInput) => {
    userInput = userInput.toLowercase();
    if(
        userInput ===  'rock' ||
        userInput === 'scissors' ||
        userInput === 'paper'
    ){
        return userInput;
    } else {
        console.log('Error!');
    }
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    
    switch(randomNumber) {
        case 0 :
            return 'rock';
            break;
        case 1:
            return 'scissors';
            break;
        case 2:
            return 'paper';
            break;
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
        return 'This game is a Tie';
    }
    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'Sorry you lost';
        }
    } else {
        return 'Congratulations you won';
    }


    if (userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return 'Sorry you lost';
        } else {
            return 'Congratulations you won';
        }
    }

    if (userChoice === 'scissors'){
        if(computerChoice === 'rock') {
            return 'Sorry you lost';
        } else {
            return 'Congratulations you won';
        }
    }
};

const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw ' + userChoice);
    console.log('Computer threw ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
};

playGame();