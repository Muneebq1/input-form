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


function toggleShowPassword() {

    let type = document.getElementById("password").attributes.type.value;
    console.log("type", type);

    if (type === "password") {
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("showPasswordButton").innerHTML = `<i class="fa-solid fa-eye"></i>`
    } else {
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("showPasswordButton").innerHTML = `<i class="fa-solid fa-eye-slash"></i>`
    }
}


function doLogin(e) {
    e.preventDefault();

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;


    let isFound = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            isFound = true;

            if (users[i].password === password) {
                document.querySelector("#result").innerText = "Login Successful";

                localStorage.setItem("loggedInUser", JSON.stringify(users[i]));

                window.location.href = "../home/home.html"


                break;
            } else {
                document.querySelector("#error").innerText = "Incorrect password";
                return;
            }
        }
    }
    if (!isFound) {
        document.querySelector("#error").innerText = "user not found";
        return;
    }

    setTimeout(() => {
        document.querySelector("#result").innerText = "";
        document.querySelector("#error").innerText = "";
    }, 5000);

    e.target.reset();
}