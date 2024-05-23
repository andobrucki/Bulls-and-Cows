// Bulls and Cows
// Chalk and readline Sync
const chalk = require('chalk');
const prompt = require('prompt-sync')({ sigint: true });

let name = prompt(chalk.magenta('What is your name? '));
let lengthSecretNum = prompt(
	chalk.magenta('What is your favorite number between 2 and 6? ')
);

//Function > Computer comes up with secret number
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

const secretNumber = createSecretNumber(lengthSecretNum); // might change that to length according to level

// Function > ask if user knows the rules
function askForTheRules() {
	let question = prompt(
		chalk.black.yellow(`Do you know the rules of the game ${name}? Y/N: `)
	);
	console.clear();
	if (question.toUpperCase() === 'N') {
		showInstructions(lengthSecretNum);
	} else {
		console.log(chalk.yellow(`\nLet´s go, ${name}`));
	}
}
askForTheRules();

// Function > show instructions
function showInstructions(len) {
	console.log();
	console.log(chalk.blueBright('Bulls 🐂 and Cows 🐄 Game'));
	console.log(chalk.blueBright('-------------------'));
	console.log(
		chalk.blueBright(
			'  You must guess the ' + len + ' digit number I am thinking of.'
		)
	);
	console.log(chalk.blueBright('  The number is composed of the digits 1-9.'));
	console.log(chalk.blueBright('  No digit appears more than once.'));
	console.log(
		chalk.blueBright('  After each of your guesses, I will tell you:')
	);
	console.log(
		chalk.blueBright('    The number of bulls (digits in right place)')
	);
	console.log(
		chalk.blueBright(
			'    The number of cows (correct digits, but in the wrong place)'
		)
	);
	console.log();
}

// Function Compare users guess with secret number
function wrongInputAlert(number, input) {
	if (number.length !== input.length) {
		console.log(
			chalk.red(
				`${input} is not a valid number! You need ${secretNumber.length} digits!`
			)
		);
		return false;
	}
	if (!/^\d+$/.test(input)) {
		console.log(chalk.red(`Hey, only numbers are allowed!`));
		return false;
	}
	return true;
}

function randomMessage () {
	const randomMessages = ['You did not match any numbers, try again.', 'Not a match, try your luck again!','Not the winning combo, but do not give up yet!', 'Those numbers were not magic. Go for another round!']
}

// Function play again
function playAgain() {
	let playAgainGame = '';
	playAgainGame = prompt(chalk.yellow(`Do you want to play again? Y / N `));
	if (playAgainGame.toUpperCase() === 'Y') {
		return start();
	} else if (playAgainGame.toUpperCase() === 'N') {
		console.log(
			chalk.yellow(`Thanks for participating, ${name}. See you next time.`)
		);
	} else console.log(chalk.yellow(`Invalid input.`));
}
// Function Play the Game
function playTheGame() {
	let attempts = 0;
	while (true) {
		attempts++;
		const guessedNumber = prompt(chalk.yellow('Guess a number: '));
		if (!wrongInputAlert(secretNumber, guessedNumber)) {
			continue; //refer to function wronInputAlert that checks whether guessed input is valid / if yes, continue
		}

		if (secretNumber === guessedNumber) {
			console.log(
				chalk.magentaBright(
					`Congrats, ${name}, you won after ${attempts} attempts!`
				)
			);
			break; //Exit when secret number and guessed number match
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
			console.log(chalk.red(`You did not match any numbers, try again.`));
		} else {
			console.log(chalk.blue(`You found ${cows} cows and ${bulls} bulls.`));
		}
	}
}

function start() {
	playTheGame();
	playAgain();
}
start();
