
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

/**
 * ¿Conces el juego de mesa Catan? https://devir.es/catan-el-juego?srsltid=AfmBOopKAZ38tynV99VjnI6bJe9uzAldTZ_KLqmp5tvdTJAw_ho5PjXO
 * 
 * En este juego siempre hay que tirar dos dados de 6 y sumar sus resultados.
 * Escribe a continuación el código necesario para invocar la función "rollDice" dos veces, sumar los resultados de las dos tiradas y mostrar el resultado por la consola.
 * 
 * Ejemplo de resultado esperado: https://oscarm.tinytake.com/media/173c1e7?filename=1741882982617_TinyTake13-03-2025-05-22-59_638774797817231350.png&sub_type=thumbnail_preview&type=attachment&width=799&height=271
 */

// Tu código a partir de aquí

function sumaDados() {
    let dado1 = rollDice();
    let dado2 = rollDice();
    let resultado = dado1 + dado2;
    
    console.log(`Dado 1: ${dado1}, Dado 2: ${dado2}, Resultado: ${resultado}`);
}

// Invocar la función para mostrar el resultado
sumaDados();