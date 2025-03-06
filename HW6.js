// 1. Какой результат работы кода и почему? Выберите один ответ.
//
// function greet(name) {
//     if (name === undefined) {
//         return "Hello, stranger!";
//     }
//     else {
//         return "Hello, " + name + "!";
//     }
// }
// console.log(greet());
//
// Варианты ответов:
//     a. "Hello, stranger!"
//     b. "Hello, undefined!"
//     c. Ошибка: "name is not defined"
//     d. Ошибка: "greet() takes exactly 1 argument (0 given)"

// Ответ a. "Hello, stranger!". Потому что в greet не передаем параметр, значит name === undefined
//_____________________________________________________________________________



// 2. Напишите функцию, которая выводит в консоль индивидуальное приветствие с именем, которое вы передаете в функцию

// function greeting(name) {
//     console.log(`Hello, dear ${name}!`)
// }
//
// firstName = 'Olga'
// greeting(firstName)
//_____________________________________________________________________________



// 3. Напишите функцию с калькулятором (можно использовать код с предыдущей 
// домашней работы), в которую, в качестве параметров, передаются три переменные,
//  две - числовые и третья отвечает за знак арифметической операции 
// (*, /, -, +). Проверьте работу функции.

// function calculator(number1, number2, operator) {
//   let result;
//   if (
//      operator === "+" &&
//      isNaN(number1) === false &&
//      isNaN(number2) === false
//   ) {
//     result = number1 + number2;
//   } else if (
//      operator === "-" &&
//      isNaN(number1) === false &&
//      isNaN(number2) === false
//   ) {
//      result = number1 - number2;
//   } else if (
//      operator === "*" &&
//      isNaN(number1) === false &&
//      isNaN(number2) === false
//   ) {
//      result = number1 * number2;
//   } else if (
//     operator === "/" &&
//      isNaN(number1) === false &&
//      isNaN(number2) === false
//   ) {
//     if (number2 != 0) {
//       result = number1 / number2;
//     } else {
//       result = "dividend cannot be equal to zero";
//     }
//   } else {
//      result = "Please, provide correct operator or check your numbers";
//   }
//   return result;
// }
//
// console.log(calculator(2, 5, '+'));
// console.log(calculator(2, 5, '-'));
// console.log(calculator(2, 5, '*'));
// console.log(calculator(10, 2, '/'));
// console.log(calculator('', 'new', '-'));
// console.log(calculator(2, 5, 'home'));
// console.log(calculator(2, 0, '/'))
//_____________________________________________________________________________



// 4. Создать функцию getGreetings, возвращающую массив, содержащий строки "Hello, World" на разных языках.
//
//     "Hello world!"
//     "!Hola mundo!"
//     "Hallo wereld!"
//     "Пpивeт мир!"
//
// Создать декларируемую функцию (function Declaration),
//  функцию выражение (function Expression) и стрелочную функцию.

// function getGreetings() { // function Declaration
//     return [
//         "Hello world!",
//         "!Hola mundo!",
//         "Hallo wereld!",
//         "Пpивeт мир!"
//     ];
// }
//
// console.log(getGreetings());
//
// const getGreetings = function() { // function Expression
//     return [
//         "Hello world!",
//         "!Hola mundo!",
//         "Hallo wereld!",
//         "Пpивeт мир!"
//     ];
// };
//
// console.log(getGreetings());
//
// const getGreetings = () => [ // стрелочная функция
//     "Hello world!",
//     "!Hola mundo!",
//     "Hallo wereld!",
//     "Пpивeт мир!"
// ];
//
// console.log(getGreetings());
//_____________________________________________________________________________



// 5.Внедрите в свой код с Кофе, как минимум 2 функции (на ваше усмотрение)
//  и вызовите их в коде.

// // Функция для получения цены и коэффициента размера
// function getPriceAndSizeCoefficient(size) {
//     let price;
//     let sizeCoefficient = 1;
 
//     if (size === "small") {
//        price = 5;
//     } else if (size === "medium") {
//        price = 7;
//        sizeCoefficient = 1.25;
//     } else if (size === "large") {
//        price = 9;
//        sizeCoefficient = 1.5;
//     } else {
//        console.log("Выбран неверный размер стаканчика.");
//        return null; // Ошибка в размере стаканчика
//     }
 
//     return { price, sizeCoefficient };
//  }
 
