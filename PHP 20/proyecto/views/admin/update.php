<?php
  session_start();
  if(!$_SESSION || !$_SESSION["email"]) {
    header("Location: ./../sign-in.php");
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php
    require_once "./../../connection/database.php";
    if(isset($_POST["id"]) && isset($_POST["nombre"]) && isset($_POST["apellido"]) && isset($_POST["email"])) {
      $id = $_POST["id"];
      $nombre = $_POST["nombre"];
      $apellido = $_POST["apellido"];
      $email = $_POST["email"];
      $query = "UPDATE usuarios SET nombre = '$nombre', apellido = '$apellido', email = '$email' WHERE ID = $id";
      $database->query($query);
      header("Location: ./index.php");
    }
  ?>
</body>
</html>