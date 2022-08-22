let loggedInUser = {};

(() => {

    let item = localStorage.getItem("loggedInUser");

    if (item) loggedInUser = JSON.parse(item);
    else {
        window.location.href = "../login/login.html"
        return;
    }


    document.querySelector("#email").innerText = loggedInUser.email;

    document.querySelector("#name").innerText =
        `${loggedInUser.firstName} ${loggedInUser.lastName}`;

})()

function doLogout() {
    localStorage.removeItem("loggedInUser");

    window.location.href = "../login/login.html";
}
