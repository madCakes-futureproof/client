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

    // habitContainer.innerHTML = habits.forEach(habit => {

        habits.forEach(habit => {
            const divContainer = document.createElement('div');
            divContainer.setAttribute('class', "divContainer");

            const name = document.createElement('span');
            name.textContent =  habit.name;
           
            let counter = document.createElement('div');
                counter.setAttribute('class', "counter");
                counter.textContent = 0;

            const repetitions = document.createElement('div');              
                repetitions.setAttribute('class', "repetitions");
                repetitions.textContent = habit.repetitions;
            const frequency = document.createElement('div');
                frequency.setAttribute('class', "frequency");
                frequency.textContent = habit.frequency;
                const goal = document.createElement('p');
                goal.textContent ='Goal ' 

            const streak = document.createElement('div');
                const streakText = document.createElement('p');
                streakText.textContent ='Streak' 
                streak.setAttribute('class', "streak");
                streak.textContent = habit.streak;

            // counter.appendChild(reps);
            frequency.appendChild(goal);
            streak.appendChild(streakText)

            const incrementBtn = document.createElement('button');
            incrementBtn.setAttribute('class', "button");
            incrementBtn.setAttribute('id', "buttonInc");
            incrementBtn.textContent = '+';
            const deleteButton = document.createElement('button');
            deleteButton.setAttribute('class', "button");
            deleteButton.textContent = 'Delete';

            incrementBtn.addEventListener('click', (e) => {
                counter.textContent = parseInt(counter.textContent) + 1;
                if (counter.textContent === repetitions.textContent) {
                    incrementBtn.disabled = true;
                }
                if (counter.textContent === repetitions.textContent) {
                    streak.textContent = parseInt(streak.textContent) + 1
                }
                if (counter.textContent === repetitions.textContent) {
                    counter.textContent = 0;
                    incrementBtn.disabled = false;
                }
           
            
            deleteButton.addEventListener('click', deleteHabit);
            })
                   
            divContainer.appendChild(name);
            divContainer.appendChild(incrementBtn);
            divContainer.appendChild(counter);
            divContainer.appendChild(repetitions);
            divContainer.appendChild(frequency);
            divContainer.appendChild(streak);
            divContainer.appendChild(deleteButton);

        
            habitContainer.appendChild(divContainer);

        });

}

displayHabit();

async function deleteHabit() {
        
            const options = {
                method: "delete",
                headers: {
                    "Content-Type": "application/json" 
                }
            }
        
            await fetch(`https://hacker-health-tracker.herokuapp.com/habits`, options)
            .then(res => {
                if (res.ok) {
                    console.log('Habit deleted');
                } else {
                    console.log('Habit not deleted');
                }
                return res;
            })
            .then(res => res.json())
            .then(data => console.log(data))      
            .catch(err => alert("Habit not deleted"))
        }
    


// function updateCount() {
//     counter.textContent = parseInt(span.textContent) + 1;
    
// }
