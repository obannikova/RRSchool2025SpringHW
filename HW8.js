// CLASSES

//1. Есть класс Song. Выведите на печать автора песни.

//     class Song {
//         constructor(name, author) {
//             this._name = name;
//             this._author = author;
//         }

//         get author() {
//             return this._author;
//         }

//         set author(writer) {
//             this._author = writer;
//         }
//     }
// const song = new Song("Imagine", "John Lennon");
// console.log(song.author);




//2. Определите класс Shape. 
// - Он имеет три свойства: name, sides, и sideLength. 
// - Этот класс моделирует только фигуры, все стороны которых имеют одинаковую длину, 
//     например квадрат или равносторонний треугольник.
// - Добавьте конструктор в этот класс. 
// - Конструктор принимает аргументы для свойств name, sides и sideLength и 
// инициализирует их.
// - Добавьте в класс новый метод calcPerimeter(), который вычисляет ее периметр 
//     (длину внешнего края фигуры) и записывает результат в консоль.
// - Создайте новый экземпляр класса Shape с именем square. 
// - Дайте name ему square, sides = 4 и sideLength = 5​
// - Вызовите свой calcPerimeter() метод в экземпляре, чтобы проверить, 
//     записывает ли он результаты вычислений в консоль браузера, как ожидалось.
// - Создайте новый экземпляр Shape Called triangle с name -  triangle и sides of = 3,
//   sideLength = 3
// - Вызовите triangle.calcPerimeter(), чтобы убедиться, что все работает.

// class Shape {
//     constructor(name, sides, sideLength) {
//         this.name = name;
//         this.sides = sides;
//         this.sideLength = sideLength
//     }
//
//     calcPerimeter() {
//         console.log(`perimeter of ${this.name} is equal to ${this.sides * this.sideLength}`)
//     }
// }
// 
// const square = new Shape('square', 4, 5)
// square.calcPerimeter()
//
// const triangle = new Shape('triangle',3,3)
// triangle.calcPerimeter()




// 3. 3. Создайте класс "Employee", представляющий работника. У работника должны быть следующие свойства:

    // 1. "name" - строка, представляющая имя работника.
    // 2. "age" - число, представляющее возраст работника.
    // 3. "position" - строка, представляющая должность работника.
    // 4. "salary" - число, представляющее зарплату работника.

    // Требования:

    // 1. Создайте конструктор класса "Employee", который принимает аргументы 
    //     "name", "age", "position", "salary" и инициализирует соответствующие свойства объекта.
    // 2. Создайте геттеры и сеттеры для свойств "age", "position" и "salary".
    // 3. Геттеры должны возвращать значения свойств, а сеттеры должны устанавливать 
    //     новые значения свойств.

// class Employee {
//     constructor(name, age, position, salary) {
//         this.name = name;
//         this.age = age;
//         this.position = position;
//         this.salary = salary;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(checkedName) {
//         if (typeof checkedName === 'string' && checkedName.trim().length > 3) {
//             this._name = checkedName;
//         } else {
//             console.log("Invalid name value.");
//         }
//     }

//     get age() {
//         return this._age;
//     }

//     set age(checkedAge) {
//         if (typeof checkedAge === 'number' && checkedAge > 18 && checkedAge < 80) {
//             this._age = checkedAge;
//         } else {
//             console.log("Invalid age value.");
//         }
//     }

//     get position() {
//         return this._position;
//     }

//     set position(checkedPosition) {
//         if (typeof checkedPosition === 'string' && checkedPosition.trim().length > 3) {
//             this._position = checkedPosition;
//         } else {
//             console.log("Invalid position value.");
//         }
//     }

//     get salary() {
//         return this._salary;
//     }

//     set salary(checkedSalary) {
//         if (typeof checkedSalary === 'number' && checkedSalary > 0) {
//             this._salary = checkedSalary;
//         } else {
//             console.log("Invalid salary value.");
//         }
//     }

//     displayInfo() {
//         console.log(`Name: ${this.name}`);
//         console.log(`Age: ${this.age}`);
//         console.log(`Position: ${this.position}`);
//         console.log(`Salary: $${this.salary}`);
//     }
// }

// const employee = new Employee("Alice", 30, "Software Engineer", 5000);
// employee.displayInfo();

// const employee1 = new Employee("Bob", 17, ['a', 'b'], 'new');
// employee1.displayInfo();




// 4. Создайте класс Person со следующими свойствами:

// a. Конструктор который принимает 4 аргумента: 
// - First Name (по умолчанию значение "John") 
// - Last Name (по умолчанию значение "Doe")
// - Age (по умолчанию значение 0) 
// - Gender (по умолчанию значение "Male"). 
//    
// b. Метод sayFullName без аргументов и возвращает полное имя человека
// c. Статический метод greetExtraTerrestrials который принимает один аргумент, raceName 
// и возвращает "Welcome to Planet Earth <raceName>". 
//
// Пример: если значение raceName "Martians", результат должен быть 
// "Welcome to Planet Earth Martians"

