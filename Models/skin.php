<?php

Class skin{

    private $conn;
    private $table = 'skin';

    public $skinID;
    public $name;
    public $market_name;
    public $icon_url;
    public $link;

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

        $this->skinID = $row['skinID'];
        $this->name = $row['name'];
        $this->market_name = $row['market_name'];
        $this->icon_url = $row['icon_url'];
        $this->link = $row['link'];
    }

            public function updateSkins(){

                $query = 'UPDATE ' . $this->table . '
                SET
                    name = :name,
                    market_name = :market_name,
                    icon_url = :icon_url,
                    link = :link
                WHERE
                    skinID = :skinID';

                    $stmt = $this->conn->prepare($query);
        
                    $this->skinID =htmlspecialchars(strip_tags($this->skinID));
                    $this->marketName =htmlspecialchars(strip_tags($this->marketName));
                    $this->name =htmlspecialchars(strip_tags($this->name));
                    $this->icon_url =htmlspecialchars(strip_tags($this->icon_url));
                    $this->link =htmlspecialchars(strip_tags($this->link));

                    $stmt->bindParam(':skinID', $this->skinID);
                    $stmt->bindParam(':market_name', $this->market_name);
                    $stmt->bindParam(':name', $this->name);
                    $stmt->bindParam(':icon_url', $this->icon_url);
                    $stmt->bindParam(':link', $this->link);

                    if($stmt->execute()){
                        return true;
                    }

                    printf("Error: %s.\n", $stmt->error);
                    return false;
            }
}
?>