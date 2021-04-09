// Closure is function  having access to the parent scop   even after the parent function has closed.

// (
//     function()
//     {
//         var year=2015;  
//         printYear=function()

//     }
// )

(
    function() {
        var year = 2015;
        printYear = function() {
            console.log("Year : " + year);
        }
        incrementYear = function() {
            return year++;

        }
        setYear = function(yr) {
            year = yr;
        }
    }
)
(); //self Invocation, you can run it only once
console.log(" Initial Year : " + printYear());
console.log(" Set Year : " + setYear(2021));
console.log(" Initial Year : " + printYear());
console.log(" Incremebt year : " + incrementYear());
console.log(" Initial Year : " + printYear());