// if (number < 0 || number > 100) {
//     while (number < 0 || number > 100) {

//         alert("Error: Number must be between 0 and 100");

//         number = prompt("Enter Number From 0 to 100:");
//     }

// } else if (isNaN(number)) {

//     while (isNaN(number)) {

//         alert("Error: input value is not a number");

//         number = prompt("Enter Number From 0 to 100:");
//     }

// } else {

//     alert(`The number is: ${number}`);
// }

let number = prompt("Enter Number From 0 to 100 :")

while ((number < 0 || number > 100) || isNaN(number)) {

    if (number < 0 || number > 100) {

        alert("Error: Number must be between 0 and 100");

        number = prompt("Enter Number From 0 to 100:");
    } else if (isNaN(number)) {

        alert("Error: Input Value Is Not Number");

        number = prompt("Enter Number From 0 to 100:");
}
}

 alert(`The number is: ${number}`)
