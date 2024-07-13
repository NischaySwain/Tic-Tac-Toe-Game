let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const gencompchoice = () =>{
  const options = ["rock","paper","scissors"];
  const index = Math.floor(Math.random()*3);
  return options[index]; 
}
const drawgame = () =>{
    console.log("game was draw");
    result.innerText = "Game was Draw!";
}
const showwinner = (userwin) =>{
      if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("You Win!");
        result.innerText = "You Win!";
        result.style.backgroundColor = "green";
      }
      else{
        compscore++;
       compscorepara.innerText = compscore;
        console.log("You Lose!");
        result.innerText = "You Lose!";
        result.style.backgroundColor = "red";
      }
}
const playGame = (userchoice) => {
    console.log("user choice = ", userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice = ", compchoice);
    if(userchoice == compchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice == "rock"){
            userwin = compchoice == "paper" ? false : true;
        }
        else if(userchoice == "paper"){
            userwin = compchoice == "scissors" ? false : true;
        }
        else{
            userwin = compchoice == "rock" ? false : true;
        }
        showwinner(userwin);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });

});