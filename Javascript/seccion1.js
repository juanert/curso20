//alert("Me ejecuto desde un archivo externo");
//Comentario de una sola linea
/*
  Comentario de
  varias lineas
*/

//LA CONSOLA
console.log("Hola mundo");

//VARIABLES
/*Inicializacion de una variable*/
var edad = 5;
//Utilizacion de una variable
console.log(edad);

//TIPOS DE DATOS
//Numeros
var numero = 5;
var numero_float = 5.5;
//Cadenas de texto (Strings)
var cadena = "Hola mundo!";
// var cadena = Hola mundo!; //Error
//Booleanos
var booleano = true;
// booleano = false;
//Arreglos (Arrays)
var arreglo = [1,2,3,4,5];
var frutas = ["Manzana", "Pera", "Uva"];
//Objetos
var objeto = {
  nombre: "Juan",
  edad: 25
};
var carro = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2015
}
//Undefined
var indefinido;
//Null
var nulo = null;

//OPERADORES COMPATIVOS
//Aritmeticos
var suma = 5 + 3;
var resta = 5 - 3;
var multiplicacion = 5 * 3;
var division = 5 / 3;
//Modulo
var modulo = 5 % 2;
var exponente = 5 ** 2;

//Comparacion
var igual = 5 == "5";
var exactamente_igual = 5 === "5";
var diferente = 5 != 5;
var exactamente_diferente = 5 !== "5";
var mayor_que = 5 > 3;
var menor_que = 5 < 7;
var mayor_o_igual = 5 >= 5;
var menor_o_igual = 5 <= 8;

//operadores logicos

//Ejercicos para practicar la lógica
// (Facil)
var uno = !true || false;
var dos = false && !false;
var tres = true && !false;

//(Medio)
var cuatro = (5 === 5) || (!true);
var cinco = (!0) || (5 < 0);
var seis = (3 > 4) && (!0);

//Avanzado
var siete = ( ((false || true) && (!false && true) )) || (true && false)
var ocho = (6 === 3+3) && (9/3 >= 3);
var nueve = (!(!false) || ( ("1" == 1)) && (!false === true) ); 

//Hardcore
var diez = !(!true) === !( !( 5 >= 5 ) );
var once = !( true && (!true === !( !(8 === 4*2) )) );

//Ultra-Hardcore
var doce = !( true && (!true === !( !(16 === (4*2) + 8))) ) !== (false);

//Leyenda
var trece = !(((!(!(10 / 5 == "2") === false) != false) === ((5 * 5) <= (100 / 4))) && (!((1 + 1) !== (10 / 5)) !== (true)));
