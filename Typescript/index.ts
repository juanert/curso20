let nombre = 'Juan';
//Tipos de datos
let apellido: string = 'Perez';
let edad: number = 32;
let casado: boolean = false;
let fechaNacimiento: Date = new Date();
let extra: any = "Cualquier cosa";
let sinDefinir: undefined = undefined;
let nulo: null = null;

//Para declarar un arreglo se puede hacer de la siguiente manera
let numeros: number[] = [1, 2, 3, 4, 5];
//Otra forma de declarar un arreglo
let nombres: Array<string> = ['Juan', 'Pedro', 'Luis'];
//Declarar un array con varios tipos de datos
let varios: any[] = [1, 'Juan', true];

//Para declarar objetos se puede hacer de la siguiente manera
let persona: { nombre: string, edad: number } = {
  nombre: 'Juan',
  edad: 32
};

//Declarar una función
function suma(a: number, b: number): number {
  return a + b;
  //si una funcion no tiene return se le puede poner void
}

suma(1, 2);

//Para declarar una clase
class Persona {
  nombre: string;
  edad: number;
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

let persona1: Persona = new Persona('Juan', 32);

//Para declarar una interfaz
/*Las interfaces son un tipo de dato que se utiliza para definir la estructura de un objeto,
es decir, las propiedades y métodos que debe tener un objeto para que sea válido. */

//Interfaz con parametros opcionales
interface IPersona {
  nombre: string;
  edad?: number;
}

let persona2: IPersona = {
  nombre: 'Juan',
  edad: 32
};

let persona3: IPersona = {
  nombre: 'Pedro',
};

//Manejar un elemeneto del DOM con TypeScript
// let elemento: HTMLElement = document.getElementById('elemento');