// class Person {
//     constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'male') {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.gender = gender
//     }
//
//     sayfullname() {
//         return this.firstName + ' ' + this.lastName
//     }
//
//     greetExtraTerrestrials(raceName) {
//         return `Welcome to Planet Earth ${raceName}`
//     }
// }
//
// const person1 = new Person();
// console.log(`${person1.sayfullname()} + ${person1.age} + ${person1.gender}`)
// console.log(person1.greetExtraTerrestrials('honey'))




// 5. Переделайте креативное задание из урока 7 в класс. Потом, используя класс, сделайте те же задания:
// a. Выведите в console названия всех книг.
// b. Выведите в console имена самой популярной книги каждого из авторов в читабельном формате
// c. Отсортируйте библиотеку по году выпуска книг

// class Book {
//     constructor(title, author, year, genre, pages, popularity,firstLine) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//         this.genre = genre;
//         this.pages = pages;
//         this.popularity = popularity;
//         this.firstLine = firstLine;
//         this.id = null;
//     }
// }
//
// class Library {
//     constructor() {
//         this.books = [];
//     }
//
//     addBook(book) {
//         book.id = this.books.length + 1;
//         this.books.push(book);
//     }
//
//     printAllBookTitles() {
//         console.log("\nНазвания всех книг:");
//         this.books.forEach(book => console.log(book.title));
//     }
//
//     printMostPopularBookByAuthor() {
//         console.log("\nСамые популярные книги каждого автора:");
//    
//         const popularBooks = {};
//    
//         this.books.forEach(book => {
//             if (!popularBooks[book.author] || book.popularity > popularBooks[book.author].popularity) {
//                 popularBooks[book.author] = book;
//             }
//         });
//    
//         for (let author in popularBooks) {
//             const book = popularBooks[author];
//             console.log(`- ${author}: "${book.title}" (${book.year})`);
//         }
//     }
//
//     sortByYear() {
//         const sortedLibrary = this.books.slice().sort((a, b) => a.year - b.year)
//         console.log("\n Книги, отсортированные по году выпуска:");
//         sortedLibrary.forEach(book => {
//             console.log(`- ${book.year}: "${book.title}" by ${book.author}`);
//         });
//     }
// }
//
// const library = new Library();
//
// library.addBook(new Book("The Shining", "Stephen King", 1977, "Horror", 447, 5, "Jack Torrance thought: Officious little prick."));
// library.addBook(new Book("It", "Stephen King", 1986, "Horror", 1138, 5, "The terror, which would not end for another twenty-eight years—if it ever did end—began, so far as I know or can tell, with a boat made from a sheet of newspaper."));
// library.addBook(new Book("Carrie", "Stephen King", 1974, "Horror", 199, 4, "Nobody was really surprised when it happened, not really, not at the subconscious level where savage things grow."));
// library.addBook(new Book("Misery", "Stephen King", 1987, "Thriller", 310, 5, "umber whunnnn"));
// library.addBook(new Book("The Green Mile", "Stephen King", 1996, "Fantasy", 432, 4, "This happened in 1932, when the state penitentiary was still at Cold Mountain."));
// library.addBook(new Book("The Adventures of Tom Sawyer", "Mark Twain", 1876, "Adventure", 274, 5, "“Tom!” No answer. “Tom!” No answer."));
// library.addBook(new Book("The Adventures of Huckleberry Finn", "Mark Twain", 1885, "Adventure", 366, 5, "You don’t know about me without you have read a book by the name of 'The Adventures of Tom Sawyer'"));
// library.addBook(new Book("The Prince and the Pauper", "Mark Twain", 1881, "Historical Fiction", 288, 4, "In the ancient city of London, on a certain autumn day in the second quarter of the sixteenth century."));
// library.addBook(new Book("A Connecticut Yankee in King Arthur's Court", "Mark Twain", 1889, "Science Fiction", 480, 4, "Camelot—a castle!"));
// library.addBook(new Book("Pudd'nhead Wilson", "Mark Twain", 1894, "Fiction", 340, 4, "Tell the truth or trump—but get the trick."));
// library.addBook(new Book("Евгений Онегин", "Александр Пушкин", 1833, "Роман в стихах", 224, 5, "Мой дядя самых честных правил..."));
// library.addBook(new Book("Борис Годунов", "Александр Пушкин", 1825, "Трагедия", 300, 4, "Слышите ль? Ударили в колокол."));
// library.addBook(new Book("Медный всадник", "Александр Пушкин", 1837, "Поэма", 48, 5, "На берегу пустынных волн..."));
// library.addBook(new Book("Капитанская дочка", "Александр Пушкин", 1836, "Историческая проза", 200, 4, "Не приведи Бог видеть русский бунт, бессмысленный и беспощадный."));
// library.addBook(new Book("Повести Белкина", "Александр Пушкин", 1831, "Сборник новелл", 150, 4, "Выстрел раздался..."));
//
// library.printAllBookTitles();
// library.printMostPopularBookByAuthor()
// library.sortByYear()