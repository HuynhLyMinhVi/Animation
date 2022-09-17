let pswrd = document.getElementById('pswrd');
let toggleBtn = document.getElementById('toggleBtn');

let loverCase = document.getElementById('lower');
let upperCase = document.getElementById('upper');
let numberCase = document.getElementById('number');
let specialCase = document.getElementById('special');
let lenghtCase = document.getElementById('lenght');

function chechPassword(data) {
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\$&\*])');
    const lenght = new RegExp('(?=.{8,})');
    //check lower
    if (lower.test(data)) {
        loverCase.classList.add('valid');
    } else {
        loverCase.classList.remove('valid');

    }
    //check upper
    if (upper.test(data)) {
        upperCase.classList.add('valid');
    } else {
        upperCase.classList.remove('valid');

    }//check number
    if (number.test(data)) {
        numberCase.classList.add('valid');
    } else {
        numberCase.classList.remove('valid');

    }//check special
    if (special.test(data)) {
        specialCase.classList.add('valid');
    } else {
        specialCase.classList.remove('valid');

    }//check lenght
    if (lenght.test(data)) {
        lenghtCase.classList.add('valid');
    } else {
        lenghtCase.classList.remove('valid');

    }
}

//Show hide password
toggleBtn.onclick = function () {
    if (pswrd.type === 'password') {
        pswrd.setAttribute('type', 'text');
        toggleBtn.classList.add('hide');
    } else {

        pswrd.setAttribute('type', 'password');
        toggleBtn.classList.remove('hide');

    }
}