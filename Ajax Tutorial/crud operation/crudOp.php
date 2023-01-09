<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crud operation using Ajax in php</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>

<body>

    <div class="container">

        <div class="d-flex justify-content-end">
            <!-- Button to Open the Modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                Add User
            </button>
        </div>

        <h2 class="text-danger">All Records</h2>

        <!-- // Fetch data from database -->
        <div id="records_contant">

        </div>

        <!-- The Modal -->
        <div class="modal" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Add User</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" id="username" class="form-control" placeholder="username">
                            <label for="password">Password</label>
                            <input type="text" id="password" class="form-control" placeholder="password">
                        </div>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="addRecord()">Save</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>

        
        <!-- ///// Update model -->
        <!-- The Modal -->
        <div class="modal" id="update_user_model">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Update Detail</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="update_username">Username</label>
                            <input type="text" id="update_username" class="form-control" placeholder="username">
                            <label for="update_password">Password</label>
                            <input type="text" id="update_password" class="form-control" placeholder="password">
                        </div>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="UpdateUserDetail()">Save</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        <input type="hidden" name="" id="hidden_user_id">
                    </div>

                </div>
            </div>
        </div>


    </div>

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <script>

        // Insert data into database
        function addRecord() {
            var username = $('#username').val();
            var password = $('#password').val();
            $.ajax({
                url: "crud.php",
                type: "post",
                data: { username: username, password: password },

                success: function (data, status) {
                    readRecords();
                }
            })
        }
        

        $(document).ready(function(){
            readRecords();
        });
        // Fetch data into database
        
        function readRecords(){
            var readrecord = "readrecord";
            $.ajax({
                url: 'crud.php',
                type: 'post',
                data: { readrecord: readrecord},

                success: function(data, status){
                    $('#records_contant').html(data);
                }
            })
        }



        // Delete record from database
        function DeleteUser(deleteid){
            var conf = confirm("Are you sure");
            // console.log(id);
            if (conf==true) {
                $.ajax({
                    url: "crud.php",
                    type: "post",
                    data: {deleteid: deleteid},

                    success:function(data, status){
                        readRecords();
                }
            });
            }
        }

        // Update data
        function GetUserDetail(id){
            $('#hidden_user_id').val(id);

            $.post("crud.php", {id: id}, function(data, status){
                var user = JSON.parse(data);
                $('#update_username').val(user.username);
                $('#update_password').val(user.password);
            });
            $('#update_user_model').modal('show');
        }

        function UpdateUserDetail(){
            var username1 = $('#update_username').val();
            var password1 = $('#update_password').val();

            var hidden_user_id1 = $('#hidden_user_id').val();

            $.post('crud.php', {
                hidden_user_id2: hidden_user_id1,
                username2: username1,
                password2: password1,
            },
            function(data, status){
                $('#update_user_model').modal('hide');
                readRecords();
            }
            )
        }

</script>

</body>

</html>