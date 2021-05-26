<?php

Class Loan{

    private $conn;
    private $table = 'loan';

    public $skinID;
    public $userID;
    public $loanID;

    public function __construct($db){
        $this->conn = $db;
    }

    public function readLoan(){

        $query = 'SELECT * FROM ' . $this->table . '';

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    public function readSingleLoan(){
        $query = 'SELECT * FROM ' . $this->table . ' WHERE loanID = ?';

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $this->loanID);

        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->userID = $row['userID'];
        $this->skinID = $row['skinID'];
        $this->loanID = $row['loanID'];

    }

            public function updateLoan(){

                $query = 'UPDATE ' . $this->table . '
                SET
                    userID = :userID,
                    skinID = :skinID
                WHERE
                    loanID = :loanID';

                    $stmt = $this->conn->prepare($query);
        
                    $this->userID =htmlspecialchars(strip_tags($this->userID));
                    $this->skinID =htmlspecialchars(strip_tags($this->skinID));
                    $this->loanID =htmlspecialchars(strip_tags($this->loanID));

                    $stmt->bindParam(':userID', $this->userID);
                    $stmt->bindParam(':skinID', $this->skinID);
                    $stmt->bindParam(':loanID', $this->loanID);

                    if($stmt->execute()){
                        return true;
                    }

                    printf("Error: %s.\n", $stmt->error);
                    return false;
            }

    public function createLoan(){

        $query = 'INSERT INTO ' . $this->table . '
        SET
            skinID = :skinID,
            userID = :userID';

            $stmt = $this->conn->prepare($query);

            $this->skinID = htmlspecialchars(strip_tags($this->skinID));
            $this->userID = htmlspecialchars(strip_tags($this->userID));

            $stmt->bindParam(':skinID', $this->skinID);
            $stmt->bindParam(':userID', $this->userID);
            if($stmt->execute()){
                return true;
            }

            printf("Error: %s.\n", $stmt->error);
            return false;
    }
}
?>