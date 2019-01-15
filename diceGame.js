function zombie(citDay) {
    let diceRoll = Math.floor(Math.random() * Math.floor(citDay));
    if(diceRoll == 0){
        console.log("You are in the city during the day.");
            function zombie1(citDaySrch){
                let diceRoll = Math.floor(Math.random() * Math.floor(citDaySrch));
                if(diceRoll == 0){
                    console.log("You searched a few wrecked cars nearby.");
                        function zombie2(citDayCarFind){
                            let diceRoll = Math.floor(Math.random() * Math.floor(citDayCarFind));
                            if(diceRoll == 0){
                                console.log("You found a survivor.");
                                    function zombie3(citDaySurv){
                                        let diceRoll = Math.floor(Math.random() * Math.floor(citDaySurv));
                                        if(diceRoll == 0){
                                            console.log("You left them behind because you saw that they were bit in the leg.");
                                        }
                                        else if(diceRoll == 1){
                                            console.log("They tried to attack you, but you escaped safely.");
                                        }
                                        else if(diceRoll == 2){
                                            console.log("They werent moving.");
                                        }
                                        else if(diceRoll == 3){
                                            console.log("You found a group of survivors, but you avoided them incase they were unfriendly.");
                                        }
                                        else if(diceRoll == 4){
                                            console.log("They were looking for they're child but they didnt want your help.");
                                        }
                                        else if(diceRoll == 5){
                                            console.log(".");
                                        }
                                        else if(diceRoll == 6){
                                            console.log("They were asking for your help and they killed you. GAME OVER!")
                                        }
                                }
                                    zombie3(7);
                            }
                            else if(diceRoll == 1){
                                console.log("You found some gear.");
                                function zombie4(citDayCarGear){
                                    let diceRoll = Math.floor(Math.random() * Math.floor(citDayCarGear));
                                    if(diceRoll == 0){
                                        console.log("You found a flashlight.");
                                    }
                                    else if(diceRoll == 1){
                                        console.log("You found batteries.")
                                    }
                                    else if(diceRoll == 2){
                                        console.log("You found a backpack, but its empty.")
                                    }
                                    else if(diceRoll == 3){
                                        console.log("You found a backpack thats full of food and water.")
                                    }
                                    else if(diceRoll == 4){
                                        console.log("You found a suitcase, but its empty.")
                                    }
                                    else if(diceRoll == 5){
                                        console.log("You found a suitcase thats full of food and water.")
                                    }
                                    else if(diceRoll == 6){
                                        console.log("You found a phone but its dead.")
                                    }
                                    else if(diceRoll == 7){
                                        console.log("You found a small set of tools.")
                                    }
                                    else if(diceRoll == 8){
                                        console.log("You found a small set of tools.")
                                    }
                                    else if(diceRoll == 9){
                                        console.log("you didnt find anything.")
                                    }
                                    else if(diceRoll == 10){
                                        console.log("you didnt find anything.")
                                    }
                                    else if(diceRoll == 11){
                                        console.log("you didnt find anything.")
                                    }
                                    else if(diceRoll == 12){
                                        console.log("you didnt find anything.")
                                    }
                                    else if(diceRoll == 13){
                                        console.log("you didnt find anything.")
                                    }
                                }
                                    zombie4(14);
                            }
                            else if(diceRoll == 2){
                                console.log("You found a weapon.");
                                function zombie12(citDayCarWpn){
                                    let diceRoll = Math.floor(Math.random() * Math.floor(citDayCarWpn));
                                    if(diceRoll == 0){
                                        console.log("You found a hammer.")
                                    }
                                    else if(diceRoll == 1){
                                        console.log("You found a knife.")
                                    }
                                    else if(diceRoll == 2){
                                        console.log("You found a crowbar.")
                                    }
                                    else if(diceRoll == 3){
                                        console.log("You found an empty pistol.")
                                    }
                                    else if(diceRoll == 4){
                                        console.log("You found a shotgun.")
                                    }
                                    else if(diceRoll == 5){
                                        console.log("You found a ar15.")
                                    }
                                    else if(diceRoll == 6){
                                        console.log("You found a chainsaw.")
                                    }
                                    else if(diceRoll == 7){
                                        console.log("You found a very dull axe.")
                                    }
                                    else if(diceRoll == 8){
                                        console.log("You found a hatchet.")
                                    }
                                    else if(diceRoll == 9){
                                        console.log("you didnt find anything.")
                                    }
                                    else if(diceRoll == 10){
                                        console.log("you didnt find anything.")
                                    }
                                    else if(diceRoll == 11){
                                        console.log("you didnt find anything.")
                                    }
                                    else if(diceRoll == 12){
                                        console.log("you didnt find anything.")
                                    }
                                    else if(diceRoll == 13){
                                        console.log("you didnt find anything.")
                                    }
                                    else if(diceRoll == 14){
                                        console.log("You found a shovel.")
                                    }
                                    else if(diceRoll == 15){
                                        console.log("You found a pick axe.")
                                    }
                                    else if(diceRoll == 16){
                                        console.log("You found a machete.")
                                    }
                                    else if(diceRoll == 17){
                                        console.log("You found a rusty sickle.")
                                    }
                                    else if(diceRoll == 18){
                                        console.log("You founa a katana.")
                                    }
                                    else if(diceRoll == 19){
                                        console.log("You found a flamethrower.")
                                    }
                                    else if(diceRoll == 20){
                                        console.log("You found a broken glass bottle.")
                                    }
                                }
                                zombie12(21);
                            }
                            else if(diceRoll == 3){
                                console.log("You found some medical supplies.");
                                function zombie13(citDayCarMed){
                                    let diceRoll = Math.floor(Math.random() * Math.floor(citDayCarMed));
                                    if(diceRoll == 0){
                                        console.log("You found some bandaids.")
                                    }
                                    else if(diceRoll == 1){
                                        console.log("You found a gauze pack.")
                                    }
                                    else if(diceRoll == 2){
                                        console.log("You found pain meds.")
                                    }
                                    else if(diceRoll == 3){
                                        console.log("You didnt find anything.")
                                    }
                                    else if(diceRoll == 4){
                                        console.log("You didnt find anything.")
                                    }
                                    else if(diceRoll == 5){
                                        console.log("You didnt find anything.")
                                    }
                                    else if(diceRoll == 6){
                                        console.log("You didnt find anything.")
                                    }
                                }
                                zombie13(7);
                            }
                            else if(diceRoll == 4){
                                console.log("You found some clothes");
                                function zombie14(citDayCarCloth){
                                    let diceRoll = Math.floor(Math.random() * Math.floor(citDayCarCloth));
                                    if(diceRoll == 0){
                                        console.log("You found some boots.")
                                    }
                                    else if(diceRoll == 1){
                                        console.log("You found some shoes.")
                                    }
                                    else if(diceRoll == 2){
                                        console.log("You found a hat.")
                                    }
                                    else if(diceRoll == 3){
                                        console.log("You found a jacket.")
                                    }
                                    else if(diceRoll == 4){
                                        console.log("You found gloves.")
                                    }
                                    else if(diceRoll == 5){
                                        console.log("You found cargo pants.")
                                    }
                                    else if(diceRoll == 6){
                                        console.log("You didnt find anything.")
                                    }
                                }
                                zombie14(7);
                            }
                            else if(diceRoll == 5){
                                console.log("You didnt find anything");
                            }
                            else if(diceRoll ==6){
                                console.log("A zombie trapped under a car grabbed your leg while other zombies gathered, you didnt make it. GAME OVER!")
                            }
                    }
                        zombie2(7);
                }
                else if(diceRoll == 1){
                    console.log("You searched some deserted office buildings down the street.");
                    function zombie5(citDayOficFind){
                        let diceRoll = Math.floor(Math.random() * Math.floor(citDayOficFind));
                        if(diceRoll == 0){
                            console.log("You found a survivor.");
                                function zombie6(citDaySurv){
                                let diceRoll = Math.floor(Math.random() * Math.floor(citDaySurv));
                                if(diceRoll == 0){
                                    console.log("You left them behind because you saw that they were bit in the leg.");
                                }
                                else if(diceRoll == 1){
                                    console.log("They tried to attack you, but you escaped safely.");
                                }
                                else if(diceRoll == 2){
                                    console.log("They werent moving.");
                                }
                                else if(diceRoll == 3){
                                    console.log("You found a group of survivors, but you avoided them incase they were unfriendly.");
                                }
                                else if(diceRoll == 4){
                                    console.log("They were looking for they're child but they didnt want your help.");
                                }
                                else if(diceRoll == 5){
                                    console.log(".");
                                }
                                else if(diceRoll == 6){
                                    console.log("They were asking for your help and they killed you.")
                                }
                        }
                            zombie6(7);
                        }
                        else if(diceRoll == 1){
                            console.log("You found some gear.");
                            function zombie7(citDayGear){
                                let diceRoll = Math.floor(Math.random() * Math.floor(citDayGear));
                                if(diceRoll == 0){
                                    console.log("You found a flashlight.");
                                }
                                else if(diceRoll == 1){
                                    console.log("You found batteries.")
                                }
                                else if(diceRoll == 2){
                                    console.log("You found a backpack, but its empty.")
                                }
                                else if(diceRoll == 3){
                                    console.log("You found a backpack thats full of food and water.")
                                }
                                else if(diceRoll == 4){
                                    console.log("You found a suitcase, but its empty.")
                                }
                                else if(diceRoll == 5){
                                    console.log("You found a suitcasethats full of food and water.")
                                }
                                else if(diceRoll == 6){
                                    console.log("You found a phone but its dead.")
                                }
                                else if(diceRoll == 7){
                                    console.log("You found a small set of tools.")
                                }
                                else if(diceRoll == 8){
                                    console.log("You found a small set of tools.")
                                }
                                else if(diceRoll == 9){
                                    console.log("you didnt find anything.")
                                }
                                else if(diceRoll == 10){
                                    console.log("you didnt find anything.")
                                }
                                else if(diceRoll == 11){
                                    console.log("you didnt find anything.")
                                }
                                else if(diceRoll == 12){
                                    console.log("you didnt find anything.")
                                }
                                else if(diceRoll == 13){
                                    console.log("you didnt find anything.")
                                }
                            }
                                zombie7(14);
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
                        else if(diceRoll == 6){
                            console.log("A zombie came at you from a cubicle and you didnt make it.")
                        }
                }
                    zombie5(7);
                }
                else if(diceRoll == 2){
                    console.log("You searched a burnt up nearby gas station.");
                    function zombie8(citDayGasFind){
                        let diceRoll = Math.floor(Math.random() * Math.floor(citDayGasFind));
                        if(diceRoll == 0){
                            console.log("You found a survivor.");
                            function zombie9(citDaySurv){
                                let diceRoll = Math.floor(Math.random() * Math.floor(citDaySurv));
                                if(diceRoll == 0){
                                    console.log("You left them behind because you saw that they were bit in the leg.");
                                }
                                else if(diceRoll == 1){
                                    console.log("They tried to attack you, but you escaped safely.");
                                }
                                else if(diceRoll == 2){
                                    console.log("They werent moving.");
                                }
                                else if(diceRoll == 3){
                                    console.log("You found a group of survivors, but you avoided them incase they were unfriendly.");
                                }
                                else if(diceRoll == 4){
                                    console.log("They were looking for they're child but they didnt want your help.");
                                }
                                else if(diceRoll == 5){
                                    console.log(".");
                                }
                                else if(diceRoll == 6){
                                    console.log("They were asking for your help and they killed you.")
                                }
                        }
                            zombie9(7);
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
                        else if( diceRoll == 6){
                            console.log("A zombie came at you when you checked the restroom, you didnt make it.")
                        }
                }
                    zombie8(7);
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
        function zombie10(citNitSrch){
            let diceRoll = Math.floor(Math.random() * Math.floor(citNitSrch));
            if(diceRoll == 0){
                console.log("You searched a few wrecked cars nearby.");
            }
            else if(diceRoll == 1){
                console.log("You searched a deserted office building down the street.");
            }
            else if(diceRoll == 2){
                console.log("You searched a burnt up nearby gas station.");
                function zombie11(citNitGasFind){
                    let diceRoll = Math.floor(Math.random() * Math.floor(citNitGasFind));
                    if(diceRoll == 0){
                        console.log("You found a survivor.");
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
                zombie11(6);
            }
            else if(diceRoll == 3){
                console.log("You searched a few nearby store fronts.");
            }
            else if(diceRoll == 4){
                console.log("You found an abandoned building, but didnt go inside.");
            }
        }
                zombie10(5);
    }
    else if(diceRoll == 2){
        console.log("You are in the country during the day.");
    }
    else if(diceRoll == 3){
        console.log("You are in the country during the night.");
    }
    
}
zombie(4);


