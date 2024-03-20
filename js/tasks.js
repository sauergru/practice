// Функція для визначення типу змінної:
// Написати функцію для визначення типу змінної.
// Функція отримує будь-яке значення в якості аргументу
// і визначає тип цієї змінної. Виводить в консоль
// повідомлення `Тип змінної: tуре`

// function variableType(value) {
//     return `Тип змінної: ${typeof value}`;
// }
// console.log(variableType(7));
// console.log(variableType(""));
// console.log(variableType(true));




// Написати функція для обчислення довжини рядка.
// Функція отримує рядок в якості аргументу і
// вибодить в консоль повідомлення "Довжина рядка Length"

// function stringNumber(string) {
//     return `Довжина рядка ${string.length}`;
// }
// console.log(stringNumber("hello world"));




// Оголоси функцію hasDiscount(age, isStudent, isPensioner),
// яка перевіряє, чи покупець має право на знижку.
// І повертає true - якщо має право на знижку і false, якщо - ні.
// Покупець має право на знижку, якщо він є студентом
// або пенсіонером, або вік його між 12 і 18 роками (включно).
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік покупця;
// isStudent - буль (вказує чи є покупець студентом);
// isPensioner - буль (вказує чи є покупець пенсіонером);

// function hasDiscount(age, isStudent, isPensioner) {
//     return isStudent || isPensioner || (age > 12 && age < 18);
// }
// console.log(hasDiscount(29, false, false));
// console.log(hasDiscount(73, false, true));
// console.log(hasDiscount(14, false, false));




// Оголоси функцію canRegisterOnSite(age, hasAcceptedTerms),
// яка перевіряє, чи може користувач зареєструватись на сайті.
// І повертає true - якщо може зареєструватись і false, якщо - ні.
// Користувач може зареєструватись, якщо йому виповнилося 13 років
// і він прийняв умови використання.
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік користувача;
// hasAcceptedTerms - буль (вказує чи прийняв користувач умови використання);

// function canRegisterOnSite(age, hasAcceptedTerms) {
//     return age >= 13 && hasAcceptedTerms;
// }
// console.log(canRegisterOnSite(15, true));
// console.log(canRegisterOnSite(10, true));




// Оголоси функцію checkstring(value), яка перевіряє
// чи отримане значення є рядком і не містить символ $.
// Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.

// function checkstring(value) {
//     typeof value === "string" && !value.includes("$")
//         ? console.log(`${value.length}`)
//         : console.log("Невірний ввід");
// }
// checkstring(34);




//Напишіть цикл (for), який виведе в консоль усі парні числа від max до min включно по зменшенню
// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i--) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }




// За допомогою циклу for знайдіть суму усіх парних чисел у проміжку від min до max включно
// const max = 50;
// const min = 0;
// let sum = 0;

// for (let i = min; i <= max; i++) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     sum += i;
//     console.log(sum);
// }
// console.log(sum);




// Напишіть програму, яка обчислить суму всіх чисел (за допомогою циклу for)
// від 1 до 100, які діляться на 3 або на 5. І виведи в консоль рядок :
// `Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${sum}`

// const min = 1;
// const max = 100;
// let sum = 0;

// for (let i = min; i < max; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//     }
// }
// console.log(`Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${sum}`);




// Написати Функцію getCountryInfo(country), котра буде
// отримувати назву країни і виводити інформацію про неї
// China => "Китай - найбільша країна за населенням у світі."
// Australia => "Австралія - найбільший острів та країна в Океанії."
// France => "Франція відома своєю гастрономією та мистецтвом."
// Germany => "Німеччина - найбільша економіка в Європі."
// Canada => "Канада - друга за площею країна у світі, відома своєю природою."
// Якщо країни немає, вивести повідомлення "Інформація про цю країну відсутня."

