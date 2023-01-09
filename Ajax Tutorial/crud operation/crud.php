<?php

    $conn = mysqli_connect('localhost', 'root', '', 'formdb');
    if (!$conn) {
        die("error".mysqli_connect_error());
    }


    extract($_POST);


    // Insert data into database
    if (isset($_POST['username']) && isset($_POST['password'])) {

        $query = "insert into users (username, password) values('$username', '$password')";
        $result = mysqli_query($conn, $query);
        // header('location:insert.php');

    }


    // Fetch data from database

    if (isset($_POST['readrecord'])) {
        
        $data = '<table class="table table-bordered table-striped">
                            <tr>
                            <th scope="col">id</th>
                            <th scope="col">Username</th>
                            <th scope="col">Password</th>
                            <th scope="col">Edit Action</th>
                            <th scope="col">Delete Action</th>
                            </tr>';
        $query = "select * from users";
        $result = mysqli_query($conn, $query);
        if (mysqli_num_rows($result) > 0) {
            
            $number = 1;
            while ($rows = mysqli_fetch_array($result)) {            
                $data .= '<tr>
                <td scope="row">'.$number.'</td>        
                <td>'.$rows['username'].'</td>
                <td>'.$rows['password'].'</td>
                <td>
                    <button onclick="GetUserDetail('.$rows['id'].')" class="btn btn-warning">Edit</button>
                </td>
                <td>
                    <button onclick="DeleteUser('.$rows['id'].')" class="btn btn-danger">Delete</button>
                </td>
                </tr>';
                $number++;
            }
        }
        $data .='</table>'; // close table tag
        echo $data;

    }

    

    // Delete record from database
    if(isset($_POST['deleteid'])){
        
        $userid = $_POST['deleteid'];
        $query = "DELETE FROM `users` WHERE `users`.`id` = '$userid'";
        mysqli_query($conn, $query);
    }



    // Get userid for update
    if (isset($_POST['id']) && isset($_POST['id']) != "") {

        $user_id = $_POST['id'];
        $query3 = "select * from users where id= '$user_id' ";

        if (!$result = mysqli_query($conn, $query3)) {
            exit(mysqli_error());
        }

        $response = array();
        if (mysqli_num_rows($result) > 0){
            while ($row = mysqli_fetch_assoc($result)) {
                $response = $row;
            }
        }else {
            $response['status'] = 200;
            $response['message'] = "Data not found!";
        }
        // php has some built in function to handle json.
        // objects in php can be converted into json by using the php function json_encode()
        echo json_encode($response);
    }
    else {
        $response['status'] = 200;
        $response['message'] = "Invalid request!";
    }


    // update table
    if (isset($_POST['hidden_user_id2'])) {
        $hidden_user_id = $_POST['hidden_user_id2'];
        $username = $_POST['username2'];
        $password = $_POST['password2'];

        $query = "UPDATE `users` SET `username`='$username',`password`='$password' WHERE `id`='$hidden_user_id'";
        $result = mysqli_query($conn, $query);
    }

?>