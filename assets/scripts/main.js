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
           
            const counter = document.createElement('div');
            const reps = document.createElement('p');
                reps.textContent ='Completed'
                counter.setAttribute('class', "counter");
                counter.textContent = 0 + '/';

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

            counter.appendChild(reps);
            frequency.appendChild(goal);
            streak.appendChild(streakText)

            const incrementBtn = document.createElement('button');
            incrementBtn.setAttribute('class', "button");
            incrementBtn.textContent = '+';
            const deleteButton = document.createElement('button');
            deleteButton.setAttribute('class', "button");
            deleteButton.textContent = 'Delete';

            divContainer.appendChild(incrementBtn);
            divContainer.appendChild(counter);
            divContainer.appendChild(repetitions);
            divContainer.appendChild(frequency);
            divContainer.appendChild(streak);
            divContainer.appendChild(deleteButton);

        
            habitContainer.appendChild(divContainer)

        });

       



    //     let counter = 0;
    //     return `
    //         <li>
    //         <input type="checkbox" id="counter" ${
    //     habit.completed ? "checked" : ""
    //     }/>
    //         <label><span>${counter}/${habit.repetitions} ${
    //     habit.frequency
    //     }</span> ${habit.name}  </label>
    //     <br/>
    //     <p>  Streak:  ${habit.streak}</p>
    //     <button class="delete" ">Delete</button>
    //     </li>`
            
    // }).join()   

    // const countEl = document.getElementById('counter');
    // countEl.addEventListener('click', () => ++)
// })

}

displayHabit()

// function createHabitElement(b) {
//     if (!b) {
//       throw "No data provided";
//     }
  
//     const elem = document.createElement("div");
//     elem.className = "card"
//     const t = document.createElement("div")
//     t.className = "card-body"
//     t.textContent = b;
//     elem.append(t)
//     return elem;
  
//   }

// function collect() {
//     fetch(`https://hacker-health-tracker.herokuapp.com/habits`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(JSON.stringify(data))
//         data.forEach((b) => {
//           const x = createHabitElement(b);
          
//           document.querySelector(".habits").appendChild(x);
//         });
//       })
//       .catch((err) => console.log(err));
//   }
//   collect();

