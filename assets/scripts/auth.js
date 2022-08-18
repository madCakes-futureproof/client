

const API_URL = `http://localhost:3000/`;
// 'https://hacker-health-tracker.herokuapp.com/';
const loginURL = 'https://hacker-health-tracker.herokuapp.com/users/'








// Target form ✅
let userLoginForm = document.querySelector(".login");
// let userRegisterForm = document.querySelector(".login-2")

// get data from form ✅
const username = document.getElementById("username").value
const password = document.getElementById("password").value

// const usernameValue = username.querySelector("[name=habit]").value;

// 
userLoginForm.addEventListener('submit', login(username, password));
// userRegisterForm.addEventListener('submit', register);



async function login (data) {
    // post to /users
    postJSON(loginURL, data)
}

async function login (data) {
    
    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    await fetch(API_URL + 'users/login', options)
        .then(res => res.json())
        .then(data => {
            if (data["success"]) {
                localStorage.setItem("token", data["token"]);
                window.location.assign("main-page.html");
            } else {
                throw "Unable to authenticate!"
            }
        })
        .catch(err => alert(err))
}

    document.querySelector(".login").addEventListener("submit", (e) => {
        e.preventDefault();
    
        const form = new FormData(e.target);
    
        login({
            username: form.get("username"),
            password: form.get("password")
        })
    
        e.target.reset();
    })


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
