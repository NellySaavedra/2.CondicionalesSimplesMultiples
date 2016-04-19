//Ejercicio #8: COMPAÑIA DE AUTOBUSES

alert ("Vamos a calcular el costo del autobus según la cantidad de pasajeros: El costo por pasajero para el camión A es $2.0. El costo por pasajero para el camión B es $2.5. El costo por pasajero para el camión C es $3.0")

alert ("Elija el camión con letras en MAYÚSCULAS. Gracias")

var Np = prompt ("¿Cuántos pasajeros van a viajar?")
var A = (Np * 2.0)
var B = (Np * 2.5)
var C = (Np * 3.0)
var P1 = (20 * 2.0)
var P2 = (20 * 2.5)
var P3 = (20 * 3.0)

var P = prompt ("Qué camión va a alegir? A, B o C")

if (Np >= 20) {

	switch (P) {
		case 'A': alert ("El camión elegido es el A, su costo por persona es 2.0, y el total es: " + (A) + " pesos");
		break;
		case 'B': alert ("El camión elegido es el B, su costo por persona es 2.5, y el total es: " + (B) + " pesos");
		break;
		case 'C': alert ("El camión elegido es el B, su costo por persona es 3.0, y el total es: " + (C) + " pesos");
		break;
	}
}
else if (Np < 20) {
	
	switch (P) {
		case 'A': alert ("El costo del autobus es: " + (P1) + " pesos ya que sus pasajeros son menos de 20");
		break;
		case 'B': alert ("El costo del autobus es: " + (P2) + " pesos ya que sus pasajeros son menos de 20");
		break;
		case 'C': alert ("El costo del autobus es: " + (P3) + " pesos ya que sus pasajeros son menos de 20");
		break;
	}
}