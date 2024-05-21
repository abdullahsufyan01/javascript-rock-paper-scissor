let choices = document.querySelectorAll(".choice");
const userChoiceMsg = document.querySelector("#user-choice-msg")
const compChoiceMsg = document.querySelector("#comp-choice-msg")
const msg = document.querySelector("#msg")
const userScore = document.querySelector("#user-score")
const compScore = document.querySelector("#comp-score")

let userScoreCount = 0;
let compScoreCount = 0;

const compChoice = ()=>{
    const comChoices  = ["rock", "paper", "scissor"];
    const randomIndx = Math.floor(Math.random()*3);
    return comChoices[randomIndx]
}

const drawGame = ()=>{
    msg.innerText = "Game Drawn"
    msg.style.backgroundColor = "#f00"
}

const showWinner = (userWin,userChoice,compCh)=>{
    if(userWin){
        userScoreCount++;
        msg.innerText = `You Won! Your ${userChoice} beats ${compCh} `
        msg.style.backgroundColor = "green"
        userScore.innerText = userScoreCount
    }

    else{
        compScoreCount++;
        msg.innerText = `You Lost!  ${compCh} beats ${userChoice} `
        msg.style.backgroundColor = "red"
        compScore.innerText=compScoreCount;
    }
    

}

const playGame = (userChoice)=>{
    const compCh = compChoice()
    console.log("user choice is  " + userChoice);
    userChoiceMsg.innerText = userChoice
    console.log("computer choice is " + compCh);
    compChoiceMsg.innerText = compCh

    if(userChoice===compCh){
        drawGame()
    }
    else {
        let userWin = true ;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compCh === "paper" ? false : true;
          } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compCh === "scissors" ? false : true;
          } else {
            //rock, paper
            userWin = compCh === "rock" ? false : true;
          }
    showWinner(userWin, userChoice, compCh)

    }


}

choices.forEach((choice)=>{
    const userChoice =choice.getAttribute("id")
    choice.addEventListener("click", ()=>{
        playGame(userChoice)
    })
})
