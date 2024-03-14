/*
Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas.
*/

const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
];

let sellTotal = 0;
let media = 0;

products.forEach((element) => {
  sellTotal += element.sellCount;
});

media = sellTotal / products.length;

console.log(`La media de ventas es: ${media}`);
