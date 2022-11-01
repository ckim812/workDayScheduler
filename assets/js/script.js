// update day at top of page
setInterval(
  () => $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")),
  1000
);

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

// clear saved events from local storage
clearActivity = () => {
  if (localStorage.length > 0) {
    localStorage.clear();
  }
  for (let i = 0; i < rowHourArray.length; i++) {
    document.querySelector(`#activityHour${i + 9}`).textContent =
      localStorage.getItem(`hour${i + 9}`);
  }
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
  document.querySelector(`#activityHour${rowHour}`).textContent =
    localStorage.getItem(`hour${rowHour}`);
});

// add event listeners for each save button
for (let i = 0; i < rowHourArray.length; i++) {
  document
    .querySelector(`#saveBtnHour${i + 9}`)
    .addEventListener("click", () => {
      saveActivity(`${i + 9}`);
    });
}

document
  .querySelector("#clearEvents")
  .addEventListener("click", () => clearActivity());
