/*| Exemplo 05 | Descrição |
| --- | --- |
| `Fatorial` | Crie uma função que irá receber um número 
e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6 |*/
  

function factorial(num) {
    let result = num
    for (let i = 1; i < num; i++){
        result = result * i
    }
    return 'O fatorial de ' + (num) + ' é ' + result
}
console.log(factorial(5))