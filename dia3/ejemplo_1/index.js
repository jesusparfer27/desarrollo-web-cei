console.clear()

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Hola soy una app de NODEMON",
    e : "><",
    T : "U"
}));

console.log("holaa")

function sumar(num1, num2) {
    return num1+num2;
}

const resultado = sumar(5, 23);
console.log(`5 + 23 es: `,resultado)
