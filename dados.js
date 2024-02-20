let resposta = document.getElementById("resp1")
let resposta2 = document.getElementById("resp2")
let gerar = document.getElementById("gerar")

function aleatorio(num){
    let valor = 0
    valor = Math.floor( Math.random() * (num-1)+ 1)

    return valor
}

gerar.addEventListener('click', ()=>{
let quantidade = Number(document.getElementById('qnt').value)
aleatorio(quantidade)
let resultado = aleatorio(quantidade)
console.log(resultado)
resposta.innerHTML = `o valor gerado = ${resultado}` 




})