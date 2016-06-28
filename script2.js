

// The Rock, Paper, Scissors Game (10 points)

//var userChoice = "";
//var arr = ['rock', 'paper', 'scissors'];
//do {
//    if (arr.indexOf(userChoice) === -1 && userChoice.length > 0) {
//        alert("Wrong input. Please try again.");
//    }
//    userChoice = prompt("Enter rock, paper, or scissors.");
//}
//while (arr.indexOf(userChoice) === -1);
//
//var randomNum = Math.random();
//var computerChoice;
//if (randomNum < 0.333333) {
//    computerChoice = "rock";
//    if (userChoice === "rock") {
//        alert("Draw.")
//    } else if (userChoice === "scissors" ) {
//        alert("You lost. :(");
//    } else {
//        alert("You won. :)")
//    }
//} else if (randomNum < 0.666666) {
//    computerChoice = "paper";
//    if (userChoice === "paper") {
//        alert("Draw.")
//    } else if (userChoice === "rock" ) {
//        alert("You lost. :(");
//    } else {
//        alert("You won. :)")
//    }
//} else {
//    computerChoice = "scissors";
//    if (userChoice === "scissors") {
//        alert("Draw.")
//    } else if (userChoice === "paper" ) {
//        alert("You lost. :(");
//    } else {
//        alert("You won. :)")
//    }
//}


// The Basic Calculator (10 points)

//var firNumber = prompt("Please enter your 1st number.");
//var firstNumber = parseInt(firNumber);
//var secNumber = prompt("Please enter your 2nd number.");
//var secondNumber = parseInt(secNumber);
//var operator = "";
//var operatorsArray = ["add", "subtract", "multiply", "divide"];
//do {
//    if (operatorsArray.indexOf(operator) === -1 && operator.length > 0) {
//        alert("You didn't type correctly.");
//    }
//    operator = prompt("Which would you like to perform: add, subtract, multiply or divide?");
//}
//while 
//    (operatorsArray.indexOf(operator) === -1);
//
//var result;
//var calculate = function(x, y, z) {
//    switch (z) {
//        case "add":
//            result = x + y;
//            break;
//        case "subtract":
//            result = x - y;
//            break;
//        case "multiply":
//            result = x * y;
//            break;
//        case "divide":
//            result = x / y;
//            break;
//    } // end of switch
//}
//calculate(firstNumber, secondNumber, operator);
//alert(result);
    

// Death by JavaScript (4 points each for 20 points total)


// #1
//var userWord = prompt("Enter a word.");
//function alphabeticalOrder(word) {
//    return word.split("").sort().join("");
//}
//console.log(alphabeticalOrder(userWord));


// #2
//var userSentence = prompt("Enter a sentence.");
//var arrChopUpSentence = userSentence.split(" ");
//function arrCapitalizing(words) {
//    return words.map(function(word) {
//        return word.charAt(0).toUpperCase() + word.slice(1);
//    }).join(" ");
//}
//console.log(arrCapitalizing(arrChopUpSentence));


// #3
//var userSentence = prompt("Enter a sentence.");
//function getVowels(string) {
//    var vowels = string.match(/[aeiou]/gi);
//    return vowels === null ? 0 : vowels.length;
//}
//console.log(getVowels(userSentence));


// #4
//var randomId;
//function generateId() {
//    randomId = Math.random().toString(36).substring(2, 10);
//}
//generateId();
//console.log(randomId);


// #5
//var userArray = prompt("Enter three coutry names separated by commas.").split(",");
//function longestCountry(countryArr) {
//    var longest = "";
//    for (i = 0; i < countryArr.length; i++) {
//        if (countryArr[i].length > longest.length) {
//            longest = countryArr[i];
//        }
//    }
//    return longest;
//}
//console.log(longestCountry(userArray));









