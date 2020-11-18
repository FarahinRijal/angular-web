<?php
//TAK PAKAI
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
    $insertfullname = $data->fullname;
    $insertphone = $data->phone;
    $insertemail = $data->email;
    $insertjob = $data->job;
	$insertpassword = $data->password;
	$message = "$insertusername would like to request as admin.";
	// $registercode = $_POST["reqstatus"];
	// $registercode = '1';
	
    /*
    $nama = 'testuser1';
    $phone = '0146164015';
    $email = 'testuser';
    $occ = 'testuser';
	$id = 'testuser';
	$password ='testuser';
	$registercode = '1';
	*/

	//check for existing 
	// echo ( $insertusername);
	$namecheckquerry = "SELECT * FROM accounts WHERE username='".$insertusername."' AND password='".$insertpassword."'";
	$namecheck = mysqli_query($con,$namecheckquerry) or die ("1: name check querry failed");//2: name check querry failed

	if (mysqli_num_rows($namecheck)!=0)
	{	

		echo ( mysqli_num_rows($namecheck));
		echo json_encode(array("message" => "Username already exist. Use a new one!")); //DONE

	}
	else
	{
		$namecheckquerry2 = "SELECT * FROM requests WHERE username='".$insertusername."' AND password='".$insertpassword."'";
		$namecheck2 = mysqli_query($con,$namecheckquerry2) or die ("2: name check querry failed");//2: name check querry failed

		if (mysqli_num_rows($namecheck2)!=0)
		{	
			
			echo ( mysqli_num_rows($namecheck2));
			echo json_encode(array("message" => "Request pending.")); //DONE

			
		}
		else{
			$insertuserquerry = "INSERT INTO requests(`id`, `fullname`, `username`, `email`, `password`, `phone`, `job`, `message`, `date`) VALUES ( NULL, '".$insertfullname."','".$insertusername."','".$insertemail."','".$insertpassword."','".$insertphone."','".$insertjob."','".$message."',CURRENT_TIMESTAMP)";
			if (mysqli_query($con, $insertuserquerry)) {
				echo json_encode(array("message" => "New record created successfully")); //DONE
			} else {
				// echo "error";
				echo json_encode(array("message" => "Unable to register. Unknown error occured."));
			}
			mysqli_close($con);
		}
			
		

	}


	//add id
	// $salt = "\$5\$round=5000"."streamedhams". $username."\$";
	// $hash = crypt($password,$salt);

// 	else {

// 	$insertuserquerry = "INSERT INTO requests values ( '".$insertfullname."','".$insertusername."','".$insertemail."','".$insertpassword."','".$insertphone."','".$insertjob."','message','0')";

// 	$insertcheck = mysqli_query($con,$insertuserquerry);// error code #4 - insert arwah querry failed
 	
 	
// 	http_response_code(201);
 
// 	// echo ("Success");
// 	echo json_encode(array("message" => "User was created."));
	
// }
?>