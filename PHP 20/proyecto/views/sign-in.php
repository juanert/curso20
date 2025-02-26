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
  <title>Sign-in</title>
</head>
<body>
  <form action="" method="post">
    <label for="email">Email</label>
    <input type="email" name="email" id="email" required>
    <label for="password">Password</label>
    <input type="password" name="password" id="password" required>
    <button type="submit">Sign-in</button>
  </form>
  <?php
    require_once "./../controllers/sign-in.controller.php";
  ?>
</body>
</html>