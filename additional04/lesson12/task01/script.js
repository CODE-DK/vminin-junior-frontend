const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
};

const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,

  checkChancesToWin: function (defenderObject) {
    let chance = 0,
      maxChance = 0;
    for (const [k, v] of Object.entries(this)) {
      if (typeof v === "function") continue;
      const defenderV = defenderObject[k];
      chance += v > defenderV ? 1 : 0;
      maxChance++;
    }
    return [chance, maxChance];
  },

  improveArmy: function () {
    for (const [k, v] of Object.entries(this)) {
      if (typeof v === "function") continue;
      this[k] += 5;
    }
  },

  attack: function (defender) {
    const [ourArmyChances, maximumChances] = this.checkChancesToWin(defender);
    const currentChance = ourArmyChances / maximumChances;

    if (currentChance < 0.7) {
      this.improveArmy();
      console.log(
        `Наши шансы равны ${ourArmyChances}/${maximumChances}. Необходимо укрепление!`,
      );
    } else {
      console.log("Мы усилились! Мы несомненно победим! Наши шансы высоки!");
    }
  },
};

attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление!
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление!
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!
