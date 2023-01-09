<!-- How to get data from database using ajax -->
<?php

    $conn = mysqli_connect('localhost', 'root', '', 'formdb');
    if($conn == true){
        echo "successfull";
    }
    else{
        die("error". mysqli_connect_error());
    }

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>

<body>
    <div class="container mt-4">
        <form>
        <label for="exampleInputEmail1">Username</label>
                <input type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Username">
            <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            
            <label for="exampleFormControlSelect1">Degree</label>
                <select class="form-control" id="exampleFormControlSelect1" onchange="myfunc(this.value)">
                    <option>Select one</option>
                    <?php 
                        $query = "select * from degree";
                        $result = mysqli_query($conn, $query);
                        while ($rows = mysqli_fetch_array($result)) {
                            ?>
                            <option value="<?php echo $rows['mid']; ?>"><?php echo $rows['degrees']; ?></option>
                            <?php
                        }
                    ?>
                    
                </select>
            <label for="exampleFormControlSelect1">Classes</label>
                <select class="form-control" id="dataget">
                    <option>Select one</option>
                </select>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>

  <script>
      function myfunc(datavalue){
          
        $.ajax({
            url: 'class.php',
            type: 'POST',
            data: { datapost: datavalue},

            success: function(result){
                $('#dataget').html(result);
            }
        });

      }
  </script>  

</body>

</html>