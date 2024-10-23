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
var y = true && false;
var o = true || false;
var negacion = !true;

//Ejercicos para practicar la lógica
// (Facil)
var uno = !true || false; //false
var dos = false && !false; //false
var tres = true && !false; //true

//(Medio)
var cuatro = (5 === 5) || (!true); //true
var cinco = (!0) || (5 < 0); //true
var seis = (3 > 4) && (!0); //false

//Avanzado
var siete = ((false || true) && (!false && true)) || (true && false) //true
var ocho = (6 === 3+3) && (9/3 >= 3); //true
var nueve = (!(!false) || ( ("1" == 1)) && (!false === true)); //true

//Hardcore
var diez = !(!true) === !( !( 5 >= 5 ) );
var once = !( true && (!true === !( !(8 === 4*2) )) );

//Ultra-Hardcore
var doce = !( true && (!true === !( !(16 === (4*2) + 8))) ) !== (false);

//Leyenda
var trece = !(((!(!(10 / 5 == "2") === false) != false) === ((5 * 5) <= (100 / 4))) && (!((1 + 1) !== (10 / 5)) !== (true)));

//Condicionales
/*
  Nos ayudan a tomar decisiones en nuestro código
*/
var edad = 18;
if (edad < 0 || edad > 130){
  console.log("Edad no valida");
} else if(edad < 18){
  console.log("Eres menor de edad");
} else if(edad >= 18){
  console.log("Eres mayor de edad");
} else {
  console.log("Edad no valida");
}

/*Ejercicios para practicar la primera seccion*/
/*
  Crea tres variables, numero1, numero2 y operador y asignales un valor
  Crea una condicion que verifique si el operador es +, -, *, /, % o **.
  Dependiendo del operador, realiza la operacion correspondiente con los dos numeros
  e imprime el resultado en la consola.

  Crea una variable llamada dia y asignale un valor de 1 a 7
  Crea una condicion que imprima el dia de la semana correspondiente al numero
  que tenga la variable dia.

  Nota: En ambos casos debes de evaluar que hacer en caso de que los valores
  no sean validos.

  Fecha de entrega: 22/10/2024
*/

var numero1 = 5;
var numero2 = 3;
var operador = "+";

if(operador === "+"){
  console.log(numero1 + numero2);
}
else if(operador === "-"){
  console.log(numero1 - numero2);
}
else if(operador === "*"){
  console.log(numero1 * numero2);
}
else if(operador === "/"){
  console.log(numero1 / numero2);
}
else if(operador === "%"){
  console.log(numero1 % numero2);
}
else if(operador === "**"){
  console.log(numero1 ** numero2);
}
else {
  console.log("Operador no valido");
}

