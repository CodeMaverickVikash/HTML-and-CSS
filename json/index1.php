<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<!-- if you want to use ajax you have to include jquery library or cdn -->
	<script type="text/javascript" src="js/jquery-3.5.1.min.js"></script>
</head>
<body>

	<center>
		<!-- <h2>json_encode in php</h2> -->
		<?php
			// $array = [10, "vikash", "sanu"];
			// $array = ['data' => [10, "vikash", "sanu"]];
			// echo $array; // ERROR: Array to string conversion in
			// echo json_encode($array);
			// $fetchFA = json_encode($array);
			// echo json_encode($array, JSON_FORCE_OBJECT|JSON_PRETTY_PRINT); // converting array to object
			// echo $fetchFA;
		?>
	</center>

	<center>
		<!-- <h2>Access php data in javascript</h2>
		<h2>using JSON.parse and json_encode</h2> -->
		<?php
			// $emp = ["id"=>1, "name"=>"vijay", "addr"=> "mumbai"];  // associative array
			// $emp = [["id"=>1, "name"=>"vijay", "addr"=> "mumbai"], ["id"=>2, "name"=>"vikash", "addr"=> "pune"]]; // array of associative array
			// $json = json_encode($emp); // encoded into json format
			// echo "<div id='emp' style='display: none;'>" .$json. "</div>";
		?>
	</center>	

	<center>
		<h2>Access javascript data in php</h2>
		<h2>JSON.stringify and json_decode</h2>
	</center>

</body>


<script>

		// var jsonobject = {
		// 	"firstname": "vikash",
		// 	"lastname": "mask",
		// 	"age": 24,
		// 	"profession": "webdeveloper"
		// }

		// // document.write(jsonobject.lastname); 
		// // document.write(jsonobject['lastname']);

		// // modify value
		// jsonobject.lastname = "maskTechnical";

		// // add new key value pair
		// jsonobject.middlename = "Hum hai dam hai";

		// // delete key value pair
		// delete jsonobject.middlename;

		// for(showalldata in jsonobject){
		// 	document.write(jsonobject[showalldata] + "<br>");
		// }

		// // Making array object
		// var jsonobject = {
		// 	"array": ["vikash", "mask", "technical"]
		// }

		// Access php data in javascript
		// let emp = <?php $json ?>;
		// let emp = JSON.parse(document.getElementById('emp').innerHTML);
		// console.log(emp);
		// emp.forEach(function(emp){
		// 	console.log(emp);
		// 	console.log(emp.name);
		// })

		// Access javascript data in php
		// let emps = []; // blank array
		// let emp1 = {}; // blank object
		// let emp2 = {};

		// emp1.id = 1;
		// emp1.name = 'vikash';
		// emp1.addr = 'pune';
		// emps.push(emp1);

		// emp2.id = 2;
		// emp2.name = 'sanu';
		// emp2.addr = 'mumbai';
		// emps.push(emp2);

		// // console.log(emps);

		// $.ajax({
		// 	url: "readJson.php",
		// 	type: "post",
		// 	// data: emp1, // for just object
		// 	data: {emps: JSON.stringify(emps)}, // for array of multiple object
		// 	success: function(res){
		// 		console.log(res);
		// 	}
		// })

	</script>
</html>