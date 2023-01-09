<?php

    $conn = mysqli_connect('localhost', 'root', '', 'formdb');
    if (!$conn) {
            die("error".mysqli_connect_error());
    }

    extract($_POST);

    // Insert data into database
    if (isset($_POST['submit'])) {
        $query = "insert into users (username, password) values('$username', '$password')";
        $result = mysqli_query($conn, $query);
        header('location:insert.php');
    }

    // Fetch data from database
    $query = "select * from users";
  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {
    while ($rows = mysqli_fetch_array($result)) {
      ?>
        <tr>
          <td scope="row"><?php echo $rows['id']  ?></td>
          <td><?php echo $rows['username']  ?></td>
          <td><?php echo $rows['password']  ?></td>
        </tr>

      <?php
    }
  }

?>