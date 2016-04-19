//Ejercicio #4: Almacenes “El harapiento distinguido”
alert ("Vamos a implementar un algoritmo para saber si el traje que va a comprar tiene un 15 u 8% de descuento")

var B = 2500;
var T = prompt ("Cuál es el precio de su traje");
var Da = (T * .15);
var Db = (T * .08);


	if (T > B) {
	alert ("Usted es acreedor a un 15% de descuento. Su monto a pagar es " + (T - Da));		
	}
	else {
	alert ("Usted es acreedor a un 8% de descuento. Su monto a pagar es " + (T - Db));
	}
