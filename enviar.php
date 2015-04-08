<?php

// definir variables
$name = $email = $subject = $lastname = $phone = $state = $message = "";

$name = test_input($_POST["name"]);
$email = test_input($_POST["email"]);
$subject = test_input($_POST["subject"]);
$lastname = test_input($_POST["lastname"]);
$phone = test_input($_POST["phone"]);
$state = test_input($_POST["state"]);
$message = test_input($_POST["message"]);


function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

//Con los datos obtenidos se genera el cuerpo del mail
$cuerpo_mail = "La siguiente persona te envia un mensaje desde la pagina de kanan: \n\nNombre: ".$name." ".$lastname." \nE-mail: ".$email."\n Asunto: ".$subject."\nMensaje: ".$message. "\nTelefono: ".$phone."\nEstado: ".$state;


if(mail('contacto@cursodeprimerosauxilios.mx', 'Informes de Kanan', $cuerpo_mail)) //contacto@cursodeprimerosauxilios.mx
	echo 'ok';
else
	echo 'error';


?>