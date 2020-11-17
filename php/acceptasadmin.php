<?php
// TAK PAKAI
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

    $insertusername = $data->username;
    $insertfullname = $data->fullname;
    $insertphone = $data->phone;
    $insertemail = $data->email;
    $insertjob = $data->job;
    $insertpassword = $data->password;
    $message = "$insertusername would like to request as admin.";

    echo $insertusername;

    	$namecheckquerry = "SELECT * FROM requests WHERE username='".$insertusername."'";
    $namecheck = mysqli_query($con,$namecheckquerry) or die ("2: name check querry failed");
    
    if (mysqli_num_rows($namecheck)==0)
		{	
			
			echo ( mysqli_num_rows($namecheck));
			echo json_encode(array("message" => "User not request.")); //DONE

					}
		else{
			$insertuserquerry = "INSERT INTO accounts(`id`, `fullname`, `username`, `email`, `password`, `phone`, `job`) VALUES ( NULL, '".$insertfullname."','".$insertusername."','".$insertemail."','".$insertpassword."','".$insertphone."','".$insertjob."')";
			if (mysqli_query($con, $insertuserquerry)) {
                echo json_encode(array("message" => "Account created")); //DONE
                // echo "success";
                
                $deleteuserquerry = "DELETE FROM requests WHERE username='".$insertusername."'";
              echo $insertusername;
                if (mysqli_query($con, $deleteuserquerry)) {
                          echo json_encode(array("message" => "Account deleted")); //DONE
                          // echo "success";
                } else {
                  // echo "error";
                  echo json_encode(array("message" => "Unknown error occured."));
                      }
                      
			} else {
                echo json_encode(array("message" => "Unknown error occured."));
                // echo "failed";
            }            
            
            echo json_encode("accepted");
			mysqli_close($con);
        }
        
    
        ?>        