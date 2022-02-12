//Ajustando a dimensão responsiva da tela
var largura = 0
var altura = 0
var vidas = 1
var tempo = 15
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?','')


if(nivel === 'normal'){
	//1,5segundos
	criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
	//1,0 segundos
	criaMosquitoTempo = 1000
}else if(nivel === 'chucknorris'){
	//0,5 segundos
	criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){ 
	largura = window.innerWidth
	altura = window.innerHeight
	console.log(largura, altura)
}
	ajustaTamanhoPalcoJogo()

	var cronometro = setInterval(function(){ 
		tempo -=1
		if(tempo < 0){
			clearInterval(cronometro)
			clearInterval(criaMosquito)
			window.location.href = 'vitoria.html'
		}
		else{
		document.getElementById('cronometro').innerHTML = tempo
		}
	}, 1000)

//Criando o efeito randomico da mosca no jogo
function posicaoRandomica(){	

//Removendo o mosquito anterior caso exista
	
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()
		//console.log('v' + vidas)
		if(vidas > 3){
			window.location.href = 'fim_de_jogo.html'
		}
		else{
		document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

		vidas++
		}
	}	

	var posicaoX = Math.floor(Math.random() * largura) -90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//Criando elemento HTML
	 var mosquito = document.createElement('img')
	 mosquito.src = 'imagens/mosca.png'
	 mosquito.className = tamanhoAleatorio() + ' ' +  ladoAleatorio()
	 mosquito.style.left = posicaoX + 'px'
	 mosquito.style.top = posicaoY + 'px'
	 mosquito.style.position = 'absolute'
	 mosquito.id = 'mosquito'
	 mosquito.onclick = function(){
	 	this.remove() //THIS faz referencia ao próprio elemento html que executa a função (mosquito)
	 }
	
	document.body.appendChild(mosquito)
	

}

//Tamanho aleatório das moscas
function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

//Criando lado aleatório para a mosca
function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)

	switch(classe){
		case 0:
		return 'ladoA'

		case 1:
		return 'ladoB'
	}
}

