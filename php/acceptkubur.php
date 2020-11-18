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

    $insertnama = $data->nama;
    $insertdob = $data->dob;
    $insertdod = $data->dod;
    $insertlatitude = $data->latitude;
    $insertlongitude = $data->longitude;
    $insertuserid = $data->userid;
    $insertplot = $data->plot;
    $insertlocation = $data->location;

    	$namecheckquerry = "SELECT * FROM tempdata";
    $namecheck = mysqli_query($con,$namecheckquerry) or die ("2: name check querry failed");
    
    if (mysqli_num_rows($namecheck)==0)
		{	
			
			echo ( mysqli_num_rows($namecheck));
			echo json_encode(array("message" => "No new data.")); //DONE

			
		}
		else{ //TUKAR nama table testkubur to kuburbaru
			$insertuserquerry = "INSERT INTO testkubur(`id`, `nama`, `dob`, `dod`, `latitude`, `longitude`, `userid`, `plot`,`location`) VALUES ( NULL, '".$insertnama."','".$insertdob."','".$insertdod."','".$insertlatitude."','".$insertlongitude."','".$insertuserid."','".$insertplot."','".$insertlocation."')";
			if (mysqli_query($con, $insertuserquerry)) {
                echo json_encode(array("message" => "Data kubur accepted"));
                // echo "success";
                
                $deleteuserquerry = "DELETE FROM tempdata WHERE name='".$insertnama."' AND plot = '".$insertplot."' ";
              echo $insertnama;
                if (mysqli_query($con, $deleteuserquerry)) {
                          echo json_encode(array("message" => "Data kubur deleted")); 
                          // echo "success";
                } else {
                  // echo "error";
                  echo json_encode(array("message" => "Data kubur not deleted."));
                      }
                      
			} else {
                echo json_encode(array("message" => "Unknown error occured."));
                // echo "failed";
            }
                        
            
            echo json_encode("accepted");
			mysqli_close($con);
        }
        
    
        ?>        