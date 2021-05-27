<?php

Class Database {
    //DB Params
    private $host = 'csgo-rent-db-do-user-9217528-0.b.db.ondigitalocean.com';
    private $db_name = 'csgo-rent-db';
    private $username = 'doadmin';
    private $password = 'n0234vcvghqwyfy4';
    private $conn;
    //DB Connect
    public function connect(){
        $this->conn = null;

        try{
            $this->conn = NEW PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }catch(PDOException $e){
            echo 'Connection error: ' . $e->getMessage();
        }
        return $this->conn;
    }
}

?>
