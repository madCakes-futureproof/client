// get form data
const newHabit = document.getElementById('newHabit')
const habitContainer = document.querySelector('.habits')

newHabit.addEventListener('submit', addHabit)

const habits = []

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

        console.log(habit)

        
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(habit)
        }
        
        const response = await fetch("https://hacker-health-tracker.herokuapp.com/habits", options)
        const data = await response.json()
        
        console.log(data)

        displayHabit(habits)
        
        
    } catch (err){
        alert(err)
    }
}



function displayHabit(habits) {

    habitContainer.innerHTML = habits.map(habit => {

        let counter = 0;
        return `
            <li>
            <input type="checkbox" id="counter" ${
        habit.completed ? "checked" : ""
        }/>
            <label><span>${counter}/${habit.repetitions} ${
        habit.frequency
        }</span> ${habit.name}  </label>
        <br/>
        <p>  Streak:  ${habit.streak}</p>
        <button class="delete" ">Delete</button>
        </li>`
            
    }).join()   

    const countEl = document.getElementById('counter');
    countEl.addEventListener('click', () => ++)
}


