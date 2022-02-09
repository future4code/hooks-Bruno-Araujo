
// 1 - Sera impresso o valor 10 e logo embaixo os valores 10 e 5. 
// 2 - Sera impresso os valores 10, 10 e 10. 
// 3 - Os melhores nomes seriam p = horasDia e t = recebidoDia. Esse programa recebe dois valores, o primeiro eh o numero de horas trabalhadas por dia, e o segundo o valor recebido por dia, no final ele faz a divisao de valor recebido por horas trabalhadas, ou seja, o quanto voce recebe por hora.

let nome1 = String
let idade1 = Number

console.log(typeof(nome1))
console.log(typeof(idade1))

// o tipo foi declarado como sendo uma função, já que os dois valores são funções de dados ainda não aplicados a ele.

nome1 = prompt("Qual seu nome?") 
idade1 = prompt("Qual a sua idade?")

console.log(typeof(nome1))
console.log(typeof(idade1))

console.log("Olá", nome1, "você tem", idade1, "anos")

// FIM DO EXERCÍCIO 1

let resposta1 = Boolean
resposta1 = prompt("Cruzeiro é o maior de minas?")

let resposta2 = Boolean
resposta2 = prompt("Atlético-MG é time grande?")

let resposta3 = Boolean
resposta3 = prompt("Brasil vai ser HEXA esse ano?")

let resposta1A = resposta1
let resposta2A = resposta2
let resposta3A = resposta3

console.log("Cruzeiro é o maior de minas? -", resposta1A)
console.log("Atlético-MG é time grande? -", resposta2A)
console.log("Brasil vai ser HEXA esse ano? -", resposta3A)


// FIM DO EXERCÍCIO 2

let a = 10
let a1 = a
let b = 25
let b1 = b

a = b1
b = a1

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

// FIM DO EXERCÍCIO 3