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


// Посчитать факториал введенного пользователем числа.
function task5() {
    let userNumber  = 9
    let counter = 1
    let rez = 1 
    while (counter <= userNumber) {
        rez = rez * counter
        console.log(rez)       //расчет на каждой итерации
        counter++
    }
    console.log(rez)           //итоговый результат 
}

function task5_mod() {
    let userNumber  = 9
    let rez = 1 
    for(let counter = 1; counter <= userNumber; counter++ ) {
        rez = rez * counter
    }
    console.log(rez)   //итоговый результат 
}
// =================================================================


// Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно. 
function task6() {
    let userNumber
    do {
        userNumber = prompt('введите ответ')
        if(2 + 2 * 2 == userNumber) {
            alert('верно')
            break
        } else {
            alert('не верно')
        }
    } while( 2 + 2 * 2 != userNumber)
}
// =================================================================


//Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько делений произвели.
function task7() {
    let num = 1000
    let counter = 0
    let rezDivide = num             // пересохранил исходное число.  можно и не делать
    do {
        rezDivide = rezDivide / 2
        counter++
    } while (!(rezDivide < 50))     // можно убрать ! и изменить знак. просто в условии сказано число меньше 50
    console.log(counter)
}
// =================================================================


// Вывести все числа от 1 до 100, которые кратные указанному пользователем числу.
function task8() {
    let userNumber = 1200    // число пользователя
    let counter
    for(counter = 0; counter <= 100; counter++ ) {
        if((userNumber % counter) == 0) {
            console.log(counter)
        }
    }
}
// =================================================================


// Вывести каждый 4-й элемент из указанного пользователем  диапазона. Пользователь указывает минимальное и максимальное значения диапазона.
function task9(){
    let maxNumber = 32   // максимальное число пользователя
    let minNumber = 4    // минимальное число пользователя
    
    for(let counter = minNumber; counter <= maxNumber; counter +=4) {
        console.log(counter)
    }
}
// =================================================================


// Запросить число и проверить, простое ли оно. Простое число делится без остатка только на себя и на единицу 

function task10() {
    let  userNumber = +prompt('введите число')
    // let userNumber = 577
    let i
    let rez = false                       //   тут вынесем доступ к переменной за {} и по умолчанию      false
    for(i = 2; i < userNumber; i++) {     //   стартуем с 2 и конец на еденицу меньше указанного числа поэтому < без равно
        if(!(userNumber % i)) {             
            rez = true                    //   если будет остаток от числа . то меняем на true. т.е. число составное 
        } 
    }
    console.log(rez)
    if(!rez) {
        alert('число простое')
    }
    if(rez) {
        alert('число составное')
    }
}
// =================================================================