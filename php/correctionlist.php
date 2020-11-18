<?php
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

    $status = "pending";

	$sql = "SELECT * FROM laporandata_new WHERE status = '".$status."' ";
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

	// //check that connection happened
	// if (mysqli_connect_errno())
	// {
	// 	echo "1: connection failed";//error code #1 =connection failed
	// 	exit();
	// }
    
 //    //$reqcode =1;
    
 //    $comfirmkubur ="SELECT * FROM `correctiondata` WHERE  status = 1";
 //    $runsql = mysqli_query($con,$comfirmkubur) or die("4: insert arwah querry failed");
    
	// $row_cnt = $runsql->num_rows;

 //    printf( $row_cnt. ",");
    
 //    //get data
	// while ($result=mysqli_fetch_assoc($runsql))
	// {
	// 	echo $result['name'] . ",";
	// 	echo $result['dob'] . ",";
	// 	echo $result['dod'] . ",";
	// 	echo $result['plot'] . ",";
	// 	echo $result['corrname'] . ",";
	// 	echo $result['corrdob'] . ",";
	// 	echo $result['corrdod'] . ",";
	// 	echo $result['corrplot'] . ",";
	// 	echo $result['lat'] . ",";
	// 	echo $result['long'] . ",";
	// }
?>