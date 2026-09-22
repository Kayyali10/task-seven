// let pattern = "";

// for (let i = 5; i >= 1; i--) { //عدد الاسطر 
//     for (let j = 5; j >= i; j--) { //عدد النجوم داخل كل سطر 
//         pattern += "*";
//     }
//     pattern += "\n";
// }
// console.log(pattern)

// let pattern = "";

// for (let i = 1; i <= 26; i++) {
//     for (let j = 0; j < i; j++) {
//         pattern += String.fromCharCode(97 + j) + " ";
//     }
//     pattern += "\n";
// }

// console.log(pattern);


// let countdown = 10;

// while (countdown > 0) {
//     console.log(countdown)
//     countdown--;
// }

// let countdown = 10;

// do {
//     console.log(countdown)
//     countdown--;
// } while (countdown >= 0)


// حساب فاتورة كهرياء 
function calculateElectricityBill(previousReading, currentReading) {
    let value = currentReading - previousReading;
    let t1;
    let t2;
    let t3;
    if (currentReading >= previousReading) {
        if (value >= 1 && value <= 300) {
            value = value * 0.05;
            console.log(value + 2.5)
        } else if (value >= 301 && value <= 600) {
            t1 = 300;
            t1*=0.05;
            t2=value - 300;
            t2*=0.10;
            value= t1 + t2 + 2.5;
            console.log(value)
        } else if (value > 600) {
            t1= 300 ;
            t1*=0.05
            t2=300;
            t2*=0.10
            t3 = value -600 ;
            t3*=0.20;
            value = t1 + t2 + t3 +2.5;

            console.log(value)
        }
    } else {
        console.log("invalid value")
    }

}

calculateElectricityBill(1300,2900);


