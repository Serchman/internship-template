calculateAge = function(b_year) {
  
        var today = new Date();
        var year =  today.getFullYear();
        var poss_age = year - b_year;
        var poss_age2 = parseInt(poss_age) -1
        console.log(year)
        
        var output = "You are either " + poss_age2 + " or " + poss_age + "."
        console.log("You are either " + poss_age + " or " + poss_age2);
  
        
        document.getElementById('task1').innerHTML = output;
};

function handleClick(event){
                var x = document.getElementById("myVal1").value;
	    	console.log(x)
          calculateAge(x)
                return false;
            }


calculateSupply = function (age,amount){
  
      var total_days = (90 * 365)- (parseInt(age) * 365); 
      var total_amount =Number( total_days * (parseFloat(amount)).toFixed(0))
      console.log(total_amount)
      document.getElementById('task2').innerHTML = "You will need " + total_amount + " to reach the age 90.";
}

calculateSupply(25,3)



calcCircumference = function(radius){
  var circum = radius * 2 * Math.PI
  
  document.getElementById('circum').innerHTML = "The circumference is " + circum + ".";
  
}

//calcCircumference(4)

calcArea = function(radius){
  var area = radius * radius * Math.PI;
  
  document.getElementById('area').innerHTML = 'The area is ' + area + ".";
  
}

//calcArea(4)

function handleClick(event){
                var x = document.getElementById("radius").value;
	    	//console.log(x)
          calcCircumference(x)
          calcArea(x)
                return false;
            }



celsiusToFahrenheit = function(celcius){
  
  var C = parseInt(celcius)
  var F = (C *9) / 5 + 32
  document.getElementById('faren').innerHTML = C + String.fromCharCode(176) + "C is " + F + String.fromCharCode(176) + "F."
}

celsiusToFahrenheit(0)


fahrenheitToCelsius = function(fahrenheit){
  
  var F = parseInt(fahrenheit)
  var C = ((F - 32) * 5) /9
  document.getElementById('celc').innerHTML = F + String.fromCharCode(176) + "F is " + C + String.fromCharCode(176) + "C."
}

fahrenheitToCelsius(100)
