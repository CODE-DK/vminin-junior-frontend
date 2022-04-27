// --- Задание #2

function startGame(heroPlayer, enemyPlayer) {
    while (true) {
      const bounds = getRandomNumberInRange(0, 1);
  
      if (bounds === 0) {
        heroPlayer.heatEnemy(enemyPlayer);
        if (enemyPlayer.health === 0) {
          return gameOver(heroPlayer);
        }
      }
  
      if (bounds === 1) {
        enemyPlayer.heatHero(heroPlayer);
        if (heroPlayer.health === 0) {
          return gameOver(enemyPlayer);
        }
      }
    }
  }
  
  function gameOver(player) {
    console.log(`${player.name} победил! У него осталось ${player.health} здоровья`);
  }
  
  function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const hero = {
    name: "Batman",
    health: 100,
  
    heatEnemy(enemy) {
      enemy.health -= 10;
    },
  };
  
  const enemy = {
    name: "Joker",
    health: 100,
  
    heatHero(hero) {
      hero.health -= 10;
    },
  };
  startGame(hero, enemy);

  // ---