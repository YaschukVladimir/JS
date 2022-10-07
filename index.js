let buttonPlus = document.getElementById('button-plus');
let buttonMin = document.getElementById('button-min');
let buttonMult = document.getElementById('button-mult');
let buttonDel = document.getElementById('button-del');

function onButtonPlusClick() {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let firstValue = Number(input1.value);
    let secondValue = Number(input2.value);

    let summ = firstValue + secondValue;
    alert(summ);
}
function onButtonMinClick() {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let firstValue = Number(input1.value);
    let secondValue = Number(input2.value);

    let sub = firstValue - secondValue;
    alert(sub);
}
function onButtonMultClick() {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let firstValue = Number(input1.value);
    let secondValue = Number(input2.value);

    let mult = firstValue * secondValue;
    alert(mult);
}
function onButtonDelClick() {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let firstValue = Number(input1.value);
    let secondValue = Number(input2.value);

    let del = firstValue / secondValue;
    alert(del);
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMin.addEventListener('click', onButtonMinClick);
buttonMult.addEventListener('click', onButtonMultClick);
buttonDel.addEventListener('click', onButtonDelClick);