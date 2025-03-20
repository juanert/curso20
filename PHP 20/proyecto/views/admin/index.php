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
    $query = "SELECT ID, nombre, apellido, email, fecha_creacion, fecha_actualizacion FROM usuarios";
    $result = $database->query($query);

    # Función para eliminar un usuario
    if(isset($_GET["delete"])) {
      $id = $_GET["delete"];
      $query = "DELETE FROM usuarios WHERE ID = $id";
      $database->query($query);
      header("Location: ./index.php");
    }

    if($result->num_rows > 0) {
      echo "<table border='1'>";
      echo "<tr>";
      echo "<th>ID</th>";
      echo "<th>Nombre</th>";
      echo "<th>Apellido</th>";
      echo "<th>Email</th>";
      echo "<th>Fecha de creación</th>";
      echo "<th>Fecha de actualización</th>";
      echo "</tr>";
      while($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row["ID"] . "</td>";
        echo "<td>" . $row["nombre"] . "</td>";
        echo "<td>" . $row["apellido"] . "</td>";
        echo "<td>" . $row["email"] . "</td>";
        echo "<td>" . $row["fecha_creacion"] . "</td>";
        echo "<td>" . $row["fecha_actualizacion"] . "</td>";
        echo "<td><a href='./edit.php?id=". $row["ID"]. "'><button>Editar</button></a></td>";
        echo "<td><button onclick='if(confirm(\"¿Deseas eliminar este elemento?\")) { window.location.href = \"./index.php?delete=". $row["ID"]. "\"; }'>Eliminar</button></td>";
        echo "</tr>";
      }
      echo "</table>";
    } else {
      echo "No hay usuarios registrados";
    }
  ?>
</body>
</html>