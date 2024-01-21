const userChoiceMenu = document.querySelector("#userChoice");
const playBtn = document.querySelector ("#playBtn");
const output = document.querySelector ("#output");

playBtn.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    let cpuChoice = "";

    switch (randomNum){
        case 1:
            cpuChoice = "rock";
            break;
        case 2:
            cpuChoice = "paper";
            break;
        case 3:
            cpuChoice = "scissors";
            break;
        default: 
            cpuChoice = "rock";
            break;
    }

    const userChoice = userChoiceMenu.value;

    if(cpuChoice === userChoice) {
        output.innerHTML = `The CPU chooses ${userChoice}. It's a tie!`;
    } else if (cpuChoice === "rock" && userChoice === "paper") {
        output.innerHTML = "The CPU chooses rock. You win!";
    } else if (cpuChoice === "rock" && userChoice === "scissors") {
        output.innerHTML = "The CPU chooses rock. You lose!";
    } else if (cpuChoice === "paper" && userChoice === "scissors") {
        output.innerHTML = "The CPU chooses paper. You win!";
    } else if (cpuChoice === "paper" && userChoice === "rock") {
        output.innerHTML = "The CPU chooses paper. You lose!";
    } else if (cpuChoice === "scissors" && userChoice === "rock") {
        output.innerHTML = "The CPU chooses scissors. You win!";
    } else if (cpuChoice === "scissors" && userChoice === "paper") {
        output.innerHTML = "The CPU chooses scissors. You lose!";
    }

    // {
    //     output.innerHTML= `The CPU chooses Paper. You lose!`
    // } else if (cpuChoice === "scissors") {
    //     output.innerHTML= `The CPU chooses Scissors. You win!`;
    // }
    


    // switch(userChoice) {
    // case "Rock" && cpuChoice === "rock":
    // console.log("Tie")
    // resultText = "The AI chose Rock. It's a tie!";
    // break;
    // case "Rock" && cpuChoice === "paper":
    // console.log("Loss")
    // resultText = "The AI chose Paper. You lose!";
    // break;
    // case "Rock" && cpuChoice === "scissors":
    // console.log("Win")
    // resultText = "The AI chose Scissors. You win!";
    // break;
//    } Tried to experiment with the code that determines how the site reacts between the user choice and CPU choice before watching the video.

})