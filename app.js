let users = []
function alluser() {
    let alluserinstring = localStorage.getItem("users")
    users = JSON.parse(alluserinstring) || []
    console.log(users);
}

alluser();


function signup() {
    let firstname = document.querySelector("#firstname")
    let lastname = document.querySelector("#lastname")
    let email = document.querySelector("#email")
    let password = document.querySelector("#password")
    let confirmpassword = document.querySelector("#confirmpassword")

    if (password.value === confirmpassword.value) {
        let newuser = {
            user_firstname: firstname.value,
            user_lastname: lastname.value,
            user_email: email.value,
            user_password: password.value,
           
        }
        for (let i = 0; i < users.length; i++) {
            if (users[i].user_email === email.value) {
                alert("Email already exists");
                return;
            }
        }
        users.push(newuser)
        localStorage.setItem("users", JSON.stringify(users))
        move();
    }
    else {
        alert("Password does not match");
    }
}


function login() {
    let login_username = document.getElementById('login_username').value;
    let login_password = document.getElementById('login_password').value;


    if (users.length == 0 && login_username.length !== 0 && login_password.length !== 0) {
        alert("You Don`t Have an Account \n ! Please Sign in First ")
        return;
    }

    else if (login_username.length === 0 && login_password.length !== 0) {
        alert("Enter Email ")
        return;
    }
    else if (login_username.length !== 0 && login_password.length === 0) {
        alert("Enter Password ")
        return;
    }

    for (let i = 0; i < users.length; i++) {

        if (users[i].user_email === login_username && users[i].user_password === login_password) {

            move();

            return;
            // localStorage.setItem("logged in", JSON.stringify(users[i]))
            // isMatch = true;
            // window.location.href = "./home.html";
            // break
        }
        else if (login_password == 0) {
            alert("Enter Password")
            return;
        }

        else if (users[i].user_email !== login_password && users[i].user_email === login_username) {
            alert("Wrong Password")
            return;
        }
        else if (users[i].user_email !== login_username || users[i].user_password !== login_password) {

            alert("You Don`t Have an Account \n ! Please Sign in First ")
            return;

        }
    }
}
if (users.length === 0) {
    signuppage();
}
else {
    signupcheck()
}

function signupcheck() {
    const loginusernamecheck = document.getElementById('login_username').value;
    const loginpasswordcheck = document.getElementById('login_password').value;
 
 
    for (let i = 0; i < users.length; i++)
       if (users[i].user_email === loginusernamecheck) {
          alert("You are Already Sign in")
          return;
 
       }
 
       else if (users[i].user_email !== loginusernamecheck ||
 
          users[i].user_password !== loginpasswordcheck) {
          signuppage()
          return;
 
       }
 
       else if (loginusernamecheck == 0 || loginpasswordcheck == 0) {
          signuppage()
          return;
       }
 
 }
 
 function move() {
    window.location.href = "./home.html";
 }
 function signuppage() {
    window.location.href = "./index.html";
 }

function loginComplete(){
    document.querySelector("#username").innerHTML = login_username;
    document.querySelector("#userEmail").innerHTML = login_username;
    document.querySelector("#userpassword").innerHTML = login_username;

}

// function logout() {

//     localStorage.removeItem("logged in");
//     window.location.href = "./login.html";

// }
// let page = location.href.split("/");
// page = page[page.length - 1];

// // let users = []
// let loggedin = {}
// function getAllUsers() {
//     let userInStringForm = localStorage.getItem("users");
//     let loggedinForm = localStorage.getItem("logged in");
//     users = JSON.parse(userInStringForm) || [];
//     loggedin = JSON.parse(loggedinForm) || {};
//     console.log(users);
//     console.log(loggedin);
// }
// getAllUsers();

// function diplayDashboard() {
//     if (page === "home.html") {

//         let userName = document.getElementById('userName');
//         let userAddress = document.getElementById('userAddress');
//         let userEmail = document.getElementById('userEmail');

//         userName.innerText = loggedin.user_firstname + loggedin.user_lastname;
//         userAddress.innerText = loggedin.user_address;
//         userEmail.innerText = loggedin.user_email;
//         console.log("loggedin.user_firstname: ", loggedin);
//     }
// }
// diplayDashboard();



// function logincheck() {
//     let logindata = localStorage.getItem("logged in");

//     if (page === "login.html" || page === "index.html") {

//         if (logindata) {
//             window.location.href = "./home.html";
//         }

//     } else {
//         if (!logindata) {
//             window.location.href = "./login.html";
//         }
//     }

//     console.log(logindata);
//     console.log(location.href);
// }
// logincheck();
// function signupCheck() {
//     let signupdata = localStorage.getItem("users");

//     if (page === "index.html") {

//         if (signupdata) {
//             window.location.href = "./login.html";
//         }

//     } else {
//         if (!signupdata) {
//             window.location.href = "./index.html";
//         }
//     }
// }























// function signup() {
//     // let message = document.getElementsById('Thanks');
//     let firstname = document.getElementById('firstname');
//     let lastname = document.getElementById('lastname');
//     let email = document.getElementById('email');
//     let password = document.getElementById('password');
//     let confirmpassword = document.getElementById('confirmpassword');
//     let address = document.getElementById('address');

//     if (password.value === confirmpassword.value) {
//         // get details from signup inputs
//         let newUser = {
//             user_firstname: firstname.value,
//             user_lastname: lastname.value,
//             user_email: email.value,
//             user_password: password.value,
//             user_address: address.value,
//         }
//         for (let i = 0; i < users.length; i++) {
//             if (users[i].user_email === email.value) {
//                 alert("Email already exists");
//                 return;
//             }
//         }
//         users.push(newUser)

//         localStorage.setItem("users", JSON.stringify(users))
//         window.location.href = "./login.html";
//     }
//     else {
//         alert("Password does not match");
//     }
//     // message.innerHTML = "Thanks" +" "+lastname.value + " " + "is successfully sign up";
//     // console.log(message);

// }