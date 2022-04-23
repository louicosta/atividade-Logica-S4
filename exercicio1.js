/* | Exemplo 01 | Descrição |
| --- | --- |
| `For/Break/Continue` | Utilize a estrutura de repetição for para imprimir no console conforme instruções:
a) números de 1 a 50
b) quando chegar no número 25 interrompa a instrução e pare o loop
c) quando chegar no número 10 pule a instrução| */


//Letra a
console.log('Inicio A')
for (let i = 1; i <= 50; i++) {
    console.log(i)
}

console.log('Fim A')

//letra b
console.log('Inicio B')
for (let x = 1; x <= 50; x++) {
    if (x === 25) {
        break
    }
    console.log(x)
}

console.log('Fim B')

//letra c
console.log('Inicio C')
for (let i = 1; i <= 50; i++) {
    if (i === 10) {
        continue
    }
    console.log(i)
}

console.log('Fim C')
