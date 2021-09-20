const loginForm = document.getElementById("login_form")
const loginInput = loginForm.querySelector("input")
const loginButton = loginForm.querySelector("button")
--------------------------------------------------------

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    console.log(loginInput.value);
    console.log("click!!")
}

loginButton.addEventListener("click", onLoginBtnClick);

--------------------------------------------------------

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    console.log("hello", loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);

//Problem of the code as above : When the user types on their name in the blank is that the console.log'd print hello along with their user id name.

--------------------------------------------------------

//How to fix this problem that above code?

--------------------------------------------------------

//Have to check username validity

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    if(username == "") {
        console.log("Please write your name");
        alert("Please write your name")
    } else if(username.length > 15) {
        alert("ID Validation length as limit 15characters")
    }
}

loginButton.addEventListener("click", onLoginBtnClick);
--------------------------------------------------------

//
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);

--------------------------------------------------------

//form submit new version//

--------------------------------------------------------
//Info submitted and saved.
//Currently the browser has been built that since it'd submit the form 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit() {
    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

//Even thought the developer has build programming that the button in the form as acts "submission" and directly save it as flow with browser, however the web browser has a same issue of default behavior

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);

//That seems like getting some informations about argument for onLogSubmit function.
//The function of preventDefault is prevent any default behavior of the web-browser basic behavior is re-start

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);

//complete







