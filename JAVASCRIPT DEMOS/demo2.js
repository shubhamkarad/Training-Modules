/*function sayHello(name)
{
   console.log("  Welcome : "+name);
}*/

/******************************* */
/*var sayHello=function(name){
    console.log("Welcome : "+name)
}*/
/******************************* */
//var greetMe=new Function("name","console.log('welcome : '+name)")
//sayHello("Aranab");
//greetMe("Laxmi");
/********************************** */
function Employee(eid, empName, esal) {
    this.empId = eid;
    this.empName = empName;
    this.empSal = esal;
    var empAge;
    this.setEmpAge = function(eage) { this.empAge = eage; }
    this.getEmpAge = function() { return this.empAge }
    this.talk = function() {
        console.log(this.empName + " Talking  ");
    }
    this.calcAnnualSal = function() {
        return 12 * this.empSal;
    }
}

/**********************************Create emp object********* */
var arnabEmp = new Employee(789, "Arnab", 3000.0);
arnabEmp.setEmpAge(22);
arnabEmp.talk();
console.log(arnabEmp.getEmpAge());
console.log(arnabEmp.calcAnnualSal());
console.log(arnabEmp.empId);
var lakshmiEmp = new Employee(900, "Laksmi", 8000.0);
lakshmiEmp.setEmpAge(22);
lakshmiEmp.talk();
console.log(lakshmiEmp.getEmpAge());
console.log(lakshmiEmp.calcAnnualSal());
console.log(lakshmiEmp.empId);

console.log(arnabEmp.hasOwnProperty("empId"));

Employee.prototype.noOfLeaves = 24;
console.log(arnabEmp.hasOwnProperty("noOfLeaves"));
console.log(arnabEmp.noOfLeaves);
console.log(lakshmiEmp.noOfLeaves);
//arnabEmp.prototype.doj="7888";
//console.log(arnabEmp.hasOwnProperty("doj"));

/***********************************  */

function Manager(noOfHrs, ratePerHours) {
    this.noOfHrs = noOfHrs;
    this.ratePerHours = ratePerHours;
    this.callMgrSal = function() {
        return (this.calcAnnualSal() + (this.ratePerHours * this.noOfHrs));
    }
}
Manager.prototype = new Employee(900, "Samir", 7000);
var laksmiMgr = new Manager(4, 400);
console.log("Mgr Total ann sal  " + laksmiMgr.callMgrSal());