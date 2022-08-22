let users = [];

(() => {

    let item = localStorage.getItem("users");

    if (item) users = JSON.parse(item);


    let loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        window.location.href = "../home/home.html"
        return;
    }

})()



function doSignup(e) {
    e.preventDefault();

    let firstName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;
    let gender = document.querySelector("#gender").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let rePassword = document.querySelector("#rePassword").value;


    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            document.querySelector("#error").innerText = "this email is already exist";
            return;
        }
    }

    if (password !== rePassword) {
        document.querySelector("#error").innerText = "password and repeat password doesnt match"
        return;
    }

    let newUser = {
        firstName,
        lastName,
        gender,
        email,
        password,
        rePassword,
    }


    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    document.querySelector("#result").innerText = "signup successful";



    setTimeout(() => {
        document.querySelector("#result").innerText = "";
        document.querySelector("#error").innerText = "";
    }, 5000);

    e.target.reset();
}
