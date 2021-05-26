<?php

$username = $_POST["username"];
$password = $_POST["password"];
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];

$url = "localhost/API/User/createUser.php";

$ch = curl_init($url);

$data = array(
    'username' => $username,
    'password' => $password,
    'firstname' => $firstname,
    'lastname' => $lastname
);

$payload = json_encode($data);

curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$result = curl_exec($ch);

curl_close($ch);

?>