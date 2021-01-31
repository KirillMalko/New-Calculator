let display = document.getElementById("display");

function cle() {
    display.value = " ";
}

function del() {
    alert("Sorry, but this function don't work");
}

function res() {
    display.value = eval(display.value);
}

function press(x) {
    display.value += x;
}