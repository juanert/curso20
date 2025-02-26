<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi página en PHP</title>
  </head>

  <body>
    <?php
    # Esto es comentario de una sola línea
    // Esto también es un comentario de una sola linea
    /*
      Esto es un comentario de
      varias lineas
    */
    #Variables
    $nombre = "Juan"; //String
    $edad = 25; //Integer
    $peso = 75.5; //Float
    $hombre = true; //Boolean
    $mujer = false; //Boolean
    $hijos = null; //Null
    $hijos = [
      "Pedro",
      "Juan"
    ]; // array
    $hijos = array(
      "Pedro",
      "Juan"
    ); // array
    //array asociativo
    $hijos = [
      "hijo1" => "Pedro",
      "hijo2" => "Juan"
    ];

    //Imprimir una variable
    echo ("<p>$nombre</p>");
    echo ("
      <p>hijos:</p>
      <ul>
        <li>$hijos[hijo1]</li>
        <li>$hijos[hijo2]</li>
      </ul>
    ");

    #anidacion de variables
    echo ($nombre." ".$edad);

    //condicionales
    if ($edad < 0) {
      echo ("<p>edad no valida</p>");
    } else if ($edad < 18) {
      echo ("<p>menor de edad</p>");
    } else {
      echo ("<p>mayor de edad</p>");
    }

    //switch
    $dia = 3;
    switch ($dia) {
      case 1:
        echo ("<p>Lunes</p>");
        break;
      case 2:
        echo ("<p>Martes</p>");
        break;
      case 3:
        echo ("<p>Miercoles</p>");
        break;
      default:
        echo ("<p>Fin de semana</p>");
        break;
    }

    //Ciclos
    //for
    for ($i = 0; $i < $dia; $i++) {
      echo ("<p>$i</p>");
    }

    //while
    $i = 0;
    while ($i < $dia) {
      echo ("<p>$i</p>");
      $i++;
    }

    //do while
    $i = 0;
    do {
      echo ("<p>$i</p>");
      $i++;
    } while ($i < $dia);

    //foreach
    $dias = ["Lunes", "Martes", "Miercoles"];
    foreach ($dias as $dia) {
      echo ("<p>$dia</p>");
      if($dia == "Martes"){
        break;
      }
    }

    //Funciones
    function suma($a = 0, $b = 0) {
      return $a + $b;
    }

    echo ("<p>".suma(5, 3)."</p>");

    //Var Dump
    var_dump($dias);

    //Expresiones regulares
    $texto = "Hola Mundo";
    $regex = "/mundo/i";
    if (preg_match($regex, $texto)) {
      echo ("<p>Se encontro la palabra</p>");
    } else {
      echo ("<p>No se encontro la palabra</p>");
    }

    //Alcance de variables
    //El alcance de las variables en PHP por defecto es global
    if (preg_match($regex, $texto)) {
      $variable = "Hola";
      echo ("<p>$variable</p>");
    } else {
      echo ("<p>$variable</p>");
    }
    
    echo ("<p>$variable</p>");


    $alcance = "global";
    function alcance() {
      //error a proposito
      //echo ("<p>$alcance</p>");
    }

    alcance();

    /*
      $numero1 = 5;
      function sumatoria(){
        $numero2 = 3;
        return $numero1 + $numero2;
      }
      echo sumatoria();
    */

    #Programacion orientada a objetos
    class Persona {
      public $nombre;
      public $edad;
      public $peso;
      public $sexo;
      public $hijos;

      function __construct($nombre, $edad, $peso, $sexo, $hijos) {
        $this->nombre = $nombre;
        $this->edad = $edad;
        $this->peso = $peso;
        $this->sexo = $sexo;
        $this->hijos = $hijos;
      }

      function imprimir() {
        echo ("
          <p>$this->nombre</p>
          <p>$this->edad</p>
          <p>$this->peso</p>
          <p>$this->sexo+</p>
          <p>$this->hijos</p>
        ");
      }
    }

    $persona = new Persona("Juan", 25, 75.5, "Hombre", 2);
    $persona->imprimir();

    //Herencia
    class Empleado extends Persona {
      public $salario;

      function __construct($nombre, $edad, $peso, $sexo, $hijos, $salario) {
        parent::__construct($nombre, $edad, $peso, $sexo, $hijos);
        $this->salario = $salario;
      }

      function imprimir() {
        parent::imprimir();
        echo ("<p>$this->salario</p>");
      }
    }

    #llamar a la base de datos
    require_once "./proyecto/connection/database.php";

    #Traerme a los usuarios
    $sql = "SELECT * FROM usuarios";
    $result = $database->query($sql);
    $usuarios = $result->fetch_all(MYSQLI_ASSOC);
    foreach ($usuarios as $usuario) {
      echo ("
        <p>$usuario[nombre]</p>
        <p>$usuario[apellido]</p>
        <p>$usuario[email]</p>
      ");
    }
    ?>


  </body>

</html>