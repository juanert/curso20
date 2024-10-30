//SCOPE (Alcance)
//Variable global
var nombre = "Juan";
//Variable local
let apellido = "Perez";
//Constante (no puede ser reasignada, alcanza el scope global)
const PI = 3.1416;

//Puedo cambiarle el valor
nombre = "Pedro";
//No puedo cambiarle el valor
//PI = 3.14;

//Alcance
if (true) {
  //variable local (solo se puede acceder dentro del bloque)
  let numero1 = 16;
  //variable global (se puede acceder desde cualquier parte)
  var numero2 = 20;
}

//console.log(numero1); //Error
console.log(numero2);
/*
  Si se declara una variable let fuera de todos los bloques
  se puede acceder a ella desde cualquier parte del código
  let numero3 = 30;
*/
if (true) {
  if (true) {
    let local = "Hola, soy local";
  }
  //La variable local solo se puede acceder dentro del
  //bloque del que fue declarada
  //console.log(local) error
}

//Funciones
/*
  Nos permiten reutilizar un bloque de codigo,
  son similares a los MIXINS que hemos visto en SASS
*/

//Funcion sin parametros
//Declaramos la función
function saludar() {
  console.log("Hola, soy una función");
}

//Llamamos a la función (Utilizamos la función)
saludar();
saludar();
saludar();

//Funcion con parametros
function saludarPersona(nombre = "Desconocido", edad = 0) {
  console.log("Hola, soy " + nombre + " y tengo " + edad + " años");
}

saludarPersona("Juan", 20);
saludarPersona("Pedro");
saludarPersona("Maria");
saludarPersona();

/*
  Crea el ejercicio de la calculadora, realizado el día de ayer, pero ahora
  utilizando funciones.
*/

//Funcion con retorno
function sumar(numero1 = 0, numero2 = 0) {
  return numero1 + numero2;
}

console.log(sumar(10, 20));
var resultado = sumar(30, 40);

/*
  Ejercicios de funciones con retorno
*/

function calcularIMC(peso = 0, altura = 0) {
  return peso / (altura * altura);
}

console.log(calcularIMC(70, 1.7)); //24.221453287197235

function calcularAreaTriangulo(base = 0, altura = 0) {
  (base * altura) / 2;
}

console.log(calcularAreaTriangulo(10, 5)); //undefined

function calcularAreaCirculo(radio = 0) {
  if (radio <= 0) {
    return "El radio debe ser mayor a 0";
  } else if (typeof radio !== "number") {
    return "El radio debe ser un número";
  } else {
    if (radio <= 5) {
      return "El radio debe ser mayor a 5";
    }
    return 3.14 * (radio * radio);
  }
}

console.log(calcularAreaCirculo(2));

function salirFinDeSemana(tiempo = false, dinero = false, ganas = false) {
  if (tiempo && dinero && ganas) {
    console.log("Saldré a divertirme");
  }
  if (tiempo && dinero) {
    return "Saldré desganado";
  }
  if (tiempo) {
    if (ganas) {
      console.log("Saldre a hacer ejecicio");
    }
    return "Saldré a matar el tiempo";
  }
  return "No saldré";
}

console.log(salirFinDeSemana(true, false, true));

//Funciones flecha (Arrow functions) también son conocidas como funciones anónimas
//Son una forma de escribir funciones de manera más corta y pueden ser
//asignadas a una variable

var funcionFlecha = (numero1 = 0, numero2 = 0) => {
  numero1 + numero2;
};

console.log(funcionFlecha(10, 30));

/*
  Ejercicios de funciones con retorno y sin retorno. Debes determinar que imprime
  cada uno de los console.log

  function suma(numero1, numero2){
    return numero1 + numero2;
  }
  
  console.log(suma(10, 20));

  function resta(numero1, numero2){
    console.log(numero1 - numero2);
  }
  
  console.log(resta(10, 20));

  function hallarAreaTriangulo(base, altura){
    if(base <= 0 || altura <= 0){
      return "Los valores deben ser mayores a 0";
    } else if(base === altura){
      return "La base y la altura no pueden ser iguales";
    } else {
      console.log((base * altura) / 2;) 
    }
  }

  console.log(hallarAreaTriangulo(10, 5));

  function hallarAreaCirculo(radio){
    if(radio <= 0){
      return "El radio debe ser mayor a 0";
    } else if(typeof radio !== "number"){
      return "El radio debe ser un número";
    } else {
      if(radio <= 5){
        return "El radio debe ser mayor a 5";
      }
      console.log(3.14 * (radio * radio));
    }
  }

  console.log(hallarAreaCirculo(2));
*/

