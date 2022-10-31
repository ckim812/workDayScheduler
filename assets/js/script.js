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
let savedText = "";

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
                <button><i id="saveBtnHour${rowHour}" class="fas fa-save"></i></button>
                </div>
            </div>
        `;

  console.log(document.querySelector(`#activityHour${rowHour}`));
  document.querySelector(`#activityHour${rowHour}`).textContent = "Test";
  console.log(document.querySelector(`#activityHour${rowHour}`).textContent);

  console.log(document.querySelector(`.saveBtnHour${rowHour}`));
  console.log(document.querySelector(".saveBtnHour9"));
  
  document.querySelector("#saveBtnHour9").addEventListener("click", () => {
    console.log("this button works");
    localStorage.setItem(
      "hour9",
      document.querySelector("#activityHour9").textContent
      );
      savedText = localStorage.getItem("hour9");
  });

  console.log(document.querySelector("#activityHour9").textContent);
  console.log(savedText);
});

console.log(rowHourArray);
// console.log(document.querySelector(.saveBtnHour[1] + rowHourArray[1]));

console.log(document.querySelector("#activityHour9"));

// for (let i = 0; i < rowHourArray.length; i++) {
//   console.log(rowHourArray[i]);
//   console.log("#saveBtnHour" + i);
// }

document
  .querySelector("#saveBtnHour10")
  .addEventListener("click", () => console.log("this button works"));
document
  .querySelector("#saveBtnHour11")
  .addEventListener("click", () => console.log("this button works"));
document
  .querySelector("#saveBtnHour12")
  .addEventListener("click", () => console.log("this button works"));
document
  .querySelector("#saveBtnHour13")
  .addEventListener("click", () => console.log("this button works"));
document
  .querySelector("#saveBtnHour14")
  .addEventListener("click", () => console.log("this button works"));
document
  .querySelector("#saveBtnHour15")
  .addEventListener("click", () => console.log("this button works"));
document
  .querySelector("#saveBtnHour16")
  .addEventListener("click", () => console.log("this button works"));
document
  .querySelector("#saveBtnHour17")
  .addEventListener("click", () => console.log("this button works"));
