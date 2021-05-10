function calcular(){
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
    

    somaContrato = Number(alunos.value) * Number(meses.value) * Number(valorUnitario.value)  //Soma simples para contratos sem redação e sem aditivos

    diferecaMeses = Number(meses.value) - Number(respAlunos2.value) + 1 //essa variável se refere ao total de meses que os novos alunos vão aproveitar o produto

    somaAditivo = diferecaMeses * Number(respAlunos1.value) * Number(valorUnitario.value)  //Se refere à soma de novos alunos na primeira op de aditivos

    somaRedacao = Number(alunos.value) * Number(meses.value) * (numeroRedacoes.value * 3.50) //Soma das redações de contrato simples

    somaRedacao2 = Number(alunos.value) * Number(respMes.value) * (numeroRedacoes.value *3.50)  /*Quando aumentar os meses de vigência, tenho que acrescentar redações nesses meses*/

    somaCaso2= somaContrato + somaAditivo  //Caso em que não tem redação mas tem aditivo do tipo 1

    somaCaso3a = respMes.value * alunos.value * valorUnitario.value  //Caso em que não tem redação mas tem aditivo do tipo 2 - valor acrescentado

    somaCaso3b = somaContrato + (alunos.value * respMes.value)  //Caso em que não tem redação mas tem aditivo do tipo 2 - valor total

    somaContratoERedacao = somaContrato + somaRedacao   //Soma de contrato e redações de contrato simples

    somaCaso5 = somaContratoERedacao + somaAditivo + (numeroRedacoes.value * respAlunos1.value * diferecaMeses * 3.50) //Caso em que tem redação e aditivo op 1

    somaCaso6 =  somaContrato + somaRedacao + somaRedacao2 + (valorUnitario.value * alunos.value * respMes.value)  //Caso em que tem redação e aditivo op 2


    if(redacao[1].checked){
        if (respostaAditivos[1].checked){
            resultado.innerHTML = `O valor total do contrato é de ${somaContrato.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`

        }else if(respostaAditivos[0].checked){
            if(tipoAditivo[0].checked){               
                resultado.innerHTML = `No contrato inicial havia ${alunos.value} alunos. Por isso, o valor total era de ${somaContrato.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}<br>`

                resultado.innerHTML += `Adicionando ${respAlunos1.value} alunos no mês ${respAlunos2.value}, o valor de ${somaAditivo.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} foi acrescentado.<br>`

                resultado.innerHTML += `O valor final ficou ${somaCaso2.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}<br>`
            
            }else if(tipoAditivo[1].checked){
                resultado.innerHTML = `O valor inicial para ${meses.value} meses era de R$${somaContrato.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}.`

                resultado.innerHTML += `Com ${respMes.value} meses de diferença, o valor ${somaCaso3a.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} foi acrescentado `

                resultado.innerHTML += `O valor total passa a ser de ${somaCaso3b.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`
            }

        }
    } else if(redacao[0].checked){
        if(respostaAditivos[1].checked){
            resultado.innerHTML =  ` O valor do produto escolhido para ${alunos.value} alunos, é de ${somaContrato.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}. Com ${numeroRedacoes.value} redações por aluno ao mês, o valor total fica de ${somaContratoERedacao.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`

        }else if(respostaAditivos[0].checked){
            if(tipoAditivo[0].checked){
                resultado.innerHTML = `O valor inicial para ${alunos.value} alunos era de ${somaContratoERedacao.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}<br>`

                resultado.innerHTML += `No entanto, como ${respAlunos1.value} alunos foram acrescentados, o valor passou a ser de ${somaCaso5.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`
            
            }else if(tipoAditivo[1].checked){
                resultado.innerHTML = `O valor inicial do contrato para ${alunos.value} alunos era de ${somaContratoERedacao.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}<br>`

                resultado.innerHTML += `No entanto, como o contrato foi alterado para ${respMes.value} meses, o valor passou a ser de ${somaCaso6.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`
            }
        }
    }
   
}