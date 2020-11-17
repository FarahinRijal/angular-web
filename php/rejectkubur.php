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

    $insertnama = $data->nama;
    $insertdob = $data->dob;
    $insertdod = $data->dod;
    $insertlatitude = $data->latitude;
    $insertlongitude = $data->longitude;
    $insertuserid = $data->userid;
    $insertplot = $data->plot;

	$namecheckquerry = "SELECT * FROM tempdata WHERE name ='".$insertnama."' AND plot = '".$insertplot."'";
    $namecheck = mysqli_query($con,$namecheckquerry) or die ("2: name check querry failed");

    $deleteuserquerry = "DELETE FROM tempdata WHERE name='".$insertnama."' AND plot = '".$insertplot."' ";

    if (mysqli_query($con, $deleteuserquerry)) {
        echo json_encode(array("message" => "Data has been rejected")); //DONE
        // echo "success";
    } else {
        // echo "error";
        echo json_encode(array("message" => "Unknown error occured."));
    }



    // include('functions.php');
    // $id = $_GET['id'];
    
    // $query = "DELETE FROM `requests` WHERE `requests`.`id` = '$id';";
    //     if(performQuery($query)){
    //         echo "Account has been rejected.";
    //     }else{
    //         echo "Unknown error occured. Please try again.";
    //     }

?>
