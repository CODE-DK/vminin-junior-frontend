// ---

function getDaysBeforeBirthday(nextBirthdayDate) {
    const diffMs = nextBirthdayDate.getTime() - Date.now();
    return convertMsToDays(diffMs);
  }
  
  function convertMsToDays(ms) {
    return Math.round(ms / 1000 / 60 / 60 / 24);
  }
  
  const nextBirthdayDate = new Date(2023, 3, 5);
  console.log(getDaysBeforeBirthday(nextBirthdayDate));
  
  // ---