<?php

function validate_empty($input)
{
  if (!isset($_POST[$input])) {
    echo "El campo $input es requerido";
    return false;
  }
  return true;
}

function validate_regex($inputs, $regexs)
{
  $contador_errores = 0;
  foreach ($inputs as $key => $input) {
    // Verificar si existe una expresión regular para el campo
    if (!isset($regexs[$key])) {
      echo "No hay una validación definida para el campo $key.";
      $contador_errores++;
    }

    // Verificar si el campo cumple con la expresión regular
    if (!preg_match($regexs[$key], $input)) {
      echo "El campo '$key' no cumple con el formato requerido.<br>";
      $contador_errores++;
    }
  }
  if ($contador_errores > 0) {
    return false;
  }
  return true;
}

if ($_POST) {
  # Validar campos vacíos
  $lista_input = ["nombre", "apellido", "email", "password"];
  # Validar campos vacíos
  if ($_POST["nombre"] == "" || $_POST["apellido"] == "" || $_POST["email"] == "" || $_POST["password"] == "") {
    # Recorrer la lista de campos
    foreach ($lista_input as $input) {
      if (!validate_empty($input)) {
        break;
      }
    }
  } else {
    # Validar campos con regex
    $lista_validaciones = [
      "nombre" => "/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$/",
      "apellido" => "/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$/",
      "email" => "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/",
      "password" => "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/"
    ];

    $lista_valores = [
      "nombre" => $_POST["nombre"],
      "apellido" => $_POST["apellido"],
      "email" => $_POST["email"],
      "password" => $_POST["password"]
    ];

    if (validate_regex($lista_valores, $lista_validaciones)) {
      require_once "./../models/sign-up.model.php";
    }
  }
}
