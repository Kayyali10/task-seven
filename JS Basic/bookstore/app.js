let name = prompt("please enter your name:")
let value = prompt("please enter your membership type: student/regular")
let typebook = prompt("please enter your type book: fiction /non-fiction ")
let titlebook = prompt("please enter specific title of the book")

if (value === "student") {
    value="Scholar"
    alert("your book are reserved")
    alert(`Name: ${name} \n Membership:${value} \n TitleBook:${titlebook}`)
} else if (value === "regular") {
    value="Member"
    alert("your book are reserved")
   alert(`Name: ${name} \n Membership:${value} \n TitleBook:${titlebook}`)
} else {
    alert(`Hi ${name} \n welcome to the website`)
}