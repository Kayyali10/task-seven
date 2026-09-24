let number = prompt("Enter the number :");
let sum = 0;

while (number < 0 || isNaN(number) || !Number.isInteger(Number(number))) {
    alert("Error:Vaild Value")
    number = prompt("Enter the number :")
}

for (let i = 0; i <= number; i++) {
    sum += i;

}
alert(`The Sum Of Number : ${sum}`)