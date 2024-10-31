// переменная для хранения цвета
let saveColor = '';

// цвета 
const colors = {
    red: 'red',
    blue: 'blue',
    green: 'green',
    yellow: 'yellow'
};

// обработчики для цветных
document.getElementById('red').addEventListener('click', function() {
    saveColor = colors.red;
});
document.getElementById('blue').addEventListener('click', function() {
    saveColor = colors.blue;
});
document.getElementById('green').addEventListener('click', function() {
    saveColor = colors.green;
});
document.getElementById('yellow').addEventListener('click', function() {
    saveColor = colors.yellow;
});

// Обработчики для пустых
document.querySelectorAll('.square').forEach(function(squareGray) {
    squareGray.addEventListener('click', function() {
        if (saveColor) {
            this.style.backgroundColor = saveColor;
            this.style.border = "1px solid";
        }
    });
});

