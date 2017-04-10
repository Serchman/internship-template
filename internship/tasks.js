calculateAge = function(b_year) {
  
        var today = new Date();
        var year =  today.getFullYear();
        var poss_age = year - b_year;
        var poss_age2 = parseInt(poss_age) -1
        console.log(year)
        
        var output = "You are either " + poss_age2 + " or " + poss_age
        console.log("You are either " + poss_age + " or " + poss_age2);
  
        
        document.getElementById('task1').innerHTML = output
};

function handleClick(event){
                var x = document.getElementById("myVal1").value;
	    	console.log(x)
          calculateAge(x)
                return false;
            }
