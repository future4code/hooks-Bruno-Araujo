//ENUNCIADO 
//1 

//ela ira retornar os valores do array; nome: Amanda Rangel, Lais Petra, Leticia Chijo; apelio: mandi, laura, chijo

//2

//objeto 1; nome: Amanda Rangel - objeto 2; nome: Lais Petra - objeto 3; nome: Leticia Chijo

//3

//Mandi, Laura


//EXERCICIOS

//1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const pets2 = pets.map((item, index, array) => {

    return item.nome 

 })

console.log(pets2)

//B

const pets3 = pets.filter((item, index, array) => {

    return item.raca === "Salsicha"

})

console.log(pets3)

//C

const pets4 = pets.filter((item, index, array) => {

    return item.raca === "Poodle"

})

const pets5 = pets4.map( pets => 'Voce ganhou um cupom de desconto de 10% para tosar o/a ' + `${pets.nome}`);


console.log(pets5)




//2

//a

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

const produtos2 = produtos.map ((item, index, array) => {

    return item.nome 

})

console.log(produtos2)


//b

const produtos3 = produtos.map ((item, index, array) => {

    return [item.nome, item.preco*0.95] 

})


console.log (produtos3)

//c

const produtos4 = produtos.filter ((item, index, array) => {

    return item.categoria === "Bebidas"

})

console.log(produtos4)

//d

const produtos5 = produtos.map ((item, index, array) => {

    return [item.nome.includes("Ypê")]

})

console.log(produtos5)

//e

const produtos6 = produtos.map ( produtos => 'Compre ' + `${produtos.nome}` + ' por R$' + `${produtos.preco}`);

console.log(produtos6)

