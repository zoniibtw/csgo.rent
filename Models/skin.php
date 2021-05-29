<?php

Class skin{

    private $conn;
    private $table = 'skin';

    public $skinID;
    public $name;
    public $marketName;

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

        $this->name = $row['name'];
        $this->marketName = $row['marketName'];
        $this->skinID = $row['skinID'];
    }

            public function updateSkins(){

                $query = 'UPDATE ' . $this->table . '
                SET
                    name = :name,
                    marketName = :marketName
                WHERE
                    skinID = :skinID';

                    $stmt = $this->conn->prepare($query);
        
                    $this->skinID =htmlspecialchars(strip_tags($this->skinID));
                    $this->marketName =htmlspecialchars(strip_tags($this->marketName));
                    $this->name =htmlspecialchars(strip_tags($this->name));

                    $stmt->bindParam(':skinID', $this->skinID);
                    $stmt->bindParam(':marketName', $this->marketName);
                    $stmt->bindParam(':name', $this->name);

                    if($stmt->execute()){
                        return true;
                    }

                    printf("Error: %s.\n", $stmt->error);
                    return false;
            }

    public function createSkins(){

        $query = 'INSERT INTO ' . $this->table . '
        SET
            name = :name,
            marketName = :marketName';

            $stmt = $this->conn->prepare($query);

            $this->name = htmlspecialchars(strip_tags($this->name));
            $this->marketName = htmlspecialchars(strip_tags($this->marketName));

            $stmt->bindParam(':name', $this->name);
            $stmt->bindParam(':marketName', $this->marketName);
            if($stmt->execute()){
                return true;
            }

            printf("Error: %s.\n", $stmt->error);
            return false;
    }
}
?>