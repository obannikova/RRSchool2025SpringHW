// OBJECTS ///

// 1. Создайте объект cars, где будут 3-4 разные машины с их названиями, 
// моделями, годом выпуска и цветом.

// let cars = {
//     car1: { brand: "Toyota", model: "Camry", year: 2022, color: "Black" },
//     car2: { brand: "BMW", model: "X5", year: 2021, color: "White" },
//     car3: { brand: "Audi", model: "A6", year: 2023, color: "Gray" },
//     car4: { brand: "Mercedes", model: "C-Class", year: 2020, color: "Blue" }
// };
//
// console.log(cars);
//
// let cars1 = new Object({
//     car1: { brand: "Toyota", model: "Camry", year: 2022, color: "Black" },
//     car2: { brand: "BMW", model: "X5", year: 2021, color: "White" },
//     car3: { brand: "Audi", model: "A6", year: 2023, color: "Gray" },
//     car4: { brand: "Mercedes", model: "C-Class", year: 2020, color: "Blue" }
// });
//
// console.log(cars1)



//2. Работа с объектом room. Выполняйте пошагово.
//   а. Создайте объект room и его параметры:
//   ключ height со значением 3
//   ключ tv со значением samsung
//   ключ big со значением true

let room = {
    height: 3,
    tv: "samsung",
    big: true
}

//console.log(room);

// b. Выведите в console все параметры объекта room по очереди
// console.log(`height is equal to ${room.height}`);
// console.log(`tv brand is ${room.tv}`);
// console.log(`is room big? ${room.big}`)

// c. Выведите в console тип данных параметра big
//console.log(typeof room.big)

// d. Выведите в console количество символов в строке параметра tv (длину строки)
//console.log(room.tv.length)

// e. Выведите в console результат расчёта: длина строки параметра tv минус 1
//console.log(room.tv.length - 1)

// f. Поменяйте samsung на все заглавные буквы и выведите в console.
//console.log(room.tv.toUpperCase())

// g. Замените samsung на LG в нашем объекте room
// room.tv = "LG";
// console.log(room.tv)

// h. Добавьте в наш объект room ещё одну пару ключ-значение: 
// ключ furniture, значение - массив из 3 строк: "table", "chair", "sofa"
// room.furniture = ["table", "chair", "sofa"]
// console.log(room)

// i. выведите chair в console (путем обращения к массиву)
// room.furniture = ["table", "chair", "sofa"]
// console.log(room.furniture[1])

// j. Удалите из нашего объекта room параметр big
// room.furniture = ["table", "chair", "sofa"]
// delete room.big;
// console.log(room)



// 3. Создайте функцию, которая принимает следующий объект как параметр:
// {name: "dog", legs: 4, color: "yellow"}
// Возвратите строку: "This yellow dog has 4 legs."

// function sentence(object) {
//     return `This ${object.color} ${object.name} has ${object.legs} legs.`
// }

// let a = new Object ({
//     name: "dog",
//     legs: 4,
//     color: "yellow"
// })

// console.log(sentence(a))




// 4. Есть список людей, которые подписались на международную встречу разработчиков.
//
//  var developers = [
//      { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', age: 29, language: 'Ruby' },
//      { firstName: 'Peter', lastName: 'B.', country: 'Poland', age: 48, language: 'Javascript' },
//      { firstName: 'Natasha', lastName: 'P.', country: 'Mexico', age: 25, language: 'C#' },
//      { firstName: 'Josh', lastName: 'A.', country: 'USA', age: 26, language: 'C#' },
//      { firstName: 'Augusto', lastName: 'C.', country: 'Spain', age: 32, language: 'Java' },
//      { firstName: 'Lei Mi', lastName: 'S.', country: 'China', age: 52, language: 'Fortran' },
//      { firstName: 'Mikey', lastName: 'L.', country: 'New Zealand', age: 30, language: 'Node' }
//  ];
//
//     Вопрос: есть ли хоть один разработчик, работающий на JavaScript? Возвратите да или нет. Будьте внимательны.

// let developers = [
//     { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', age: 29, language: 'Ruby' },
//     { firstName: 'Peter', lastName: 'B.', country: 'Poland', age: 48, language: 'Javascript' },
//     { firstName: 'Natasha', lastName: 'P.', country: 'Mexico', age: 25, language: 'C#' },
//     { firstName: 'Josh', lastName: 'A.', country: 'USA', age: 26, language: 'C#' },
//     { firstName: 'Augusto', lastName: 'C.', country: 'Spain', age: 32, language: 'Java' },
//     { firstName: 'Lei Mi', lastName: 'S.', country: 'China', age: 52, language: 'Fortran' },
//     { firstName: 'Mikey', lastName: 'L.', country: 'New Zealand', age: 30, language: 'Node' }
// ];
//
// function isJS(developers) {
//     return developers.some(el => el.language === 'Javascript');
// }
//
// console.log(isJS(developers));




// 5. Создайте библиотеку книг Стивена Кинга, Марка Твена и Александра Сергеевича. 
// В библиотеке должно быть по 5 книг каждого писателя. 
// Каждая книга должна иметь идентификатор (isbn), 
// имя книги, имя автора, год выпуска, жанр, количество страниц, 
// популярность книги у этого автора (от 1 до 5) и 
//первое предложение/строку.

