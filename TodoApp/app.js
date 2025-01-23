let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
btn.addEventListener("click",function() {
    let str = inp.value;
    if(str.length > 0) {
        let li = document.createElement("li");
        li.innerText = str;
        let delBtn = document.createElement("button");
        delBtn.classList.add("delete");
        delBtn.innerText = "delete";
        li.appendChild(delBtn);
        ul.appendChild(li);
    }
    inp.value = '';
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentNode;
        listItem.remove();
    }


})