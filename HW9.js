// 1. Дополнение к задаче №2 из предыдущего домашнего задания

// Создать Square класс, который наследуется от Shape, и добавляет calcArea() метод, 
// вычисляющий площадь квадрата. 
// Настройте конструктор экземпляров объекта Square так, чтобы свойству name 
// автоматически присваивалось значение square, а sides для свойства автоматически 
// устанавливалось значение 4. Поэтому при вызове конструктора вам нужно просто 
// предоставить свойство sideLength.
// Создайте экземпляр класса Square, вызываемого square с соответствующими 
// значениями свойств, и вызовите его методы calcPerimeter() и calcArea(), 
// чтобы показать, что он работает нормально

// class Shape {
//     constructor(name, sides, sideLength) {
//         this.name = name;
//         this.sides = sides;
//         this.sideLength = sideLength
//     }
//
//     calcPerimeter() {
//         console.log(`Perimeter of ${this.name} is equal to ${this.sides * this.sideLength}`)
//     }
// }
//
// class Square extends Shape {
//     constructor(sideLength) {
//         super("Square", 4, sideLength);
//     }
//
//     calcArea() {
//         console.log(`Area of ${this.name} is equal to ${this.sideLength ** 2}`);
//     }
// }
//
// const square = new Square(3);
// square.calcArea();
// square.calcPerimeter();




// 2. Создать классы пользователя и администратора

// В этом задании мы будем использовать приватные свойства, чтобы скрыть 
// определенные значения и предотвратить прямой доступ к ним. 
// Приватные свойства могут быть доступны только внутри объявления класса.
//
// Мы обозначаем частную переменную или функцию символом решетки (#).
//
// Например, если бы у нас был класс Person с номером социального 
// страхования и функцией для расчета их налоговой категории, мы бы не 
// обязательно хотели, чтобы эта информация была общедоступной. Поэтому мы 
// можем сделать эти поля приватными, как в примере ниже:
//
// class Person {
//     #socialSecurityNumber;
//
//     #calculateTaxBracket() {
//     }
// }
//
// Ваша задача:
//
// Создайте классы User и Admin. Класс Admin расширяет класс User. Класс User 
// имеет закрытую функцию updatePassword() и публичную функцию resetPassword(). 
// Класс Admin имеет публичную функцию deleteUser().
//
// Параметры для класса User
//     username: String
//     (private) password: String
//
// Параметры для класса Admin
//     username: String
//     (private) password: String
//
//
// Свойства класса Admin
// Следующие свойства также должны быть добавлены в класс Admin. 
// Они не являются параметрами.
//     isAdmin = true;
//
//
// Функции класса User
// resetPassword(newPassword)
// Вызывает закрытую функцию updatePassword с новым паролем. 
//
// updatePassword(newPassword)
// Устанавливает пароль пользователя на newPassword. Это частная функция.
//
// Функции класса Admin
// deleteUser(userToDelete): Принимает строку userToDelete и возвращает строковое сообщение: "Пользователь [userToDelete] был удален."
//
// Результат
// [testUser, testAdmin]: Массив, содержащий экземпляр класса User и экземпляр класса Admin
//
// Ограничения
// Пароль должен быть частной переменной
// updatePassword должен быть частной функцией
// Вы должны использовать ключевое слово extends для создания связи между пользователем 
// и администратором

// class User {
//     #password;

//     constructor(username, password) {
//         this.username = username;
//         this.#password = password;
//     }

//     #updatePassword(newPassword) {
//         this.#password = newPassword;
//         console.log(`Password updated successfully for ${this.username}`);
//     }

//     resetPassword(newPassword) {
//         this.#updatePassword(newPassword);
//         console.log(`Password for ${this.username} has been reset.`);
//     }
// }

// class Admin extends User {
//     constructor(username, password) {
//         super(username, password);
//         this.isAdmin = true;
//     }

//     deleteUser(userToDelete) {
//         return `User [${userToDelete}] has been deleted`;
//     }
// }

// const testUser = new User("JohnDoe", "1234abcd");
// const testAdmin = new Admin("AdminUser", "adminPass");

// console.log("\n--- User Actions ---");
// testUser.resetPassword("newPassword123");  // Resetting user password

// console.log("\n--- Admin Actions ---");
// console.log(testAdmin.deleteUser("JohnDoe"));  // Deleting a user

