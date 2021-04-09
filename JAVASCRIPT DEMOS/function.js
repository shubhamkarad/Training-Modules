// function sayhello(name) {
//     console.log("Welcome" + name);
// }
// sayhello("Shubham");

// var greetMe = new Function("name", "console.log('welcome :'+name)");
// greetMe("Shubham");

// function Employee(eid, eName, eSal) {
//     this.empId = eid;
//     this.empName = eName;
//     this.empSal = esal;
//     this.setEmpAge=function(eage)
// }
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
for (key in emp2) {
    console.log("... KEY : " + key + " VALUE : " + emp2[key]);
}