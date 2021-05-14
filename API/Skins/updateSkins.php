<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

include_once '../../config/Database.php';
include_once '../../models/skins.php';


$database = new Database();
$db = $database->connect();

$skin = new Skins($db);

$data = json_decode(file_get_contents("php://input"));

$skin->skinID = $data->skinID;
$skin->skinName = $data->skinName;

if($skin->updateSkins()){
    echo json_encode(
        array('message' => 'Skin Updated')
    );
}else{
    echo json_encode(
        array('message' => 'Skin Not Updated')
    );
}
