<?php

$name_ = $_POST['txtName'];

if($name_ == 'nitin'){
	echo "<h2>" . $name_ . "</h2>";
} else{
	echo "In-correct Credentials";
}