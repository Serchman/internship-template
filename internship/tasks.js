

//var div = ('#task1')

calculateAge = function(b_year,c_year) {
        var poss_age = c_year - b_year;
        var poss_age2 = parseInt(poss_age) +1
        console.log("You are either" + poss_age + " or " + poss_age +1);
        document.getElementById(task1).innerHTML = (poss_age, poss_age2)
};

calculateAge(1992,2017);
