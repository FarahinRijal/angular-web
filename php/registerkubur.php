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

	$insertname = $data->name;
	$dob = $data->dob;
	$dod = $data->dod;
	$latitude = $data->latitude;
	$longitude = $data->longitude;
	$plot = $data->plot;
	$userid = $data->userid;
	$location = $data->location;

	$insertuserquerry = "INSERT INTO tempdata(`id`, `name`, `dob`, `dod`, `latitude`, `longitude`, `userid`,`plot`,`location`) VALUES ( NULL, '".$insertname."','".$dob."', '".$dod."', '".$latitude."', '".$longitude."', '".$userid."', '".$plot."','".$location."')";
	
	if (mysqli_query($con, $insertuserquerry)) {
		echo json_encode(array("message" => "New record created successfully"));
	} else {
		// echo "error";
		echo json_encode(array("message" => "Unable to register. Unknown error occured."));
	}
	mysqli_close($con);

?>