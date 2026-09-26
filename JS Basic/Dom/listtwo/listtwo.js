let names = ["ahmad", "omar", "obada", "mohammad"];
let score = [80, 89, 95, 74];
let average = document.getElementById("Average");
let highestScore = document.getElementById("High-score");
let scoresofbody = document.getElementById("scores_body");
let namee = document.getElementById("name");
let scoree = document.getElementById("score");
let AddToArray =document.getElementById("btn-one");
let DisplayResults =document.getElementById("btn-two");
let DisplayScores = document.getElementById("btn-three");
 
function displayResults() {
    let total = 0;
    let highest = 0;

    for (let i = 0; i < score.length; i++) {
        total += score[i];

        if (score[i] > highest) {
            highest = score[i];
        }
    }

    let avg = total / score.length;

    average.textContent = `Average Score = ${avg}`;
    highestScore.textContent = `High Score = ${highest}`;
}

function displayScores() {

    for (let i = 0; i < names.length; i++) {
        let item = document.createElement("tr")

        let nameCell = document.createElement("td");
        let scoreCell = document.createElement("td");

        nameCell.textContent = names[i];
        scoreCell.textContent = score[i];

        item.appendChild(nameCell);
        item.appendChild(scoreCell);
        scoresofbody.appendChild(item)
    }

}


function addScore() {
    let username = namee.value;
    let userscore = Number(scoree.value);

    if (username === "" || isNaN(userscore) || userscore < 0 || userscore > 100) {
        alert("You must enter a name and a valid score");
        return;
    }
    names.push(username);
    score.push(userscore);

}

AddToArray.addEventListener("click",function (e){
    e.preventDefault();
      addScore()
})

DisplayResults.addEventListener("click",function(e){
  e.preventDefault();
    displayResults();
})


DisplayScores.addEventListener("click",function (e){
 e.preventDefault();
 displayScores();

})