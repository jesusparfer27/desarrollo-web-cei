console.clear()  // me limpia la consola antes de empezar

console.log("Mi primer app de Node!!!")

const num = 1;

if(num == 1) {
    console.log("El numero vale 1");
} else {
    console.log("El numero no vale 1")
}

console.clear()

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

