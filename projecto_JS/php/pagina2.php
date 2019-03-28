<?php

		echo "otro file";

		print_r( $_GET );
		header("location: pagina3.php?name=" . $_GET['name']);