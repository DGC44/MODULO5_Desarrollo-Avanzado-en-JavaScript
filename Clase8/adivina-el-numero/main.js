import './style.css';

let numeroSecreto = generarNumeroSecreto();
let intentos = 0;
const maxIntentos = 10;

let puntos = 0;
let racha = 0;

const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const botonReiniciar = document.getElementById('reiniciar');
const mensaje = document.getElementById('mensaje');
const barraVidas = document.getElementById('vidas-relleno');
const puntosDisplay = document.getElementById('puntos');
const rachaDisplay = document.getElementById('racha');
const logroDisplay = document.getElementById('logro');
const botonMostrarInfo = document.getElementById('mostrar-info');
const infoPuntos = document.getElementById('info-puntos');

botonAdivinar.addEventListener('click', () => {
  const numeroJugador = parseInt(inputNumero.value);

  if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
    mensaje.textContent = '⚠️ Por favor, ingresa un número válido entre 1 y 100.';
    return;
  }

  intentos++;

  // Actualizar barra de vidas
  const vidasRestantes = Math.max(0, maxIntentos - intentos);
  const porcentajeVidas = (vidasRestantes / maxIntentos) * 100;
  barraVidas.style.width = `${porcentajeVidas}%`;

  if (numeroJugador === numeroSecreto) {
    let puntosGanados = 5;
    let logro = '';

    if (intentos <= 5) puntosGanados = 10;
    if (intentos === 1) logro = '🎯 ¡Maestro adivinador!';

    puntos += puntosGanados;
    racha++;
    actualizarPantalla(
      `🎉 ¡Correcto! Usaste ${intentos} intento(s). Ganaste ${puntosGanados} puntos.`,
      logro
    );
    botonAdivinar.disabled = true;

  } else if (numeroJugador < numeroSecreto) {
    mensaje.textContent = `🔼 El número es más alto. Intentos: ${intentos}/${maxIntentos}`;
  } else {
    mensaje.textContent = `🔽 El número es más bajo. Intentos: ${intentos}/${maxIntentos}`;
  }

  if (intentos >= maxIntentos && numeroJugador !== numeroSecreto) {
    puntos -= 5;
    racha = 0;
    actualizarPantalla(`❌ Has perdido. El número era ${numeroSecreto}. Perdiste 5 puntos.`, '');
    botonAdivinar.disabled = true;
  }

  actualizarUI();
});

botonReiniciar.addEventListener('click', () => {
  numeroSecreto = generarNumeroSecreto();
  intentos = 0;
  mensaje.textContent = '';
  inputNumero.value = '';
  botonAdivinar.disabled = false;
  barraVidas.style.width = '100%';
  logroDisplay.textContent = '';
});

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 100) + 1;
}

function actualizarUI() {
  puntosDisplay.textContent = `Puntos: ${puntos}`;
  rachaDisplay.textContent = `Racha de victorias: ${racha}`;
}

function actualizarPantalla(mensajeTexto, logroTexto) {
  mensaje.textContent = mensajeTexto;
  logroDisplay.textContent = logroTexto;

  mensaje.classList.remove('animar');
  logroDisplay.classList.remove('animar');

  // Forzar reflow para reiniciar animación
  void mensaje.offsetWidth;
  void logroDisplay.offsetWidth;

  mensaje.classList.add('animar');
  logroDisplay.classList.add('animar');

  if (racha >= 3) {
    logroDisplay.textContent += ' 🔥 ¡Buena racha!';
  }
}


botonMostrarInfo.addEventListener('click', () => {
  const visible = infoPuntos.style.display === 'block';
  infoPuntos.style.display = visible ? 'none' : 'block';
});
