let winner = "";
let compScore = 0;
let userScore = 0;


function add(a, b) {
    return a + b;
}

function game(choice) {


    console.log(choice);

    let compChoice = computerPlay();
    playRound(choice, compChoice);

    document.getElementById("Score").innerHTML = winner + "\n" + "Score is now Human: " + userScore + ", Machine: " + compScore;
    if (compScore == 5) {
        document.getElementById("finalMessage").innerHTML = "Game Over, Computer wins!";
    }
    if (userScore == 5) {
        document.getElementById("finalMessage").innerHTML = "Game Over, Human wins!";
    }


}

function computerPlay() {
    const play = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * play.length);
    //console.log(random, play[random]);
    return play[random];
}

function playRound(playerSelection, computerSelection) {

    // winner = ""; // clear out the variable
    if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Scissors" ||
        playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Paper" ||
        playerSelection.toUpperCase() == "PAPER" && computerSelection == "Rock")

    {
        winner = "You Win! " + playerSelection + " beats " + computerSelection;
        userScore++;
    } else {
        winner = "You Lose! " + computerSelection + " beats " + playerSelection;
        compScore++;
    }
    return winner;
}
// const playerSelection = "rock";
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));