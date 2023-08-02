"use strict";

const score = document.getElementById("score");

function rollDice() {
  let goldCoins = 0;

  for (let i = 0; i < 10; i++) {
    let roll = Math.floor(Math.random() * 6 + 1);
    console.log(roll);
    alert(`You rolled a ${roll}!`);

    if (roll === 1) {
      alert("Game over, no more rolls!");
      break;
    } else if (roll < 5) {
        if (roll === 4 && goldCoins !== 0) {
          roll = 0;
          goldCoins--;
          alert('You lost a gold coin!');
        }
        continue;
    } else if (roll === 5) {
      alert("Congratulations, you win 5 gold coins!");
    } else if (roll === 6) {
      alert("Congratulations, you win 6 gold coins!");
    }

    goldCoins += roll;
    //score.textContent = goldCoins;
  }
  alert(`You ended the game with ${goldCoins} gold coins!`);
  score.textContent = `Gold Coins: ${goldCoins}`;
}