const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); 
const greeting = document.querySelector("#greeting");
const loginQuestion = document.querySelector(".login-question");
const note = document.querySelector(".note");

CLASS_NAME__HIDDEN = "hidden";
USERNAME_KEY = "username";

function handleNote(){
    note.classList.remove("hidden");
}

function handleLogin(event){
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    loginForm.remove();
    loginQuestion.remove();
    paintGreeting(userName);
    handleNote();
}

function paintGreeting(userName){
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(CLASS_NAME__HIDDEN);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);


if(savedUserName === null){
    loginForm.classList.remove(CLASS_NAME__HIDDEN);
    loginQuestion.classList.remove(CLASS_NAME__HIDDEN);
    loginForm.addEventListener("submit", handleLogin);
}
else{
    handleNote();
}
