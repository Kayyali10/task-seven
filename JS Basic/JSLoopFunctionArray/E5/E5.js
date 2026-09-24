let number = Number(prompt("Enter Number From 0 to 100 :"))

if (Number.isNaN(number)) {
    alert("is not a number")
} else if (number < 0 || number > 100) {

    while (number < 0 || number > 100) {

        alert("Error: Number must be between 0 and 100");

        number = Number(prompt("Enter Number From 0 to 100:"));
    }
} else {
    alert(`The number is: ${number}`);
}


