

function rollDie(sides){
    let result = Math.floor((Math.random() * sides) +1);
    return result;
}
function citDay(zD) {
    console.log("You awoke not knowing where you are, what day it was or what had happened.");
}
function srchPlces(zAS){
    let result = diceRoll(4);
        if(result == 0){
            console.log("You searched a few wrecked cars nearby.");
        }
        else if(result == 1){
            console.log("You searched a deserted office building down the street.");
        }
        else if(result == 2){
            console.log("You searched a burnt up nearby gas station.");
        }
        else if(result == 3){
            console.log("You searched a few nearby store fronts.");
        }
        else if(result == 4){
            console.log("You found an abandoned building, but didnt go inside.");
        }
}
srchPlces(); 

function findings(zAFind){
    let result = diceRoll(4);
        if(result == 0){
        console.log("You found a survivor.");
        Survivor()
        }
        else if(result == 1){
        console.log("You found some gear.");
        Gear()
        }
        else if(result == 2){
        console.log("You found a weapon.");
        Weapons()
        }
        else if(result == 3){
        console.log("You found some medical supplies.");
        Medical()
        }
        else if(result == 4){
        console.log("You found some clothes");
        }
}
findings();  

function Survivor(zASurv){
    let result = diceRoll(6);
        if(result == 0){
        console.log("You left them behind because you saw that they were bit in the leg.");
        }
        else if(result == 1){
        console.log("They tried to attack you, but you escaped safely.");
        }
        else if(result == 2){
        console.log("They werent moving.");
        }
        else if(result == 3){
        console.log("You found a group of survivors, but you avoided them incase they were unfriendly.");
        }
        else if(result == 4){
        console.log("They were looking for they're child but they didnt want your help.");
        }
        else if(result == 5){
        console.log(".");
        }
        else if(result == 6){
        console.log("They were asking for your help and they killed you.")
    }
}
survivor();

function Gear(zAGear){
    let result = diceRoll(12);
        if(result == 0){
            console.log("You found a flashlight.");
        }
        else if(result == 1){
            console.log("You found batteries.")
        }
        else if(result == 2){
            console.log("You found a backpack, but its empty.")
        }
        else if(result == 3){
            console.log("You found a backpack thats full of food and water.")
        }
        else if(result == 4){
            console.log("You found a suitcase, but its empty.")
        }
        else if(result == 5){
            console.log("You found a suitcasethats full of food and water.")
        }
        else if(result == 6){
            console.log("You found a phone but its dead.")
        }
        else if(result == 7){
            console.log("You found a small set of tools.")
        }
        else if(result == 8){
            console.log("You found a small set of tools.")
        }
        else if(result == 9){
            console.log("you didnt find anything.")
        }
        else if(result == 10){
            console.log("you found a broken flashlight thats totally useless.")
        }
        else if(result == 11){
            console.log("you didnt find anything.")
        }
        else if(result == 12){
            console.log("you didnt find anything.")
        }
}
Gear();

function Weapons(zAWpn){
    let result = diceRoll(20);
        if(result == 0){
            console.log("You found a hammer.")
        }
        else if(result == 1){
            console.log("You found a knife.")
        }
        else if(result == 2){
            console.log("You found a crowbar.")
        }
        else if(result == 3){
            console.log("You found an empty pistol.")
        }
        else if(result == 4){
            console.log("You found a shotgun.")
        }
        else if(result == 5){
            console.log("You found a ar15.")
        }
        else if(result == 6){
            console.log("You found a chainsaw.")
        }
        else if(result == 7){
            console.log("You found a very dull axe.")
        }
        else if(result == 8){
            console.log("You found a hatchet.")
        }
        else if(result == 9){
            console.log("you didnt find anything.")
        }
        else if(result == 10){
            console.log("you didnt find anything.")
        }
        else if(result == 11){
            console.log("you didnt find anything.")
        }
        else if(result == 12){
            console.log("you didnt find anything.")
        }
        else if(result == 13){
            console.log("you didnt find anything.")
        }
        else if(result == 14){
            console.log("You found a shovel.")
        }
        else if(result == 15){
            console.log("You found a pick axe.")
        }
        else if(result == 16){
            console.log("You found a machete.")
        }
        else if(result == 17){
            console.log("You found a rusty sickle.")
        }
        else if(result == 18){
            console.log("You founa a katana.")
        }
        else if(result == 19){
            console.log("You found a flamethrower.")
        }
        else if(result == 20){
            console.log("You found a broken glass bottle.")
        }
    }
    Weapons();

function Medical(zAMed){
    let result = diceRoll(6);   
        if(result == 0){
            console.log("You found some bandaids.")
        }
        else if(result == 1){
            console.log("You found a gauze pack.")
        }
        else if(result == 2){
            console.log("You found pain meds.")
        }
        else if(result == 3){
            console.log("You didnt find anything.")
        }
        else if(result == 4){
            console.log("You didnt find anything.")
        }
        else if(result == 5){
            console.log("You didnt find anything.")
        }
        else if(result == 6){
            console.log("You didnt find anything.")
        }
    }
    Medical();  
        
function Clothing(zACloth){
    let result = diceRoll(6);
        if(result == 0){
            console.log("You found some boots.")
        }
        else if(result == 1){
            console.log("You found some shoes.")
        }
        else if(result == 2){
            console.log("You found a hat.")
        }
        else if(result == 3){
            console.log("You found a jacket.")
        }
        else if(result == 4){
            console.log("You found gloves.")
        }
        else if(result == 5){
            console.log("You found cargo pants.")
        }
        else if(result == 6){
            console.log("You didnt find anything.")
        }
    }
    Clothing();    
