<?php
  session_start();
  if($_SESSION && $_SESSION["email"]) {
    header("Location: ./home.php");
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign-up</title>
</head>
<body>
  <form action="" method="post">
    <h1>Sign-up</h1>
    <label for="nombre">Nombre</label>
    <input type="text" name="nombre" placeholder="Nombre" required>
    <label for="apellido">Apellido</label>
    <input type="text" name="apellido" placeholder="Apellido" required>
    <label for="email">Email</label>
    <input type="email" name="email" placeholder="Email" required>
    <label for="password">Password</label>
    <input type="password" name="password" placeholder="Password" required>
    <button type="submit">Enviar</button>
  </form>
  <?php
    require_once "./../controllers/sign-up.controller.php";
  ?>
</body>
</html>