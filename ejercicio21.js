/*
Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto
"Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".
*/

const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
];

const usuariosMenores = [];
const usuariosMayores = [];

users.forEach((element) => {
  if (element.years < 18) {
    usuariosMenores.push(element);
  } else {
    usuariosMayores.push(element);
  }
});

console.log('Usuarios menores de edad:');
for (const user of usuariosMenores) {
  console.log(user.name);
}

console.log('Usuarios mayores de edad:');
for (const user of usuariosMayores) {
  console.log(user.name);
}
