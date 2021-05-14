<?php

Class skins{

    private $conn;
    private $table = 'skins';

    public $skinID;
    public $skinName;

    public function __construct($db){
        $this->conn = $db;
    }

    public function readSkins(){

        $query = 'SELECT * FROM ' . $this->table . '';

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    public function readSingleSkins(){
        $query = 'SELECT * FROM ' . $this->table . ' WHERE skinID = ?';

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $this->skinID);

        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->skinName = $row['skinName'];
        $this->skinID = $row['skinID'];
    }

            public function updateSkins(){

                $query = 'UPDATE ' . $this->table . '
                SET
                    skinName = :skinName
                WHERE
                    skinID = :skinID';

                    $stmt = $this->conn->prepare($query);
        
                    $this->skinID =htmlspecialchars(strip_tags($this->skinID));
                    $this->skinName =htmlspecialchars(strip_tags($this->skinName));

                    $stmt->bindParam(':skinID', $this->skinID);
                    $stmt->bindParam(':skinName', $this->skinName);

                    if($stmt->execute()){
                        return true;
                    }

                    printf("Error: %s.\n", $stmt->error);
                    return false;
            }

    public function createSkins(){

        $query = 'INSERT INTO ' . $this->table . '
        SET
            skinName = :skinName';

            $stmt = $this->conn->prepare($query);

            $this->skinName = htmlspecialchars(strip_tags($this->skinName));

            $stmt->bindParam(':skinName', $this->skinName);
            if($stmt->execute()){
                return true;
            }

            printf("Error: %s.\n", $stmt->error);
            return false;
    }
}
?>