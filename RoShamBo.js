let winner="";
let compScore=0;
let userScore=0;
 function add(a, b){
     return a + b;
    }
    function game()
    {
        compScore=0;
        userScore=0;
        for (let i=1; i<6; i++)
        {
            let choice = prompt("Please enter rock, paper or scissors");
            let compChoice=computerPlay();
          playRound(choice,compChoice);
        
          alert(winner+ "\n" + "Score is now Human: " + userScore +", Machine: " +compScore );
        }
    }
 function computerPlay()
 {
    const play = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * play.length);
    //console.log(random, play[random]);
    return play[random];
 }
 function playRound(playerSelection, computerSelection) {
  
    winner=""; // clear out the variable
    if(playerSelection.toUpperCase()=="ROCK" && computerSelection=="Scissors" ||
    playerSelection.toUpperCase()=="SCISSORS" && computerSelection=="Paper" ||
    playerSelection.toUpperCase()=="PAPER" && computerSelection=="Rock")
    
    {winner="You Win! " + playerSelection + " beats " + computerSelection;
userScore++;
}
    
  else
  {
      winner="You Lose! " + computerSelection  + " beats " +  playerSelection;
      compScore++;
  }
  return winner;
}
 // const playerSelection = "rock";
  //const computerSelection = computerPlay();
  //console.log(playRound(playerSelection, computerSelection));
  