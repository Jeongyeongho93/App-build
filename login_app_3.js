//How to hiding the form used by CSS sequence

.hidden {
    display: none;
}

//Hidden coding by js

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden")
    console.log(username)
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

//hidden by html
  </head>
  <body>
  <form id="login-form">
    <input 
    required maxlength="15" 
    type="text" 
    placeholder="what is your name" />
    <button>Log In</button>
  </form>
  <h1 class="hidden"></h1>
  <script src="page.js"></script>
  </body>
</html> -> Complete hidden user login form and save it

----------------------------------------------------------------------------------
//The developer wants to mark the text only when he has the text that it needed mark for h1
//First step, prevent to behavior the function default
//Second step, going to hide the form by add class name of hidden
//Thrid step, going to save user name by variable and put it in h1

* // When you write code upper case is mean that generally the variable has contain only string and save the string 

//html
    
  </head>
  <body>
  <form id="login-form">
    <input 
    required maxlength="15" 
    type="text" 
    placeholder="what is your name" />
    <button>Log In</button>
  </form>
  <h1 id="greeting" class="hidden"></h1>
  <script src="page.js"></script>
  </body>

//js

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden")
    const username = loginInput.value;
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener("submit", onLoginSubmit);

----------------------------------------------------------------------------------

//Different way to create how to combine string with other strings

//Origin as below
greeting.innerText = "Hello " + username;

//The new one as below
greeting.innerText = `Hello ${username}`;


----------------------------------------------------------------------------------
//Saving username
//localStorage -> localStorage.setItem("",""), localStorage.getItem("",""), localStorage.removeItem("","")

----------------------------------------------------------------------------------

//If the website local storage has user information then do not show form, however prefer to appears h1 thing in html
//First step, Checking user information whether existence and nonexistence in local stroage
//If there are no any users information then you could appear the form
//how to do check user ex and non

//html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="pagestyle.css"/>
    <title>Momentum app</title>
  </head>
  <body>
  <form class="hidden" id="login-form">
    <input 
    required maxlength="15" 
    type="text" 
    placeholder="what is your name" />
    <button>Log In</button>
  </form>
  <h1 id="greeting" class="hidden"></h1>
  <script src="page.js"></script>
  </body>
</html>

//js
1.
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${savedUsername}`;
}

2.
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername)
}




