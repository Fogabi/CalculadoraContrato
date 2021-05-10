let alunos = document.querySelector('input#alunos')
let meses = document.querySelector('input#meses')
let valorUnitario = document.querySelector('input#valorUnitario')
let resultado = document.querySelector('div#resultado')
let redacao = document.getElementsByName('redacao')
let numeroRedacoes = document.querySelector('input#numeroRedacoes')
let atualAlunos = document.querySelector('input#atualAlunos')
let atualValor = document.querySelector ('input#atualValor')
let atualVigencia = document.querySelector ('input#atualVigencia')
let atualRedacoes = document.querySelector('input#atualRedacoes')
let diferencaAlunos = document.querySelector('input#diferencaAlunos')
let diferencaVigencia = document.querySelector('input#diferencaVigencia')
let diferencaMes = document.querySelector('input#diferencaMes')
let lista = document.querySelector('select#lista')
let valores = []


function adicionarContrato(){

     somaContrato = Number(alunos.value) * Number(meses.value)  * Number(valorUnitario.value)
     somaRedacao = Number(alunos.value) * Number(meses.value) * (numeroRedacoes.value*3.50)
     somaContratoERedacao = somaContrato + somaRedacao


    if(redacao[1].checked){
        var item = document.createElement('option')
        item.text = `${somaContrato.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} adicionado`
        lista.appendChild(item)
        valores.push(somaContrato)

    }else if(redacao[0].checked){
        var item = document.createElement('option')
        item.text = `${somaContratoERedacao.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} adicionado`
        lista.appendChild(item)
        valores.push(somaContratoERedacao)

    }
    alunos.value = ''
    meses.value = ''
    valorUnitario.value = ''
    numeroRedacoes.value = ''
}

function adicionarAditivo(){

    somaAtualRedacoes = atualVigencia.value * atualAlunos.value * (atualRedacoes.value*3.50)

    somaAtual = atualAlunos.value * atualValor.value * atualVigencia.value + somaAtualRedacoes

    somaRedacaoCaso1 = diferencaVigencia.value * atualAlunos.value * (atualRedacoes.value*3.50)

    somaCaso1 = diferencaVigencia.value * atualAlunos.value * atualValor.value + somaRedacaoCaso1

    somaRedacaoCaso2 = diferencaAlunos.value * (atualVigencia.value - diferencaMes.value + 1) * (atualRedacoes.value * 3.50)

    somaCaso2 = (atualVigencia.value - diferencaMes.value + 1) * atualValor.value * diferencaAlunos.value + somaRedacaoCaso2

    somaRedacaoCaso3 = Number(diferencaAlunos.value) * Number(atualRedacoes.value * 3.50) * (Number(atualVigencia.value)+ Number(diferencaVigencia.value) - Number(diferencaMes.value) + 1)

    somaRedacaoCaso3a = (Number(diferencaVigencia.value) * Number(atualAlunos.value)*(Number(atualRedacoes.value)*3.50))

    somaCaso3 = Number(diferencaAlunos.value)  * Number(atualValor.value)  * (Number(atualVigencia.value)  + Number(diferencaVigencia.value)  - Number(diferencaMes.value)+ 1) + somaRedacaoCaso3 + (Number(diferencaVigencia.value) *Number(atualAlunos.value) * Number(atualValor.value)) + somaRedacaoCaso3a


    if(diferencaAlunos.value.length == 0){
          var item = document.createElement('option')
          item.text = `${somaCaso1.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} adicionado` 
          lista.appendChild(item)
          valores.push(somaCaso1)
            
    }else if(diferencaVigencia.value.length == 0){
        var item = document.createElement('option')
        item.text = `${somaCaso2.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} adicionado`
        lista.appendChild(item)
        valores.push(somaCaso2)

    }else if(diferencaAlunos.length !==0 && diferencaVigencia.length !==0){
        var item = document.createElement('option')
        item.text = `${somaCaso3.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} adicionado!`
        lista.appendChild(item)
        valores.push(somaCaso3)

    }
    atualAlunos.value = ''
    atualRedacoes.value = ''
    atualValor.value = ''
    atualVigencia.value = ''
    diferencaVigencia.value = ''
    diferencaMes.value = ''
    diferencaAlunos.value = ''
    redacao= redacao[1].checked

}

function calcular(){
    let soma = 0 
    for (let pos in valores){
        soma = soma + valores[pos]
    }
    resultado.innerHTML += `O valor total dos itens é de ${soma.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} \u{1F609}`
    lista.length = ''
}