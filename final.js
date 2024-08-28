let array=[]
function calculadora(operador, n1, n2) {
    if (operador == 'suma') {
        array.push(n1+n2)
        return n1 + n2
    } else if (operador == 'resta') {
        array.push(n1-n2)
        return n1 - n2
    } if (operador == 'multiplicacion') {
        array.push(n1*n2)
        return n1 * n2
    } else if (operador == 'division') {
        array.push(n1/n2)
        return n1 / n2
    }
    
    
}

calculadora('suma', 10, 2)
calculadora('resta', 2, 4)
calculadora('multiplicacion',5,6)
calculadora('division',28,2)

console.log(array)











