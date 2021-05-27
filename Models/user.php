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

    public function readUser(){

        $query = 'SELECT * FROM ' . $this->table . '';

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    public function readSingleUser(){
        $query = 'SELECT * FROM ' . $this->table . ' WHERE userID = ?';

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $this->userID);

        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->userID = $row['userID'];
        $this->username = $row['username'];
        $this->password = $row['password'];
        $this->firstName = $row['firstName'];
        $this->lastName = $row['lastName'];

    }

            public function updateUser(){

                $query = 'UPDATE ' . $this->table . '
                SET
                    username = :username,
                    password = :password,
                    firstName = :firstName,
                    lastName = :lastName
                WHERE
                    userID = :userID';

                    $stmt = $this->conn->prepare($query);
        
                    $this->username =htmlspecialchars(strip_tags($this->username));
                    $this->password =htmlspecialchars(strip_tags($this->password));
                    $this->firstName =htmlspecialchars(strip_tags($this->firstName));
                    $this->lastName =htmlspecialchars(strip_tags($this->lastName));
                    $this->userID =htmlspecialchars(strip_tags($this->userID));

                    $stmt->bindParam(':username', $this->username);
                    $stmt->bindParam(':password', $this->password);
                    $stmt->bindParam(':firstName', $this->firstName);
                    $stmt->bindParam(':lastName', $this->lastName);
                    $stmt->bindParam(':userID', $this->userID);

                    if($stmt->execute()){
                        return true;
                    }

                    printf("Error: %s.\n", $stmt->error);
                    return false;
            }

    public function create_user(){
		            function RandomString()
            {
                $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                $randstring = '';
                for ($i = 0; $i < 20; $i++) {
                    $randstring = $randstring.$characters[rand(0, strlen($characters)-1)];
                }
                return $randstring;
            }

        //Create query
        $query = 'INSERT INTO ' . $this->table . '
        SET
            username = :username,
            password = :password,
            firstName = :firstName,
            lastName = :lastName,'
			;

            //Preparing statement
            $stmt = $this->conn->prepare($query);

            //Clean data
            $this->username =htmlspecialchars(strip_tags($this->username));
            $this->password =htmlspecialchars(strip_tags($this->password));
            $this->firstName =htmlspecialchars(strip_tags($this->firstName));
            $this->lastName =htmlspecialchars(strip_tags($this->lastName));

            $this->password=password_hash($this->password, PASSWORD_DEFAULT);

            //Bind data
            $stmt->bindParam(':username', $this->username);
            $stmt->bindParam(':password', $this->password);
            $stmt->bindParam(':firstName', $this->firstName);
            $stmt->bindParam(':lastName', $this->lastName);

            //Executing query
            if($stmt->execute()){
                return true;
            }

            //Print error
            printf("Error: %s.\n", $stmt->error);
            return false;
    }
}
?>
