<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/user.php';


$database = new Database();
$db = $database->connect();

$user = new User($db);

$user->userID = isset($_GET['userID']) ? $_GET['userID'] : die();

$user->read_single_user();

$user_arr = array(
    'userID' => $user->userID,
    'username' => $user->username,
    'password' => $user->password
);

print_r(json_encode($user_arr));

?>