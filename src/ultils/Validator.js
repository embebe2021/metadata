const checkValidDate = (day, month, year) => {
  if (
    day.length === 0 ||
    day.length > 2 ||
    month.length === 0 ||
    month.length > 2 ||
    year.length === 0 ||
    year.length > 4 ||
    year.length < 4
  )
    return false;
  else {
    let dayInt = parseInt(day);
    let monthInt = parseInt(month);
    let yearInt = parseInt(year);
    if (isNaN(dayInt) || isNaN(monthInt) || isNaN(yearInt)) {
      return false;
    }
    if (yearInt <= 1970 || yearInt > 2050) return false;
    if (dayInt < 1 || yearInt < 1) return false;
    if (monthInt > 12 || monthInt < 1) return false;
    if (
      (monthInt === 1 ||
        monthInt === 3 ||
        monthInt === 5 ||
        monthInt === 7 ||
        monthInt === 8 ||
        monthInt === 10 ||
        monthInt === 12) &&
      dayInt > 31
    )
      return false;
    if (
      (monthInt === 4 || monthInt === 6 || monthInt === 9 || monthInt === 11) &&
      dayInt > 30
    )
      return false;
    if (monthInt === 2) {
      if (
        (yearInt % 4 === 0 && yearInt % 100 !== 0) ||
        (yearInt % 400 === 0 && yearInt % 100 === 0)
      ) {
        if (dayInt > 29) return false;
      } else {
        if (dayInt > 28) return false;
      }
    }
    return true;
  }
};

function ValidateEmail(input) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

export {
  checkValidDate,
  ValidateEmail
} 
