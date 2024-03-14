/*
Probando For...of: Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores.
*/

const placesToTravel = [
  'Japon',
  'Venecia',
  'Murcia',
  'Santander',
  'Filipinas',
  'Madagascar'
];

const iterateArray = (param) => {
  for (let place of param) {
    console.log(place);
  }
};

iterateArray(placesToTravel);
