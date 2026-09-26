let paragraph = document.getElementById("paragraph");

let text = paragraph.textContent;

let words = text.split(" ");

let newText = "";

let count = document.getElementById("word-count");

count.textContent  = `number of words : ${words.length}`;



for (let i = 0; i < words.length; i++) {
    
    if (words[i].length > 8) {

        newText += `<span id="d">${words[i]}</span> `;

    } else {
        newText += words[i] + " "
    } 

    if (words[i].endsWith(".")){
        newText += "<br>";

    }
   
}

 paragraph.innerHTML = newText;