<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

  $con = mysqli_connect('localhost','u570110870_geopusara20','Geopusara@20','u570110870_geopusara');

	//check that connection happened
	if (mysqli_connect_errno())
	{
		echo "1: connection failed";//error code #1 =connection failed
		exit();
	}

    $data = json_decode(file_get_contents("php://input"));
    
    $status = "pending";
    // $insertusername = $data->username;
    // $insertfullname = $data->fullname;
    // $insertphone = $data->phone;
    // $insertemail = $data->email;
    // $insertjob = $data->job;
    // $insertpassword = $data->password;
    // $message = "$insertusername would like to request as admin.";

$sql = "SELECT * FROM accounts WHERE status='".$status."' ";
$result = mysqli_query($con,$sql); 
$myArray = array();
if ($result->num_rows > 0) {
// output data of each row
    while($row = $result->fetch_assoc()) {
        $myArray[] = $row;
    }
    print json_encode($myArray);
} 
else 
{
    echo "0 results";
}  
?>