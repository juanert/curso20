<?php
#Crear conexión con la base de datos
require_once "./../connection/database.php";
#Guardar datos en la base de datos
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$password = $_POST["password"];
$apellido = $_POST["apellido"];
#encriptar contraseña
$password = password_hash($password, PASSWORD_DEFAULT);
$query = "INSERT INTO usuarios (nombre, apellido, email, password) VALUES ('$nombre', '$apellido', '$email', '$password')";
if ($database->query($query)) {
  echo "Usuario registrado con éxito";
} else {
  echo "Error al registrar el usuario";
}
$database->close();
?>