// const result = [testUser, testAdmin];
// console.log("\nResult Array:", result);




// 3. Креативное задание. Создать структуру школы.

// В школе есть люди, студенты, учителя, декан, директор школы. 
// У каждого свои свойства, некоторые повторяющиеся, как например имя, возраст, 
// пол, можно больше.
// Но так же есть и не повторяющиеся, например, 
// студенты - номер курса (1-ый год, 2-й год, и т.д.)
// студенты - специальность (major)
// студенты - средний бал (gpa, от 1 до 4, 1 - студент плохо учиться, 
// 4 - очень хорошо)
// учителя - имеют зарплату
// декан - зарплата в 2 раза больше чем у учителей, плюс годовой бонус в размере 
// 1 зарплаты
// учитель и декан - часы работы
// директор школы - зарплата в 1.5 раза больше чем у декана, плюс годовой бонус 
// в размере 2х зарплат
// Использовать 4 принципа ООП
// Вывести на печать имена и позицию каждого человека
// Вывести на печать зарплату директора школы
// Вывести на печать имя студента valedictorian (лучший студент школы, 
// студент с лучшим gpa)

// class Person {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }

//     getInfo() {
//         return `${this.name} (${this.constructor.name})`;
//     }
// }

// class Student extends Person {
//     constructor(name, age, gender, year, major, gpa) {
//         super(name, age, gender);  // Вызов конструктора родителя
//         this.year = year;
//         this.major = major;
//         this.gpa = gpa;
//     }

//     getInfo() {
//         return `${super.getInfo()} - Year: ${this.year}, Major: ${this.major}, GPA: ${this.gpa}`;
//     }
// }

// class Teacher extends Person {
//     constructor(name, age, gender, salary, hours) {
//         super(name, age, gender);
//         this.salary = salary;
//         this.hours = hours;
//     }

//     getSalary() {
//         return this.salary;
//     }

//     getInfo() {
//         return `${super.getInfo()} - Teacher, Salary: $${this.salary}, Hours: ${this.hours}`;
//     }
// }


// class Dean extends Teacher {
//     constructor(name, age, gender, salary, hours) {
//         super(name, age, gender, salary * 2, hours);
//         this.annualBonus = this.salary; 
//     }

//     getSalary() {
//         return this.salary + this.annualBonus;
//     }

//     getInfo() {
//         return `${super.getInfo()} - Dean, Annual Bonus: $${this.annualBonus}`;
//     }
// }

// class Director extends Dean {
//     constructor(name, age, gender, salary, hours) {
//         super(name, age, gender, salary * 1.5, hours);
//         this.annualBonus = this.salary * 2;  // Бонус в размере 2 зарплат
//     }

//     getSalary() {
//         return this.salary + this.annualBonus;
//     }

//     getInfo() {
//         return `${super.getInfo()} - Director, Annual Bonus: $${this.annualBonus}`;
//     }
// }

// const school = [
//     new Student("Alice", 20, "Female", 1, "Computer Science", 3.8),
//     new Student("Bob", 21, "Male", 2, "Mathematics", 3.2),
//     new Student("Charlie", 19, "Male", 1, "Physics", 4.0),      // the best
//     new Student("Diana", 22, "Female", 3, "Biology", 2.9),
//     new Student("Eva", 23, "Female", 4, "Chemistry", 3.7),

//     new Teacher("Mr. Johnson", 45, "Male", 50000, 40),
//     new Teacher("Ms. Davis", 39, "Female", 55000, 35),

//     new Dean("Dr. Smith", 50, "Male", 60000, 45),

//     new Director("Mrs. Anderson", 55, "Female", 90000, 50)
// ];

// console.log("\n List of people in school:");
// school.forEach(person => console.log(person.getInfo()));

// const dean = school.find(person => person instanceof Dean);
// console.log(`\n Dean's salary: $${dean.getSalary()}`);

// const director = school.find(person => person instanceof Director);
// console.log(`\n Director's salary: $${director.getSalary()}`);

// const bestStudent = school
//     .filter(person => person instanceof Student)
//     .reduce((best, current) => (current.gpa > best.gpa ? current : best));

// console.log(`\n Best Student: ${bestStudent.name} with GPA ${bestStudent.gpa}`);
