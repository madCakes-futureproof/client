// get form data
const newHabit = document.getElementById('newHabit')
console.log(newHabit)

newHabit.addEventListener('submit', addHabit)

const habits = {}

async function addHabit(e) {
    e.preventDefault()

    try{

        const name = document.getElementById('name').value
        const repetitions = document.getElementById('repetitions').value
        const frequency = document.getElementById('frequency').value

        const habit = {
            name: name,
            repetitions: repetitions,
            frequency: frequency,
            completed: false,
            streak: 0,
            user_id: 1
        }

        habits.push(habit)

        console.log(content)

        
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        }
        
        const response = await fetch("https://hacker-health-tracker.herokuapp.com/habits", options)
        const data = await response.json()
        
        console.log(data)

        displayHabit()
        
    } catch (err){
        alert(err)
    }
}

displayHabit(habits)

function displayHabit(habits) {

    habits.forEach(habit => {
        
        
    });
    const markup = `
        <li>
        <input type="checkbox" ${
    habit.completed ? "checked" : ""
    } />
        <label><span>${habit.repetitions}/${habit.repetitions} ${
    habit.timeframe
    }</span> ${habit.text}</label>
    <p>Streak:${habit.streak}</p>
    <button class="delete" ">Delete</button>
    </li>`

        
}
