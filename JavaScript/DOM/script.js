// const heading = document.getElementById("heading");

const heading = document.querySelector("#heading");
const paragraph = document.querySelector(".paragraph");

console.log(heading.getAttribute("id"));
console.log(paragraph.textContent);

function log(message) {
  heading.textContent = message;
}

// DOM Property

heading.onmouseover = () => {
  heading.style.fontSize = "40px";
  console.log("hi");
};

heading.onmouseout = () => {
  heading.style.fontSize = "20px";
};

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * 1000);
  document.body.style.background = `#${random}`;
});

console.log(Math.random());

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.querySelector("#name");
  let email = document.querySelector("#email");

  if (name.value === "") {
    name.style.border = "1px solid red";
    name.focus();
    return;
  }

  if (email.value === "") {
    email.style.border = "1px solid red";
    email.focus();
    return;
  }

  console.log(`Name: ${name.value}, Email: ${email.value}`);

  name.value = "";
  email.value = "";

  name.focus();
});

let name = document.querySelector("#name");
let email = document.querySelector("#email");

name.addEventListener("input", () => {
  console.log(name.value);
});

function monit() {
  console.log(email.value);
}
