import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


function generarCarta() {

  const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const palos = [
    { simbolo: '♥', color: 'red' },
    { simbolo: '♦', color: 'red' },
    { simbolo: '♠', color: 'black' },
    { simbolo: '♣', color: 'black' }

  ];

  const valorAzar = valores[Math.floor(Math.random() * valores.length)];

  const paloAzar = palos[Math.floor(Math.random() * palos.length)];

  const carta = document.getElementById('pokerCard');

  const rankTop = carta.querySelector('.rank-top');

  const suitCenter = carta.querySelector('.suit-center');

  const rankBottom = carta.querySelector('.rank-bottom');

  const contenido = `${valorAzar}${paloAzar.simbolo}`;
  rankTop.innerHTML = contenido;

  suitCenter.innerHTML = paloAzar.simbolo;
  
  rankBottom.innerHTML = contenido;
  
  carta.style.color = paloAzar.color;
}

window.onload = generarCarta;