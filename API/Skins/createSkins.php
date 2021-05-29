<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

include_once 'Config/Database.php';
include_once 'Models/skin.php';

$database = new Database();
$db = $database->connect();

$skin = new Skin($db);

$data = json_decode(file_get_contents("php://input"));

$skin->name = $data->name;
$skin->marketName = $data->marketName;

	if($user->createSkins()){
		echo json_encode(
			array('message' => 'Skin Created')
		);
	}else{
		echo json_encode(
			array('message' => 'Skin not Created')
		);
	}
?>