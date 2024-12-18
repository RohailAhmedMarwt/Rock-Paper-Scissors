let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");
const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#computerscore");

const genCompChoice = () => {
   const options = ["rock", "paper", "scissor"];
   const randomIdx = Math.floor(Math.random() * 3);
   return options[randomIdx];
};

const playGame = (userChoice) => {
    console.log("User choice is =", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice is =", compChoice);

    const showWinner = (userWin, compChoice, userChoice) => {
        if (userWin) {
            userScore++;
            userScorePara.innerText = userScore;
            message.innerText = `You Win 🎉! Your ${userChoice} beats ${compChoice}`;
            message.style.backgroundColor = 'green';
        } else {
            compScore++;
            compScorePara.innerText = compScore;
            message.innerText = `You lose 😔. ${compChoice} beats your ${userChoice}`;
            message.style.backgroundColor = 'red';
        }
    };

    if (userChoice === compChoice) {
        message.innerText = `Opss Game was Draw 🤝. Play Again`;
        message.style.backgroundColor = 'blue';
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            // paper ho sakta hai ya scissor
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {  // FIXED: Quotes added here
            // rock or scissor nahi hosakta
            userWin = compChoice === "scissor" ? false : true;
        } else {
            // rock or paper to ho nahi sakta
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, compChoice, userChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// Loading Screen Fade-Out after 2 seconds
window.onload = function () {
    setTimeout(function () {
        document.getElementById("loading-screen").style.display = 'none';
    }, 2000); // 2-second delay
};

// JavaScript to add clicked effect on mobile
document.querySelectorAll('.choice').forEach(choice => {
    choice.addEventListener('click', function () {
        // Add the 'clicked' class to apply the effect
        this.classList.add('clicked');
        
        // Remove the 'clicked' effect after 300ms to reset the state
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);  // 300ms delay
    });
});
