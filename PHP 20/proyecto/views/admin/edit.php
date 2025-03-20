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
    if(isset($_GET["id"]) && $_SESSION["email"]) {
      $id = $_GET["id"];
      $query = "SELECT ID, nombre, apellido, email FROM usuarios WHERE ID = $id";
      $result = $database->query($query);
      $row = $result->fetch_assoc();
    }

    echo "<form action='./update.php' method='POST'>";
    echo "<input type='hidden' name='id' value='". $row["ID"] ."'>";
    echo "<label for='nombre'>Nombre</label>";
    echo "<input type='text' name='nombre' value='". $row["nombre"] ."'>";
    echo "<label for='apellido'>Apellido</label>";
    echo "<input type='text' name='apellido' value='". $row["apellido"] ."'>";
    echo "<label for='email'>Email</label>";
    echo "<input type='email' name='email' value='". $row["email"] ."'>";
    echo "<button type='submit'>Actualizar</button>";
    echo "</form>";
    
  ?>
</body>
</html>