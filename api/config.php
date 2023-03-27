<?php
// Database setup connections
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "painelcovid";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
} else {
  'Database Connected';
}
?>