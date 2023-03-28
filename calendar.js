// Create a new date object for the current month
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();

// Define a function to render the calendar
function renderCalendar(year, month) {
  // Set the current month and year
  var date = new Date(year, month);
  
  // Set the current month name and year in the navigation
  // Extracting full name of the month from date object then setting that info
  var monthName = date.toLocaleString('default', { month: 'long' });
  document.getElementById("currentMonth").innerHTML = monthName + " " + year;
  
  // Clearing the previous weeks from the calendar using query selector and then putting that strnig blank
  var weeksDiv = document.querySelector(".weeks");
  weeksDiv.innerHTML = "";
  
  //adding  the weeks to the calendar using a whileloop
  var weekDiv, dayDiv, dayDate;
  while (date.getMonth() == month) {
     //creating an div element of the weeks and adding it to the weeks 
    weekDiv = document.createElement("div");
    weekDiv.classList.add("week");
    //loop executes 7 times to crate 7 days of the week
    for (var i = 0; i < 7; i++) {
      dayDate = new Date(date);
      dayDate.setDate(date.getDate() + i - date.getDay());
      //goes through the loop and keeps creating new date objects
      dayDiv = document.createElement("div");
      dayDiv.classList.add("day");
      //creating div elements and adding the day to them
      //checking if current month is equel to passed in month, and if so passing to appropriate div
      //if not we add the previous month
      if (dayDate.getMonth() == month) {
        dayDiv.classList.add("currentMonth");
      } else {
        dayDiv.classList.add("prevMonth");
      }
      dayDiv.innerHTML = dayDate.getDate();
      weekDiv.appendChild(dayDiv);
    }
    weeksDiv.appendChild(weekDiv);
    date.setDate(date.getDate() + 7 - date.getDay());
  }
}

//Rendering the current month's calendar 
renderCalendar(currentYear, currentMonth);

//Adding event listeners to the navigation buttons
document.getElementById("prevMonth").addEventListener("click", function() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentYear, currentMonth);
});

document.getElementById("nextMonth").addEventListener("click", function() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentYear, currentMonth);
});

