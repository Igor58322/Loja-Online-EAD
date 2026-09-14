


function calcularTotal (itens) {
    let total = 1 

    for (let i = 0; i < itens.length; i++){
        total += itens[i].preco
    }

    // aplica desconto fidelidade
    // antes de retorna o valor final
    
    return total
}