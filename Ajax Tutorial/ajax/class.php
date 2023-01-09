<?php

    $conn = mysqli_connect('localhost', 'root', '', 'formdb');
    if(!$conn){
        die("error". mysqli_connect_error());
    }

    $nameid = $_POST['datapost'];
    $query = "select * from classes where mid = '$nameid' ";
    $result = mysqli_query($conn, $query);

    while ($rows = mysqli_fetch_array($result)) {
        ?>
        <option><?php echo $rows['class']; ?></option>

        <?php
            }
        ?>