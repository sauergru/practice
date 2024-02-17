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