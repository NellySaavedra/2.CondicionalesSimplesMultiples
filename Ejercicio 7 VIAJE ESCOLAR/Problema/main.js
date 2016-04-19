//Ejercicio #7: VIAJE ESCOLAR

alert ("Costo por el viaje escolar según la cantidad de alumnos contemplados")

var p = prompt ("Ingrese el número de alumnos")
var p1 = 65;
var p2 = 70;
var p3 = 95;
var p4 = 4000;

if (p < 29) {
	alert("Tu costo por la renta del autobús será " + p4)
}
else if (p <= 49) {
	alert("Tu costo por " + p + " personas será " + (p*p3))
}
else if (p <= 99) {
	alert("Tu costo por " + p + " personas será " + (p*p2))
}
else if (p > 100) {
	alert("Tu costo por " + p + " personas será " + (p*p1))
}
