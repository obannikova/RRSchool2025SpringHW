// ПЕРЕМЕННЫЕ

// 1.
// Объявите две переменные: firstName и lastName.
// Присвойте значение “John”  переменной firstName и значение “Adams”   переменной  lastName.
// Выведите в консоль  значение firstName и lastName (должно показать John Adams).
// Используйте те же переменные (перезапишите) firstName и lastName для того, чтобы вывести новое значение (Brandon Smith).

// В итоге на экране должно быть две строки:
// John Adams
// Brandon Smith

// let firstName = 'John';
// let lastName = 'Jackson'
// console.log(firstName + ' ' + lastName);
// firstName = 'Brandon'
// lastName = 'Smith'
// console.log(firstName + ' ' + lastName);



// 2.
// Выведите в консоль тип данных следующих переменных (использовать метод typeof())
// let a
// let c = 9
// let str = “Hi 5!”
// let b = true
// let y = 9 + ‘1’
// let x =  'a' / 6

// let a;
// console.log(a, typeof a);
// let c = 9;
// console.log(c, typeof c);
// let str = "Hi 5!";
// console.log(str, typeof str);
// let b = true;
// console.log(b, typeof b);
// let y = 9 + '1';
// console.log(y, typeof y);
// let x =  'a' / 6;
// console.log(x, typeof x);




// 3.
// Подумайте, какие переменные логично объявить через const ,
//  пропишите их и выведите на экран

// const PI = 3.14159;           
// const MAX_USERS = 1000;       
// const COMPANY_NAME = "TechCorp";  
// console.log("PI: " + PI);
// console.log("MAX_USERS: " + MAX_USERS);
// console.log("COMPANY_NAME: " + COMPANY_NAME);



// 4.
// Проверьте какие числа находятся между 10 и 20 и выведете на 
// печать для каждой цифры true или false

// let numberToCheck = 15;
// console.log(numberToCheck > 10 && numberToCheck < 20);



// 5.
//Что выведет код и почему: 

// console.log( null || 2 || undefined ); // 2

// const x = 5;
// const y = 10;

// console.log(x > 0 && y < 20); // true
// console.log(x < 0 && y > 0);  // false
// console.log(x < 0 && y < 0);  // false
// console.log(x > 0 && "Hello"); // 'Hello'

// const a = 0;
// const b = "World";

// console.log(a > 0 || b.length > 0); // true;
// console.log(a > 0 || b.length === 0); // false;
// console.log(a > 0 || ""); // false 
// console.log(a < 0 || "Hello"); // 'Hello'

// let a3 = null
// console.log(!a3 && typeof a3 === "object") // true