let button_decrease = document.getElementById("decrease");
let button_increase = document.getElementById("increase");
let counter = document.getElementById("value");

button_decrease.addEventListener("click", function event() {
    var value = parseInt(counter.innerHTML);
    if (value == 0) {
        var myValue = value;
        counter.innerHTML = myValue;
        alert("Minimum value has been reached");
    } else {
        var myValue = value - 1;
        counter.innerHTML = myValue;
    }
});
button_increase.addEventListener("click", function event() {
    var value = parseInt(counter.innerHTML);
    if (value == 50) {
        var myValue = value;
        counter.innerHtml = myValue;
        alert("Maximum value has been reached");
    } else {
        var myValue = value + 1;
        counter.innerHTML = myValue;
    }
});