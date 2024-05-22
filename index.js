// Bulls and Cows
// Get library for user input
// we need to keep the next line, so we can prompt the user for input
const prompt = require('prompt-sync')({ sigint: true });

let name = prompt('What is your name? ');
let lengthSecretNum = prompt('What is your favorite number between 2 and 6?');

//1. Function > Computer comes up with secret number
function createSecretNumber(length) {
	const digits = [];
	while (digits.length < length) {
		const digit = Math.floor(Math.random() * 10).toString();
		if(!digits.includes(digit)) {
			digits.push(digit);
		}
	}
	return digits.join('');
}

const secretNumber = createSecretNumber(lengthSecretNum);

// //2. Function > checks if the number is a valid number:
// function checkNumber(number) {
// 	if (number.length !== 4) {
// 		return false;
// 	}
// 	for (let i = 0; i < number.length; i++) {
// 		if (number.indexOf(number[i]) !== i) {
// 			return false;
// 		}
// 	}
// 	return `Ok, ${secretNumber} is a valid number. Now let's see if the player can guess it.`;
// }
// console.log(checkNumber(secretNumber));

// Function > ask if user knows the rules
function askForTheRules() {
	let question = prompt(`Do you know the rules of the game ${name}? Y/N: `);
	console.clear();
	if (question.toUpperCase() === 'N') {
		showInstructions(4);
		//	  console.log(`\n${rulesMessage}\n\nLet´s go ${findTheUser}\n`);
	} else {
		console.log(`\nLet´s go ${name}`);
	}
}
askForTheRules();

// Function > show instructions
function showInstructions(len) {
	console.log();
	console.log('Bulls and Cows Game');
	console.log('-------------------');
	console.log(
		'  You must guess the ' + len + ' digit number I am thinking of.'
	);
	console.log('  The number is composed of the digits 1-9.');
	console.log('  No digit appears more than once.');
	console.log('  After each of your guesses, I will tell you:');
	console.log('    The number of bulls (digits in right place)');
	console.log(
		'    The number of cows (correct digits, but in the wrong place)'
	);
	console.log();
}

// Function // Compare users guess with secret number
// function wrongInputAlert(number, input) {
// 	if (number.length !== input.length) {
// 		console.log(
// 			`${input} is not a valid number! You need ${secretNumber.length} digits!`
// 		);
// 		return false;
// 	}
// 	if (!/^\d+$/.test(input)) {
// 		console.log(`Hey, only numbers are allowed! Try again, ${name}!`);
// 		return false;
// 	}
// 	return true;
// }

// wrongInputAlert(secretNumber, guessedNumber);


// Function Play the Game
function playTheGame() {
	
	let attempts = 0;
	while (true) {
		attempts++;
		guessedNumber = prompt('Guess a number: ')
		if (secretNumber === guessedNumber) {
			console.log(`Congrats, ${name}, you won!`);
			break;
		}
	// now setting up cows and bulls
	// if the number is in the right position it will count a bull
	// if the number is right but in the wrong position it will count a cow
		let cows = 0;
		let bulls = 0;
		for (let i = 0; i < secretNumber.length; i++) {
			if (secretNumber[i] === guessedNumber[i]) {
				bulls++;
			} else if (secretNumber.includes(guessedNumber[i])) {
				cows++;
			}
		}

		if (bulls === 0 && cows === 0) {
			console.log(`You did not match any numbers, try again.`);
		} else {
			console.log(`You found ${cows} cow  and ${bulls} bulls.`);
		}
	}
}
playTheGame();