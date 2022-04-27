// --- Задание#3

function getKiller(suspectInfo, deadPeople) {
  for (const [suspect, victims] of Object.entries(suspectInfo)) {
    let isKiller = false;
    for (const dead of deadPeople) {
      if (victims.includes(dead)) {
        isKiller = true;
      }
    }
    if (isKiller) {
      return suspect;
    }
  }
  return "<unknown>";
}

const james = getKiller(
  {
    James: ["Jacob", "Bill", "Lucas"],
    Johnny: ["David", "Kyle", "Lucas"],
    Peter: ["Lucy", "Kyle"],
  },
  ["Lucas", "Bill"],
); // Убийца James
console.log("Убийца", james);

const megan = getKiller(
  {
    Brad: [],
    Megan: ["Ben", "Kevin"],
    Finn: [],
  },
  ["Ben"],
); // Убийца Megan
console.log("Убийца", megan);

// ---
