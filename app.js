function signup(){
    let firstname = document.querySelector("#firstname")
    let lastname = document.querySelector("#lastname")
    let email = document.querySelector("#email")
    let password = document.querySelector("#password")
    let confirmpassword = document.querySelector("#confirmpassword")

    if (password.value === confirmpassword.value) {
        let newUser = {
            user_firstname: firstname.value,
            user_lastname: lastname.value,
            user_email: email.value,
            user_password: password.value,
            user_address: address.value,
        }
        for (let i = 0; i < users.length; i++) {
            if (users[i].user_email === email.value) {
                alert("Email already exists");
                return;
            }
        }
        users.push(newUser)

        localStorage.setItem("users", JSON.stringify(users))
        window.location.href = "./login.html";
    }
       else{
        alert("Password does not match");
       }
}
























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