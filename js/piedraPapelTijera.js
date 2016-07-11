var piedra = 0;
var papel = 1;
var tijera = 2;

// Esta función escoge un número aleatorio.
function aleatorio(min, max)
{
     var numero = (Math.floor( Math.random() * (max - min + 1) + min));
     return numero;
}
// Esta función determina los resultados según la selección, según la lógica del juego.
function nucleoJuego(user, ia)
{
     var resultado;
     if(user == ia)
     {
          resultado = 2;
     }
     else if (user == piedra)
     {
          if(ia == papel)
          {
               resultado = 0;
          }
          if(ia == tijera)
          {
               resultado = 1;
          }
     }
     else if (user == papel)
     {
          if(ia == piedra)
          {
               resultado = 1;
          }
          if(ia == tijera)
          {
               resultado = 0;
          }
     }
     else if (user == tijera)
     {
          if(ia == papel)
          {
               resultado = 1;
          }
          if(ia == piedra)
          {
               resultado = 0;
          }
     }
     return resultado;
}
// Esta función me permite que aparezca en el resultado la escogencia de cada usuario.
// Sólo se usó para la escogencia de la máquina pero se puede usar para ambos.
function escoger(escogencia)
{
     var valorFinal;
     if (escogencia == 0)
     {
          valorFinal = "Piedra";
     }
     else if (escogencia == 1)
     {
          valorFinal = "Papel";
     }
     else if (escogencia == 2)
     {
          valorFinal = "Tijera";
     }
     return valorFinal;

}

// En esta parte ambos escogen.
var opcionIa = aleatorio(0, 2);
var opcionUsusario = prompt("Escoge una opción\nPiedra: 0\nPapel:1\nTijera:2");

// Esta parte del código da una alerta si no seleccionaste nada.
if (opcionUsusario == "")
{
     alert("No seleccionaste ninguno.\nEstá bien si no quieres jugar.");
}

// Aquí se programó las alertas de los resultados cuando se escoge una valor válido.
else if (opcionUsusario == piedra | opcionUsusario == papel | opcionUsusario == tijera)
{
     var final;
     final = nucleoJuego(opcionUsusario, opcionIa);
     if (final == 0)
     {
          alert("La máquina escogió " + escoger(opcionIa) + "\nLo siento, perdiste.");
     }
     else if (final == 1)
     {
          alert("La máquina escogió " + escoger(opcionIa) + "\nHas ganado!!!");
     }
     else if (final == 2)
     {
          alert("Es un empate.");
     }
}

//Si el usuario escoge otra cosa que no sea piedra, papel o tijera, da esta alerta.
else
{
     alert("No escogiste una opción válida.")
}
