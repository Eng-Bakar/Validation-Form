const contactName = document.getElementById("name");
const number = document.getElementById("number");
const email = document.getElementById("email");
const submitButton = document.getElementById("submitBtn");
const form = document.getElementById("form");
const nameError = document.getElementById("name_error");
const emailError = document.getElementById("email_error");
const numberError = document.getElementById("num_error");

form.addEventListener('submit', (e) => {
    let isValid = true;
    const emailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (contactName.value === '' || contactName.value == null) {
        e.preventDefault();
        nameError.innerHTML = "Name is required";
        isValid = false;
    } else {
        nameError.innerHTML = "";
    }

    if (!email.value.match(emailCheck)) {
        e.preventDefault();
        emailError.innerHTML = "Valid email is required";
        isValid = false;
    } else {
        emailError.innerHTML = "";
    }

    if (number.value === '' || number.value == null || number.value.length > 20) {
        e.preventDefault();
        numberError.innerHTML = "Phone number is required and must be less than 20 digits";
        isValid = false;
    } else {
        numberError.innerHTML = "";
    }

    if (isValid) {
        form.submit();
    }
});
