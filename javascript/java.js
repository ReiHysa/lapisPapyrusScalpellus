const player = {
    currentChoice : null
  }
  const computer = {
    currentChoice : null
  }
  
  
  function buttonClick(e) {
  //computer
    
    const choices = ["Lapis", "Papyrus", "Scalpellus"];
    const computerScoreSpan = document.querySelector('.computer_result');
    const playerScoreSpan = document.querySelector('.player_result');
    
    const randomIndex =
  Math.floor(Math.random() * choices.length);
  computer.currentChoice = choices[randomIndex];
    
    if (e.target.id === "lapis") {
      player.currentChoice = choices[0];
    } else if (e.target.id === "papyrus") {
      player.currentChoice = choices[1];
    } else {
      player.currentChoice = choices[2];
    }
  
  
  function compareChoices (){
    if(player.currentChoice === computer.currentChoice){
   document.getElementById("result").innerText ="It's a tie! you both chose " + computer.currentChoice;
  } else if (computer.currentChoice === choices[0]){
    if(player.currentChoice === choices[1]){
  document.getElementById("result").innerText ="Player Wins! computer chose "+ computer.currentChoice;
  incrementScore(playerScoreSpan);
    } else {
   document.getElementById("result").innerText ="Computer Wins! computer chose "+ computer.currentChoice;
   incrementScore(computerScoreSpan);
    }
  } else if(computer.currentChoice === choices[1]){
    if(player.currentChoice === choices[2]){
  document.getElementById("result").innerText ="Player Wins! computer chose "+ computer.currentChoice;
  incrementScore(playerScoreSpan);
    } else{
  document.getElementById("result").innerText ="Computer Wins! computer chose "+ computer.currentChoice;
  incrementScore(computerScoreSpan);
    }
  }else if (computer.currentChoice === choices[2]){
    if(player.currentChoice === choices[0]){
  document.getElementById("result").innerText ="Player Wins! computer chose "+ computer.currentChoice;
  incrementScore(playerScoreSpan);
    } else {
   document.getElementById("result").innerText ="Computer Wins! computer chose "+ computer.currentChoice;
   incrementScore(computerScoreSpan);
    }
  }

  }
  
  function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
  }


  function displayResult(result){
    const resultText = document.createElement('p');
    resultText.innerText = result;
    
    document.body.appendChild(resultText);
  }
  compareChoices();
  
  
    
  }
  document.getElementById('lapis').addEventListener('click', buttonClick);
  document.getElementById('papyrus').addEventListener('click', buttonClick);
  document.getElementById('scalpellus').addEventListener('click', buttonClick);
  
  
  