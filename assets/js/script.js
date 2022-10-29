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
// var activityArray = [];

// saveActivity = (activityHour) => {
//     localStorage.setItem(`activityForHour${activityHour}`, document.querySelector(`#activityHour${activityHour}`).textContent)
//     activityArray[activityHour] = localStorage.getItem(`activityForHour${activityHour}`);
// }

// console.log(activityArray)

hours.forEach((hour, i) => {
  let rowHour = i + 9;
  rowHourArray.push(rowHour);
  console.log("rowHourArray = " + rowHourArray);
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
                <i id="saveBtnHour${rowHour}" class="fas fa-save"></i>
                </div>
            </div>
        `;

  console.log(document.querySelector(`#activityHour${rowHour}`));
  document.querySelector(`#activityHour${rowHour}`).textContent = "Test";

  console.log(document.querySelector(`.saveBtnHour${rowHour}`));
//   document
//     .querySelector(`.saveBtnHour${rowHour}`)
//     .addEventListener("click", () => console.log("this button works"));
});

console.log(rowHourArray);
// console.log(document.querySelector("'.saveBtnHour' + rowHour"));
console.log(document.querySelector("#activityHour9"));
document.querySelector("#activityHour9").addEventListener("click", () => console.log("this button works"));
// document.getElementById("saveBtnHour9").addEventListener("click", test = () => console.log("click works"));

// rowHourArray.forEach(arrayHour => {
//     document.querySelector(`#activityHour${arrayHour}`).addEventListener("click", saveActivity(arrayHour));
// });
