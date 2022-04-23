/* | Exemplo 03 | Descrição |
| --- | --- |
| `Tabuada` | Faça um programa que dado um número, imprime
 no (console.log) a tabuada do mesmo de 1 a 10. | */

 
function multiplicationTable(num) {
    let stringMultiplicationTable = ""
    for (i = 1; i <= 10; i++) {
        let result = num * i
        stringMultiplicationTable = `${stringMultiplicationTable} ${num} x ${i} = ${result} \n`
    }
    return stringMultiplicationTable
}
console.log(multiplicationTable(23))