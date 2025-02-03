const buttonElement = document.querySelector(".myButton");
const inputElement = document.querySelector(".inputField");
const textElement = document.querySelector(".text");
const imageElement = document.querySelector(".myImage");
const linkElement = document.querySelector(".myLink");
const listElement = document.querySelector(".list").firstElementChild;

textElement.style.color = "red";
console.log(textElement.style.color);

buttonElement.addEventListener("click", () => {
  buttonElement.textContent = inputElement.value;
});

console.log("Hello world");

imageElement.src = "./img/download.png";

imageElement.alt = "New description of the image";

listElement.textContent = "New text for the first item";