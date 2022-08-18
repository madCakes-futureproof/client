

const API_URL = 'https://hacker-health-tracker.herokuapp.com/';
// `http://localhost:3000/`


const loginForm = document.querySelector('.login');
const registerForm = document.querySelector('.login-1')

loginForm.addEventListener('submit', login);
registerForm.addEventListener('submit', register);

async function login(e) {
  e.preventDefault();
  try {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };
    
    const res = await fetch(API_URL + 'users/login', options);
    const data = await res.json();
    if (!data.success) {
      throw new Error('Can`t log in!');
    }
    loginData(data.token);
    window.location.assign = 'main-page.html';
  } catch (err) {
    console.warn(err);
  }
}

async function register(e) {
  e.preventDefault();
  try {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };
    const res = await fetch(API_URL + 'users/register', options);
    const data = await res.json();
   
    if (data.err) {
      throw Error(data.err);
    }
    window.location.assign = 'main-page.html';
  } catch (err) {
    console.warn(err);
  }
}

function loginData(token) {
  const user = jwt_decode(token);
  localStorage.setItem('token', token);
  localStorage.setItem('username', users.username);
  window.location.assign = 'main-page.html';
}

// let userLoginForm = document.querySelector(".login");
// let userRegisterForm = document.querySelector(".login-2")

// userLoginForm.addEventListener('submit', login);
// userRegisterForm.addEventListener('submit', register);


// async function login (data) {
    
//     const options = {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }

//     await fetch(API_URL + 'users/login', options)
//         .then(res => res.json())
//         .then(data => {
//             if (data["success"]) {
//                 localStorage.setItem("token", data["token"]);
//                 window.location.assign("main-page.html");
//             } else {
//                 throw "Unable to authenticate!"
//             }
//         })
//         .catch(err => alert(err))
//     }

//     document.querySelector(".login").addEventListener("submit", (e) => {
//         e.preventDefault();
    
//         const form = new FormData(e.target);
    
//         login({
//             username: form.get("username"),
//             password: form.get("password")
//         })
    
//         e.target.reset();
//     })


    // async function register (data) {
    
    //     const options = {
    //         method: "POST",
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     }
    
    //     await fetch(API_URL + 'users/register', options)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data["success"]) {
    //                 localStorage.setItem("token", data["token"]);
    //                 // window.location.assign("/main-page.html");
    //             } else {
    //                 throw "Unable to register!"
    //             }
    //         })
    //         .catch(err => alert(err))
    //     }

    //     document.querySelector(".login-2").addEventListener("submit", (e) => {
    //         e.preventDefault();
        
    //         const form = new FormData(e.target);
        
    //         login({
    //             username: form.get("username"),
    //             password: form.get("password")
    //         })
        
    //         e.target.reset();
    //     })
