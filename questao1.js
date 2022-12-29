const chuteImg = document.getElementById("chuteImg");
const chuteVideo = document.getElementById("chuteVideo");
const perguntas = document.getElementById("perguntas");
const enunciado = document.querySelector("#enunciado");
const btnInicial = document.querySelector("#btnInicial");
const questoes = document.querySelector("#questoes")
const choices = Array.from(document.querySelectorAll('.choice-text'));
const quiz = document.querySelector("#quiz");
const expl = document.querySelector("#explicacao")
const coment = document.getElementById("comentario")
const containerVF = document.getElementById("containerVF")
const opcaoVF = Array.from(document.getElementsByClassName("opcaoVF"))
const comentVF = document.getElementsByClassName("resposta")
const enunciadoVF = document.getElementById("enunciadoVF")
const btnVF = document.getElementById('btnVF')
const containerRelac = document.getElementById('containerRelac')
const btnQuiz = document.getElementById('btnQuiz')
const contBtnQuiz = document.getElementById('contBtnQuiz')
const opcaoRelac = Array.from(document.getElementsByClassName("opcaoRelac"))
const btnRelac = document.getElementById('btnRelac')
const comentRelac = document.getElementsByClassName("comentRelac")
const resultados = Array.from(document.getElementsByClassName("resultados"))
const opcoesSeis = Array.from(document.getElementsByClassName("opcoesSeis"))
const btnQR = document.getElementById("btnQR")
const QR = document.getElementById("QR")
const quadroResultados = document.getElementById('quadroResultados')
const comentSeis = document.getElementsByClassName("comentSeis")
const questoesR = Array.from(document.getElementsByClassName("questoesR"))
const contBtnQR = document.getElementById('contBtnQR')
const opcoesOito = Array.from(document.getElementsByClassName("opcoesOito"))
const comentOito = document.getElementsByClassName("comentOito")
const dots = Array.from(document.getElementsByClassName("dot"))
const opcoesCinco = Array.from(document.getElementsByClassName("opcoesCinco"))
const comentCinco = document.getElementsByClassName("comentCinco")
const choices2 = Array.from(document.querySelectorAll('.choices2'));
const comentario2 = Array.from(document.querySelectorAll('.comentario2'));
const introducao = document.getElementById("introducao")
const etapa = document.getElementsByClassName("etapa")


let questions = [
    {
        question: '1 - Em quantas dimensões o movimento acontece:',
        choice1: '1D',
        choice2: '2D',
        choice3: '3D',
        choice4: '4K',
        choice5: '5G',
        coment1: 'Não é 1D',
        coment2: '',
        coment3: 'Não é 3D',
        coment4: 'Não exite 4K',
        coment5: 'Não existe 5G',
        answer: 2,
        type: 'marcar',
    },
    {
        question: "2 - Qual é o tipo de movimento:",
        choice1: "MRU",
        choice2: "MRUV",
        choice3: "Circular",
        choice4: "Parabólico",
        choice5: "Queda livre",
        coment1: 'Não é MRU',
        coment2: 'Não é MRUV',
        coment3: 'Não é Circular',
        coment4: 'Muito bem',
        coment5: 'Não é Queda Livre',
        answer: 4,
        type: 'marcar',

    },
    {
        question: "3 - Indique em V e F as seguintes sentenças:",
        answer1: "F",
        answer2: "V",
        answer3: "F",
        answer4: "F",
        coment1: 'Errado, pois são independentes',
        coment2: 'Errado, pois vx é constante',
        coment3: 'Incorreto, pois ay é constante',
        coment4: 'Incorreto, a velocidade neste caso não é um escalar',
        type: 'VF',
    },
    {
        question: "4",
        answer1: "b",
        answer2: "a",
        coment1: 'Incorreto',
        coment2: 'Incorreto',
    },
    {
        question: "5",
        answer1: "e",
        answer2: "b",
        coment1: 'Incorreto',
        coment2: 'Incorreto',
    },
    {
        question: "6",
        answer1: "a",
        answer2: "b",
        coment1: 'Incorreto',
        coment2: 'Incorreto',
    },
    {
        question: "7",
        coment1: 'Incorreto',
        coment2: 'Incorreto',
        coment3: 'Muito bem',
        coment4: 'Incorreto',
        coment5: 'Incorreto',
        answer: 3,
        type: 'marcar',

    },
    {
        question: "8",
        answer1: "2",
        coment1: "Incorreto"
    },
    {
        question: "9",
        coment1: 'Incorreto',
        coment2: 'Incorreto',
        coment3: 'Incorreto',
        coment4: 'Incorreto',
        coment5: 'Muito bem',
        answer: 5,
        type: 'marcar',
    },
    {
        question: "10",
        coment1: 'Muito bem',
        coment2: 'Incorreto',
        coment3: 'Incorreto',
        coment4: 'Incorreto',
        coment5: 'Incorreto',
        answer: 1,
        type: 'marcar',
    }
]