// function getCountryInfo(country) {
//     let info;
//     switch (country) {
//         case "China":
//             info = "Китай - найбільша країна за населенням у світі.";
//             break;
//         case "Australia":
//             info = "Австралія - найбільший острів та країна в Океанії.";
//             break;
//         case "France":
//             info = "Франція відома своєю гастрономією та мистецтвом.";
//             break;
//         case "Germany":
//             info = "Німеччина - найбільша економіка в Європі.";
//             break;
//         case "Canada":
//             info = "Канада - друга за площею країна у світі, відома своєю природою.";
//             break;
//         default:
//             info = "Інформація про цю країну відсутня.";
//     }
//     return info;
// }
// console.log(getCountryInfo("France"));
// console.log(getCountryInfo("Ukraine"));




// Напишіть функцію formatMinutesToTime(minutes), котра
// отримає від користувача число(кількість хвилин) і виведе
// в консоль рядок у форматі годин і хвилин, тобто, якщо користувач
// вказав число 70, в консолі
// отримаємо "01:10"

// function formatMinutesToTime(minutes) {
//     const hours = Math.floor(minutes / 60);
//     const modhours = String(hours).padStart(2, "0");
//     const modminutes = String(minutes % 60).padStart(2, "0");
//     console.log(hours);
//     console.log(modhours);
//     console.log(`${modhours}:${modminutes}`);
// }
// formatMinutesToTime(119);
// formatMinutesToTime(324);




// Додати метод getinfo в обʼєкт user, який повертатиме інформацію
// про користувача у форматі:
// `Name: Peter. Surname: Parker. Age: 22. Position: spider-man.`

// const user = {
//     name: `Peter`,
//     surname: `Parker`,
//     age: 22,
//     position: `spider-man`,
// };
// user.getInfo = function () {
//     return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position}.`;
// };
// console.log(user.getInfo());




// Написати функцію, котра створить новий масив в якому
// не буде значень, які приводяться до false

// const arr = [
//     1,
//     0,
//     54,
//     "doc",
//     null,
//     "jpg",
//     undefined,
//     "",
//     "png",
//     "exe",
//     false,
//     "mp4",
//     NaN,
//     "hbs",
// ];
// function clearArray(arr) {
//     const arr2 = [];
//     for (const value of arr) {
//         if (value) {
//             arr2.push(value);
//         }
//     }
//     return arr2;
// }
// console.log(clearArray(arr));




// Напиши скрипт, який порівняє два масива і виведе у консоль результат:
// true - якщо всі елементи однакові і false - в іншому випадку

// const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30, 1];
// const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
// const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 232, 0, "list"];

// const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
// const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];

// const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// function toCompare(firstArray, secondArray) {
//   if (firstArray.length !== secondArray.length) return false;
//   for (const elementCycle of firstArray) {
//     if (!secondArray.includes(elementCycle)) return false;
//   }
//   return true;
// }
// console.log(toCompare(arr1, arr2));
// console.log(toCompare(arr3, arr4));
// console.log(toCompare(arr5, arr6));
// console.log(toCompare(arr7, arr8));




// Напишіть функцію caclculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.

// function caclculateAverage(...args) {
//     let sum = 0;
//     let totalCount = 0;
//     for (const arg of args) {
//         if (typeof arg === "number") {
//             sum += arg;
//             totalCount ++;
//         }
//     }
//     return sum / totalCount;
// }
// console.log(caclculateAverage(2, 3, 4, 5, 6, 7, 8, "hello"));




// Напишіть функцію checkKeyInObject(), яка приймає 2 параметри obj і key.
// Функція буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true, в іншому випадку - false.

// const user = {
//     name: 'Igor',
//     car:  'Mercedes',
//     carColor: 'black'
// }
// function checkKeyInObject(obj, key) {
//     for (const objKey in obj) {
//         if (objKey === key) {
//             return true;
//         }
//     }
//     return false;
//
//     return Object.keys(obj).includes(key)
// }
// console.log(checkKeyInObject(user, "name"));
// console.log(checkKeyInObject(user, "Car"));




// Є об'єкт, у якому зберігаються обрані товари у кошику.
// Напишіть код для визначення загальної суму замовлення
// і збережіть його результат у змінній totalCost.
// Якщо об'єкт cart порожній, то результат має бути 0.

