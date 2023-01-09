<!-- Insert data into database using ajax jquery -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Insert data using ajax php and mysql</title>
  <!-- Latest compiled and minified CSS Always placed in Head tag -->
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
    <form id="myform" action="insertphp.php" method="POST">
      <div class="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input type="username" name="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          placeholder="username">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <button type="submit" name="submit" id="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>

  
  <!-- Fetch data from database -->
  <div class="container d-flex justify-content-end mb-4 mt-4"><button type="button" class="btn btn-danger" id="displaydata">Fetch Data</button></div>
  <div class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Username</th>
          <th scope="col">Password</th>
        </tr>
      </thead>
      <tbody id="response">
        
        
      </tbody>
    </table>
  </div>

  <script>
    $(document).ready(function () {
      var form = $('#myform');
      $('#submit').click(function () {
        $.ajax({
          url: form.attr('action'), // form me jo action name ka jo attribute hai select them
          type: post,
          data: $("#myform input").serialize(),

          success: function (result) {
            console.log(result);
          }
        })
      })

      // $('#displaydata').click(function(){
        displaydata();
      function displaydata(){
        $.ajax({
        url: 'insertphp.php',
        type: 'post',

        success: function(responsedata){
          $('#response').html(responsedata);
        }
      })
    // })
  }

    });
  </script>

</body>

</html>