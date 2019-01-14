function zombie(diceType) {
let diceRoll = Math.floor(Math.random() * Math.floor(diceType));
    if (diceRoll == 0){
        console.log("you are in the city during the day");
    }
    else if(diceRoll == 1){
        console.log("you are in the city during the night");
    }
    else if(diceRoll == 2){
        console.log("you are in the country during the day");
    }
    else if(diceRoll == 3){
        console.log("you are in the country during the night");
    }
    
}
zombie(4);