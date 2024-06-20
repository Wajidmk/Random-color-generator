document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('colorButton');
    const colors = ["red", "blue", "green", "orange", "yellow", "purple", "pink"];

    button.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        document.body.style.backgroundColor = randomColor;
    });
});
