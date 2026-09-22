let number = prompt("Enter Your Number")

if (number > 0 && number <= 18){
alert(`Hi Im older than ${number}`)
}else if (number > 18 && number <= 30){
alert(`Hi Im greater than ${number}`)
}else {
alert("Invalid Age")
}