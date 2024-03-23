"use strict";

// Вывести # столько раз, сколько указал пользователь
function task1() {
  let userInput = +prompt("Введите число");
  let counter = 0;
  while (userInput > counter) {
    console.log("#");
    counter++;
  }
}

function task1_mod() {
  let userInput = +prompt("Введите число");
  for (let counter = 0; userInput > counter; counter++) {
    console.log("#");
  }
}
// =================================================================

// Пользователь ввел число, а на экран вывелись все числа  от введенного до 0.
function task2() {
  let userInput = +prompt("Введите число");
  while (userInput >= 0) {
    console.log(userInput);
    userInput--;
  }
}

function task2_mod() {
  let userInput = +prompt("Введите число");
  for (userInput; userInput >= 0; userInput--) {
    console.log(userInput);
  }
}
// =================================================================

// Запросить число и степень. Возвести число в указанную степень и вывести результат.
function task3() {
  let number = +prompt("Введите число");
  let degree = +prompt("степень");
  let counter = 1;
  let rez = 1;
  while (degree >= counter) {
    counter++;
    rez = rez * number;
  }
  console.log(rez);
}

function task3_mod() {
  let number = +prompt("Введите число");
  let degree = +prompt("степень");
  let counter = 1;
  let rez = 1;
  for (rez; degree >= counter; counter++) {
    rez = rez * number;
  }
  console.log(rez);
}
// =================================================================


// Запросить 2 числа и найти все общие делители.
function task4() {
  let num1 = 12; //  12
  let num2 = 36; //  36
  let minNum = num1 >= num2 ? num2 : num1; // минимальное значение из чисел и до этого значения будем делать цикл. т.к. это теринарный оператор он вернет результат
  let rez;
  for (let counter = 1; counter <= minNum; counter++) {                         // counter = 1 т.к. на 0 не делим
    rez = Number.isInteger(num1 / counter) && Number.isInteger(num2 / counter); // проверка на челое число.  и если оба истина то rez истина
    if (rez) {                                                                  // cоответственно если  rez истина выведем в консоль счетчик
      console.log(counter);                                                     // проверил в интернете  1 2 3 4 6 12
    }
  }
}


function task4_mod() {
let num1 = 12       //+prompt('введите первое положительное число') // наприемр 12   
let num2 = 36       //+prompt('введите второе положительное число') // например 36
let counter = 1
let minNum
if (num1 >= num2) {
    minNum = num2
} else {
    minNum = num1
}
while(counter <= minNum) {
    if(Number.isInteger(num1 / counter) && Number.isInteger(num2 / counter)) {
        console.log(counter)
    }
    counter++                  // нужно прибавлять после проверки которая выше
}
}

// =================================================================
