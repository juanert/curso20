<?php
  session_start();
  if(!$_SESSION || !$_SESSION["email"]) {
    header("Location: ./sign-in.php");
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
  <h1>Welcome home</h1>
  <a href="./sign-out.php">Sign-out</a>
</body>
</html>