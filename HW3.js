// СТРОКИ

// 1. Установить какие методы строк изменяют начальное значение строки.
//
// 	Дана строка:
//     “Knowledge of built-in JavaScript methods speeds up a tester’s work.”
//
//     Методы:
//     s.charAt(); //или с[0]
//     s.charAt(s.length -1);
//     s.substring(1, 4);
//     s.substr(1, 3);
//     s.slice(-3);
//     s.indexOf(“l”);
//     s.lastIndexOf(“l”);
//     s.split(“of”);
//     s.replace(“l”, “L”);
//     s.replaceAll(“l”, “L”);
//     s.toUpperCase();
//     s.toLowerCase();

// let str = "Knowledge of built-in JavaScript methods speeds up a tester’s work."
// console.log(str.charAt(0));  // "K"
// console.log(str[0]);        // "K" (аналогично, прямой доступ через индекс)
// console.log(str.charAt(str.length - 1));  // "." (последний символ строки)
// console.log(str.substring(1, 4));  // "now" (символы с индекса 1 по 3, не включая 4)
// console.log(str.substr(1, 3));  // "now" (начинается с индекса 1, длина подстроки 3)
// console.log(str.slice(-3));  // "rk." (последние три символа строки)
// console.log(str.indexOf("l"));  // 4 (индекс первого вхождения "l")
// console.log(str.lastIndexOf("l"));  // 16 (индекс последнего вхождения "l")
// console.log(str.split("of"));  // ['Knowledge ',' built-in JavaScript methods speeds up a tester’s work.'] (делим строку на части по подстроке "of")
// console.log(str.replace("l", "L"));  // заменяет первое вхождение "l" на "L"
// console.log(str.replaceAll("l", "L"));  // заменяет все вхождения "l" на "L"
// console.log(str.toUpperCase());  // все символы становятся заглавными
// console.log(str.toLowerCase());  // все символы становятся строчными
// console.log(str) // строка та же

// 2. Заполнить таблицу методов строк - done

// 3. Используя switch, напишите программу перевода дней недели из цифр в названия (перевести дни 1-7 в Пон-Вос)

// let number = 6;
// let result = ""
// switch(number) {
//     case 1:
//         result = 'Monday';
//         break;
//     case 2:
//         result = 'Tuesday';
//         break;
//     case 3:
//         result = 'Wednesday';
//         break;
//     case 4:
//         result = 'Thurthday';
//         break;
//     case 5:
//         result = 'Friday';
//         break;
//     case 6:
//         result = 'Saturday';
//         break;
//     case 7:
//         result = 'Sunday';
//         break;
//     default:
//         result = "Wrong number: should be in [1;7] range";
//         break
// }
// console.log(result)

// 4. Напишите программу по согласованию отпуска в зависимости от месяца.
// Если месяц “July” или “August”, то программа должна показать - “approved”,
// если другие месяцы, то - “denied”

// let month = 'July';
// (month == 'July' || month == 'August')
//   ? console.log('Holiday accepted')
//   : console.log('Holiday denied');

// 5. Напишите простенький калькулятор (*, /, +, -). У вас должны быть две переменные для
// исходных чисел и одна для оператора. В зависимости от оператора, должно происходить то
// или иное арифметическое действие и выводиться результат в консоль.
// Проверьте ваш код с разными значениями, положительными, отрицательными, дробными и т.д.

// let number1, number2, operator, result;
// number1 = "n";
// number2 = 0;
// operator = "sum";
// if (
//   operator === "sum" &&
//   isNaN(number1) === false &&
//   isNaN(number2) === false
// ) {
//   result = number1 + number2;
// } else if (
//   operator === "subtract" &&
//   isNaN(number1) === false &&
//   isNaN(number2) === false
// ) {
//   result = number1 - number2;
// } else if (
//   operator === "multiply" &&
//   isNaN(number1) === false &&
//   isNaN(number2) === false
// ) {
//   result = number1 * number2;
// } else if (
//   operator === "divide" &&
//   isNaN(number1) === false &&
//   isNaN(number2) === false
// ) {
//   if (number2 != 0) {
//     result = number1 / number2;
//   } else {
//     result = "dividend cannot be equal to zero";
//   }
// } else {
//   result = "Please, provide correct operator or check your numbers";
// }
// console.log(result);



