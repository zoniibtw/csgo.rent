<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/skins.php';


$database = new Database();
$db = $database->connect();

$skin = new Skins($db);

$skin->skinID = isset($_GET['skinID']) ? $_GET['skinID'] : die();

$skin->readSingleSkins();

$skin_arr = array(
    'skinID' => $skin->skinID,
    'skinName' => $skin->skinName
);

print_r(json_encode($skin_arr));

?>