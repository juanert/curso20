<?php
#Crear conexión con la base de datos
$host = "localhost";
$database = "proyecto";
$user = "root";
$password = "";

$database = new mysqli($host, $user, $password, $database);

if ($database->connect_error) {
  die("Connection failed" . $database->connect_error);
}
?>