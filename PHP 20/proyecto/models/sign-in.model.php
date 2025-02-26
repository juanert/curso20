<?php
  require_once "./../connection/database.php";
  $email = $_POST["email"];
  $sql = "SELECT * FROM usuarios WHERE email = '$email'";
  $result = $database->query($sql);
  if ($result->num_rows === 0) {
    echo "Usuario o contraseña incorrectos";
    return;
  }
  $password_hash = $result->fetch_assoc()["password"];
  $password = $_POST["password"];
  $hash = password_verify($password, $password_hash);
  if (!$hash) {
    echo "Usuario o contraseña incorrectos";
    return;
  }
  $_SESSION["email"] = $email;
  $_SESSION["nombre"] = $result->fetch_assoc()["nombre"];
  $_SESSION["apellido"] = $result->fetch_assoc()["apellido"];

  echo "Bienvenido";

  $database->close();
?>