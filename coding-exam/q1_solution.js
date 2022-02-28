function checkLeapYear(evt) {
    const yearNumber = document.getElementById('year').value;

    if (!validDate(yearNumber)) { 
        windows.alert ('Number must be positive');
        evt.preventDefault();
    }

    if ((0 == yearNumber % 4 && (0 != yearNumber % 100) || (0 == yearNumber % 400)) ) {
        window.alert(`${yearNumber} is a leap year`);
    } else {
       window.alert(`${yearNumber} is a not leap year`);
    }
}

function validDate(str) {
    if (str < 0 ) return false;
    else return true;
}

const btnSubmit = document.getElementById('submit');
    btnSubmit.addEventListener('click', checkLeapYear);