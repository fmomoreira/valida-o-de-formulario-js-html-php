<?php

$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];

if (isset($_POST['nome'])){
echo $nome."<br>";
echo $email."<br>";
echo $senha."<br>";
}else{
   header("Location: localhost:3000");
   exit;
}
?>