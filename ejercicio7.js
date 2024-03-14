//Completa la función que tomando dos números como argumento devuelva el más alto.
function sum(numberOne, numberTwo) {
  if (numberOne < numberTwo) {
    console.log(`El número más alto es: ${numberTwo}`);
  } else {
    console.log(`El número más alto es: ${numberOne}`);
  }
}

sum(10, 25);
