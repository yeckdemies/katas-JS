/*
Buscar la palabra más larga. Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función:
*/
const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
];

function findLongestWord(param) {
  let longitud = 0;
  let palabra;
  let posicion;

  for (let i = 0; i < param.length; i++) {
    if (param[i].length > longitud) {
      longitud = param[i].length;
      palabra = param[i];
      posicion = i;
    }
  }
  console.log(
    `La palabra más larga es ${palabra} con ${longitud} caracteres. Índice ${posicion}`
  );
}

findLongestWord(avengers);
