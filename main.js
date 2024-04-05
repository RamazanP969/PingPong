const container = document.querySelector('.container');
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const ball = document.getElementById('ball');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const containerRect = container.getBoundingClientRect();

let playerPosition = 250;
let computerPosition = 250;

let ballX = 500;
let ballY = 300;

let ballSpeedX = -4;
let ballSpeedY = 3;

let playerScore = 0;
let computerScore = 0;

function update() {
    player.style.top = `${playerPosition}px`;
    computer.style.top = `${computerPosition}px`;

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballY <= 0 || ballY >= containerRect.height - 20) {
        ballSpeedY = -ballSpeedY;
    }

    if (ballX <= 30 && ballY >= playerPosition && ballY <= playerPosition + 100) {
        ballSpeedX = -ballSpeedX;
    }

    if (ballX >= containerRect.width - 50 && ballY >= computerPosition && ballY <= computerPosition + 100) {
        ballSpeedX = -ballSpeedX;
    }

    if (ballY > computerPosition + 50) {
        computerPosition += 3;
    } else {
        computerPosition -= 3;
    }
    if (ballX <= 0 || ballX >= containerRect.width - 20) {
        if (ballX <= 0) {
            computerScore++;
            computerScoreDisplay.innerText = computerScore;
        } else {
            playerScore++;
            playerScoreDisplay.innerText = playerScore;
        }
  

        resetBall();
    }
    if(computerScore == 20){
        location. reload()
    }
    if(playerScore == 20){
        location. reload()      
    }
    // Repeat the game loop
    requestAnimationFrame(update);
}

function resetBall() {
    ballX = containerRect.width / 2;
    ballY = containerRect.height/ 2;
    ballSpeedX = ballSpeedX - 2;
    ballSpeedY = Math.random() > 0.5 ? 3 : -3;
    
}

document.addEventListener('mousemove', function(event) {
    playerPosition = event.clientY - containerRect.top - 50;
});


update(); 
