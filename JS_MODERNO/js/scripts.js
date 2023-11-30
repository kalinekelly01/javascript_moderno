// 1 - var, let e const
var x = 10;
var y = 15;

if (y > 10) {
    var x = 5;
    console.log(x);
}
console.log(x);

let a = 10;
let b = 15;

if ( b > 10) {
    let a = 5;
    console.log(a);
}
console.log(a);

function logName() {
    const name = "kaline";
    console.log(name)
}
const name = "kelly";
logName();
console.log(name);

// 2 - arrow functions
const sum = function (a, b) {
    return a + b;
}

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {

    if(name) {
        return `Hello ${name}!`;
    } else{
        return "Hello";
    }
}
console.log(greeting("Kaline"));
console.log(greeting());

const user = {
    name: "Helena",
    sayUserName() {
        setTimeout(function () {
            console.log(this);
            console.log(`Username: ${this.name}`);
        }, 1000);
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this);
            console.log(`Username: ${this.name}`);
        }, 2000);
    },
};
user.sayUserName();

// 3 - filter
const arr = [1, 2, 3, 4, 5,6];
const heighNumbers = arr.filter((n) => {

    if (n >= 3) {
        return n;
    }
});
console.log(heighNumbers);

// 4 - map
const products = [
 {name: "camisa", price: 19.00, category: "roupas"},
 {name: "arroz", price: 4.00, category: "comida"},{name: "bolo", price: 39.00, category: "comida"},{name: "calça", price: 50.00, category: "roupas"},
];

products.map((product) => {
    if (product.category === "roupas") {
        product.onSale = true;
    }
});
console.log(products);

// 5 - template literals
const UserName = "Kaline";
const age = 21;

console.log(`O nome do usuário é ${UserName} e ela tem ${age} anos`);

// 6 - destructuring
const fruits = ["Maça", "Mamão", "Banana"];
const [f1, f2, f3] = fruits;
console.log(f1, f3);

const productDetails = {
    name: "mouse",
    price: 20.00,
    category: "periférico",
    color: "cinza",
};
const {name: productName, price, category, color} = productDetails;
console.log(`O nome do produto é ${productName}, ele custa R$${price} e é da cor ${color}.`);

// 7 - spread operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];
console.log(a3);

const a4 = [0, ...a3, 7];
console.log(a4);

const carName = {name: "gol"};
const carbrand = {brand: "VW"};
const otherInfos = {km: 1000000, price: 3090999};
const car = {...carName, ...carbrand, ...otherInfos};
console.log(car);
