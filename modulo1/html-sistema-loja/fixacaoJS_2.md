```function calculaPrecoTotal(quantidade) {
    let custoTotal = 0
    if (quantidade < 12 ) {
        custoTotal = quantidade * 1.30
    }
    else {
        custoTotal = quantidade * 1.00
    }
    return custoTotal
}
