// update day at top of page
$("#currentDay").text(moment().format("llll"));

const hours = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];
const currentHour = moment().format("H");
const rowHourArray = [];
var activityArray = [];

// save event typed in textbox
saveActivity = (activityHour) => {
  localStorage.setItem(
    `hour${activityHour}`,
    document.querySelector(`#activityHour${activityHour}`).value
  );
  activityArray[activityHour - 9] = localStorage.getItem(`hour${activityHour}`);
};

hours.forEach((hour, i) => {
  let rowHour = i + 9;
  rowHourArray.push(rowHour);

  // Create Rows that change colors based on current time
  document.querySelector(".container").innerHTML += `
            <div class="row">
                <div class="hour">
                    ${hour}
                </div>
                <textarea id="activityHour${rowHour}" class=${
    rowHour < currentHour
      ? "past"
      : rowHour > currentHour
      ? "future"
      : "present"
  }></textarea>
                <div class="saveBtn">
                <button><i id="saveBtnHour${rowHour}" class="fas fa-save"></i></button>
                </div>
            </div>
        `;
});

for (let i = 0; i < rowHourArray.length; i++) {
  document.querySelector(`#saveBtnHour${i+9}`).addEventListener("click", () => {
    console.log("this button works");
    saveActivity(`${i+9}`);
  });
}