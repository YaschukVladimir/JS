let buttonPlus = document.getElementById('button-plus');
let buttonMin = document.getElementById('button-min');
let buttonMult = document.getElementById('button-mult');
let buttonDel = document.getElementById('button-del');


buttonPlus.addEventListener('click', calc.bind(null, 'plus'));
buttonMin.addEventListener('click', function () { calc('minus'); });
buttonMult.addEventListener('click', function () { calc('mult'); });
buttonDel.addEventListener('click', function () { calc('devide'); });

function calc(act, b='', c='') {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let firstValue = Number(input1.value);
    let secondValue = Number(input2.value);

    var summ = '';

    if (act == 'plus') {
        summ = firstValue + secondValue;
    } else if (act == 'minus') {
        summ = firstValue - secondValue;
    }else if (act == 'mult') {
        summ = firstValue * secondValue;
    }else if (act == 'devide') {
        summ = firstValue / secondValue;
    }

    alert(summ);
}


// function onButtonPlusClick() {
//     let input1 = document.getElementById('number1');
//     let input2 = document.getElementById('number2');

//     let firstValue = Number(input1.value);
//     let secondValue = Number(input2.value);

//     let summ = firstValue + secondValue;
//     alert(summ);
// }
// function onButtonMinClick() {
//     let input1 = document.getElementById('number1');
//     let input2 = document.getElementById('number2');

//     let firstValue = Number(input1.value);
//     let secondValue = Number(input2.value);

//     let sub = firstValue - secondValue;
//     alert(sub);
// }
// function onButtonMultClick() {
//     let input1 = document.getElementById('number1');
//     let input2 = document.getElementById('number2');

//     let firstValue = Number(input1.value);
//     let secondValue = Number(input2.value);

//     let mult = firstValue * secondValue;
//     alert(mult);
// }
// function onButtonDelClick() {
//     let input1 = document.getElementById('number1');
//     let input2 = document.getElementById('number2');

//     let firstValue = Number(input1.value);
//     let secondValue = Number(input2.value);

//     let del = firstValue / secondValue;
//     alert(del);
// }

