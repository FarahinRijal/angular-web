<?php
header("Access-Control-Allow-Origin: http://194.59.164.62");
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
    
	// $insertusername = $_POST["username"];
	// $insertpassword = $_POST["password"];
	$insertusername = $data->username;
    $insertpassword = $data->password;
    // $status = "pending";


	//check if the id exist
	$namecheckquerry = "SELECT * FROM accounts WHERE username='".$insertusername."' AND password='".$insertpassword."'";      
	$namecheck = mysqli_query($con,$namecheckquerry) or die ("2: name check querry failed");//2: name check querry failed

	if (mysqli_num_rows($namecheck)!=1)
	{
		$namecheckquerry2 = "SELECT * FROM accounts WHERE username='".$insertusername."' AND password='".$insertpassword."' ";      
		$namecheck2 = mysqli_query($con,$namecheckquerry2) or die ("2: name check querry failed");

		if (mysqli_num_rows($namecheck2)>0){
			echo json_encode("Request pending");
		}
		else{
				echo json_encode("5:user does not exist/You are not allowed");
			
		}
		

		// exit();
	}else{

	//get login info
	$existinginfo=mysqli_fetch_assoc($namecheck);
	// $salt = $existinginfo["salt"];
	// $hash2 = $existinginfo["hash"];
	// $admins = $existinginfo["admins"];
	$password = $existinginfo["password"];
	$type = $existinginfo["type"];

	//check password
	// $loginhash = crypt($password,$salt);
	if ($insertpassword != $password)
	{
		// echo "6: incorrect password";
		http_response_code(401);
 
    // tell the user login failed
    	echo json_encode("Login failed.");
		exit();
	}else{

		if($type =="master"){
			http_response_code(201);
			// echo json_encode("Login master success.");
		}
		else if ($type=="admin"){
			http_response_code(202);
			// echo json_encode("Login admin success.");
		}
		else{
			http_response_code(203);
			// echo json_encode("Login user success.");
		}

		echo json_encode($type);
		
	}

	
	}

?>