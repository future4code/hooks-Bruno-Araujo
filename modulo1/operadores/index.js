// 1
// a. false
// b. false
// c. false
// d. boolean

// 2
5

// 3
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
const soma = +primeiroNumero + +segundoNumero
console.log(soma)


//1
let idadeUsuario = prompt("Qual a sua idade?")
let idadeAmigo = prompt("Qual a idade do seu amigo")

console.log("Sua idade eh maior que a do seu amigo?", idadeUsuario > idadeAmigo)
console.log("A diferenca de idade eh", idadeUsuario-idadeAmigo)

//2

console.log("O resto da divisao eh", prompt("Insira um numero par")%2)
// o padrao eh que o resto eh sempre zero, ja que nao existe resto de numeros pares divididos por numeros pares
// o resto sera sempre 1

//3

let idadeUsuario2 = prompt("Qual a sua idade? em anos")

console.log("A sua idade em meses eh", idadeUsuario2*12)
console.log("A sua idade em dias eh", (idadeUsuario2*12)*365)
console.log("A sua idade em horas eh", (idadeUsuario2*12)*365*24)

//4
let numero1 = prompt("me diga um numero")
let numero2 = prompt("me diga outro numero")

console.log("O primeiro numero eh maior que o segundo?", numero1>numero2)
console.log("O primeiro numero eh igual ao segundo?", numero1===numero2)

let resto1 = numero1 % numero2
let resto2 = numero2 % numero1

console.log("O primeiro numero eh divisivel pelo segundo?", resto1===0)
console.log("O segundo numero eh divisivel pelo primeiro?", resto2===0)


