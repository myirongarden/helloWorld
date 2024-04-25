<?php

global $conn;
$server_root = $_SERVER['DOCUMENT_ROOT'];

require_once ($server_root.'/config/db.php');

$sql = "SELECT content FROM content WHERE ID = 1";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo $row["content"];
    }
} else {
    echo "0 results";
}
