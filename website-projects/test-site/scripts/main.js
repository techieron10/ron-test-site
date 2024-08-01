let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = () => {
    setUserName();
};

function setUserName() {
    let myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome ${myName}`;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let myName = localStorage.getItem('name');
    myHeading.textContent = `Welcome ${myName}`;
}