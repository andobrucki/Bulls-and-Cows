// Bulls and Cows
// Setting up chalk and prompt
const chalk = require('chalk');
const prompt = require('prompt-sync')({ sigint: true });

const randomMessages = [
	'You did not match any numbers, try again.',
	'Not a match, try your luck again!',
	'Not the winning combo, but do not give up yet!',
	'Those numbers were not magic. Go for another round!',
	'Try again',
	'Not your day, give it another try',
	'Roll the dice again!',
];

// Function for user name
let name = prompt(chalk.blue('What is your name? '));
function createUserName(nameInput) {
	!nameInput ? (name = 'Stranger') : (name = name);
}
createUserName(name);

// Function: choosing level
// the level chooser function generates the length of the secret word
function levelChooser() {
	let lengthSecretNum = 0;
	let levelInput = prompt(
		chalk.blue(
			`Ok, ${name}! Which level would you like to play? Easy(1), medium(2) or hard(3)? `
		)
	);
	if (levelInput == '1') {
		console.log(chalk.yellow(`Ok, easy for you.`));
		lengthSecretNum = 2;
	} else if (levelInput === '2') {
		console.log(chalk.yellow(`Medium, of course.`));
		lengthSecretNum = 3;
	} else if (levelInput === '3') {
		console.log(chalk.yellow(`Hard, alright.`));
		lengthSecretNum = 4;
	} else {
		console.log(
			chalk.redBright(`Invalid input, please enter a number between 1 and 3.`)
		);
		levelChooser();
	}
	return lengthSecretNum;
}

//Function: Creating secret number
//Secret number based on length from level function // individual digits
function createSecretNumber(length) {
	const digits = [];
	while (digits.length < length) {
		const digit = Math.floor(Math.random() * 10).toString();
		if (!digits.includes(digit)) {
			digits.push(digit);
		}
	}
	return digits.join('');
}

// Function: ask if user knows the rules
// If the user knows the rules she starts playing right away
// If she doesn't showInstructions() based on the secretNumber length
function askForTheRules(secretNumber) {
	let question = prompt(
		chalk.black.yellow(`Do you know the rules of the game ${name}? Y/N: `)
	);
	console.clear();
	if (question.toUpperCase() === 'N') {
		showInstructions(secretNumber.length);
	} else {
		console.log(chalk.yellow(`\nLet´s go, ${name}`));
	}
}

// Function: show instructions
function showInstructions(len) {
	let instructions = `Bulls 🐂 and Cows 🐄 Game\n-------------------\n According to your level choice you must guess the ${len} digit number I am thinking of. \n The number is composed of the digits 1-9.\n No digit appears more than once.\n After each of your guesses, I will tell you:\n The number of 🐂 bulls (digits in right place)\n The number of 🐄 cows (correct digits, but in the wrong place)\n `;
	console.log(chalk.blue(instructions));
}

// Function: wrong input alert // compare users guess with secret number
function wrongInputAlert(number, input) {
	if (!/^\d+$/.test(input)) {
		console.log(chalk.red(`Hey, only numbers are allowed!`));
		return false;
	}
	if (number.length !== input.length) {
		console.log(
			chalk.red(
				`${input} is not a valid number! You need ${number.length} digits!`
			)
		);
		return false;
	}
	return true;
}

// Function: generates random message if user does not match any numbers
function randomMessage() {
	let randomMessage =
		randomMessages[Math.floor(Math.random() * randomMessages.length)];
	return randomMessage;
}

// Function: play game again
function playAgain() {
	let playAgainGame = '';
	playAgainGame = prompt(chalk.blue(`Do you want to play again? Y / N `));
	if (playAgainGame.toUpperCase() === 'Y') {
		start();
	} else if (playAgainGame.toUpperCase() === 'N') {
		console.log(
			chalk.blue(`Thanks for participating, ${name}. See you next time.`)
		);
	} else {
		console.log(chalk.red(`Invalid input.`));
		playAgain();
	}
}

// Function: Play the Game
function playTheGame(secretNumber) {
	let attempts = 0;
	while (true) {
		attempts++;
		const guessedNumber = prompt(chalk.yellow('Guess a number: '));
		if (!wrongInputAlert(secretNumber, guessedNumber)) {
			continue; //refer to function wrongInputAlert // if it returns false program continues
		}
		if (secretNumber === guessedNumber) {
			console.log(
				chalk.magentaBright(
					`Congrats, ${name}, you won after ${attempts} attempts!`
				)
			);
			break; //Exit when secret number and guessed number match // Won!
		}
		// now setting up cows and bulls
		// if the number is in the right position it will count a bull
		// if the number is right but in the wrong position it will count a cow
		let cows = 0;
		let bulls = 0;
		for (let i = 0; i < secretNumber.length; i++) {
			if (secretNumber[i] === guessedNumber[i]) {
				// if numbers at same position bulls get increased
				bulls++;
			} else if (secretNumber.includes(guessedNumber[i])) {
				// if string includes number cows get increased
				cows++;
			}
		}
		//result:
		if (bulls === 0 && cows === 0) {
			console.log(chalk.red(randomMessage()));
		} else {
			console.log(
				chalk.blue(`You found ${cows} 🐄 cows and ${bulls} 🐂 bulls.`)
			);
		}
		if (attempts > 10) {
			console.log(
				chalk.greenBright.bgBlackBright(
					'Game over! You reached the maximum of 10 attempts.'
				)
			);
			break;
		}
	}
}

function start() {
	const lengthSecretNum = levelChooser();
	const secretNumber = createSecretNumber(lengthSecretNum);
	askForTheRules(secretNumber);
	playTheGame(secretNumber);
	playAgain();
}
start();
