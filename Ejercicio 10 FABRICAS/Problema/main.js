//Ejercicio #10: FABRICAS "EL COMETA"

alert ("Este es el precio de nuestras hamburguesas: H1 Cuesta $20.00 H2 Cuesta $25.00 H3 Cuesta $28.00")
var Pedido = prompt("¿Qué Hamburguesa desea pedir (H1, H2 O H3)?")
var Pago = prompt("¿Su pago será en EFECTIVO (SI/NO)?")

var SI = SI
var NO = NO
var H1 = 20.00
var H2 = 25.00
var H3 = 28.00
var TDC = .05
var C1 = (H1 * TDC)
var C2 = (H2 * TDC)
var C3 = (H3 * TDC)



if (Pago == "SI") {

	switch (Pedido) {
		case 'H1': alert ("Como su pago será en efectivo no habrá cargo adicional. Favor de pagar: $" + H1);
		break;
		case 'H2': alert ("Como su pago será en efectivo no habrá cargo adicional. Favor de pagar: $" + H2);
		break;
		case 'H3': alert ("Como su pago será en efectivo no habrá cargo adicional. Favor de pagar: $" + H3);
		break;
	}
}
else if (Pago == "NO"){
	
	switch (Pedido) {
		case 'H1': alert ("Como su pago será con tarjeta de crédito habrá un cargo adicional del 5%. Favor de pagar: $" + (H1 + C1));
		break;
		case 'H2': alert ("Como su pago será con tarjeta de crédito habrá un cargo adicional del 5%. Favor de pagar: $" + (H2 + C2));
		break;
		case 'H3': alert ("Como su pago será con tarjeta de crédito habrá un cargo adicional del 5%. Favor de pagar: $" + (H3 + C3));
		break;
	}
}
