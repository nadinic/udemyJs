function cuadradoHorizontal(lado) {
    var horizontal = "";
    for (let i = 0; i < lado; i++) {
        if (i === 0 || i === lado - 1) {
            // Si es el borde superior o inferior, llenamos toda la línea con asteriscos
            horizontal += "*".repeat(lado);
        } else {
            // Si no, solo añadimos un asterisco al principio y al final de la línea
            horizontal += "*" + " ".repeat(lado - 2) + "*";
        }
        horizontal += "\n"; // Añadimos un salto de línea al final de cada línea
    }
    return horizontal;
}

function cuadradoVertical(lado) {
    var vertical = "";
    for (let i = 0; i < lado; i++) {
        if (i === 0 || i === lado - 1) {
            // Si es el borde izquierdo o derecho, llenamos toda la columna con asteriscos
            vertical += "*".repeat(lado) + "\n";
        } else {
            // Si no, solo añadimos un asterisco al principio y al final de la columna
            vertical += "*" + " ".repeat(lado - 2) + "*\n";
        }
    }
    return vertical;
}

function dibujarCuadrado(lado) {
    if (lado <= 0) {
        return "El lado debe ser mayor que cero.";
    }
    return cuadradoHorizontal(lado);
}

console.log(dibujarCuadrado(4));