// const cart = {
//   apple: 50,
//   banana: 30,
//   orange: 40,
// };
// function totalSum(obj) {
//     let totalCost = 0;
//     const value = Object.values(obj);
//     for (const item of value) {
//         totalCost += item;
//     }

//     for (const key in obj) {
//         totalCost += obj[key];
//     }
//     return totalCost;
// }
// console.log(totalSum(cart));




// Напишіть функцію getPropertyValues(), яка приймає масив об'єктів
// та ключ, і повертає масив значень цього ключа у кожному об'єкті

// const myArr = [
//   {name: "John", age: 30},
//   {name: "Jane", age: 25},
//   {name: "Bob", age: 40},
// ];
// function getPropertyValues(arr, key) {
//     const newArr = [];
//     for (const item of arr) {
//         newArr.push(item[key]);
//     }
//     return newArr;
// }
// console.log(getPropertyValues(myArr, "name"));
// console.log(getPropertyValues(myArr, "age"));




// Розрахувати загальну суму всіх замовлень та вивести інформацію у форматі:
// `Загальна сума всіх замовлень: totalAmount`

// const orders = [
//   { id: 1, product: 'Футболка', quantity: 2, price: 15 },
//   { id: 2, product: 'Шорти', quantity: 3, price: 20 },
//   { id: 3, product: 'Кросівки', quantity: 1, price: 50 }
// ];
// function totalSum(arr) {
//     let totalAmount = 0;
//     for (const item of arr) {
//         totalAmount += item.quantity * item.price;
//     }
//     return `Загальна сума всіх замовлень: ${totalAmount}`;
// }
// console.log(totalSum(orders));




// Виконайте сортування масиву цін за спаданням та зростанням.

// const prices = [1000, 240, 670, 360, 89, 20];
// prices.toSorted((a, b) => a - b);
// prices.toSorted((a, b) => b - a);

// console.log(prices.toSorted((a, b) => a - b));
// console.log(prices.toSorted((a, b) => b - a));




// Перевірити чи всі студенти старші 18 років.

// const students = [
//   { name: 'Alex', age: 17 },
//   { name: 'Stas', age: 18 },
//   { name: 'Mike', age: 22 },
//   { name: 'Den', age: 20 },
// ];
// const adults = students.every(student => student.age >= 18);

// console.log(adults);




// Є масив користувачів, кожен з яких має поля id та name.
//  Потрібно знайти той де id = 1 і виведемо ім'я цього користувача у консоль

//  let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mary"}
// ];
// const firstUser = users.find(user => user.id === 1);
// console.log(firstUser.name);




// Зібрати в allTopics масив всіх предметів всіх курсів.
//Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];
// const allTopics = courses
//     .flatMap(item => item.topics)
//     .filter((item, index, arr) => arr.indexOf(item) === index)
//
// console.log(allTopics);




// Напишіть функцію getGirlsPassports() яка поверне масив номерів паспортів дівчат.
// Напишіть функцію getTotalBoysYears() яка порахує загальний вік хлопців.

// const friends = [
//     { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
//     { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
//     { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
//     { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
//     { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
//     { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
// ]
// function getGirlsPassports() {
//     return friends
//         .filter(friend => friend.sex === 'f')
//         .map(friend => friend.passport)
// }
// function getTotalBoysYears(boys) {
//     return friends
//         .filter(friend => friend.sex === 'm')
//         .reduce((acc, item) => acc + item.age, 0)
// };
// console.log(getGirlsPassports());
// console.log(getTotalBoysYears());




// Маємо масив об'єктів, який представляє список замовлень:
// Завдання:
// 1. Перевірте, чи всі замовлення виконані.
// 2. Поверніть список товарів з усіх виконаних замовлень.

// const orders = [
//   { id: 1, products: ['Milk', 'Bread'], status: 'completed' },
//   { id: 2, products: ['Eggs', 'Juice'], status: 'processing' },
//   { id: 3, products: ['Pasta', 'Spices'], status: 'completed' },
// ];
// const res = orders.every(order => order.status === 'completed');
// const orderList = orders
//     .filter(order => order.status === 'completed')
//     .flatMap(order => order.products)