let aceitandoRespostas = true
let questaoAtual = {}
let contadorQuestoes = 0
let flag = 0

function comecar(){
    for(let i = 1; i < questoesR.length ; i++)
    {
        questoesR[i].style.display = 'none' 
        resultados[i].style.display =  'none'
    }
    QR.style.display = 'none'
    chuteImg.style.display = 'none'
    questoes.style.display = 'none'
    expl.style.display = 'none'
    quiz.style.display = 'block'  
    containerVF.style.display = 'none' 
    containerRelac.style.display = 'none'    
    introducao.style.display = 'none'
    etapa[0].style.display = 'none'
}

function abrirIntroducao(){
    if(flag > 0)
    {
        comecarQuestoes()
        return
    }
    flag++
    chuteVideo.style.display = 'none'
    perguntas.style.display = 'none'
    enunciado.style.display = 'none'
    introducao.style.display = 'block'

}

function comecarQuestoes() {
    etapa[0].style.display = 'block'
    chuteImg.style.display = 'block'
    enunciado.style.display = 'block'
    introducao.style.display = 'none'
    chuteVideo.style.display = 'none'
    perguntas.style.display = 'none'
    btnInicial.style.display = 'none'
    questoes.style.display = 'block'
    quiz.style.display = 'block'
    expl.style.display = 'none'
    contBtnQuiz.style.display = 'none'
    if(contadorQuestoes < 2)
    {
        chuteImg.style.display = 'block'
        proximaQuestao()
    }
    else
    {
        chuteImg.style.display = 'none'
        questaoVF()
    }
}

function questaoVF() {
    quiz.style.display = 'none'
    containerVF.style.display = 'block'
    questaoAtual = questions[2]
    enunciadoVF.innerText = questaoAtual.question
}

function proximaQuestao() {

    questaoAtual = questions[contadorQuestoes]
    contadorQuestoes++
    aceitandoRespostas = true
    if(questaoAtual.type == "marcar")
    {
        questaoMarcar()
    }
}

function questaoMarcar() {
    enunciado.innerText = questaoAtual.question
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = questaoAtual['choice' + number]
    })
}

function mostrarExplicacao() {
    expl.style.display = 'block'
    quiz.style.display = 'none'   
}

function estaPreenchido(opcoes,coment) {
    let p = 0;
    for (let i = 0; i < opcoes.length; i++)
    {
        if(opcoes[i].value == "Vazio")
        {
            coment[i].innerHTML = "Preencha esse campo"
        }
        else
        {
            coment[i].innerHTML = ""
            p++
        }
    }
    if(p == opcoes.length)
    {
        return true
    }
    return false
}

function corrigir(opcoes,coment,button) {

    if(!estaPreenchido(opcoes,coment)) return

    let c = 0

    for(let i = 0; i < opcoes.length; i++)
    {
        let num = i + 1
        if(opcoes[i].value != questaoAtual['answer' + num])
        {
            coment[i].innerHTML = questaoAtual['coment' + num]
            coment[i].classList.remove('coment-correct')
            coment[i].classList.add('coment-incorrect')
        }
        else
        {
            coment[i].innerHTML = "Correto!"
            coment[i].classList.remove('coment-incorrect')
            coment[i].classList.add('coment-correct')
            c++
        }
    }

    if(c == opcoes.length)
    {
        button.innerText = "Avançar"
    }
    else
    {
        button.innerText = "Tente novamente"
    }
}


function questaoRelacionar() {
    containerVF.style.display = 'none'
    containerRelac.style.display = 'block'
    contadorQuestoes = 3
    questaoAtual = questions[contadorQuestoes]
}

opcaoVF.forEach(opcao => {
    opcao.addEventListener('click', e => {

        let opcoes = e.target
        comentVF[opcoes.dataset['number'] - 1].innerText = ""

        if(btnVF.innerText == 'Tente novamente')
        {
            resetarSelec(opcaoVF,comentVF,btnVF)
        }
        else if(btnVF.innerText == 'Avançar')
        {
            btnVF.innerText = 'Corrigir'
        }
    })
})