// 6. Решите задачу с помощью пройденных тем (исключительно с помощью пройденных тем):
// Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на
// 3 метра, а каждую ночь съезжает вниз на 2 метра.
// За сколько дней она доползет до вершины стены.

// let wallHeight = 5;
// let climbPerDay = 6;
// let slidePerNight = 2;
// let netProgressPerDay = climbPerDay - slidePerNight;
// let remainingHeight = wallHeight - climbPerDay;
// let daysBeforeLast = (remainingHeight - remainingHeight % netProgressPerDay)/netProgressPerDay;
// let totalDays = daysBeforeLast + 1;
// console.log(`Улитка доползёт до вершины стены за ${totalDays} дня/дней.`);

// Задачки на CodeWars:
// https://www.codewars.com/kata/55a70521798b14d4750000a4
// https://www.codewars.com/kata/583f158ea20cfcbeb400000a
// https://www.codewars.com/kata/52ceafd1f235ce81aa00073a
// https://www.codewars.com/kata/554003323fd6af1c4200004e
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
// https://www.codewars.com/kata/55908aad6620c066bc00002a

// 7. Креативное задание*:
// Напишите следующую программу:
// - У клиента должен быть выбор из двух (или трех) видов кофе (на ваш выбор).
// - Дайте названия вашим видам кофе.
// - Установите цену на кофе в зависимости от величины стаканчика (small, medium, large).
// - Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для
// изменения рецепта и названия) и его стоимость (в зависимости от размера стаканчика).
// - Компоненты кофе не влияют на стоимость.
// - Используйте подходящую комбинацию условий - if, else if, else - для решения задачи.

// function makeCoffee(coffeeType, size) {
//   let coffeeName;
//   let recipe;
//   let price;

//   let water = 30, waterDescription = 'ml of water';
//   let milk = 100, milkDescription = 'ml of milk';
//   let coffeePortion = 8, coffeDescription = 'g of coffee';
//   let sizeCoefficient = 1; 

//   if (size === "small") {
//      price = 5;
//   } else if (size === "medium") {
//      price = 7;
//      sizeCoefficient = 1.25;
//   } else if (size === "large") {
//      price = 9;
//      sizeCoefficient = 1.5;
//   } else {
//      console.log("Выбран неверный размер стаканчика.");
//      return; // Ошибка в размере стаканчика
//   }

//   let espressoRecipe = `${water * sizeCoefficient} ${waterDescription} + ${coffeePortion * sizeCoefficient} ${coffeDescription}`;
//   let americanoRecipe = `${5 * water * sizeCoefficient} ${waterDescription} + ${coffeePortion * sizeCoefficient} ${coffeDescription}`;
//   let latteRecipe = `${water * sizeCoefficient} ${waterDescription} + ${coffeePortion * sizeCoefficient} ${coffeDescription} + ${1.5 * milk * sizeCoefficient} ${milkDescription}`;
//   let cappuccinoRecipe = `${water * sizeCoefficient} ${waterDescription} + ${coffeePortion * sizeCoefficient} ${coffeDescription} + ${milk * sizeCoefficient} ${milkDescription}`;

    
//   if (coffeeType === "Espresso") {
//      coffeeName = "Эспрессо";
//      recipe = espressoRecipe;
//   } else if (coffeeType === "Latte") {
//      coffeeName = "Латте";
//      recipe = latteRecipe;
//   } else if (coffeeType === "Americano") {
//      coffeeName = "Американо";
//      recipe = americanoRecipe;
//   } else if (coffeeType === "Cappuccino") {
//      coffeeName = "Капучино";
//      recipe = cappuccinoRecipe;
//   } else {
//      console.log("Выбран неверный тип кофе.");
//      return; // Ошибка в типе кофе
//   }
  
//   console.log(`Вы выбрали ${coffeeName} (${size} размер).`);
//   console.log(`Рецепт: ${recipe}`);
//   console.log(`Стоимость: ${price} рублей.`);
// }

// makeCoffee("Latte", "medium");
// makeCoffee("Espresso", "large");
// makeCoffee("Cappuccino", "small");
// makeCoffee("Americano", "medium");
