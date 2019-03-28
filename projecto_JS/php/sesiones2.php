<?php
	
	session_start();
	echo $_SESSION['mi_sesion'];
	echo "<br>";

	print_r( $_SESSION );

	echo "<br>";

	echo session_id(); // genera un identificador aleatorio