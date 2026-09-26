let input = document.getElementById("input-list");
let button = document.getElementById("btn-list");
let list = document.getElementById("list");

button.addEventListener("click", function (e) {
    e.preventDefault();
    let myitem = input.value;
    input.value = "";

    let listtext = document.createElement("span");
    let listitem = document.createElement("li")
    let remobutton = document.createElement("button")

    listitem.appendChild(listtext);
    listtext.textContent = myitem;
    listitem.appendChild(remobutton);
    remobutton.textContent = "Delete";
    list.appendChild(listitem)

    remobutton.addEventListener("click" ,function(e){
        e.preventDefault();
        list.remove(listitem)
    })
})