// console.log(res);
// console.log(orderList);




// маємо масив об'єктів, який представляє список товарів і їх цін:
// Завдання: Знайдіть суму вартості всіх товарів, які коштують більше 10 гривень.

// const products = [
//   { name: 'Milk', price: 20 },
//   { name: 'Bread', price: 10 },
//   { name: 'Eggs', price: 15 },
// ];
// const res = products
//     .filter(product => product.price > 10)
//     .map(product => product.price)
//     .reduce((acc, value) => acc + value, 0);

// console.log(res);




// Є об'єкт і функція для підрахунку суми чисел.
// Виведіть у консоль результат виконання функції, якщо a = 3, b = 5.

// const obj = { num: 2 };
// function add(a, b) {
//     return this.num + a + b;
// };
// const bindedExp = add.bind(obj, 2, 0);

// console.log(add.call(obj, 1, 7));
// console.log(add.apply(obj, [3, 5]));
// console.log(bindedExp());




// Є два об'єкти, які описують деякі характеристики телефонів.
// Потрібно викликати метод showInfo, щоб він логував інформацію про кожний телефон,
// передаючи аргументом країну-виробник телефону.
// "HUAWEI" - "China", "SAMSUNG" - "South Korea".

// const tel = {
//     regNumber: "AE8345FEDAS",
//     brand: "HUAWEI",
//     showInfo(country) {
//         console.log(`${country} ${this.regNumber} ${this.brand}`);
//     }
// }

// const tel_2 = {
//     regNumber: "AO8518FEGHT",
//     brand: "SAMSUNG",

// }

// tel.showInfo('Ukraine');
// tel.showInfo.call(tel_2, "South Korea");
// tel.showInfo.apply(tel_2, ["South Korea"]);
// const res = tel.showInfo.bind(tel_2, "China");
// res()




