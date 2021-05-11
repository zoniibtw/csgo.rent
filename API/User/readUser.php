<?php
//Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../Config/Database.php';
include_once '../../Models/user.php';


//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

$user = new User($db);
$result = $user->read_user();

$num = $result->rowCount();


if($num > 0){

    $users_arr = array();
    $users_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        extract($row);

        $user_item = array(
            'username' => $username,
            'userID' => $userID
        );

        array_push($users_arr['data'], $user_item);
    }

    echo json_encode($users_arr);

}else{

echo json_encode(
    array('message' => 'No users Found')
);
}

?>