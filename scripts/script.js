// script.js
const timeElement = document.getElementById("user-time");
console.log(timeElement);
timeElement.textContent = Date.now();

setInterval(() => {
    timeElement.textContent = Date.now();
  }, 1000);
  