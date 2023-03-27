<?php
header("Access-Control-Allow-Origin: http://127.0.0.1:5500");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: *");

include('config.php');

function get_last_access() {
  global $conn;
  $sql = "SELECT * FROM access_log ORDER BY id DESC LIMIT 1";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $last_access = $row["last_access"];
    $country = $row["country"];

    $data = array(
      'last_access' => $last_access, 
      'country' => $country
    );

    header('Content-Type: application/json');
    echo json_encode($data);
  } else {
    $response = array('status' => 'error', 'message' => 'No access found.');
    echo json_encode($response);
  }

}

function register_access() {
  global $conn;
  $_POST = json_decode(file_get_contents("php://input"),true);

  $last_access = $_POST['last_access'];
  $country = $_POST['country'];

  $stmt = $conn->prepare("INSERT INTO access_log (last_access, country) VALUES (?, ?)");
  $stmt->bind_param("ss", $last_access, $country);
  $stmt->execute();

  if ($stmt->affected_rows > 0) {
    return array('status' => 'success', 'message' => 'Last access registered on DB.');
  } else {
    return array('status' => 'error', 'message' => 'Failed to register last access on DB.');
  }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  $data = get_last_access();
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = register_access();
  echo json_encode($data);
}

$conn->close();


?>