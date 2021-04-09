//-----------This is object creation using new Object()-------------
var emp2 = {}
var emp1 = new Object();
emp1.empId = 789;
emp1.empName = "Krisha";
console.log(emp1.empId);
console.log(emp2.empId);
console.log(emp2.empName);
emp1.talk = function(nm) {
    console.log(this.empName + "Talking  ")
}
console.log(emp1.talk())
for (key in emp1) {
    console.log("... KEY : " + key + " VALUE : " + emp2[key]);
}

// In othe rprogramming lang we have classes and object
// class inherits from other class.

// But in java script inheriance is prototype inheritance.
// object inherits from other objects

// ----------------------------
// Every object has prototype.
// This prototype itself is  aobject 
// all java script objects inherits their properies from the prototype.
// If we create object using object literlal, or g new Object(), or using constructor.