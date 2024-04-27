let btn = document.getElementById('btn');

btn.addEventListener('click', function () {

    for (let i = 0; i < 50; i++) {
        let spark = document.createElement('i');
        spark.classList.add('spark');

        const randomX = (Math.random() - 0.5) * window.innerWidth;
        const randomY = (Math.random() - 0.5) * window.innerWidth;
        spark.style.setProperty('--x', randomX + 'px');
        spark.style.setProperty('--y', randomY + 'px');
        const randomSize = Math.random() * 8 + 10;
        spark.style.width = randomSize + 'px';
        spark.style.height = randomSize + 'px';
        const duration = Math.random() * 2 + 0.5;
        spark.style.animation = `animate ${duration}s ease-in-out forwards`;
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        spark.style.backgroundColor = '#' + randomColor;
        document.body.appendChild(spark);

        setTimeout(function () {
            spark.remove();
        }, 2000);

    }
})

