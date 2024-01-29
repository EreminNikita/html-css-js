let i = 0;
let h2 = document.querySelector('h2');
let loader = document.querySelector('.loader');
let body = document.querySelector('body');
let number = document.querySelector('.number');
let percentBar = document.querySelector('.percentBar');

let interval = setInterval(function () {
    number.innerHTML = i + '<span>%</span>';
    percentBar.style.width = i + '%';
    i++
    if(i==101) {
        clearInterval(interval)
        setTimeout(function(){
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            h2.style.opacity = '1';
            h2.style.visibility = 'visible';
        })
    }
},50)