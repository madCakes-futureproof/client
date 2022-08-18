const addHabits = document.querySelector(".add-habit");
const habitsList = document.querySelector(".habits");
const habits = JSON.parse(localStorage.getItem("habits")) || [];

let habit = {}

function addHabit(e) {
  e.preventDefault();
  const text = this.querySelector("[name=habit]").value;
  const totalCounts = this.querySelector("[name=reps]").value;
  const timeframe = this.querySelector("[name=timeframe]").value;

  habit = {
    text: text,
    reps: 0,
    totalCounts: totalCounts,
    timeframe: timeframe,
    completed: false,
    streak: 0
  };

  habits.push(habit);
  listHabits(habits, habitsList);
  localStorage.setItem("habits", JSON.stringify(habits));
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
      <p>Streak:${habit.streak}</p>
        <button class="delete" data-index=${i} id="delete${i}">Delete</button>
        </li>
        `;
    })
    .join("");
}



// Toggle If Complete
// function toggleCompleted(e) {
//   if (!e.target.matches("input")) return;
//   const el = e.target;
//   const index = el.dataset.index;
//   habits[index].reps += 1;

//   if (habits[index].reps > habits[index].totalCounts) {
//     habits[index].reps = 0;
//     habits[index].completed = false;
//   } 
//   if (habits[index].reps === habits[index].totalCounts) {
//     habits[index].completed = true;
//     incrementStreak()
//     habits[index].reps = 0
//   }

//   listHabits(habits, habitsList);
//   localStorage.setItem("habits", JSON.stringify(habits));
// }

function incrementStreak() {
    let counter = 0
    counter++

    habit.streak = counter
    return habit.streak
    // display streak
}
const showStreak = function() {
    return 
}

function displayStreak() {
    
}


// Delete Habit
function deleteHabit(e) {
  
}

addHabits.addEventListener("submit", addHabit);
habitsList.addEventListener("click", toggleCompleted);
habitsList.addEventListener("click", deleteHabit);

listHabits(habits, habitsList);
