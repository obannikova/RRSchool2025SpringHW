// ARRAYS; LOOPS


// 2. // Задача с интервью*
// У вас есть массив со скобками 
// Количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара 
// (открывающая и закрывающая).
// Решение должно работать для всех массивов внизу.
// Первая последовательность: [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’]
// Вторая последовательность:  ['(', ')', '(', ')', '{', '(', '}', ')', 2, 'a']
// Еще: ['(', ')', '(', '(', '(', ')', '}', '(', ')', ')']

// let arr = ['(', ')', '(', '(', '(', ')', '}', '(', ')', ')'];
// let countOpenParenthesis = 0; // (
// let countCloseParenthesis = 0; // )
// let countOpenCurlyBrace = 0; // {
// let countCloseCurlyBrace = 0; // }
// let isAlternating = false; // допустим, чередование false

// for (let i = 0; i < arr.length; i++) {
//     switch(arr[i]){
//         case('{'):
//             countOpenCurlyBrace++;
//             break;
//         case('}'):
//             countCloseCurlyBrace++;
//             break;
//         case('('):
//             countOpenParenthesis++;
//             break;
//         case(')'):
//             countCloseParenthesis++;
//             break;
//         default:
//             break;
//     }
// }

// if (
//     countOpenCurlyBrace === countCloseCurlyBrace &&
//     countOpenParenthesis === countCloseParenthesis
// ) {
//     isAlternating = true;
//     console.log(
//         `{ = ${countOpenCurlyBrace}; } = ${countCloseCurlyBrace}`,
//         `( = ${countOpenParenthesis}; ) = ${countCloseParenthesis}`,
//         "result = equal",
//         "isAlternating =",
//         isAlternating
//     );
// } else {
//   console.log(
//         `{ = ${countOpenCurlyBrace}; } = ${countCloseCurlyBrace}`,
//         `( = ${countOpenParenthesis}; ) = ${countCloseParenthesis}`,
//         "result = not equal",
//         "isAlternating =",
//         isAlternating
//     );
// }




// 3. // Найти самое маленькое число из массива [4, 81, 3, -12, 99, 14]

// let arr = [4, 81, 3, -12, 99, 14]
// console.log(Math.min(...arr))




// 4. // Найти самое большое число из массива [4, 81, 3, -12, 99, 14]

// let arr = [4, 81, 3, -12, 99, 14]
// console.log(Math.max(...arr))




// 5. // Найти сумму всех элементов массива [[1, 2], [3, 4, 5], [6, 7, 8]]

// let arr = [[1, 2], [3, 4, 5], [6, 7, 8]]
// console.log(arr.flat().reduce((acc, curr) => acc + curr))




// 6.  //  Циклы. При помощи цикла for выведите чётные числа от 2 до 10

// for (let i = 2; i <= 10; i += 2) {
//      console.log(i);
// }




// 7. //  Переделайте задачку с улиткой используя циклы
// Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на
//  3 метра, а каждую ночь съезжает вниз на 2 метра.
//   За сколько дней она доползет до вершины стены.

// let wallHeight = 5;
// let climbPerDay = 3;
// let slidePerNight = 2;
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

// console.log(`Улитка доползёт до вершины стены за ${days} дней/дня.`);




// 8. //  Нарисуйте ромб (подсказка: вложенные циклы)
//   *
//  ***
// *****
//*******
//  ***
//   *

// const n = 7; // Максимальная ширина ромба

// for (let i = 1; i <= Math.ceil(n/2); i++) {
//     let row = ' '.repeat(Math.ceil(n/2) - i);
//      row += '*'.repeat(i * 2 - 1)
//     console.log(row);
// }

// for (let i = Math.floor(n/2); i >= 1; i--) {
//     let row = ' '.repeat(Math.floor(n/2) - i + 1);
//     row += '*'.repeat(i * 2 - 1)
//     console.log(row);
// }




// 9. // Нарисуйте прямоугольный треугольник
// *
// * * *
// * * * * *
// * * * * * * *
// * * * * * * * * *

// method 1:
// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i * 2 - 1; j++) {
//       row += '* ';
//     }
//     console.log(row.trim());
//   }

// method 2:
// for (let i = 1; i <= 5; i++) {
//     let row = '* '.repeat(i * 2 - 1);
//     console.log(row.trim());
// }




// 10. // Нарисуйте треугольник с цифрами - лево

// 0 1 2 3 4 5 6 7 8 9
// 0 1 2 3 4 5 6 7 8
// 0 1 2 3 4 5 6 7
// 0 1 2 3 4 5 6
// 0 1 2 3 4 5
// 0 1 2 3 4
// 0 1 2 3
// 0 1 2
// 0 1
// 0

// for (let i = 9; i >= 0; i--) {
//     let row = '';
//     for (let j = 0; j <= i; j++) {
//          row += `${j} `;    
//     }
//     console.log(row.trim());
// }




// 11. // Нарисуйте треугольник с цифрами - право

// 0 1 2 3 4 5 6 7 8 9
//   0 1 2 3 4 5 6 7 8
//     0 1 2 3 4 5 6 7
//       0 1 2 3 4 5 6
//         0 1 2 3 4 5
//           0 1 2 3 4
//             0 1 2 3
//               0 1 2
//                 0 1
//                   0

// for (let i = 9; i >= 0; i--) {
//     let row = '';
//     for (let j = 0; j <= i; j++) {
//          row += `${j} `;    
//     }
//     console.log(row.trim().padStart(19,' '));
// }




// 12. // Есть код. Какой будет результат этого кода и почему
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//            if (i % 2 !== 0) {
//                 sum += numbers[i];
//                 console.log(i, numbers[i],sum);
//             }
// }
// console.log(sum);

// ответ: 6, т.к. складывается numbers[1] + numbers[3] = 2 + 4




// Задачки на CodeWars:
// https://www.codewars.com/kata/554b4ac871d6813a03000035 
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e 
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2 
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077 

