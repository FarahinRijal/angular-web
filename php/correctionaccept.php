<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

	$con = mysqli_connect('localhost','u570110870_geopusara20','Geopusara@20','u570110870_geopusara');

if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

    $data = json_decode(file_get_contents("php://input"));

    $acceptname = $data->nama;
    $acceptdob = $data->dob;
    $acceptdod = $data->dod;
    $acceptplot = $data->plot;
    // $acceptuserid = $data->userid;

    $insertcorrname = $data->corrnama;
    $insertcorrdob = $data->corrdob;
    $insertcorrdod = $data->corrdod;
    $insertcorrplot = $data->corrplot;
    $insertuserid = $data->userid;
    $status = "approved";

    $inserttestkubur_id = $data->testkubur_id;

    // update laporandata_new where id=userid 
    // - set fields to new data
    // - set status to approved

    // update changes to testkubur where 
        $namecheckquerry = "UPDATE laporandata_new SET 
        name = '".$acceptname."',
        corrname = '".$insertcorrname."',
        dob = '".$acceptdob."',
        corrdob = '".$insertcorrdob."',
        dod = '".$acceptdod."',
        corrdod = '".$insertcorrdod."', 
        plot = '".$acceptplot."',
        corrplot = '".$insertcorrplot."',
        status = '".$status."'
        WHERE id='".$insertuserid."'";
    // $namecheck = mysqli_query($con,$namecheckquerry) or die ("2: name check querry failed");

    if (mysqli_query($con, $namecheckquerry)) {
              // echo json_encode(array("message" => "Account updated")); 
              // echo ($inserttestkubur_id);
             // update test kubur

                //TUKAR testkubur to kuburbaru
              $updateTestkubur = "UPDATE testkubur SET   
                nama = '".$insertcorrname."',
                dob = '".$insertcorrdob."',
                dod = '".$insertcorrdod."',
                plot = '".$insertcorrplot."'
                WHERE id='".$inserttestkubur_id."'";

                if (mysqli_query($con, $updateTestkubur)) {
              echo json_encode(array("message" => "test kubur & laporan data updated")); 
                  }
                  // else{
                  //   echo json_encode(array("message" => "test kubur error")); 
                  // }

          } else {
          echo json_encode(array("message" => "Unknown error occured."));
             }


    //     $namecheckquerry = "SELECT * FROM laporandata_new WHERE status='".$status0."'";
    // $namecheck = mysqli_query($con,$namecheckquerry) or die ("2: name check querry failed");
    
    // if (mysqli_num_rows($namecheck)==0)
    //     {   
            
    //         echo ( mysqli_num_rows($namecheck));
    //         echo json_encode(array("message" => "No request."));

    //                 }
    //     else{
    //          $updateuserquerry = "UPDATE laporandata_new SET status='".$status1."' WHERE name = '".$insertname."' ";
    //       if (mysqli_query($con, $updateuserquerry)) {
    //           echo json_encode(array("message" => "Account updated"));            
    //       } else {
    //       echo json_encode(array("message" => "Unknown error occured."));
    //          }
    //     }
    //     echo json_encode("accepted");
    //         mysqli_close($con);

    // $runupdatekubur = mysqli_query($con,$updatekubur) or die ("2: name update querry failed");//2: name update querry failed;

    // echo "update successfully";

    // $namecheckquerry = "SELECT * FROM laporandata_new WHERE name='".$insertname."'";
    // echo "checked";
    // $namecheck = mysqli_query($con,$namecheckquerry) or die ("2: name check querry failed");

    // if (mysqli_num_rows($namecheck)==0)
    //     {   
            
    //         echo ( mysqli_num_rows($namecheck));
    //         echo json_encode(array("message" => "No data to update.")); //DONE

            
    //     }
    //     else{
    //         $updatequerry = "UPDATE laporandata_new SET corrname='".$insertcorrname."' OR corrdob='".$insertcorrdob."' OR corrdod='".$insertcorrdod."' OR corrplot='".$insertcorrplot."' WHERE status='".$status."' ";

    //         if (mysqli_query($con, $updatequerry)) {
    //             echo json_encode(array("message" => "laporan updated"));
    //             echo "success";

    //             $updateuserquerry = "UPDATE testkubur SET nama='".$insertcorrname."' OR dob='".$insertcorrdob."' OR dod='".$insertcorrdod."' OR plot='".$insertcorrplot."'  WHERE userid = '".$insertuserid."' ";
    //           // echo $insertnama;
    //             if (mysqli_query($con, $updateuserquerry)) {
    //                       echo json_encode(array("message" => "Data kubur updated"));
    //                       // echo "success";
    //             } else {
    //               // echo "error";
    //               echo json_encode(array("message" => "Unknown error occured."));
    //                   }
                      
    //         } else {
    //             echo json_encode(array("message" => "Unknown error occured."));
    //             // echo "failed";
    //         }
            
    //         echo json_encode("accepted");
            // mysqli_close($con);
    //     }
	
?>