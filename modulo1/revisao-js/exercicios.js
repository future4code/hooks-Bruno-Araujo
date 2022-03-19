// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {

    return array.length
   
}

retornaTamanhoArray()

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    return array.reverse()
  
}

retornaArrayInvertido()

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  
    return array.sort((a, b) => a - b)

}

retornaArrayOrdenado()

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    let ehPar = []

    for (let i of array) {
       if ((i % 2) === 0) {
          ehPar.push(i)         
       }      
    }
    return ehPar
 }

retornaNumerosPares()

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    let elevado = []

    for (let i of array) {
        if ((i % 2) ===0) {
            elevado.push(i*i)
        }
    }
    return elevado
 
}
retornaNumerosParesElevadosADois()

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    let i = 0
    let maiorNumero0 = -Infinity
    while (i < array.length) {
        if (array[i] > maiorNumero0){
            maiorNumero0 = array[i] 
        }
        i++
    }

    return maiorNumero0
}

retornaMaiorNumero()

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let maiorNumero = 0
    if (num1 < num2) {
        maiorNumero = num2
        menorNumero = num1
    }
    else {
        maiorNumero = num1
        menorNumero = num2
    }

    let maiorDivisivelPorMenor = (maiorNumero % menorNumero) === 0
    let diferenca = maiorNumero - menorNumero
    
    let objeto1 = {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca,
    }
return objeto1
}

retornaObjetoEntreDoisNumeros

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;

}

retornaNPrimeirosPares()

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    let tri = 0

    if ((ladoA === ladoB)&(ladoB === ladoC)&(ladoC === ladoA)) {
        tri = "Equilátero"
    }
    
    else if ((ladoA === ladoB)&(ladoB != ladoC)&(ladoC != ladoA))
    tri = "Isósceles" 
    else if ((ladoA != ladoB)&(ladoB === ladoC)&(ladoC != ladoA))
    tri = "Isósceles"    
    else if ((ladoA != ladoB)&(ladoB != ladoC)&(ladoC === ladoA))
    tri = "Isósceles" 

    else if ((ladoA != ladoB)&(ladoB != ladoC)&(ladoC != ladoA))
    tri = "Escaleno"

    return tri

}

classificaTriangulo()

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}