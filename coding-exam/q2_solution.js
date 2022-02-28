function moduloCheck() {
    const number1 = document.getElementById('n1').value;
    const number2 = document.getElementById('n2').value;

    let quotient = parseInt(number1/number2);

    let product = quotient * number2;

    window.alert(`Remainder is ${number1 - product}`)
}


const btnSubmit = document.getElementById('submit');
    btnSubmit.addEventListener('click', moduloCheck);