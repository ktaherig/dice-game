let scores, roundScore, currentPlayer, buttonHold;
let diceDOM = document.querySelector('.dice');
let gameOver = false;

function resetAll() {
	/**
	 * This allows us to very easily manage the player
	 * scores. By using an array, we can just say
	 * "scores[1] = rollResult", instead of having
	 * to reference each player individually.
	 */
	scores = [0, 0];
	/**
	 * We use a regular variable for the round score
	 * because only one player is playing at any one
	 * given point in time. Therefore, the round score
	 * can only be one value at any point in time.
	 */
	roundScore = 0;
	currentPlayer = 0;

	gameOver = false;

	diceDOM.style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');
}

resetAll();

function changePlayer() {
	if (!gameOver) {
		document.querySelector(`.player-${currentPlayer}-panel`).classList.toggle('active');
		roundScore = 0;
		document.querySelector('.player-current-score').textContent = roundScore;
		document.querySelector(`#current-${currentPlayer}`).innerText = '0';
		currentPlayer == 0 ? currentPlayer = 1 : currentPlayer = 0;
		document.querySelector(`.player-${currentPlayer}-panel`).classList.toggle('active');
	}
}

function checkWin() {
	if (scores[currentPlayer] >= 100) {
		// the game is over
		document.querySelector(`#name-${currentPlayer}`).textContent = 'Winner!';
		diceDOM.style.display = 'none';
		document.querySelector(`.player-${currentPlayer}-panel`).classList.add('winner');
		document.querySelector(`.player-${currentPlayer}-panel`).classList.remove('active');
		gameOver = true;
		return true;
	}
	return false;
}

document.querySelector('.btn-new').addEventListener('click', resetAll, false);

// add the score from the current round to a player's total score
document.querySelector('.btn-hold').addEventListener('click', function() {
	if (!gameOver) {
		scores[currentPlayer] += roundScore;
		document.querySelector(`#score-${currentPlayer}`).textContent = scores[currentPlayer];
		if (checkWin()) {
			return;
		} else {
			changePlayer();
		}
	}
}, false);

// roll the dice upon the player's turn
document.querySelector('.btn-roll').addEventListener('click', function() {
	if (!gameOver) {
		// first, we generate a random number
		let dice = ((Math.floor(Math.random() * 6)) + 1);

		// show the dice for that number
		diceDOM.style.display = 'block';
		diceDOM.src = `img/dice-${dice}.png`;

		// update the score for that round, but only if the number wasn't "1"
		if (dice !== 1) {
			roundScore += dice;
			document.querySelector(`#current-${currentPlayer}`).textContent = roundScore;
		} else {
			changePlayer();

			diceDOM.style.display = 'none';
		}
	}
}, false);
