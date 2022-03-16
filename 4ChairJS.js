const Confort = document.querySelector('#botãoConfort')
const Classic = document.querySelector('#botãoClassic')
const Modern = document.querySelector('#botãoModern')
const Standart = document.querySelector('#botõesStandart')
const Botões = document.querySelector('#botõesP')

const estilos = document.querySelector('#estilos')
const informações = document.querySelector('#informações')

const slideIMG = document.querySelector('#slide-imagens')
const pontos = document.querySelector('#pontos')


console.log(pontos.childNodes[1])

function scale(){
    slideIMG.classList.toggle('maskScale')
    slideIMG.classList.toggle('img')

    pontos.classList.toggle('pontosScale')

    console.log('scale')
}
slideIMG.onclick = scale

function slidepoint1 () {
    console.log('slide')
    pontos.childNodes[1].classList.remove('ponto')
    pontos.childNodes[1].classList.add('pontored')
    slideIMG.childNodes[1].style.zIndex = '3'

    slideIMG.childNodes[3].style.zIndex = '1'
    slideIMG.childNodes[5].style.zIndex = '1'

    pontos.childNodes[3].classList.remove('pontored')
    pontos.childNodes[5].classList.remove('pontored')
    pontos.childNodes[3].classList.add('ponto')
    pontos.childNodes[5].classList.add('ponto')

}

pontos.childNodes[1].onclick = slidepoint1

function slidepoint2 () {
    console.log('slide')
    pontos.childNodes[3].classList.remove('ponto')
    pontos.childNodes[3].classList.add('pontored')
    slideIMG.childNodes[3].style.zIndex = '3'

    slideIMG.childNodes[1].style.zIndex = '1'
    slideIMG.childNodes[5].style.zIndex = '1'

    pontos.childNodes[1].classList.remove('pontored')
    pontos.childNodes[5].classList.remove('pontored')
    pontos.childNodes[1].classList.add('ponto')
    pontos.childNodes[5].classList.add('ponto')

}

pontos.childNodes[3].onclick = slidepoint2

function slidepoint3 () {
    console.log('slide')
    pontos.childNodes[5].classList.remove('ponto')
    pontos.childNodes[5].classList.add('pontored')
    slideIMG.childNodes[5].style.zIndex = '3'

    slideIMG.childNodes[1].style.zIndex = '1'
    slideIMG.childNodes[3].style.zIndex = '1'

    pontos.childNodes[1].classList.remove('pontored')
    pontos.childNodes[3].classList.remove('pontored')
    pontos.childNodes[1].classList.add('ponto')
    pontos.childNodes[3].classList.add('ponto')

}

pontos.childNodes[5].onclick = slidepoint3 




function ChangeConfort (){
    pontos.childNodes[1].click()
    Confort.classList.remove('circle')
    Confort.classList.add('circleP')
    Classic.classList.add('circle')
    Modern.classList.add('circle')
    Standart.classList.add('circle')

    slideIMG.childNodes[1].src = "conteudo/Seções/Cadeira4P.jpg"
    slideIMG.childNodes[3].src = "conteudo/Seções/Cadeira41.jpg"
    slideIMG.childNodes[5].src = "conteudo/Seções/Cadeira42.jpg"


    estilos.childNodes[3].childNodes[1].childNodes[1].childNodes[1].innerHTML = 'Padrão'
    estilos.childNodes[3].childNodes[1].childNodes[3].src = "conteudo/Seções/Cadeira41.jpg"
    estilos.childNodes[3].childNodes[3].childNodes[1].childNodes[1].innerHTML = 'Escolha as cores'
    estilos.childNodes[3].childNodes[3].childNodes[3].src = "conteudo/Seções/Cadeira42.jpg"

    informações.childNodes[1].innerHTML = 'Cadeira Confort'
    informações.childNodes[3].childNodes[1].childNodes[1].innerHTML = 'R$ 39,80'
    informações.childNodes[3].childNodes[3].childNodes[3].innerHTML = 'R$ 398'

    console.log('funfou')
}

Confort.onclick = ChangeConfort

