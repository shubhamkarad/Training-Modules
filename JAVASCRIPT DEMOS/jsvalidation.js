function validation() {
    var user = document.getElementById("fname").Value;
    if (user == "") {
        alert("Fill the name");
        return false;
    }
}