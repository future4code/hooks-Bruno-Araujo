// INTERPRETAÇÃO 

    //1

 //(Matheus Nachtergaele)
 //(20)
 //(Canal Globo 14h)


    //2

 //A
 //(Juca 3 SRD)
 //(Juba 3 SRD)
 //(Jubo 3 SRD)

 //B
 //Ele puxa o conteúdo do objeto anterior para o objeto atual

 
    //3
 //A
 //Caio 23 [false] 
 //Caio 23 [false] > undefined 
 
 //B
 //o backendeer ja havia sido definido como falso, mas a altura não, por isso undefined.




// ESCRITA DE CÓDIGO 
    //1
 const Brenda1 = {
    nome: "Brenda",
    apelidos: ["Brendinha", " Be", " BB"]
 } 

 function Brenda(objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos}`)
 }

 Brenda(Brenda1)

    //b
 const Brenda2 = {
    ...Brenda1,    
    apelidos: ["Xuxu", " mô", " Amor"],
 }

 Brenda(Brenda2)
 

    //2
 const geral1 = {
    nome: "Bruno",
    idade: 22,
    profissao: "Analista Comercial"
 }
 const geral2 = {
    nome: "Brenda",
    idade: 22, 
    profissao: "Técnica de Análises Clínicas"
 }

 function geralzao (objeto) {
    console.log(objeto.nome,objeto.nome.length,objeto.idade,objeto.profissao,objeto.profissao.length)
 }

 geralzao(geral1)
 geralzao(geral2)

    //3
 var carrinho = []

 const sacolao1 = {
     nome: "Mamão",
     disponibilidade: true
 }
 const sacolao2 = {
     nome: "Banana",
     disponibilidade: true
 }
 const sacolao3 = {
     nome: "Maçã",
     disponibilidade: true
 }

function sacolaox (objeto) {
     carrinho.push(`${objeto.nome},${objeto.disponibilidade}`)     
}

sacolaox(sacolao1)
sacolaox(sacolao2)
sacolaox(sacolao3)

console.log(carrinho)