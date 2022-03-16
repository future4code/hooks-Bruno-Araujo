//1

//a. indefinido 
//b. nulo
//c. 11
//d. 3
//e. [3,19,..]
//f. 9

//2

//"SUBI NUM ONIBUS EM MIRROCOS 29"



//1

let nomeDoUsuario = prompt("Qual o seu nome?")
let emailDoUsuario = prompt("Qual o seu email?")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vindo(a) ${nomeDoUsuario}!`)


//2

let array = ['Strogonoff', 'Espaguete', 'Pizza', 'Camarao', 'Defumados']

console.log(array)

console.log(`Essas sao as minhas comidas preferidas: ${array}`)

array = ['Strogonoff', `${prompt("Qual sua comida preferida?")}`, 'Pizza', 'Camarao', 'Defumados']

console.log(`Essas sao as minhas comidas preferidas: ${array}`)


//3

let listaDeTarefas = null

listaDeTarefas = [`${prompt("Me diga uma tarefa que voce precisa realizar hoje")}`, `${prompt("Me diga outra tarefa")}`, `${prompt("Me diga mais uma tarefa")}`]

console.log(listaDeTarefas)

let realizado = prompt("Qual tarefa voce realizou hj? (indice de 0 a 2)")

var removed = listaDeTarefas.splice(realizado,1)

console.log(removed)

