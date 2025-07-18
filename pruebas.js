function suma(a, b) {
    return a + b;
}

function esPar(numero) {
    return numero % 2 === 0
}

function dividir(a, b) {
    if (b === 0) {
        return "error"
    }
    return a / b
}

function obtenerIniciales(nombreCompleto) {
    const partes = nombreCompleto.split(" ");
    return partes[0][0] + partes[1][0]
}

function formatearFecha(fectaStr) {
    //Se espera un formato YYYY-MM-DD
    const partes = fectaStr.split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

function test(desc, fn) {
    try {
        fn();
        console.log(`✅ ${desc}`);
    } catch (error) {
        console.error(`❌ ${desc} - Error: ${error.message}`);
    }
}

function assertEqual(actual, esperado) {
    if (actual !== esperado) {
        throw new Error(`Esperado ${esperado}, pero obtuvo ${actual}`);
    }
}


//Pruebas de la funcion suma

test("Suma de 4 + 4", () => {
    assertEqual(suma(4, 4), 8);
})
test("Suma de 46 + 44", () => {
    assertEqual(suma(46, 44), 90);
})
test("Suma de 0.5 + 0.5", () => {
    assertEqual(suma(0.5, 0.5), 1);
})
test("Suma de 1.5 + 2.5", () => {
    assertEqual(suma(1.5, 2.5), 4);
})
//Pruebas de la funcion esPar

test("2 es par", () => {
    assertEqual(esPar(2), true);
})
test("3 es impar", () => {
    assertEqual(esPar(3), false);
})
test("4 es par", () => {
    assertEqual(esPar(4), true);
})
test("71 es impar", () => {
    assertEqual(esPar(71), false);
})

//Pruebas de la funcion dividir

test("Dividir 10 entre 0", () => {
    assertEqual(dividir(10, 0), 0);
})
test("Dividir 25 entre 5", () => {  
    assertEqual(dividir(25, 5), 5);
})
test("Dividir 10 entre 5", () => {
    assertEqual(dividir(10, 5), 2);
})

//Pruebas de la funcion obtenerIniciales

test("Obtener iniciales de ArielVictoria", () => {
    assertEqual(obtenerIniciales(" Ariel Victoria"), "AV");
})
test("Obtener iniciales de Maria Reyes", () => {
    assertEqual(obtenerIniciales("Maria Reyes"), "MR");
})
test("Obtener iniciales de Jonathan Rojas",() =>{
    assertEqual(obtenerIniciales("Jonathan Rojas"), "JR");
})

//Pruebas de la funcion formatearFecha

test("Formatear fecha 23-10-05", () => {
    assertEqual(formatearFecha("23-10-05"), "05/10/23");
})
test("Formatear fecha 22222-222-22", () => {
    assertEqual(formatearFecha("2222-222-22"), "22/222/2222");
})
test("Formatear fecha 2023-1-1", () => {
    assertEqual(formatearFecha("2023-1-1"), "1/1/2023");
})
test("HOLA", () => {
    assertEqual(formatearFecha("Hola"), "Hola");
})