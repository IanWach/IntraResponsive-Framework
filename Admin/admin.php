   <?php
  $error =NULL;      
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                   
    function get_data() {
      $file_name='classIdDataset'. '.json';
      $PrevClass = $_POST['prev-class'];
      $AddId  = $_POST['addId'];
      $TabletClass = $_POST['tablet-c'];
      $MobileClass = $_POST['mobile-c'];
    //Conditions to ensure no empty Inputs and Short attributes
 
    if (file_exists("$file_name")) {
      $current_data=file_get_contents("$file_name");
      $array_data=json_decode($current_data, true);
                                 
        $extra=array(
            'previousClass' => $PrevClass,
            'tabletClass' => $TabletClass,
            'mobileClass' => $MobileClass,
            'tabletId' => $AddId,
            'mobileId' => $AddId,
              );
            $array_data[]=$extra;
            echo '<script>alert("The File Exists file exist")</script>';
            return json_encode($array_data);
        } else {
            $newData=array();
            $newData[]=array(
              'previousClass' => $PrevClass,
              'tabletClass' => $TabletClass,
              'mobileClass' => $MobileClass,
              'tabletId' => $AddId,
              'mobileId' => $AddId,
              );
            echo "file not exist<br/>";
            return json_encode($newData);
    }
}
      $file_name='classIdDataset'. '.json';
        
      if(file_put_contents("$file_name", get_data())) {
          echo '<script>alert("The Data was added successfully")</script>';
          echo file_get_contents("theadmin.html");
      }                
      else {
          echo 'There is some error';                
      }
  }
         
  ?>