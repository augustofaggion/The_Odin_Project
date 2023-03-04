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