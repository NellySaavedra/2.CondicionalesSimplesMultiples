//Ejercicio #6: BANQUETES “La langosta ahumada

alert ("Vamos a calcular el monto que se cobrará por su banquete según la cantidad de personas que atenderemos en su evento")

var p = prompt ("Ingrese el número de comensales")
var p1 = 95;
var p2 = 85;
var p3 = 75;

if (p <200) {
	alert("Tu costo por " + p + " personas será " + (p*p1) + ". Cobrándole la cantidad de: $95.00 por comensal")
}
else if (p <= 300) {
	alert("Tu costo por " + p + " personas será " + (p*p2) + ". Cobrándole la cantidad de: $85.00 por comensal")
}
else if (p > 300){
	alert("Tu costo por " + p + " personas será " + (p*p3) + ". Cobrándole la cantidad de: $75.00 por comensal")
}