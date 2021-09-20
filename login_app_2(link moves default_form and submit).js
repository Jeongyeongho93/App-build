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
  <form id="login-form">
    <input 
    required maxlength="15" 
    type="text" 
    placeholder="what is your name" />
    <button>Log In</button>
  </form>
  <a href="http://nomadcoders.co">Go to courses</a>
  <script src="page.js"></script>
  </body>
</html>
-----------------------------------------------------------------------------------------------
//Prevent default behavior of click the link to move landing page and setting alert. 

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick(){
    alert("clicked!"); //blocked!//
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

-----------------------------------------------------------------------------------------------
//Since many users login activate in web browser have left log data in web.
//The code of preventDefault function is a 'first argument' in the EventListener. and the argument has event information what data was running.
//The code of onLoginSubmit(event) helps you to provided where the location to x,y coordinate of user click. For example, which submit is main object or what time and so on

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick(event){
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
-----------------------------------------------------------------------------------------------








