

//var div = ('#task1')

calculateAge = function(b_year,c_year) {
        var poss_age = c_year - b_year;   
        console.log("You are either" + poss_age + " or " + poss_age +1);
        document.getelementbyid(task1).innerHTML = poss_age, poss_age +1
};

calculateAge(1992,2017);
