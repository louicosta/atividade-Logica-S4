/* | Exemplo 04 | Descrição |
| --- | --- |
| `Pares` |Imprima na tela os números pares existentes entre 0 e 100..|
 */


function even() {
    for (var i = 0; i <= 100; i++) {
        if ((i % 2) == 0) {
            console.log(i)
        }
    }
}

even();