let name = prompt("please enter your name:");

function handlemembershiptype() {

    let membership = prompt("please enter your membership type: student/regular");

    while (membership != "student" && membership != "regular") {

        membership = prompt("please enter your membership type: student/regular");

    }
    return membership;
}

function collectalluserdata() {

    let membership = handlemembershiptype();

    let typebook = prompt("please enter your type book: fiction /non-fiction ");

    let titlebook = prompt("please enter specific title of the book");

    let sum = [name, membership, typebook, titlebook];

    // for (let i = 0; i < sum.length; i++) {

    //     console.log(sum[i])
    // }
    return sum;
}


let userData = collectalluserdata();
let availableGenres = ["Fiction", "Science", "history", "Biography"];

function applyDiscount(userData) {

    if (userData[1] === "student") {
        userData.push("20% Discount");
    } else if (userData[1] === "regular") {
        userData.push("No Discount")

    }
    return userData;
}
// Add a new genre
function addNewGenre(genre) {

    availableGenres.push(genre);
}

// Display all genres
function displayGenres() {

    for (let i = 0; i < availableGenres.length; i++) {

        console.log(`- We offer: ${availableGenres[i]}`);
    }
}



applyDiscount(userData);


addNewGenre("Technology");


displayGenres();


console.log(userData);