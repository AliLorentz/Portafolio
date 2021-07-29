
let contador=0;
let contadorFrase=0;
var frases =["React Developer","Front-End Developer","Desarrollador Web"]
var palabra=frases[0];

const textContent = document.getElementById('textContent');
const colorText = document.getElementById('colorText');
const coloriAm = document.getElementById('coloriAm');

var board="";
let isComplete;
let addWord=true;

function sumarPalabra(){
	board+=palabra[contador];
}

function quitarPalabra(){
	board=board.substring(0, board.length - 1);
	if(board.length==0){
		contador=-1;
		addWord=true;
	
		contadorFrase++;
		palabra=frases[contadorFrase];
	}
}

function startTime(){
if(contador== palabra.length){
	contador=0;
	addWord=false;
	if(contadorFrase==2){
		isComplete=true;
		changeColor();
	}
}
if(!isComplete)
	var time = setTimeout(function(){
		   if(addWord){
		   	sumarPalabra();
		   }else{
		   	quitarPalabra();
		   }
		   contador++; 
		   textContent.innerHTML=board;
		   startTime();

		}, 150);
}

function changeColor(){
	colorText.innerHTML="#4ECDC4";
	
	coloriAm.classList.add('active');
}


startTime();