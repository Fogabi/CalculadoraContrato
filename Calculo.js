let alunos = document.querySelector('input#alunos')
let meses = document.querySelector('input#meses')
let valorUnitario = document.querySelector('input#valorUnitario')
let resultado = document.querySelector('div#resultado')
let redacao = document.getElementsByName('redacao')
let numeroRedacoes = document.querySelector('input#numeroRedacoes')
let respostaAditivos = document.getElementsByName('respostaAditivo')
let tipoAditivo = document.getElementsByName('tipoAditivo')
let respAlunos1 = document.querySelector('input#respAlunos1')
let respAlunos2 = document.querySelector('input#respAlunos2')
let respMes = document.querySelector('input#respMes')
let lista = document.querySelector('select#lista')
let valores = []

function adicionar(){

    diferecaMeses = Number(meses.value) - Number(respAlunos2.value) + 1 //essa variável se refere ao total de meses que os novos alunos vão aproveitar o produto

    somaContrato = Number(alunos.value) * Number(meses.value) * Number(valorUnitario.value)  //Soma simples para contratos sem redação e sem aditivos

    somaAditivo = diferecaMeses * Number(respAlunos1.value) * Number(valorUnitario.value)

    somaCaso2= somaContrato + somaAditivo  //Caso em que não tem redação mas tem aditivo do tipo 1

    somaCaso3b = somaContrato + (alunos.value * respMes.value)

    somaCaso3a = respMes.value * alunos.value * valorUnitario.value  //Caso em que não tem redação mas tem aditivo do tipo 2 - valor acrescentado

    somaRedacao = Number(alunos.value) * Number(meses.value) * (numeroRedacoes.value * 3.50) //Soma das redações de contrato simples

    somaRedacao2 = Number(alunos.value) * Number(respMes.value) * (numeroRedacoes.value *3.50)  /*Quando aumentar os meses de vigência, tenho que acrescentar redações nesses meses*/

    somaContratoERedacao = somaContrato + somaRedacao   //Soma de contrato e redações de contrato simples

    somaCaso5 = somaContratoERedacao + somaAditivo + (numeroRedacoes.value * respAlunos1.value * diferecaMeses * 3.50) //Caso em que tem redação e aditivo op 1

    somaCaso6 =  somaContrato + somaRedacao + somaRedacao2 + (valorUnitario.value * alunos.value * respMes.value)  //Caso em que tem redação e aditivo op 2


    if(redacao[1].checked){
        if (respostaAditivos[1].checked){
            var item = document.createElement('option')
            lista.appendChild(item)
            item.text = `${somaContrato.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} adicionado`
            valores.push(somaContrato)

        }else if(respostaAditivos[0].checked){
            if(tipoAditivo[0].checked){ 
                var item = document.createElement('option')
                lista.appendChild(item)
                item.text = `${somaCaso2.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} adicionado`
                valores.push(somaCaso2)

           
            }else if(tipoAditivo[1].checked){
                var item = document.createElement('option')
                lista.appendChild(item)
                item.text = `${somaCaso3b.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} adicionado`
                valores.push(somaCaso3b)
 
            }

        }
    } else if(redacao[0].checked){
        if(respostaAditivos[1].checked){
            var item = document.createElement('option')
            lista.appendChild(item)
            item.text = `${somaContratoERedacao.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} adicionado`
            valores.push(somaContratoERedacao)
           

        }else if(respostaAditivos[0].checked){
            if(tipoAditivo[0].checked){
                var item = document.createElement('option')
                lista.appendChild(item)
                item.text = `${somaCaso5.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} adicionado`
                valores.push(somaCaso5)
                

            }else if(tipoAditivo[1].checked){
                var item = document.createElement('option')
                lista.appendChild(item)
                item.text = `${somaCaso6.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} adicionado`
                valores.push(somaCaso6)
               
                
            }
        }
    }
    soma = 0
    alunos.value = ''
    meses.value = ''
    valorUnitario.value = ''
    respAlunos1.value = ''
    respAlunos2.value = ''
    respMes.value = ''
    numeroRedacoes.value = ''

}
let soma = 0

function calcular(){
    for (let pos in valores){
        soma = soma + valores[pos]
    }
    resultado.innerHTML += `O valor total do contrato é de ${soma.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`
}



