let form = document.getElementById("reg-form");
let name = document.getElementById("username");
let password = document.getElementById("password");
let confirmpassword = document.getElementById("con-password");
let Registrationbutton = document.getElementById("reg-btn")
let usernameError = document.getElementById("username-error");
let passwordError = document.getElementById("password-error");
let confirmError = document.getElementById("confirm-error");



function validateform() {

    let username = name.value;
    let userpassword = password.value;
    let confirm = confirmpassword.value;

    if (username !== "" && userpassword !== "" && confirm !== "" && userpassword === confirm) {
        Registrationbutton.disabled = false; // يعني الزر شغال
    } else {
        Registrationbutton.disabled = true; // يعني الزر مش شغال  
    }
}
name.addEventListener("input", function () {

    let username = name.value;

    if (username === "") {
        usernameError.textContent = "Username is required";
    } else {
        usernameError.textContent = "";
    }

    validateform();
});



password.addEventListener("input", function () {
    let userpassword = password.value;
    if (userpassword === "") {
        passwordError.textContent = "Password is required";
    } else {
        passwordError.textContent = ""
    }
    validateform();
});
confirmpassword.addEventListener("input", function(){
   let confirm = confirmpassword.value; 
   let userpassword = password.value;
    if (confirm === "") {
        confirmError.textContent = "Confirm password is required";
    } else {
        confirmError.textContent = "";
    }

    if (userpassword !== "" && confirm !== "") {
        if (userpassword !== confirm) {
            passwordError.textContent = "Passwords do not match";
            confirmError.textContent = "Passwords do not match";
        } else {
            passwordError.textContent = "";
            confirmError.textContent = "";
        }
    }
  validateform();

});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let username = name.value;
    let userpassword = password.value;
    let confirm = confirmpassword.value;

    if (username !== "" && userpassword !== "" && confirm !== "" && userpassword === confirm) {

        alert("Registration successful!")

    }

})

