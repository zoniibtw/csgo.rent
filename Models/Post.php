<?php 
  class Post {
    // DB stuff
    private $conn;
    private $table = 'test';

    // Post Properties
    public $firstName;
    public $middleName;
    public $lastName;
    public $personNummer;

    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }


    // Create Post
    public function create() {
          // Create query
          echo 'test';
          $query = 'INSERT INTO ' . $this->table . ' SET firstName = :firstName, middleName = :middleName, lastName = :lastName, personNummer = :personNummer';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->firstName = htmlspecialchars(strip_tags($this->firstName));
          $this->middleName = htmlspecialchars(strip_tags($this->middleName));
          $this->lastName = htmlspecialchars(strip_tags($this->lastName));
          $this->personNummer = htmlspecialchars(strip_tags($this->personNummer));

          // Bind data
          $stmt->bindParam(':firstName', $this->firstName);
          $stmt->bindParam(':middleName', $this->middleName);
          $stmt->bindParam(':lastName', $this->lastName);
          $stmt->bindParam(':personNummer', $this->personNummer);

          // Execute query
          if($stmt->execute()) {
            return true;
      }

      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);

      return false;
    }
  }