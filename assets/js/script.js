// Paso 1: Solicitar datos
var cantidad = parseInt(prompt("¿Cuántas veces deseas jugar?"));
var opciones = ["1 piedra", "2 papel", "3 tijeras"];

// Paso 2: Operación
for (var i = 0; i < cantidad; i++) {
  var jugador = parseInt(
    prompt("Elige tu jugada:\n1. Piedra\n2. Papel\n3. Tijeras")
  );

  // Verificar si la opción del jugador es válida
  if (jugador < 1 || jugador > 3 || isNaN(jugador)) {
    alert("El número ingresado inválido. Por favor, elige un número entre 1 y 3.");
    i--; 
    continue;
  }

  //3. Generar una jugada automatica para la maquina
  var maquina = Math.floor(Math.random() * 3) + 1;

  // Paso 4: Definir ganador
  if (
    (jugador === 1 && maquina === 3) ||
    (jugador === 2 && maquina === 1) ||
    (jugador === 3 && maquina === 2)
  )
  // Paso 5: Resultado
  {
    //Felicitar al ganador en caso de ser el usuario
    alert("¡Ganaste! Felicidades");
  } else if (jugador === maquina) {
    //Declarar un empate
    alert("Empate");
  } else {
    //Indicar al usuario que perdió
    alert("Perdiste, ¡Vuelve a intentarlo!");
  }
}
