var msg;
msg = "<p><code>The actual script is in external script file called common.js</code></p>";

function addNos(headVar, bodyVar) {

    document.write(msg);
    var result = eval(headVar) + eval(bodyVar);
    document.write(result);

}