// function to define game logic
const game = () => {
	// keep track of the score
	let playerScore = 0; 
	let computerScore = 0;
  
	// function contain core of game logic
	const playGame = () => {
		// select element with html document & css classes rock,paper,scissor
	  const rockBtn = document.querySelector('.rock');
	  const paperBtn = document.querySelector('.paper');
	  const scissorBtn = document.querySelector('.scissor');

	  // creating array that contains player choice btns
	  const playerOptions = [rockBtn, paperBtn, scissorBtn];

	  // array to hold comp choices, represented as a string
	  const computerOptions = ['rock', 'paper', 'scissors'];

	  // select element (class 'reload') to relaoad the game
	  const reloadBtn = document.querySelector('.reload');
  
	  // loop: for each btn, event listener is added. function is called when player selects one btn
	  playerOptions.forEach(option => {
		option.addEventListener('click', function () {
			// math.random & math.floor to generate random 0-3 to represent comp choice 
		  const choiceNumber = Math.floor(Math.random() * 3);
		  const computerChoice = computerOptions[choiceNumber];
  
		  // arguments for plyer & comp choice for that round, determine the winner & update score
		  winner(this.innerText, computerChoice);
  
		  // after the winner is determined for current round check if one has scored 10 
		  if (playerScore === 10 || computerScore === 10) {
			gameOver(playerOptions); // if yes game over
		  }
		});
	  });
	};
  
	// define winner function
	const winner = (player, computer) => {
		// determine result of the round
	  const result = document.querySelector('.result');
	  const playerScoreBoard = document.querySelector('.p-count');
	  const computerScoreBoard = document.querySelector('.c-count');
	  player = player.toLowerCase();
	  computer = computer.toLowerCase();

	  // check if its a tie, plyr won, comp won
	  if (player === computer) {
		result.textContent = 'Tie';
	  } else if (
		(player == 'rock' && computer == 'scissors') ||
		(player == 'paper' && computer == 'rock') ||
		(player == 'scissors' && computer == 'paper')
	  ) {
		result.textContent = 'Player Won';
		playerScore++;
		playerScoreBoard.textContent = playerScore;
	  } else {
		result.textContent = 'Computer Won';
		computerScore++;
		computerScoreBoard.textContent = computerScore;
	  }
	};
  
	// define gameover function
	// plyeroptions srgument called when game ends(either reaches 10 )
	  const gameOver = (playerOptions) => {
	  const chooseMove = document.querySelector('.finalMSG');
	  const result = document.querySelector('.result');
	  const reloadBtn = document.querySelector('.reload'); // Define the reload button

	  // hiding plyr choice btn
	  playerOptions.forEach(option => {
		option.style.display = 'none';
	  });

	  // game over message
	  chooseMove.innerText = 'Game Over!!';

	  // display results
	  if (playerScore > computerScore) {
		result.style.fontSize = '2rem';
		result.innerText = 'You Won The Game';
		result.style.color = '#308D46';
	  } else if (playerScore < computerScore) {
		result.style.fontSize = '2rem';
		result.innerText = 'You Lost The Game';
		result.style.color = 'red';
	  } else {
		result.style.fontSize = '2rem';
		result.innerText = 'Tie';
		result.style.color = 'grey';
	  }

	  reloadBtn.innerText = 'Play Again'; // Change button text(choice) to play again
	  reloadBtn.style.display = 'block'; // Show the button
	  reloadBtn.addEventListener('click', () => {
		window.location.reload(); //reload pg after event listner occured
	  });
	};

  
	playGame();
  };
  
  game();
  