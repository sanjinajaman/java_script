//
let gameNumber=25;
let userNumber=prompt("Guess the gameNumber:");
while (userNumber == gameNumber) {
    console.log("Congratulations, You entered the right number");
}


userNumber= prompt("You entered wrong number. Guess again the gameNumber");  