function ChangeClassic (){
    pontos.childNodes[1].click()
    Classic.classList.remove('circle')
    Classic.classList.add('circleP')
    Confort.classList.add('circle')
    Modern.classList.add('circle')
    Standart.classList.add('circle')

    slideIMG.childNodes[1].src = "conteudo/Seções/Cadeira1P.jpg"
    slideIMG.childNodes[3].src = "conteudo/Seções/Cadeira11.jpg"
    slideIMG.childNodes[5].src = "conteudo/Seções/Cadeira12.jpg"


    estilos.childNodes[3].childNodes[1].childNodes[1].childNodes[1].innerHTML = 'Varias Cores'
    estilos.childNodes[3].childNodes[1].childNodes[3].src = "conteudo/Seções/Cadeira11.jpg"
    estilos.childNodes[3].childNodes[3].childNodes[1].childNodes[1].innerHTML = 'Opção sem bancada'
    estilos.childNodes[3].childNodes[3].childNodes[3].src = "conteudo/Seções/Cadeira12.jpg"

    informações.childNodes[1].innerHTML = 'Cadeira Classic'
    informações.childNodes[3].childNodes[1].childNodes[1].innerHTML = 'R$ 43,80'
    informações.childNodes[3].childNodes[3].childNodes[3].innerHTML = 'R$ 438'

    console.log('funfou')
}

Classic.onclick = ChangeClassic


function ChangeModern (){
    pontos.childNodes[1].click()
    Modern.classList.remove('circle')
    Modern.classList.add('circleP')
    Confort.classList.add('circle')
    Classic.classList.add('circle')
    Standart.classList.add('circle')

    slideIMG.childNodes[1].src = "conteudo/Seções/Cadeira2P.jpg"
    slideIMG.childNodes[3].src = "conteudo/Seções/Cadeira21.jpg"
    slideIMG.childNodes[5].src = "conteudo/Seções/Cadeira22.jpg"


    estilos.childNodes[3].childNodes[1].childNodes[1].childNodes[1].innerHTML = 'Varias Cores'
    estilos.childNodes[3].childNodes[1].childNodes[3].src = "conteudo/Seções/Cadeira21.jpg"
    estilos.childNodes[3].childNodes[3].childNodes[1].childNodes[1].innerHTML = 'Opção sem bancada'
    estilos.childNodes[3].childNodes[3].childNodes[3].src = "conteudo/Seções/Cadeira22.jpg"

    informações.childNodes[1].innerHTML = 'Cadeira Modern'
    informações.childNodes[3].childNodes[1].childNodes[1].innerHTML = 'R$ 49,80'
    informações.childNodes[3].childNodes[3].childNodes[3].innerHTML = 'R$ 498'

    console.log('funfou')
}

Modern.onclick = ChangeModern

function ChangeStandart (){
    pontos.childNodes[1].click()
    Standart.classList.remove('circle')
    Standart.classList.add('circleP')
    Confort.classList.add('circle')
    Classic.classList.add('circle')
    Modern.classList.add('circle')

    slideIMG.childNodes[1].src = "conteudo/Seções/Cadeira3P.jpg"
    slideIMG.childNodes[3].src = "conteudo/Seções/Cadeira31.jpg"
    slideIMG.childNodes[5].src = "conteudo/Seções/Cadeira32.jpg"


    estilos.childNodes[3].childNodes[1].childNodes[1].childNodes[1].innerHTML = 'Varias Cores'
    estilos.childNodes[3].childNodes[1].childNodes[3].src = "conteudo/Seções/Cadeira31.jpg"
    estilos.childNodes[3].childNodes[3].childNodes[1].childNodes[1].innerHTML = 'Opção sem bancada'
    estilos.childNodes[3].childNodes[3].childNodes[3].src = "conteudo/Seções/Cadeira32.jpg"

    informações.childNodes[1].innerHTML = 'Cadeira Standart'
    informações.childNodes[3].childNodes[1].childNodes[1].innerHTML = 'R$ 28,50'
    informações.childNodes[3].childNodes[3].childNodes[3].innerHTML = 'R$ 285'

    console.log('funfou')
}

Standart.onclick = ChangeStandart