const { getJSON } = require('./helpers');

const state = {
  userAccount: [],
  habits: [],
};

const createUserAccountObj = function (data) {
    const {userAccount} = data;
    return  {
        id: userAccount.id,
        username: userAccount.username,
        password: userAccount.password,
    }
}

const createHabitObj = function (data) {
    const {habits} = data;
    return {
        id: habits.id,
        name:  habits.name,
        repetitions: habits.repetitions,
        frequency: habits.frequency,
        completed: habits.completed,
        streak: habits.streak,
        user_id: habits.user_id,
    }
}

export const loadHabits = async function () {
    try {
      const data = await getJSON(`${API_URL}habits`);
      state.habits = createHabitObj(data)
    } catch (err) {
      console.error(`${err} 💻`);
    }
  };
  
export const authenticateUser = async function (loginData) {
    try {
      const data = await postJSON(`${API_URL}users/login`, loginData);
      state.userAccount = createUserAccountObj()
    } catch {
      console.error(err.message);
    }
  };
  
module.exports = {};
