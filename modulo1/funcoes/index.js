// QUESTAO 1
//10
//50
//nada iria aparecer

// QUESTAO 2

//a funcao recebe um texto do usuario, coloca todo em letras minusculas, e acrescenta 
//a palavra cenoura 

//true
//true
//true

//1 Questao 1
function sobreMim () 
{const sobreMim2 ="Eu sou Caio, tenho 23 anos, moro em Sao Paulo e sou estudante!"}

console.log(sobreMim)

//b


const xNome = prompt("Nome")
const xIdade = prompt("Idade")
const xCidade = prompt("Cidade")
const xProfissao = prompt("Profissao")

function sobreVC() {
    const sobreEU = "Eu sou " + xNome + " tenho " + xIdade + " anos e moro em " + xCidade + " e sou " + xProfissao
    console.log(sobreEU)
}

sobreVC()

// questao 2


const num1 = prompt("Numero1")
const num2 = prompt("Numero2")

function somarNum () {

    const somado = (+num1) + (+num2)
    console.log(somado)
}

somarNum()


//b

const num3 = prompt("Numero3")
const num4 = prompt("Numero4")

function maiorIgual () {

    const maiorIgual = (+num3) >= (+num4)
    console.log(maiorIgual)
}

maiorIgual()


//c

const num5 = prompt("Numero5")

function par () {

    const ehPar = ((+num5) % 2) === 0
    console.log(ehPar)
}

par()

//d


const palavra = prompt("Uma palavra em capslock")
const palavraka = palavra.length
const palavrakak = palavra.toLowerCase()

function palavra2 () {
    const palavraX = palavra
    console.log(palavraka)
    console.log(palavrakak)
}

palavra2()



//3

const nume1 = prompt("nume1")
const nume2 = prompt("nume2")

function soma (){

    const soma1 = (+nume1) + (+nume2)
    console.log(soma1)
}

soma()

function diferenca (){

    const diferenca1 = (+nume1) - (+nume2)
    console.log(diferenca1)
}

diferenca()

function multi (){

    const multi1 = (+nume1) * (+nume2)
    console.log(multi1)
}

multi()

function div (){

    const div1 = (+nume1) / (+nume2)
    console.log(div1)
}

div()