//Напиши клас Rectangle який створює об'єкт
//з ​​властивостями height, width
//і методом calculateArea() для підрахунку прлощі прямокутника.

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     calculateArea() {
//         return this.height * this.width;
//     }
// }
// const rectangle = new Rectangle(5, 10);

// console.log(rectangle.calculateArea());




//Напиши клас Client який створює об'єкт
//з ​​властивостями login, email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//     #login;
//     #email;
//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }
//     get login() {
//         return this.#login;
//     }
//     set login(newLog) {
//         this.#login = newLog;
//     }
//        get email() {
//         return this.#email;
//     }
//     set email(newMail) {
//         this.#email = newMail;
//     }
// }
// const client = new Client('Max', 'max@gmail.com');

// console.log(client.login);
// console.log(client.email);
// client.login = 'Nastya08';
// client.email = 'nastya@gmail.com';
// console.log(client.login);
// console.log(client.email);



// Створи клас Phone який створює об'єкт з ​​властивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.

// class Phone {
//     static MAX_PRICE = 40000;
//     #price;
//     constructor(price) {
//         this.#price = price;
//     }
//     get price() {
//         return this.#price;
//     }
//     set price(newPrice) {
//         if (newPrice < Phone.MAX_PRICE) {
//             this.#price = newPrice;
//             return;
//         } else {
//             return;
//         }
//     }
// }
// const phone = new Phone(20000);

// console.log(phone.price);
// phone.price = 34000;
// console.log(phone.price);




// При натисканні на кнопку "SHOW ME", потрібно за допомогою alert
// вивести значення, яке будемо вводити в інпут.

// При натисканні на кнопку "SHOW ME", потрібно в консоль
// вивести значення, яке будемо вводити в інпут.

// const btn = document.querySelector("#alertButton");
// const input = document.querySelector("#alertInput");

// btn.addEventListener("click", handleClick);

// function handleClick() {
// alert(input.value)
// }




// При натисканні на кнопку "Приховати" потрібно введені користувачем
// символи в інпут відображати у вигляді крапок замість звичайного
// тексту, а також змінити назву кнопки на "Показати", при повторному
// натисканні знову будемо відображати символи, а назва кнопки зміниться
// на "Приховати".

// const passInput = document.querySelector('#passwordInput');
// const passBtn = document.querySelector('#passwordButton');

// passBtn.addEventListener('click', handleClick);

// function handleClick(event) {
//     if (passInput.type === 'text') {
//         passInput.type = 'password';
//         event.target.textContent = 'Показати';
//         return;
//     }
//     passInput.type = 'text';
//     event.target.textContent = 'Приховати';
// }
// console.dir(passBtn);




// Кнопка "Зменшити" повинна зменшувати квадрат на 10 пікселів.
// Кнопка "Збільшити" повинна збільшувати квадрат на 10 пікселів.

// const box = document.querySelector('#box');
// const decrease = document.querySelector('#decrease');
// const increase = document.querySelector('#increase');

// decrease.addEventListener('click', onDecrease);
// increase.addEventListener('click', onIncrease);

// function onDecrease(event) {
//     const { offsetHeight, offsetWidth } = box;
//     box.style.height = `${offsetHeight - 10}px`;
//     box.style.width = `${offsetWidth - 10}px`;
// }

// function onIncrease(event) {
//     const { offsetHeight, offsetWidth } = box;
//     box.style.height = `${offsetHeight + 10}px`;
//     box.style.width = `${offsetWidth + 10}px`;
// }





// При кліку на кнопку "Подвоїти" збільшувати значення в кожному
// елементі списку в два рази.

// const listItem = document.querySelectorAll('.listItem');
// const btn = document.querySelector('#double');

// btn.addEventListener('click', handleClick);

// function handleClick(event) {
//     listItem.forEach(item => item.textContent = item.textContent * 2);
// }




// Наведено список людей. Зроби можливість фільтрації (пошуку) за ім'ям або за прізвищем.

// const list = document.querySelector('.contacts');
// const contactsInput = document.querySelector('.contactsFilter');
// const contacts = document.querySelectorAll('.contact');

// contactsInput.addEventListener('input', onInput);

// function onInput(event) {
//     const value = event.target.value.toLowerCase().trim();
//     const filteredItems = [...contacts]
//         .filter(el => el.textContent.toLowerCase().includes(value))
    
//     list.innerHTML = '';
//     list.append(...filteredItems);
// }




// При кліку на кнопку "Filter" потрібно видалити з списку позначені елементи.

// const form = document.querySelector('.checkboxForm');
// const wrapper = document.querySelector('.checkboxWrapper');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const filteredItems = [...wrapper]
//         .filter(item => item.lastElementChild.checked)
    
//     filteredItems.forEach(item => item.remove())

// }




// Створіть сторінку, на якій користувач може вводити замітки
// в поле введення.Після введення замітки та кліку на кнопку
// \"Додати", введена замітка повинна додаватися до списку нижче.
// Якщо в поле нічого не введено сабміт не відбувається і
// виводиться повідомлення 'Будь ласка, введіть текст замітки.'
// Текст замітки має бути обрізан від пробілів по краях.

// const form = document.querySelector('#noteForm');
// const input = document.querySelector('#noteInput');
// const list = document.querySelector('#noteList');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const info = input.value.trim();
//     if(info === '') {
//         alert('Будь ласка, введіть текст замітки.');
//         return;
//     }
//     const newNote = document.createElement('li');
//     newNote.textContent = info;
//     list.appendChild(newNote);
//     input.value = '';
// }




// Є форма для замовлення продуктів. Вона містить перелік  продуктів,
// кожен з яких має власний чекбокс та ціну яка зберігається
// у властивості value. Користувач може вибрати бажані продукти,
// після натискання кнопки "Додати у кошик" потрібно вивести суму
// замовлення в спан з ідентифікатором "totalAmount".

// const form = document.querySelector('#orderForm');
// const input = document.querySelectorAll('.product-checkbox');
// const span = document.querySelector('#totalAmount');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const amount = [...input]
//         .filter(item => item.checked)
//         .reduce((total, item) => {
//             total += parseFloat(item.value);
//             return total;
//         }, 0)
//     span.textContent = amount;
// }
