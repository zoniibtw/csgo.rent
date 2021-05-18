<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

include_once 'Config/Database.php';
include_once 'Models/skins.php';

$database = new Database();
$db = $database->connect();

$skin = new Skins($db);

$data = json_decode(file_get_contents("php://input"));

$skin->skinName = $data->skinName;

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