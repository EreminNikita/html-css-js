function stars() {
    var e = document.createElement('div');
    e.setAttribute('class', 'star');
    document.body.appendChild(e);
    e.style.left = Math.random() * + innerWidth + 'px';

    var size = Math.random() * 12;
    var duration = Math.random() * 3;

    e.style.fontSize = 12 + size + 'px';
    e.style.animationDuration = 2 + duration + 's';

    setTimeout(function () {
        document.body.removeChild(e);
    }, 5000)
}

setInterval(function () {
    stars()
}, 100);