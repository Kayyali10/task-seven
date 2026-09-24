let number = Number(prompt("Enter the number :"));
let sum = 0;

while (number < 0 || isNaN(number) || !Number.isInteger(Number(number))) {
    alert("Error:Vaild Value")
    number = prompt("Enter the number :")
}

for (let i = 0; i <= number; i++) {
    sum += i;

}

let average = sum / (Number(number + 1));
alert(`The Sum Of Number : ${average}`);