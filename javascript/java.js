const player = {
    currentChoice : null
  }
  const computer = {
    currentChoice : null
  }
  
  
  function buttonClick(e) {
  //computer
    
    const winner = ["No way you beat me at this? It wont happen again!", "You actually beat me....how can this be!", "Keep beating me and I will call the guards to execute you!", "Preposterous! I have lost?! Another Round now!", "You've actually beaten me. All my hardwork spent studying to lose to someone called player.",
    "I hate you, beating me so easily. i'll never forgive you!"];
    const loser = ["hahaha I told you, this is way too easy for me!", "I have studied the arts of this game, you are merely a spectator", "You actually thought you stood a change against me?!", "Winning is getting boring now, maybe I should hire you a tutor?", "Someone called player actually thought they could beat me! I am the ancient champion!", "I am your father luke.....if that is even your name. Learn to play this game!", "Have you heard of the muffin man? no? well go to him because you need a new occupation now!"];
    const neutral = ["a tie? Bowties may be cool but this certainly is not", "be happy, you drew against me! the famous ancient winner of rock paper..... I mean Lapis, Papyrus, Scalpellus....", "No result....I guess we can go again then", "drawing really is not fun at all....", "Someone as famous as me cannot draw, so we have to go and do this stuff again"];
    const choices = ["Lapis", "Papyrus", "Scalpellus"];
    const computerScoreSpan = document.querySelector('.computer_result');
    const playerScoreSpan = document.querySelector('.player_result');
    const computerReaction = document.querySelector('.direction');

    
    const randomIndex =
  Math.floor(Math.random() * choices.length);
  computer.currentChoice = choices[randomIndex];

    const winnerIndex = Math.floor(Math.random() * winner.length);
    const loserIndex = Math.floor(Math.random() * loser.length);
    const neutralIndex = Math.floor(Math.random() * neutral.length);
    
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
   document.getElementById("direction").innerText = neutral[neutralIndex];
   document.getElementById("face").src = "pictures/neutral_face.png";
  } else if (computer.currentChoice === choices[0]){
    if(player.currentChoice === choices[1]){
  document.getElementById("result").innerText ="Player Wins! computer chose "+ computer.currentChoice;
  document.getElementById("direction").innerText = winner[winnerIndex];
  incrementScore(playerScoreSpan);
  document.getElementById("face").src = "pictures/sad_face.png";
    } else {
   document.getElementById("result").innerText ="Computer Wins! computer chose "+ computer.currentChoice;
   document.getElementById("direction").innerText = loser[loserIndex];
   incrementScore(computerScoreSpan);
   document.getElementById("face").src = "pictures/happy_face.png";
    }
  } else if(computer.currentChoice === choices[1]){
    if(player.currentChoice === choices[2]){
  document.getElementById("result").innerText ="Player Wins! computer chose "+ computer.currentChoice;
  document.getElementById("direction").innerText = winner[winnerIndex];;
  incrementScore(playerScoreSpan);
  document.getElementById("face").src = "pictures/sad_face.png";
    } else{
  document.getElementById("result").innerText ="Computer Wins! computer chose "+ computer.currentChoice;
  document.getElementById("direction").innerText = loser[loserIndex];
  incrementScore(computerScoreSpan);
  document.getElementById("face").src = "pictures/happy_face.png";
    }
  }else if (computer.currentChoice === choices[2]){
    if(player.currentChoice === choices[0]){
  document.getElementById("result").innerText ="Player Wins! computer chose "+ computer.currentChoice;
  document.getElementById("direction").innerText = winner[winnerIndex];
  incrementScore(playerScoreSpan);
  document.getElementById("face").src = "pictures/sad_face.png";
    } else {
   document.getElementById("result").innerText ="Computer Wins! computer chose "+ computer.currentChoice;
   document.getElementById("direction").innerText = loser[loserIndex];
   incrementScore(computerScoreSpan);
   document.getElementById("face").src = "pictures/happy_face.png";
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
  
  
  