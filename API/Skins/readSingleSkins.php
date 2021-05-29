<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/skin.php';


$database = new Database();
$db = $database->connect();

$skin = new Skin($db);

$skin->skinID = isset($_GET['skinID']) ? $_GET['skinID'] : die();

$skin->readSingleSkins();

$skin_arr = array(
    'skinID' => $skin->skinID,
    'name' => $skin->name,
    'marketName' => $skin->marketName
);

print_r(json_encode($skin_arr));

?>