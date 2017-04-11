calculateAge = function(b_year) {
  
        var today = new Date();
        var year =  today.getFullYear();
        var poss_age = year - b_year;
        var poss_age2 = parseInt(poss_age) -1
        console.log(year)
        
        var poss_ages = "You are either " + poss_age2 + " or " + poss_age + "."
        console.log("You are either " + poss_age + " or " + poss_age2);
  
        
        document.getElementById('task1').innerHTML = poss_ages;
};


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




celsiusToFahrenheit = function(celcius){
  
  var C = parseFloat(celcius)
  var F = (C *9) / 5 + 32
  document.getElementById('faren').innerHTML = C + String.fromCharCode(176) + "C is " + F + String.fromCharCode(176) + "F."
}

fahrenheitToCelsius = function(fahrenheit){
  
  var F = parseFloat(fahrenheit)
  var C = ((F - 32) * 5) /9
  document.getElementById('celc').innerHTML = F + String.fromCharCode(176) + "F is " + C + String.fromCharCode(176) + "C."
}

function handleClick(event){
  var x = document.getElementById("myVal1").value;
  calculateAge(x)
  
  var age = document.getElementById('age').value;
  var amount = document.getElementById('amount').value;
  calculateSupply(age,amount)
  
  var R = document.getElementById('radius').value;
  calcCircumference(R)
  calcArea(R)
  
  
  var f2 = document.getElementById('faren2').value;
  celsiusToFahrenheit(f2)
  
  var c2 = document.getElementById("celc2").value;
  fahrenheitToCelsius(c2)
          
                return false;
            }
