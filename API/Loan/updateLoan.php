<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

include_once '../../config/Database.php';
include_once '../../models/loan.php';


$database = new Database();
$db = $database->connect();

$loan = new Loan($db);

$data = json_decode(file_get_contents("php://input"));

$loan->userID = $data->userID;
$loan->skinID = $data->skinID;

if($loan->updateLoan()){
    echo json_encode(
        array('message' => 'Loan Updated')
    );
}else{
    echo json_encode(
        array('message' => 'Loan Not Updated')
    );
}
