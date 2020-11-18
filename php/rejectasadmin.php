<?php
// TAK PAKAI
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

  $con = mysqli_connect('localhost','root','','id10505005_geopusara');

	//check that connection happened
	if (mysqli_connect_errno())
	{
		echo "1: connection failed";//error code #1 =connection failed
		exit();
	}

    $data = json_decode(file_get_contents("php://input"));

    $insertusername = $data->username;
    $insertpassword = $data->password;

	$namecheckquerry = "SELECT * FROM requests WHERE username='".$insertusername."'";
    $namecheck = mysqli_query($con,$namecheckquerry) or die ("2: name check querry failed");

    $deleteuserquerry = "DELETE FROM requests WHERE username='".$insertusername."' AND password='".$insertpassword."'";

    if (mysqli_query($con, $deleteuserquerry)) {
        echo json_encode(array("message" => "Account has been rejected")); //DONE
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
