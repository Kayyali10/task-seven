let text = document.getElementById("text");
let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let left =document.getElementById("left");
let center =document.getElementById("center");
let right =document.getElementById("right");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let capitalize = document.getElementById("capitalize");


//bold
bold.addEventListener("click", function (e) {
    e.preventDefault();

    if ( text.style.fontWeight === "bold") {
         text.style.fontWeight = "normal"
    } else {
         text.style.fontWeight = "bold"
    }

})

// italic
italic.addEventListener("click", function (e) {
    e.preventDefault();

    if ( text.style.fontStyle === "italic") {
         text.style.fontStyle = "normal"
    } else {
         text.style.fontStyle = "italic"
    }

})

//left
left.addEventListener("click", function (e) {
    e.preventDefault();

    if ( text.style.textAlign === "left") {
         text.style.textAlign = "center"
    } else {
         text.style.textAlign = "left"
    }

})

//center
center.addEventListener("click", function (e) {
    e.preventDefault();

    if ( text.style.textAlign === "center") {
         text.style.textAlign = "center"
    } else {
         text.style.textAlign = "center"
    }

})

//right
right.addEventListener("click", function (e) {
    e.preventDefault();

    if ( text.style.textAlign === "right") {
         text.style.textAlign = "center"
    } else {
         text.style.textAlign = "right"
    }

})

//uppercase
uppercase.addEventListener("click" , function(e){
    e.preventDefault();
    
   text.textContent = text.textContent.toUpperCase();
})

//lowercase
lowercase.addEventListener("click" , function(e){
    e.preventDefault();
    
   text.textContent = text.textContent.toLowerCase();
})

//capitalize

capitalize.addEventListener("click", function(e) {
    e.preventDefault();

    let words = text.textContent.split(" ");

    words = words.map(function(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });

    text.textContent = words.join(" ");
});