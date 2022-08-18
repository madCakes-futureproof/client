// get form data
const newHabit = document.getElementById('newHabit')
console.log(newHabit)

newHabit.addEventListener('submit', addHabit)

async function addHabit(e) {
    e.preventDefault()

    try{

        const name = document.getElementById('name').value
        const repetitions = document.getElementById('repetitions').value
        const frequency = document.getElementById('frequency').value

        const content = {
            name: name,
            repetitions: repetitions,
            frequency: frequency,
            completed: false,
            streak: 0,
            user_id: 1
        }

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

    } catch (err){
        alert(err)
    }
}

function displayHabit() {
    const markup = `
        
    `        
}
