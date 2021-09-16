function toCelsius() {
    let f = document.getElementById("fahr").value;
    let c =  Math.round((5/9) * (f-32));
    document.getElementById("top").innerHTML = "The result is " + "<br>" + c + " " + "degrees Celsius";
}
   
function toFahrenheit() {
    let c = document.getElementById("cel").value;
    let f =  Math.round((9/5 * c) +32);
    document.getElementById("bottom").innerHTML = "The result is " + "<br>" + f + " " + "degrees Fahrenheit";
}