// //1 Напиши скрипт, який, для об'єкта user, послідовно: додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
    hobby: "gaming",
    premium: true
}
user.hobby = "skydiving";
user.premium = false
user.mood = "Happy"
console.log(user);

const remakeKeys = Object.keys(user)
for (let keys of remakeKeys) {
    console.log(`${keys}:${user[keys]}`)
}
//2 Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
function countProps(object) {
    return Object.keys(user).length
}
console.log(countProps(user))
//3 Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".
function findBestEmployee(employees) {
    let bestEmployee = null;
    let maxTasks = 0;
    for (let [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            bestEmployee = name
            maxTasks = tasks
        }
        return bestEmployee
    }
}

const employees = {
    ola: 100000000000000000000,
    barys: 10,
    timaHacker: 12341924783290573498563487956437534534895693485689436834
}

console.log(findBestEmployee(employees))
//4 Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
const salary = {
    tima: 1000,
    ola: 2000,
    barys:3000
}
function countTotalSalary(employees) {
let totalSalary = 0;

for (const salary of Object.values(employees)) {
  totalSalary += salary;
}

return totalSalary;
}

console.log(countTotalSalary(salary))
//5 Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const products = [
  { name: "Laptop", price: 1500, quantity: 4 },
  { name: "Smartphone", price: 800, quantity: 10 },
  { name: "Tablet", price: 1200, quantity: 5 },
];
function getAllPropValues(arr, nameValue) {
     const values = [];

     for (const object of arr) {
       if (object.hasOwnProperty(nameValue)) {
         values.push(object[nameValue]);
       }
     }

     return values;
}
console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));
console.log(getAllPropValues(products, "quantity"));
//6  Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.
function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;

    for (const product of allProducts) {
        if (product.name === productName) {
            totalPrice = product.price * product.quantity;
            break;
        }
    }

    return totalPrice;
}

console.log(calculateTotalPrice(products, "Laptop"));
console.log(calculateTotalPrice(products, "Smartphone"));
console.log(calculateTotalPrice(products, "Tablet"));