btnVF.addEventListener('click', e => {
    if(btnVF.innerText == 'Corrigir')
    {
        corrigir(opcaoVF,comentVF,btnVF)
    }
    else if(btnVF.innerText == 'Tente novamente')
    {
        resetarSelec(opcaoVF,comentVF,btnVF)
    }
    else
    {
        questaoRelacionar()
    }
})

let selectedChoice = choices[0]
let classToApply

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!aceitandoRespostas) return
        aceitandoRespostas = false

        classToApply = 'incorrect'
        selectedChoice.parentElement.classList.remove(classToApply)

        selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        classToApply = selectedAnswer == questaoAtual.answer ? 'correct' : 'incorrect'
        selectedChoice.parentElement.classList.add(classToApply)
        contBtnQuiz.style.display = 'block'
        if(classToApply == 'incorrect')
        {
            aceitandoRespostas = true
            coment.innerText = questaoAtual['coment' + selectedAnswer]
            btnQuiz.innerText = "Tente Novamente"
            aceitandoRespostas = false
        }
        else
        {
            btnQuiz.innerText = "Avançar"
            coment.innerText = ""
            aceitandoRespostas = false
        }        
    })
})

choices2.forEach(choice => {
    choice.addEventListener('click', e => {
        

        if(!aceitandoRespostas) return
        aceitandoRespostas = false

        let n = 0

        if(contadorQuestoes > 6)
        {
            n = contadorQuestoes - 7
        }
        classToApply = 'incorrect'
        selectedChoice.parentElement.classList.remove(classToApply)
        
        selectedChoice = e.target
        console.log("Teste")
        while(selectedChoice.className != "choices2")
        {
            selectedChoice = selectedChoice.parentElement
        }

        const selectedAnswer = selectedChoice.dataset['number']

        classToApply = selectedAnswer == questaoAtual.answer ? 'correct' : 'incorrect'
        selectedChoice.parentElement.classList.add(classToApply)
        contBtnQR.style.display = 'block'
        if(classToApply == 'incorrect')
        {
            aceitandoRespostas = true
            comentario2[n].innerText = questaoAtual['coment' + selectedAnswer]
            btnQR.innerText = "Tente Novamente"
            aceitandoRespostas = false
        }
        else
        {
            btnQR.innerText = "Avançar"
            comentario2[n].innerText = ""
            aceitandoRespostas = false
        }        
    })
})

btnQuiz.addEventListener('click', e => {
    if(btnQuiz.innerText == 'Tente Novamente')
    {
        selectedChoice.parentElement.classList.remove(classToApply)
        coment.innerText = ''
        contBtnQuiz.style.display = 'none'
        aceitandoRespostas = true
    }
    else
    {
        aceitandoRespostas = true
        contBtnQuiz.style.display = 'none'
        if(contadorQuestoes == 2)
        {
            selectedChoice.parentElement.classList.remove(classToApply)
            mostrarExplicacao()
                
        }
        else
        {    
            selectedChoice.parentElement.classList.remove(classToApply)
            proximaQuestao()
        }
    }
})

function resetarSelec(opcoes, coment, button) {
    for(let i = 0; i < opcoes.length ; i++)
    {
        opcoes[i].value = "Vazio"
        coment[i].innerHTML = ""
        coment[i].classList.remove('coment-correct')
        coment[i].classList.remove('coment-incorrect')
    }
    button.innerText = "Corrigir"
}

opcaoRelac.forEach(opcao => {
    opcao.addEventListener('click', e => {

        let opcoes = e.target
        comentRelac[opcoes.dataset['number'] - 1].innerText = ""

        if(btnRelac.innerText == 'Tente novamente')
        {
            resetarSelec(opcaoRelac,comentRelac,btnRelac)
        }
        else if(btnVF.innerText == 'Avançar')
        {
            btnRelac.innerText = 'Corrigir'
        }
    })
})

btnRelac.addEventListener('click', e => {
    if(btnRelac.innerText == 'Corrigir')
    {
        corrigir(opcaoRelac,comentRelac,btnRelac)
    }
    else if(btnRelac.innerText == 'Tente novamente')
    {
        resetarSelec(opcaoRelac,comentRelac,btnRelac)
    }
    else
    {
        contadorQuestoes = 4
        questaoAtual = questions[contadorQuestoes]
        novaQuestao()
    }
})

opcoesSeis.forEach(opcao => {
    opcao.addEventListener('click', e => {

        let opcoes = e.target
        comentSeis[opcoes.dataset['number'] - 1].innerText = ""

        if(btnQR.innerText == 'Tente novamente')
        {
            resetarSelec(opcoesSeis,comentSeis,btnQR)
        }
        else if(btnQR.innerText == 'Avançar')
        {
            btnQR.innerText = 'Corrigir'
        }
    })
})

