const addHabits = document.querySelector(".add-habit");
const habitsList = document.querySelector(".habits");
const { API_URL } = require("./config");
const { postJSON } = require("./helpers");
const createHabitObj = require("./model2")

// send to server 
const habits = JSON.parse(localStorage.getItem("habits")) || [];


function streak() {
    // let streakCount = 0;
    // let repetitions =

    // if(repetitions = )
    let counter = 0;
    let submitButton = document.getElementById('submitButton');

    let inputSubmitButton = document.getElementById('inputSubmit');

    submitButton.addEventListener('click', function() {
      counter++;
      console.log(counter);
    });


    inputSubmitButton.addEventListener('click', function(e) {
    e.preventDefault();
    counter++;
    console.log(counter);
    });

}

function addHabit(e) {
  e.preventDefault();
  const name = this.querySelector("[name=habit]").value;
  const repetitions = +this.querySelector("[name=reps]").value;
  const frequency = this.querySelector("[name=timeframe]").value;

  // setup on html
  const completed = Boolean;
  const streak = beans;
  const user_id = null;

  const habit = {
    name: name,
    repetitions: repetitions,
    frequency: frequency,
    completed: completed,
    streak: streak,
  };

  postJSON(API_URL, habit)

  listHabits(habit, habitsList);


  this.reset();
  console.log(habit);
}

function listHabits(habit = [], habitsList) {
  habitsList.innerHTML = habits
    .map((habit, i) => {
      return `
            <li>
            <input type="checkbox" data-index=${i} id="habit${i}" ${
        habit.completed ? "checked" : ""
      } />
            <label for="habit${i}"><span>${habit.reps}/${habit.totalCounts} ${
        habit.timeframe
      }</span> ${habit.text}</label>
        <button class="delete" data-index=${i} id="delete${i}">Delete</button>
        </li>
        `;
    })
    .join("");
}

// Toggle If Complete
function toggleCompleted(e) {
  if (!e.target.matches("input")) return;
  const el = e.target;
  const index = el.dataset.index;
  habits[index].reps += 1;

  if (habits[index].reps === habits[index].totalCounts) {
    habits[index].completed = true;
  } else if (habits[index].reps > habits[index].totalCounts) {
    habits[index].reps = 0;
    habits[index].completed = false;
  }

  listHabits(habits, habitsList);
  localStorage.setItem("habits", JSON.stringify(habits));
}

// Delete Habit
function deleteHabit(e) {
  if (!e.target.matches("button")) return;
  const el = e.target;
  const index = el.dataset.index;

  habits.splice(index, 1);

  listHabits(habits, habitsList);
  localStorage.setItem("habits", JSON.stringify(habits));
}

addHabits.addEventListener("submit", addHabit);
habitsList.addEventListener("click", toggleCompleted);
habitsList.addEventListener("click", deleteHabit);

listHabits(habits, habitsList);
