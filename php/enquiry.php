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
 

    $insertname = $data->name;
    $insertemail = $data->email;
	$insertenquiry = $data->enquiry;
	$status = 'pending'; 
	
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
	// $namecheckquerry = "SELECT * FROM enquiry WHERE fullname='".$insertfullname."'";
	// $namecheck = mysqli_query($con,$namecheckquerry) or die ("2: name check querry failed");//2: name check querry failed

	// if (mysqli_num_rows($namecheck)!=0)
	// {	

	// 	echo ( mysqli_num_rows($namecheck));
	// 	echo json_encode(array("message" => "Username already exist. Use a new one!")); //DONE

	// }
	// else
	// {
		// $namecheckquerry2 = "SELECT * FROM enquiry WHERE name='".$insertname."'";
		// $namecheck2 = mysqli_query($con,$namecheckquerry2) or die ("2: name check querry failed");//2: name check querry failed

		// if (mysqli_num_rows($namecheck2)!=0)
		// {	
			
		// 	echo ( mysqli_num_rows($namecheck2));
		// 	echo json_encode(array("message" => "Already submitted.")); //DONE

			
		// }
		// else{
			$insertuserquerry = "INSERT INTO enquiry(`id`, `name`, `email`, `enquiry`, `status`) VALUES ( NULL, '".$insertname."','".$insertemail."','".$insertenquiry."','".$status."')";
			if (mysqli_query($con, $insertuserquerry)) {
				echo json_encode(array("message" => "New enquiry created successfully")); //DONE
			} else {
				// echo "error";
				echo json_encode(array("message" => "Unable to submit. Unknown error occured."));
			}
			mysqli_close($con);
		// }
			
		

	// }