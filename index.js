const data = require("./person");
const catMe = require("cat-me");
const fs = require("fs");

const { name, age } = data.person;

const persona = `Hola, soy ${name} y tengo ${age} años`;

console.log(catMe());

fs.writeFile("persona.txt", persona, () => {
  console.log("Archivo creado");
});
