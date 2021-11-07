let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == '=') {
            screen.value = eval(screenValue);
        } else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}


/*var one = document.getElementById('one');
var x, y;
one.onclick = function() {
    x = 1;
    console.log(1);
}

var two = document.getElementById('two');


two.onclick = function() {
    y = 2;
    console.log(2);
    if (x === 1 && y === 2) {
        console.log(x + y);
    }
}*/