opcoesOito.forEach(opcao => {
    opcao.addEventListener('click', e => {
        let opcoes = e.target
        comentOito[opcoes.dataset['number'] - 1].innerText = ""

        if(btnQR.innerText == 'Tente novamente')
        {
            resetarSelec(opcoesOito,comentOito,btnQR)
        }
        else if(btnQR.innerText == 'Avançar')
        {
            btnQR.innerText = 'Corrigir'
        }
    })
})

opcoesCinco.forEach(opcao => {
    opcao.addEventListener('click', e => {

        let opcoes = e.target
        comentCinco[opcoes.dataset['number'] - 1].innerText = ""

        if(btnQR.innerText == 'Tente novamente')
        {
            resetarSelec(opcoesCinco,comentCinco,btnQR)
        }
        else if(btnQR.innerText == 'Avançar')
        {
            btnQR.innerText = 'Corrigir'
        }
    })
})

btnQR.addEventListener('click', e => {
    if(btnQR.innerText == 'Avançar')
    {
        contadorQuestoes++
        novaQuestao(contadorQuestoes)
        aceitandoRespostas = true
    }    
    if(contadorQuestoes == 4)
    {
        if(btnQR.innerText == 'Corrigir')
        {
            corrigir(opcoesCinco,comentCinco,btnQR)
        }
        else if(btnQR.innerText == 'Tente novamente')
        {
            resetarSelec(opcoesCinco,comentCinco,btnQR)
        }
    }
    else if(contadorQuestoes == 5)
    {
        if(btnQR.innerText == 'Corrigir')
        {
            corrigir(opcoesSeis,comentSeis,btnQR)
        }
        else if(btnQR.innerText == 'Tente novamente')
        {
            resetarSelec(opcoesSeis,comentSeis,btnQR)
        }
    }
    else if(contadorQuestoes == 6)
    {
        if(btnQR.innerText == 'Tente Novamente')
        {
            selectedChoice.parentElement.classList.remove(classToApply)
            comentario2[0].innerText = ''
            contBtnQR.style.display = 'none'
            aceitandoRespostas = true
        }
    }
    else if(contadorQuestoes == 7)
    {
        if(btnQR.innerText == 'Corrigir')
        {
            corrigir(opcoesOito,comentOito,btnQR)
        }
        else if(btnQR.innerText == 'Tente novamente')
        {
            resetarSelec(opcoesOito,comentOito,btnQR)
        }
    }
    else
    {
        if(btnQR.innerText == 'Tente Novamente')
        {
            selectedChoice.parentElement.classList.remove(classToApply)
            comentario2[contadorQuestoes - 7].innerText = ''
            contBtnQR.style.display = 'none'
            aceitandoRespostas = true
        }
    }
    
})

function novaQuestao() {
    QR.style.display = 'flex'
    containerRelac.style.display = 'none'

    btnQR.innerText = 'Corrigir'
    questaoAtual = questions[contadorQuestoes]
    
    for(let i = 0; i < questoesR.length; i++)
    {
        questoesR[i].style.display = 'none'
        resultados[i].style.display = 'none'
    }
    questoesR[contadorQuestoes - 4].style.display = 'block'
    resultados[contadorQuestoes - 4].style.display = 'block'
    if(questaoAtual.type == "marcar")
    {
        contBtnQR.style.display = 'none'
    }
    else
    {
        contBtnQR.style.display = 'block'
    }
}

dots.forEach(dot => {
    dot.addEventListener('click', e => {
        
        let selectedDot = e.target
        contadorQuestoes = selectedDot.dataset['number'] - 1
        questaoAtual = questions[contadorQuestoes]
        QR.style.display = 'none'
        containerVF.style.display = 'none'
        containerRelac.style.display = 'none'
        quiz.style.display = 'none'
        questoes.style.display = 'none'
        btnQR.innerText = "Corrigir"
        btnVF.innerText = "Corrigir"
        btnRelac.innerText = "Corrigir"
        if(contadorQuestoes < 2)
        {   
            comecarQuestoes()
        }
        else if(contadorQuestoes == 2)
        {  
            questaoVF()
        }
        else if(contadorQuestoes == 3)
        {
            questaoRelacionar()
        }
        else if(contadorQuestoes >= 4)
        {
            
            novaQuestao()
        }
    })
})

comecar()