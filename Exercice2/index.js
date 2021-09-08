// Fonction permettant de convertir les degrés celcius en Fahrenheit
function convCelcius() {
    var celcius = document.getElementById('celcius');
    var inputCelcius = document.getElementById("celciusIn").value;
    var celciusToFarentheit = inputCelcius * 9 / 5 + 32;
    celcius.innerHTML = celciusToFarentheit;
    return celciusToFarentheit;
}
// Fonction permettant de convertir les degrés Fahrenheit en Celcius
function convFahrenheit() {
    var fahrenheit = document.getElementById('fahrenheit');
    var inputFahrenheit = document.getElementById("fahrenheitIn").value;
    var fahrenheitToCelcius = (inputFahrenheit - 32) * 5 / 9;
    fahrenheit.innerHTML = fahrenheitToCelcius;
    return fahrenheit;
}