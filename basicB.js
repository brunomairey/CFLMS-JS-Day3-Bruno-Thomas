
//Exo1
 	function crystalGazer () {
	var job_title = "Boss";
	var location = "New Work";
	var partners_name = "Carmen";
	var number_childrens = 2;
	var all =("You will be a " + job_title + " in " + location + " and married to " + partners_name + " with " + number_childrens + " childrens.<br>");
	return all
	}
	document.write(crystalGazer())

//Exo 2 & 3

document.write (new Date().getFullYear() + "<br>")
document.write (new Date().getMonth() + "<br>")

function ageCalculator(currentYear, yearOfBirth) {
   return currentYear - yearOfBirth;
   }
    var myAge = ageCalculator(2020, 1991);
     var myAge2 = ageCalculator(new Date().getFullYear(), 1991)-1;
    document.write("You are either " + myAge + " Or " + myAge2); 