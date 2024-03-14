/*
Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena
*/

const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
};

const iterateArray = (param) => {
  for (let alien in param) {
    console.log(`${alien}: ${param[alien]}`);
  }
};

iterateArray(alien);
