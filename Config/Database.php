<?php

Class Database {
    //DB Params
    private $host = 'private-db-mysql-ams3-05825-do-user-9217528-0.b.db.ondigitalocean.com:25060';
    private $db_name = 'db-mysql-ams3-05825';
    private $username = 'doadmin';
    private $password = 'da2lbbqzgqaqr3gm';
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