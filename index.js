//RESUELVE LOS EJERCICIOS AQUI

//1 

const numbers = [4, 5, 6, 7, 8, 9, 10]
const elevados = () => numbers.map(num => num**num )


//2 
const paises = ["Como soy de Italia, amo comer ","Como soy de Japón, amo comer ","Como soy de Valencia, amo comer ", "Aunque no como carne, el es sabroso"] 


const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']

const result2 = foodList.map((food, i , array) => {
  
  if (i == 3){
     return paises[3].slice(0, 25) + food +" " +paises[3].slice(25)
  }
      return paises[i] + food
})

const staffDescriptions = staff.map((member, i , array) => )

//3
const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];

let resultado3 = staff.map((staff) => {

})

// Resultado esperado
/*
  [
    'Pepe es The Boss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]
*/




    
//4
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter(num => num %2 !== 0)

//5

//6



//7
const numeros3 = [39, 2, 4, 25, 62];
const result7 = numeros3.reduce((a, b) => a * b);

//8
const sentenceElements = [
  'Me',
  'llamo',
  /* Tu nombre aqui! */,
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

sentenceElements.splice(2, 1, "Pepito");
const result8 = sentenceElements.reduce((acumulador, elemento)=> {
  return acumulador + " "+ elemento
  });



//9
const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];
const result9 = books
    .filter(libro =>  libro.category =="code")
    .map(libro => libro.price)
    .reduce((a, b) => a + b)