/*
  Recursividad (una función se llama a si misma)
*/

function contar(numero) {
  if (numero >= 100) {
    return;
  }
  console.log(numero);
  contar(numero + 1);
}

contar(0);

function sumar(numero1 = 0, numero2 = 0) {
  return numero1 + numero2;
}

function restar(numero1 = 0, numero2 = 0) {
  return numero1 - numero2;
}

function multiplicar(numero1 = 0, numero2 = 0) {
  return numero1 * numero2;
}

function dividir(numero1 = 0, numero2 = 0) {
  return numero1 / numero2;
}

//Funciones dentro de funciones
function calculadora(numero1 = 0, numero2 = 0, operacion = "sumar") {
  if (operacion === "sumar") {
    return sumar(numero1, numero2);
  } else if (operacion === "restar") {
    return restar(numero1, numero2);
  } else if (operacion === "multiplicar") {
    return multiplicar(numero1, numero2);
  } else if (operacion === "dividir") {
    if(numero2 === 0){
      return "No se puede dividir por 0";
    }
    return dividir(numero1, numero2);
  } else {
    return "Operación no válida";
  }
}

var global = "Soy global";

function funcion_alcance() {
  console.log(global);
}

funcion_alcance();

/*
  Ejercicios de recursividad
  1. Crea una función que imprima la potencia de un número elevado a otro número.
  2. Crea una función que reciba un número y retorne el factorial de ese número.
  3. Crea una función que imprima la sucesion de Fibonacci hasta el número que se le pase como parametro.
*/

//1
function elevar(numero, potencia) {
  if (potencia === 0) {
    return 1;
  }
  return numero * elevar(numero, potencia - 1);
}

console.log(elevar(2, 3)); //8

//2

function factorial(numero) {
  if (numero === 0) {
    return 1;
  }
  return numero * factorial(numero - 1);
}

console.log(factorial(5)); //120

//3
function fibonacci(numero,resultado_anterior = 0, resultado_actual = 1) {
  if (numero === 0) {
    return;
  }
  if(resultado_actual < numero){
    console.log(resultado_actual);
    fibonacci(numero, resultado_actual, resultado_anterior + resultado_actual);
  }
}

fibonacci(50); //0, 1, 1, 2, 3, 5, 8, 13, 21, 34

/*
  Los prototipos en javascript son una forma de agregar propiedades y metodos a un objeto
  que ya ha sido creado.
*/


console.log("Pablo clavo un clavito")

/*
  En un objeto hay propiedades y metodos
  Las propiedades devuelven un valor que puede ser string, number, boolean, etc.
  Los metodos ejecutan una funcion
*/

//Metodos de strings
var texto = "Hola, soy un texto";
//Transformar un string a mayusculas
console.log(texto.toUpperCase());
//Transformar un string a minusculas
console.log(texto.toLowerCase());
//Obtiene la posicion de una palabra en un string
console.log(texto.indexOf("soy"));
//Corta un string
console.log(texto.slice(5, 8));
//Divide un string en un array
console.log(texto.split(" "));
//Reemplaza una palabra por otra
console.log(texto.replace("Hola", "Adios"));
//Reemplaza todas las ocurrencias de una palabra por otra
console.log(texto.replaceAll("o", "0"));
//Verifica si un string incluye una palabra
console.log(texto.includes("Hola"));
//Verifica si un string empieza con una palabra
console.log(texto.startsWith("Hola"));
//Verifica si un string termina con una palabra
console.log(texto.endsWith("texto"));
//Obtiene la posicion de un caracter en un string
console.log(texto.charAt(8));
//Obtiene el codigo ASCII de un caracter
console.log(texto.charCodeAt(2));
//Recorta los espacios en blanco de un string
console.log("  Hola, soy un texto   ".trim());
//Repite un string
console.log(texto.repeat(3));
//Concatena dos strings
console.log(texto.concat(" y yo soy otro texto"));
// texto + " y yo soy otro texto"

//Ejercicios de metodos de strings
//1. Crea una función que reciba un string y devuelva la cantidad de letras que tiene.
//2. Crea una función que reciba un string y devuelva la cantidad de palabras que tiene.
//3. Crea una función que reciba un string y devuelva el string invertido. (Hola -> aloH) (Utiliza recursividad)
//4. Verifica si un string es un palindromo (se lee igual de izquierda a derecha que de derecha a izquierda)

