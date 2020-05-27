

function minutes(minutes) {
 	 //var x, y, z, sum;

 	 var hours = minutes/60;
  	var rest = minutes %60;
 	 console.log(hours);
 	 console.log(rest);
 	 return hours;
 	 return rest;
	
}
minutes(200)
document.write(minutes +"minutes = " + hours + " hour(s) and " + rest + " minute(s).") 