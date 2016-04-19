//Ejercicio #3: POSITIVO O NEGATIVO
alert ("Vamos a implementar un algoritmo para determinar si un número es positivo o negativo a través del resultado de una resta")

var n1 = prompt ("Asigna un valor para el minuendo")
var n2 = prompt ("Asigna un valor para el sustraendo")

var R = (n1 - n2);


	if (n1 > n2) {
	alert ("El valor del RESTO es positivo: " + R);		
	}
	else {
	alert ("El valor del RESTO es negativo: " + R);
	}