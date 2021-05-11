<?php

Class User{

    private $conn;
    private $table = 'user';

    public $username;
    public $password;
    public $firstName;
    public $lastName;
    public $userID;

    public function __construct($db){
        $this->conn = $db;
    }

    public function create_user(){

        $query = 'INSERT INTO ' . $this->table . '
        SET
            username = :username,
            password = :password,
            firstName = :firstName,
            lastName = :lastName';

            $stmt = $this->conn->prepare($query);

            $this->username = htmlspecialchars(strip_tags($this->username));
            $this->password = htmlspecialchars(strip_tags($this->password));
            $this->firstName = htmlspecialchars(strip_tags($this->firstName));
            $this->lastName = htmlspecialchars(strip_tags($this->lastName));

            $this->password=password_hash($this->password, PASSWORD_DEFAULT);

            $stmt->bindParam(':username', $this->username);
            $stmt->bindParam(':password', $this->password);
            $stmt->bindParam(':firstName', $this->firstName);
            $stmt->bindParam(':lastName', $this->lastName);

            if($stmt->execute()){
                return true;
            }

            printf("Error: %s.\n", $stmt->error);
            return false;
    }

    public function delete_user(){

        $query = 'DELETE * FROM ' . $this->table . '
        WHERE
            userID = :userID';

            $stmt = $this->conn->prepare($query);

            $this->userID = htmlspecialchars(strip_tags($this->userID));

            $stmt->bindParam(':userID', $this->userID);

            if($stmt->execute()){
                return true;
            }

            printf("Error: %s.\n", $stmt->error);
            return false;
    }
}
?>