// localjs.js

var d = new Date();

var hours = d.getHours();

if (hours < 12)
{  
	document.write("<H1>Good Morning</H1>");
}
else
{
	console.log("Afternoon as hours = " + hours);
	document.write("<H1>Good Afternoon</H1>");
}
 


$(document).ready(function() {


   $("a").click(function() {
   
  

$.getJSON("http://www.saratos.com/eapp/jlist.php" + "?jsoncallback=?",function(result){

	console.log(result);
	
    // Success
	
	for(var i = 0; i < result.length; i++){
                //var newText = $('#results').val() + "\n";
                // newText += 'Name: ' + result.ruser_info[i].firstname + ', Age: ' +
                // result.ruser_info[i].lastname;
				
				console.log(result[i].firstname);
				
            }
			
	});

    
   });

 });
 
 $.getJSON("http://www.saratos.com/eapp/courses.php" + "?jsoncallback=?",function(result){

	console.log(result);
	
    // Success
	
	var $optionslist = "<UL data-role=\"listview\" data-inset=\"true\" data-filter=\"true\">";
	for(var i = 0; i < result.length; i++){
		console.log(result[i].coursename);
		$optionslist += "<LI><A href=\"";
		$optionslist += result[i].coursejumppoint;
		$optionslist += "\">";
		$optionslist += result[i].coursename;
		$optionslist += "</A></LI>";
	}
	$optionslist += "</UL>";
	document.getElementById("ptwocourselist").innerHTML = $optionslist;
	
	
			
	});
 

 
/*
	End of File
*/