//  // Функция для получения рецепта кофе
//  function getCoffeeRecipe(coffeeType, sizeCoefficient) {
//     let recipe;
 
//     let water = 30, waterDescription = 'ml of water';
//     let milk = 100, milkDescription = 'ml of milk';
//     let coffeePortion = 8, coffeDescription = 'g of coffee';
 
//     let espressoRecipe = `${water * sizeCoefficient} ${waterDescription} + ${coffeePortion * sizeCoefficient} ${coffeDescription}`;
//     let americanoRecipe = `${5 * water * sizeCoefficient} ${waterDescription} + ${coffeePortion * sizeCoefficient} ${coffeDescription}`;
//     let latteRecipe = `${water * sizeCoefficient} ${waterDescription} + ${coffeePortion * sizeCoefficient} ${coffeDescription} + ${1.5 * milk * sizeCoefficient} ${milkDescription}`;
//     let cappuccinoRecipe = `${water * sizeCoefficient} ${waterDescription} + ${coffeePortion * sizeCoefficient} ${coffeDescription} + ${milk * sizeCoefficient} ${milkDescription}`;
 
//     if (coffeeType === "Espresso") {
//        recipe = espressoRecipe;
//     } else if (coffeeType === "Latte") {
//        recipe = latteRecipe;
//     } else if (coffeeType === "Americano") {
//        recipe = americanoRecipe;
//     } else if (coffeeType === "Cappuccino") {
//        recipe = cappuccinoRecipe;
//     } else {
//        console.log("Выбран неверный тип кофе.");
//        return null; // Ошибка в типе кофе
//     }
 
//     return recipe;
//  }
 
//  // Основная функция для приготовления кофе
//  function makeCoffee(coffeeType, size) {
//     const priceAndSize = getPriceAndSizeCoefficient(size);
//     if (!priceAndSize) return;  // Если ошибка в размере стаканчика, то выходим
 
//     const { price, sizeCoefficient } = priceAndSize;
//     const recipe = getCoffeeRecipe(coffeeType, sizeCoefficient);
//     if (!recipe) return;  // Если ошибка в типе кофе, то выходим
 
//     let coffeeName;
//     if (coffeeType === "Espresso") {
//        coffeeName = "Эспрессо";
//     } else if (coffeeType === "Latte") {
//        coffeeName = "Латте";
//     } else if (coffeeType === "Americano") {
//        coffeeName = "Американо";
//     } else if (coffeeType === "Cappuccino") {
//        coffeeName = "Капучино";
//     }
 
//     console.log(`Вы выбрали ${coffeeName} (${size} размер).`);
//     console.log(`Рецепт: ${recipe}`);
//     console.log(`Стоимость: ${price} рублей.`);
//  }
 
//  // Пример вызовов
//  makeCoffee("Latte", "medium");
//  makeCoffee("Espresso", "large");
//  makeCoffee("Cappuccino", "small");
//  makeCoffee("Americano", "medium");
//_____________________________________________________________________________



// 6. Переделайте задачку с улиткой используя функции (подсказка - используем вложенные функции)
//Улитка ползёт вверх по стене высотой 5 метров. 
// Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 
// 2 метра. За сколько дней она доползет до вершины стены.

// function calculateClimbTime(wallHeight, climbPerDay, slidePerNight) {

// let passedDistance = 0;
// let days = 0;

// for (days = 1; passedDistance < wallHeight; days++) {
//   passedDistance += climbPerDay;
//   if (passedDistance >= wallHeight) {
//      break;
//     } else {
//      passedDistance -= slidePerNight;
//     }
// }
// return `Улитка доползёт до вершины стены за ${days} дней/дня.`
// }
// console.log(calculateClimbTime(5, 3, 2));

//_____________________________________________________________________________



// 7. Напишите функцию, которая принимает массив чисел как параметр и возвращает 
// сумму всех чисел этого массива. Если элемент массива не число, 
// пропускаем этот элемент

// function sumArr(arr) {
//     return arr.reduce((acc, el) => (typeof el === 'number') ? acc + el : acc )
// }

// console.log(sumArr([10, "apple", 3.14, "banana", 20, '30']))
//_____________________________________________________________________________



// 8.Напишите функцию, которая принимает массива строк как параметр и 
// возвращает строки длиннее 5 букв.

// function sortArr(arr) {
//     return arr.filter((el) => el.length > 5);
// }
//
// console.log(sortArr(["apple", "orange", "banana", "grape"]));
//_____________________________________________________________________________