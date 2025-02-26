<?php
if ($_POST) {
  $email = $_POST["email"];
  $password = $_POST["password"];
  $emailregex = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/";
  if (!preg_match($emailregex, $email)) {
    echo "El email no cumple con el formato requerido";
    return;
  } else {
    require_once "./../models/sign-in.model.php";
  }
}
