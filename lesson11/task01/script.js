// ---

function getDateFormat(date, separator = ".") {
  let day = `${date.getDate()}`;
  let month = `${date.getMonth() + 1}`;
  let year = `${date.getFullYear()}`;

  day = day.length < 2 ? `0${day}` : day;
  month = month.length < 2 ? `0${month}` : month;

  return `${day}${separator}${month}${separator}${year}`;
}

console.log(getDateFormat(new Date()));

// ---