document.getElementById("alert-name").onclick = function () {
    alert("Zeeshan Hassan")
    let statement = "alert('Zeeshan Hassan')"
    document.getElementById("statement").innerHTML = statement
    document.getElementById("output").innerHTML = ""
}

document.getElementById("alert-number").onclick = function () {
    alert("123")
    let statement = "alert('123')"
    document.getElementById("statement").innerHTML = statement
    document.getElementById("output").innerHTML = ""
}

document.getElementById("c-statement").onclick = function () {
    document.getElementById("statement").innerHTML = ""
}

document.getElementById("c-result").onclick = function () {
    document.getElementById("output").innerHTML = ""
}

document.getElementById("variable-names").onclick = function () {
    document.getElementById("statement").innerHTML = ""
    document.getElementById("output").innerHTML = ""

    let html = "<ul><li>A variable name cant contain any spaces</li><li>A variable name can contain only letters, numbers, dollar sign and underscores</li><li>Though a variable name cant be any of JavaScript's Keywords, it can <i></i>contain keywords. For Example <code> User Alert </code> <code> myVar </code></li></ul>"
    document.getElementById("output").innerHTML = html

}

document.getElementById("camle-case").onclick = function () {
    document.getElementById("statement").innerHTML = ""
    document.getElementById("output").innerHTML = ""

    let html = "<h3>Examples</h3> <ul><li><code>user</code></li><li><code>userResponse</code></li><li><code>userResponseTime</code></li></ul>"

    document.getElementById("output").innerHTML = html

}

document.getElementById("sum").onclick = function () {
    document.getElementById("statement").innerHTML = ""
    document.getElementById("output").innerHTML = ""

    let num1 = 5;
    let num2 = 10;

    let sum = num1 + num2;

    document.getElementById("statement").innerHTML = "let num1 = 5; let num2 = 10; let sum = num1 + num2"
    document.getElementById("output").innerHTML = sum
}

document.getElementById("subtract").onclick = function () {
    document.getElementById("statement").innerHTML = ""
    document.getElementById("output").innerHTML = ""

    let num1 = 20;
    let num2 = 10;

    let subtract = num1 - num2;

    document.getElementById("statement").innerHTML = "let num1 = 20; let num2 = 5; let subtract = num1 - num2"
    document.getElementById("output").innerHTML = subtract
}

document.getElementById("multiply").onclick = function () {
    document.getElementById("statement").innerHTML = ""
    document.getElementById("output").innerHTML = ""

    let num1 = 100;
    let num2 = 10;

    let multiply = num1 * num2;

    document.getElementById("statement").innerHTML = "let num1 = 100; let num2 = 10; let multiply = num1 * num2"
    document.getElementById("output").innerHTML = multiply
}

document.getElementById("divide").onclick = function () {
    document.getElementById("statement").innerHTML = ""
    document.getElementById("output").innerHTML = ""

    let num1 = 100;
    let num2 = 10;

    let divide = num1 / num2;

    document.getElementById("statement").innerHTML = "let num1 = 100; let num2 = 10; let divide = num1 / num2"
    document.getElementById("output").innerHTML = divide
}

document.getElementById("calculate").onclick = function () {
    document.getElementById("statement").innerHTML = ""
    document.getElementById("output").innerHTML = "" 
     
    let num1 = 36;
    let num2 = 6;
    let num3 = 3;
    let num4 = 2;
    let num5 = 4;
    let num6 = 3;
    let num7 = 5;

    let calculate = num1 / num2 * num3 + num4 ** num5 - (num6 + num7)

    document.getElementById("statement").innerHTML = "let num1 = 36; let num2 = 6; let num3 = 3; let num4 = 2; let num5 = 4; let num6 = 3; let num7 = 5; let calculate = num1 / num2 * num3 + num4 ** num5 - (num6 + num7)"
 document.getElementById("output").innerHTML = calculate

}