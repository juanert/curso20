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
  foreach ($inputs as $input) {
    if (!preg_match($regexs, $input)) {
      echo "El campo $input no cumple con el formato requerido";
      return false;
    }
    return true;
  }
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
    if(validate_regex($lista_input, $lista_validaciones)){
      echo "Todos los campos cumplen con el formato requerido";
    }
  }
}
