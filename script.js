console.log("Я учу Java Script");

let userName = "Misha";
let userAge = 16;
let isStudent = false;

let title = document.getElementById("title");
let info = document.getElementById("info");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
  title.textContent = "Привет, " + userName + "!";

  let studentText;

  if (isStudent === true) {
    studentText = "да";
  } else {
    studentText = "нет";
  }

  info.textContent = "Возраст: " + userAge + ". Студент: " + studentText;
});

let userName2 = "Мира 💋💋";
let userAge2 = 16;
let isStudent2 = false;

let title2 = document.getElementById("title2");
let info2 = document.getElementById("info2");
let button2 = document.getElementById("btn2");

button2.addEventListener("click", () => {
    title2.textContent = "Привет,  я   " + userName2;

    let studentText2

    if(isStudent2 === true){
        studentText2 = ""
    }
    else{
        studentText2 = "не"
    }
    info2.textContent = " Привет, мне " + userAge2 + ".   Я " + studentText2 + " студентка"
});