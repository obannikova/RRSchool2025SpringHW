// 1. Нарисуйте треугольник с цифрами - вниз
//
// 9 8 7 6 5 4 3 2 1 0 1 2 3 4 5 6 7 8 9
//   8 7 6 5 4 3 2 1 0 1 2 3 4 5 6 7 8
//     7 6 5 4 3 2 1 0 1 2 3 4 5 6 7
//       6 5 4 3 2 1 0 1 2 3 4 5 6
//         5 4 3 2 1 0 1 2 3 4 5
//           4 3 2 1 0 1 2 3 4
//             3 2 1 0 1 2 3
//               2 1 0 1 2
//                 1 0 1
//                   0
//

// for (let i = 0; i <= 9; i++) {
//   let row = "";
//   for (let j = 9 - i; j >= 0; j--) {
//         row += `${j} `;
//     }
//   for (let j = 1; j <= 9 - i; j++) {
//      row += `${j} `;
//     }
//   console.log(row.trim().padStart(37 - i * 2, " "));
// }




// 2. Нарисуйте ромб из цифр (будьте внимательны!)
//
//          1
//         121
//        12321
//       1234321
//      123454321
//     12345654321
//    1234567654321
//   123456787654321
//  12345678987654321
// 1234567890987654321
//  12345678987654321
//   123456787654321
//    1234567654321
//     12345654321
//      123454321
//       1234321
//        12321
//         121
//          1

// let n = 10; // Максимальное число в середине ромба

// // Верхняя половина ромба
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   row += " ".repeat(n - i);

//   for (let j = 1; j <= i; j++) {
//         if (i === 10 && j === 10) {
//             row += "0";
//         } else {
//              row += `${j}`;
//         }
//     }

//   for (let j = i - 1; j >= 1; j--) {
//      row += `${j}`;
//   }

//   console.log(row);
// }

// // Нижняя половина ромба
// for (let i = n - 1; i >= 1; i--) {
//     let row = '';
//     row += ' '.repeat(n - i);

//     for (let j = 1; j <= i; j++) {
//         row += `${j}`;
//     }

//     for (let j = i - 1; j >= 1; j--) {
//         row += `${j}`;
//     }

//     console.log(row);
// }




// 3. Сложнее*: Нарисуйте горизонтальный треугольник из цифр
//
// 1  
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// let n = 5; 
// let currentNumber = 1;

// for (let i = 1; i <= n; i++) {
//     let row = '';
    
//      for (let j = 0; j < i; j++) {
//         row += `${currentNumber} `;
//         currentNumber++; 
//     }

//     console.log(row.trim()); 
// }



// 4. Нарисуйте вертикальный треугольник из цифр
//
// 1
// 2 6
// 3 7 10
// 4 8 11 13
// 5 9 12 14 15

// let triangle1 = '';
// let rows = 5;
// for (let i = 1; i <= rows; i++) {      
//     let start = i;
//     for(let column = 1; column <= i; column++) {    
//         triangle1 += start + ' ';
//         start += rows-column;
//     }
//     triangle1 += '\n';
   
// }
// console.log(triangle1);



// 5. Имеется зашифрованное предложение
// "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr"
// мы знаем, что оно означает "You are the best QA ever".
// Нам нужно придумать программу дешифратор.

// let encrypted = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr";
// let decrypted = "";
//
// for (let i = 0; i < encrypted.length; i += 3) {
//     decrypted += encrypted[i];
// }
//
// console.log(decrypted);



// 6. Придумайте свой собственный шифр, а также программу, которая будет 
// шифровать и затем дешифровщик к нему

//шифрофщик 
// let str = 'You are the best QA ever';
// let arr = str.split('');
// let str1 = 'abc'

// for (let i = 0; i < arr.length; i += 3) {
//     arr[i] += str1
// }

// console.log(arr.join(''))

// дешифровщик
// let str = 'Yabcou abcareabc thabce babcestabc QAabc evabcer'
// let encrypptedSymbols = 'abc'
// let decryptedStr = str.replaceAll(encrypptedSymbols, '');
// console.log(decryptedStr)



// 7.Какой результат работы кода и почему? Выберите один ответ.
// let myArray = ["apple", "banana", "orange"];
// for (let index in myArray) {
//     console.log(myArray[index]);
// }

// Варианты ответов:
// 1. Цикл будет выполняться, но пропустит элементы массива.
// 2. Цикл завершится с ошибкой, так как "for...in" не предназначен для работы с массивами.
// 3. Цикл выполнится успешно, перебирая все элементы массива.
// 4. Цикл выполнится успешно, но пропустит первый элемент массива.
// */

// Ответ: "3. Цикл выполнится успешно, перебирая все элементы массива."