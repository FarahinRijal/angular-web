<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$servername = "localhost";
$username   = "u570110870_geopusara20";
$password   = "Geopusara@20";
$dbname     = "u570110870_geopusara";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$data = json_decode(file_get_contents("php://input"));

// $location = "KP";
$insertlocation = $data->location;
$insertname = $data->nama;

// echo $insertlocation;
$sql = "SELECT * FROM testkubur WHERE location = '".$insertlocation."' AND nama LIKE '%".$insertname."%'" ; 
$result = mysqli_query($conn,$sql); 
$myArray = array();
if ($result->num_rows > 0) {
// output data of each row
    while($row = $result->fetch_assoc()) {
        $myArray[] = $row;
    }
    echo json_encode($myArray);
} 
else 
{
    echo "0 results";
}

?>