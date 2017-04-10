

//var div = ('#task1')

calculateAge = function(b_year,c_year) {
        var poss_age = c_year - b_year;
        var poss_age2 = parseInt(poss_age) +1
        var output = "You are either" + poss_age + " or " + poss_age2
        console.log("You are either" + poss_age + " or " + poss_age2);
        document.getElementById(task1).innerHTML = (output)
};

calculateAge(1992,2017);
