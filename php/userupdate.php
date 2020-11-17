<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, PUT");
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

    $currname = $data->nama;
    $currdob = $data->dob;
    $currdod = $data->dod;
    $currplot = $data->plot;
    $insertcorrname = $data->corrnama;
    $insertcorrdob = $data->corrdob;
    $insertcorrdod = $data->corrdod;
    $insertcorrplot = $data->corrplot;
    $inserttestkubur = $data->testkubur_id;
    $status = "pending"; //0 = pending, 1 = accept, 2 = reject

    // echo $insertcorrdod;

    $insertuserquerry = "INSERT INTO laporandata_new(`Id`, `name`, `corrname`, `dob`,`corrdob`, `dod`,`corrdod`, `plot`,`corrplot`, `status`, `testkubur_id`) VALUES ( NULL, '".$currname."','".$insertcorrname."','".$currdob."','".$insertcorrdob."','".$currdod."','".$insertcorrdod."','".$currplot."','".$insertcorrplot."','".$status."', '".$inserttestkubur."')";
      if (mysqli_query($con, $insertuserquerry)) {
        echo json_encode(array("message" => "New record created successfully")); //DONE
      } else {
        // echo "error";
        echo json_encode(array("message" => "Unable to register. Unknown error occured."));
      }
      mysqli_close($con);

       // $userupdate = "UPDATE laporandata_new SET 
       //  name = '".$currname."',
       //  corrname = '".$insertcorrname."',
       //  dob = '".$currdob."',
       //  corrdob = '".$insertcorrdob."',
       //  dod = '".$currdod."',
       //  corrdod = '".$insertcorrdod."', 
       //  plot = '".$currplot."',
       //  corrplot = '".$insertcorrplot."',
       //  status = '".$status."'
       //  WHERE testkubur_id='".$inserttestkubur."'";

       //  if (mysqli_query($con, $userupdate)) {
       //        echo json_encode(array("message" => " laporan data updated")); 
       //            }
       //  else{
       //        echo json_encode(array("message" => "laporan data  error")); 
       //            }

       //  mysqli_close($con);


    // $updatesql = "UPDATE laporandata SET name = '".$insertcorrname."', dob = '".$insertcorrdob."', dod = '".$insertcorrdod."', plot = '".$insertcorrplot."' WHERE userid = '".$insertuserid."' & phone = '".$insertphone."'";

    // $runupdate = mysqli_query($con,$updatesql) or die ("2: name update querry failed");

    // echo "update successfully";



  //   	$namecheckquerry = "SELECT * FROM laporandata WHERE name='".$insertname."'";
  //   $namecheck = mysqli_query($con,$namecheckquerry) or die ("2: name check querry failed");
    
  //   if (mysqli_num_rows($namecheck)==0)
		// {	
			
		// 	echo ( mysqli_num_rows($namecheck));
		// 	echo json_encode(array("message" => "No update.")); //DONE

			
		// }
		// else{
		// 	$insertuserquerry = "INSERT INTO laporandata(`id`, `fullname`, `username`, `email`, `password`, `phone`, `job`) VALUES ( NULL, '".$insertfullname."','".$insertusername."','".$insertemail."','".$insertpassword."','".$insertphone."','".$insertjob."')";
		// 	if (mysqli_query($con, $insertuserquerry)) {
  //               echo json_encode(array("message" => "Account created")); //DONE
  //               // echo "success";
                
  //               $deleteuserquerry = "DELETE FROM requests WHERE username='".$insertusername."'";
  //             echo $insertusername;
  //               if (mysqli_query($con, $deleteuserquerry)) {
  //                         echo json_encode(array("message" => "Account deleted")); //DONE
  //                         // echo "success";
  //               } else {
  //                 // echo "error";
  //                 echo json_encode(array("message" => "Unknown error occured."));
  //                     }
                      
		// 	} else {
  //               echo json_encode(array("message" => "Unknown error occured."));
  //               // echo "failed";
  //           }
            
  //           // $deleteuserquerry = "DELETE * FROM requests(`id`, `fullname`, `username`, `email`, `password`, `phone`, `job`, `message`, `date`) VALUES ( NULL, '".$insertfullname."','".$insertusername."','".$insertemail."','".$insertpassword."','".$insertphone."','".$insertjob."','".$message."',CURRENT_TIMESTAMP)";

            
            
  //           echo json_encode("accepted");
		// 	mysqli_close($con);
  //       }
        
    
        ?>        