const library = [
    {
        isbn: "1",
        title: "The Shining",
        author: "Stephen King",
        year: 1977,
        genre: "Horror",
        pages: 447,
        popularity: 5,
        firstLine: "Jack Torrance thought: Officious little prick."
    },
    {
        isbn: "2",
        title: "It",
        author: "Stephen King",
        year: 1986,
        genre: "Horror",
        pages: 1138,
        popularity: 5,
        firstLine: "The terror, which would not end for another twenty-eight years—if it ever did end—began, so far as I know or can tell, with a boat made from a sheet of newspaper."
    },
    {
        isbn: "3",
        title: "Misery",
        author: "Stephen King",
        year: 1987,
        genre: "Thriller",
        pages: 370,
        popularity: 4,
        firstLine: "umber whunnnn."
    },
    {
        isbn: "4",
        title: "The Stand",
        author: "Stephen King",
        year: 1978,
        genre: "Post-apocalyptic",
        pages: 823,
        popularity: 5,
        firstLine: "Hapscomb’s Texaco sat on Number 93 just north of Arnette, a pissant four-street burg about 110 miles from Houston."
    },
    {
        isbn: "5",
        title: "Carrie",
        author: "Stephen King",
        year: 1974,
        genre: "Horror",
        pages: 199,
        popularity: 4,
        firstLine: "Nobody was really surprised when it happened, not really, not on the subconscious level where savage things grow."
    },
    {
        isbn: "6",
        title: "The Adventures of Tom Sawyer",
        author: "Mark Twain",
        year: 1876,
        genre: "Adventure",
        pages: 274,
        popularity: 5,
        firstLine: "Tom!"
    },
    {
        isbn: "7",
        title: "The Adventures of Huckleberry Finn",
        author: "Mark Twain",
        year: 1884,
        genre: "Adventure",
        pages: 366,
        popularity: 5,
        firstLine: "You don’t know about me, without you have read a book by the name of The Adventures of Tom Sawyer; but that ain’t no matter."
    },
    {
        isbn: "8",
        title: "A Connecticut Yankee in King Arthur’s Court",
        author: "Mark Twain",
        year: 1889,
        genre: "Science Fiction",
        pages: 450,
        popularity: 4,
        firstLine: "It was in Warwick Castle that I came across the curious stranger whom I am going to talk about."
    },
    {
        isbn: "9",
        title: "The Prince and the Pauper",
        author: "Mark Twain",
        year: 1881,
        genre: "Historical Fiction",
        pages: 320,
        popularity: 4,
        firstLine: "In the ancient city of London, on a certain autumn day in the second quarter of the sixteenth century, a boy was born to a poor family of the name of Canty, who did not want him."
    },
    {
        isbn: "10",
        title: "Life on the Mississippi",
        author: "Mark Twain",
        year: 1883,
        genre: "Memoir",
        pages: 624,
        popularity: 3,
        firstLine: "The Mississippi is well worth reading about."
    },
    {
        isbn: "11",
        title: "Евгений Онегин",
        author: "Александр Пушкин",
        year: 1833,
        genre: "Novel in Verse",
        pages: 224,
        popularity: 5,
        firstLine: "Мой дядя самых честных правил..."
    },
    {
        isbn: "12",
        title: "Капитанская дочка",
        author: "Александр Пушкин",
        year: 1836,
        genre: "Historical Novel",
        pages: 192,
        popularity: 5,
        firstLine: "Батюшка, Андрей Петрович Гринёв, в молодости служил при графе Минихе."
    },
    {
        isbn: "13",
        title: "Пиковая дама",
        author: "Александр Пушкин",
        year: 1834,
        genre: "Gothic Fiction",
        pages: 80,
        popularity: 4,
        firstLine: "Однажды зимним вечером играл в карты у конногвардейца Нарумова."
    },
    {
        isbn: "14",
        title: "Повести Белкина",
        author: "Александр Пушкин",
        year: 1831,
        genre: "Short Stories",
        pages: 160,
        popularity: 4,
        firstLine: "Я жил тогда в одном из своих деревенских имений."
    },
    {
        isbn: "15",
        title: "Руслан и Людмила",
        author: "Александр Пушкин",
        year: 1820,
        genre: "Epic Poem",
        pages: 240,
        popularity: 3,
        firstLine: "У лукоморья дуб зелёный..."
    }
]

//console.log(library);

// a. Выведите в console названия всех книг.
//library.forEach(book => console.log(book.title));

// b. Выведите в console имена самой популярной книги каждого из авторов в читабельном формате
// const uniqueAuthors = [...new Set(library.map(el => el.author))];

// const books = []
// for (let i = 0; i < uniqueAuthors.length; i++) {
//     let popularity = 0;
//     let index = null;
//     for (let a = 0; a < library.length; a++) {
//         if (library[a].author === uniqueAuthors[i]) {
//             if (library[a].popularity > popularity) {
//                 popularity = library[a].popularity
//                 index = a
//             }
//         }
//     }
//     books[i] = library[index].title
// }
//
// for (let i = 0; i < books.length; i++) {
//     console.log(`${uniqueAuthors[i]}: "${books[i]}"`)
// }

// c. Отсортируйте библиотеку по году выпуска книг
// const sortedLibrary = library.slice().sort((a, b) => a.year - b.year); // slice - чтобы не менять исходный массив
// console.log(sortedLibrary);
