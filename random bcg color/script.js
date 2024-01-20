function changeBG() {

    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);

    document.body.style.backgroundColor = "rgba(" + r + "," + g + "," + b + ")"

}
setInterval(changeBG, 1000)