<?php
$conn = new mysqli("localhost", "root", "", "umeal");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
