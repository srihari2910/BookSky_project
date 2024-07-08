var over=document.querySelector(".overlay")
var pop=document.querySelector(".pop-up")
var button=document.querySelector(".addbutton")
button.addEventListener("click",function(){
    over.style.display="block"
    pop.style.display="block"
})
 
var cancel=document.getElementById("cancel")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    over.style.display="none"
    pop.style.display="none"
})  
//select
var container=document.querySelector(".container")
var title=document.getElementById("booktitle")
var author=document.getElementById("bookauthor")
var content=document.getElementById("content")
var add=document.getElementById("add")
add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-continer")
    div.innerHTML=`<h2>${title.value}</h2>
    <h3>${author.value}</h3>
    <p>${content.value}</p>
    <button onclick="del(event)">Delete</button>`
    container.append(div)
    over.style.display="none"
    pop.style.display="none"
})

function del(event){
    event.target.parentElement.remove()
}