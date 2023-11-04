let cursor = document.querySelector('#cursor');
let body = document.querySelector('body');
document.onmousemove = function (e) {
    // move cursor
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
    // add elements to body 
    let element = document.createElement('div');
    element.className = 'element';
    body.prepend(element);
    // move element randomly
    element.style.left = cursor.getBoundingClientRect().x + 'px';
    element.style.top = cursor.getBoundingClientRect().y - 20 + 'px';

    setTimeout(function () {
        let text = document.querySelectorAll('.element')[0],
            directionX = Math.random() < .5 ? -1 : 1,
            directionY = Math.random() < .5 ? -1 : 1;

        text.style.left = parseInt(text.style.left) - (directionX * (Math.random() * 200)) + 'px';
        text.style.top = parseInt(text.style.top) - (directionY * (Math.random() * 200)) + 'px';
        text.style.opacity = 0;
        text.style.transform = 'scale(1)';
        text.innerHTML = randomText();
        text.style.color = randomColor();

        // remove element
        setTimeout(function () {
            element.remove()
        }, 1500)
    }, 10)
}

// add random test
function randomText() {
    var text = ('ereminnikita').split('');
    letter = text[Math.floor(Math.random() * text.length)];
    return letter;
}

function randomColor() {
    // Генерируем случайные значения для красного, зеленого и синего
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    // Преобразуем значения в шестнадцатеричный формат и объединяем их
    var color = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
    return color;
}