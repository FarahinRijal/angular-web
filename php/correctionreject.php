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
	 /*
	
	$nama = '11';
	$dod = '33-33-3333';
	$dob = '22-22-2222';
	$plot = '55';
	$userid ='autonomous';
	$reqcode = '2';


	$corrnama = '11';
	$corrdod = '33-33-3333';
	$corrdob ='22-22-2222';
	$corrplot  = '55';
		*/
    $insertuserid = $data->userid;
    $status = "rejected";

        $updatequerry = "UPDATE laporandata_new SET 
        status = '".$status."'
        WHERE id='".$insertuserid."'";

         if (mysqli_query($con, $updatequerry)) {
        echo json_encode(array("message" => "Account has been rejected"));
        // echo "success";
   			} else {
        // echo "error";
        echo json_encode(array("message" => "Unknown error occured."));
    }
    
?>