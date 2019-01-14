function zombie(citDay) {
let diceRoll = Math.floor(Math.random() * Math.floor(citDay));
    if(diceRoll == 0){
        console.log("you are in the city during the day");
            function zombie1(citDaySrch){
            let diceRoll = Math.floor(Math.random() * Math.floor(citDaySrch));
                if(diceRoll == 0){
                    console.log("you searched a few wrecked cars nearby.");
                }
                else if(diceRoll == 1){
                    console.log("you searched some deserted office buildings down the street");
                }
                else if(diceRoll == 2){
                    console.log("you searched a burnt up nearby gas station");
                }
                else if(diceRoll == 3){
                    console.log("you searched a few nearby store fronts");
                }
                else if(diceRoll == 4){
                    console.log("you found an abandoned building but didnt go inside");
                }
            }
                zombie1(5);
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