//1 (De forma sencilla)
function contarLetras(texto){
  if(typeof texto !== "string"){
    return "El valor debe ser un string";
  }
  return texto.length;
}
console.log(contarLetras("Hola, soy un texto")); //17

//1 (Solo contando letras)
function contarLetras(texto){
  if(typeof texto !== "string"){
    return "El valor debe ser un string";
  }
  return texto.split(" ").join("").length;
}
console.log(contarLetras("Hola, soy un texto")); //13

//2
function contarPalabras(texto){
  if(typeof texto !== "string"){
    return "El valor debe ser un string";
  }
  return texto.split(" ").length;
}
console.log(contarPalabras("Hola, soy un texto")); //4

//3
function invertirTexto(texto){
  if(typeof texto !== "string"){
    return "El valor debe ser un string";
  }
  if(texto === ""){
    return "";
  }
  return invertirTexto(texto.slice(1)) + texto.charAt(0);
}

console.log(invertirTexto("Hola")); //aloH

//4
function esPalindromo(texto){
  if(typeof texto !== "string"){
    return "El valor debe ser un string";
  }
  texto = texto.toLowerCase();
  //console.log(texto.split(" ").join(""), invertirTexto(texto).split(" ").join(""));
  if(texto.split(" ").join("") === invertirTexto(texto).split(" ").join("")){
    return "Es palindromo";
  }
  return "No es palindromo";
}

console.log(esPalindromo("La ruta nos aporto otro paso natural")); //Es palindromo


//Arrays y metodos de array
var frutas = ["Manzana", "Pera", "Uva", "Sandia"];
console.log(frutas[1]);
//Lista de compras
var lista = [
  ["Manzana", "Pera", "Uva", "Sandia"],
  ["carne molida", "pollo", "pescado", "cerdo"],
  ["leche", "jugo", "agua", "refresco"],
  [["papas", "zanahorias"], ["cebolla", "tomate"]]
];

console.log(lista[3][0][1])


inventario = [
  {
    categoria: "Frutas",
    productos: [
      {
        nombre: "Manzana",
        precio: 1.5,
        cantidad: 10
      },
      {
        nombre: "Pera",
        precio: 2.5,
        cantidad: 5
      }
    ]
  },
  {
    categoria: "Carnes",
    productos: [
      {
        nombre: "Pollo",
        precio: 3.5,
        cantidad: 20
      },
      {
        nombre: "Res",
        precio: 5.5,
        cantidad: 15
      }
    ]
  },
  {
    categoria: "Lacteos",
    productos: [
      {
        nombre: "Leche",
        precio: 1.5,
        cantidad: 10
      },
      {
        nombre: "Queso",
        tipos:[
          {
            nombre: "Pecorino",
            precio: 2.5,
            cantidad: 5
          },
          {
            nombre: "Mozarella",
            precio: 3.5,
            cantidad: 10
          }
        ]
      }
    ]
  }
]

console.log(inventario[2].productos[1].tipos[0].nombre)

