/*
Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:
*/

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(param) {
  let elementos = [];
  let ocurrencias = [];
  let contador = 1;

  //ordeno el array para tener los elementos repetidos juntos
  param.sort();

  for (let i = 0; i < param.length; i++) {
    //Verifico si el siguiente elemento se repite. Si no, ya hemos terminado con ese elemento e reinicio contador.
    if (param[i + 1] === param[i]) {
      contador++;
    } else {
      elementos.push(param[i]);
      ocurrencias.push(contador);
      contador = 1;
    }
  }
  for (let j = 0; j < elementos.length; j++) {
    console.log(
      `Elemento: | ${elementos[j]} | Repeticiones: ${ocurrencias[j]}.`
    );
  }
}

repeatCounter(counterWords);
