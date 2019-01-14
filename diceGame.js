function zombie(citDay) {
let diceRoll = Math.floor(Math.random() * Math.floor(citDay));
    if(diceRoll == 0){
        console.log("You are in the city during the day.");
            function zombie1(citDaySrch){
            let diceRoll = Math.floor(Math.random() * Math.floor(citDaySrch));
                if(diceRoll == 0){
                    console.log("You searched a few wrecked cars nearby.");
                        function zombie2(citDayFind){
                        let diceRoll = Math.floor(Math.random() * Math.floor(citDayFind));
                            if(diceRoll == 0){
                                console.log("You found a survivor.");
                                    function zombie3(citDaySurv){
                                    let diceRoll = Math.floor(Math.random() * Math.floor(citDaySurv));
                                        if(diceRoll == 0){
                                            console.log("You found a survivor, but yoy left them behind because you saw that they were bit in the leg.");
                                        }
                                        else if(diceRoll == 1){
                                            console.log("You found a survivor and they tried to attack you, but you escaped safely.");
                                        }
                                        else if(diceRoll == 2){
                                            console.log("You found a survivor, but they werent moving.");
                                        }
                                        else if(diceRoll == 3){
                                            console.log("You found a group of survivors so you avoided them incase they were unfriendly.");
                                        }
                                        else if(diceRoll == 4){
                                            console.log("You came across someone looking for they're child but they didnt want your help.");
                                        }
                                        else if(diceRoll == 5){
                                            console.log("You didnt find any survivors.");
                                        }
                                        else if(diceRoll == 6){
                                            console.log("you came across someone asking for help and they killed you.")
                                        }
                                }
                                zombie3(7);
                            }
                            else if(diceRoll == 1){
                                console.log("You found some gear.");
                            }
                            else if(diceRoll == 2){
                                console.log("You found a weapon.");
                            }
                            else if(diceRoll == 3){
                                console.log("You found some medical supplies.");
                            }
                            else if(diceRoll == 4){
                                console.log("You found some clothes");
                            }
                            else if(diceRoll == 5){
                                console.log("You didnt find anything");
                            }
                    }
                    zombie2(6);
                }
                else if(diceRoll == 1){
                    console.log("You searched some deserted office buildings down the street.");
                }
                else if(diceRoll == 2){
                    console.log("You searched a burnt up nearby gas station.");
                }
                else if(diceRoll == 3){
                    console.log("You searched a few nearby store fronts.");
                }
                else if(diceRoll == 4){
                    console.log("You found an abandoned building but didnt go inside.");
                }
            }
                zombie1(5);
    }
    else if(diceRoll == 1){
        console.log("You are in the city during the night.");
    }
    else if(diceRoll == 2){
        console.log("You are in the country during the day.");
    }
    else if(diceRoll == 3){
        console.log("You are in the country during the night.");
    }
    
}
zombie(4);