const inventario_mercado = [
  {
    categoria: "Frutas",
    subcategorias: [
      {
        tipo: "Manzanas",
        marcas: [
          {
            nombre: "Apple Farms",
            origen: "EE.UU.",
            productos: [
              {
                nombre: "Manzana Gala",
                precio: 1.2,
                cantidad: 30,
                proveedor: {
                  nombre: "Fresh Import",
                  ubicacion: "California, EE.UU.",
                  contacto: "import_fresh@example.com"
                },
                condiciones: {
                  temperatura: "4°C",
                  humedad: "90%"
                },
                fechaIngreso: "2023-09-10",
                vidaUtilDias: 20,
                certificaciones: ["Orgánico", "Libre de pesticidas"],
                embalaje: "Caja de cartón con separadores"
              },
              {
                nombre: "Manzana Fuji",
                precio: 1.5,
                cantidad: 25,
                proveedor: {
                  nombre: "Fresh Import",
                  ubicacion: "California, EE.UU.",
                  contacto: "import_fresh@example.com"
                },
                condiciones: {
                  temperatura: "4°C",
                  humedad: "85%"
                },
                fechaIngreso: "2023-09-15",
                vidaUtilDias: 25,
                certificaciones: ["Orgánico", "GMO-Free"],
                embalaje: "Empaque biodegradable"
              }
            ]
          },
          {
            nombre: "EcoFruit",
            origen: "Chile",
            productos: [
              {
                nombre: "Manzana Verde",
                precio: 1.3,
                cantidad: 40,
                proveedor: {
                  nombre: "Green Supply",
                  ubicacion: "Santiago, Chile",
                  contacto: "greensupply@example.cl"
                },
                condiciones: {
                  temperatura: "3°C",
                  humedad: "80%"
                },
                fechaIngreso: "2023-09-08",
                vidaUtilDias: 30,
                certificaciones: ["Fair Trade", "Orgánico"],
                embalaje: "Bolsa de papel reciclado"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    categoria: "Carnes",
    subcategorias: [
      {
        tipo: "Aves",
        marcas: [
          {
            nombre: "FreeRange Poultry",
            origen: "Brasil",
            productos: [
              {
                nombre: "Pollo Entero",
                precio: 4.5,
                cantidad: 50,
                proveedor: {
                  nombre: "Granjas Unidas",
                  ubicacion: "São Paulo, Brasil",
                  contacto: "granjas_unidas@example.com"
                },
                condiciones: {
                  temperatura: "-2°C",
                  embalaje: "Empaque al vacío",
                  fechaCaducidad: "2023-10-05"
                },
                fechaIngreso: "2023-09-10",
                vidaUtilDias: 45,
                pesoPromedio: "1.2 kg",
                certificaciones: ["Libre de hormonas", "Bienestar animal"]
              }
            ]
          }
        ]
      },
      {
        tipo: "Res",
        marcas: [
          {
            nombre: "Bovino Premium",
            origen: "Argentina",
            productos: [
              {
                nombre: "Corte de Res Angus",
                precio: 10.0,
                cantidad: 20,
                proveedor: {
                  nombre: "Exportadora Bovino",
                  ubicacion: "Buenos Aires, Argentina",
                  contacto: "exportadora_bovino@example.com"
                },
                condiciones: {
                  temperatura: "-3°C",
                  embalaje: "Empaque al vacío"
                },
                fechaIngreso: "2023-09-12",
                vidaUtilDias: 30,
                pesoPromedio: "0.8 kg",
                certificaciones: ["GMO-Free", "Alta calidad"]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    categoria: "Lácteos",
    subcategorias: [
      {
        tipo: "Leche",
        marcas: [
          {
            nombre: "Lácteos del Valle",
            origen: "México",
            productos: [
              {
                nombre: "Leche Entera",
                precio: 2.0,
                cantidad: 100,
                proveedor: {
                  nombre: "Distribuidora Valle",
                  ubicacion: "Ciudad de México, México",
                  contacto: "distribuidora_valle@example.com"
                },
                condiciones: {
                  temperatura: "4°C",
                  embalaje: "Envase de cartón reciclable"
                },
                fechaIngreso: "2023-09-18",
                vidaUtilDias: 10,
                tipo: "Entera",
                certificaciones: ["Certificado orgánico"]
              }
            ]
          }
        ]
      },
      {
        tipo: "Quesos",
        marcas: [
          {
            nombre: "Quesería Tradicional",
            origen: "Francia",
            productos: [
              {
                nombre: "Queso Brie",
                precio: 8.5,
                cantidad: 15,
                proveedor: {
                  nombre: "Quesería Tradicional",
                  ubicacion: "París, Francia",
                  contacto: "queso_france@example.fr"
                },
                condiciones: {
                  temperatura: "5°C",
                  humedad: "75%"
                },
                fechaIngreso: "2023-09-20",
                vidaUtilDias: 60,
                origenLeche: "Vaca",
                certificaciones: ["Appellation d'origine contrôlée (AOC)"],
                embalaje: "Caja de madera"
              },
              {
                nombre: "Queso Roquefort",
                precio: 12.0,
                cantidad: 10,
                proveedor: {
                  nombre: "Quesería Tradicional",
                  ubicacion: "París, Francia",
                  contacto: "queso_france@example.fr"
                },
                condiciones: {
                  temperatura: "6°C",
                  humedad: "80%"
                },
                fechaIngreso: "2023-09-21",
                vidaUtilDias: 90,
                origenLeche: "Oveja",
                certificaciones: ["Appellation d'origine contrôlée (AOC)"],
                embalaje: "Empaque de cera ecológica"
              }
            ]
          }
        ]
      }
    ]
  }
];

/*
  Ejercicios de selección de datos de un array de objetos
  1. Imprime el nombre de la marca de manzanas que proviene de Chile
  2. Imprime el precio de la manzana Fuji
  3. Imprime el array de productos de la marca de manzanas que proviene de Chile
  4. Imprime el nombre de la marca de pollo que proviene de Brasil
  5. Imprime el precio del pollo entero
  6. Imprime el proveedor (objeto) de leche de méxico
  7. Imprime la vida util del queso de Oveja
*/