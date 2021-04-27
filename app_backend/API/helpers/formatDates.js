//function that takes in two DD-MM-YYYY dates and returns age
function formatDates(date) {
  // user DOB is formatted on creation here we are formatting to a num array with built in methods
  var cleanDOB = date.split("/").reverse().map(Number);

  // contructing new date and covernt to num array
  var dateNow = new Date(Date.now()).toLocaleString();
  var formatedToday = dateNow.split(",")[0];
  var current_date = formatedToday.split("/").reverse().map(Number);

  //if diff is greater the 18 yrs
  var year_difference = current_date[0] - cleanDOB[0];
  var month_difference = current_date[1] - cleanDOB[1];
  var day_difference = current_date[2] - cleanDOB[2];

  // did not end up using the bc i found a better way
}

console.log(formatDates("04/24/1980"));
