Las sesiones son una forma de guardar datos persistente a toda la aplicación, 
para transferir información entre scripts --> $_SESSION

<?php

	session_start();
	$_SESSION['mi_sesion'] = "VALOR ASIGNADO A LA SESION";
	$_SESSION['mi_sesion2'] = "OTRO VALOR";

	session_id();
?>

<a href="sesiones2.php"> Pruebas de sesion </a>