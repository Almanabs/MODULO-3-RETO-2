// Solicitar al usuario que ingrese la base y la altura del triángulo
var base = parseFloat(prompt("Ingresa el valor de la base: "));
var altura = parseFloat(prompt("Ingresa el valor de la altura: "));

// Calcular el área del triángulo
var area = (base * altura) / 2;

// Determinar el tipo de triángulo
if (base == altura) {
    var tipo_triangulo = "EQUILÁTERO";
} else if (base != altura && (base == altura || base == altura)) {
    var tipo_triangulo = "ISÓSCELES";
} else if (base != altura && base != altura) {
    var tipo_triangulo = "ESCALENO";
} else {
    var tipo_triangulo = "RECTÁNGULO";
}

// Convertir el tipo de triángulo a mayúsculas
tipo_triangulo = tipo_triangulo.toUpperCase();

// Imprimir el resultado
alert("El área del triángulo " + tipo_triangulo + " de base " + base + " y altura " + altura + ", es de " + area);
