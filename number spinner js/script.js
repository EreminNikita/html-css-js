var x = 0;

var output = document.getElementById('output');
var meter = document.getElementById('meter');

output.innerHTML = x;

function plus() {
    if (x >= 10) {
        return false;
    }
    if (x >= 7) {
        meter.style.background = '#f00'
    }
    output.innerHTML = ++x;
    meter.style.height = x * 10 + '%';
}

function minus() {
    if (x <= 0) {
        return false;
    }
    if (x <= 7) {
        meter.style.background = '#0f0'
    }
    output.innerHTML = --x;
    meter.style.height = x * 10 + '%';

}