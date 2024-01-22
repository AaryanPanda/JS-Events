//Challenge 1

var user=document.getElementById("user")
window.onload= () => {
  user.innerHTML="Aaryan Panda"
}


//Challenge 2

var button=document.getElementById("btn-click")
button.addEventListener('click', e =>{
  button.style.background="peru"
})

//Challenge 3

//Building of Function
function makeSentence() {
var noun=document.getElementById("noun").value
var verb=document.getElementById("verb").value
var adverb=document.getElementById("adverb").value

var sentence=noun + verb + adverb + "."

var statement=document.getElementById("statement")
statement.textContent=sentence

}

//Using addEventListener
var buildButton=document.getElementById("build-button")

buildButton.addEventListener('click', makeSentence)


//Challenge 4.1

var grandparent=document.getElementById("grandparent")
var parent=document.getElementById("parent")
var child=document.getElementById("child")

grandparent.addEventListener('click', e => {
  console.log("Grandparent clicked")
})

parent.addEventListener('click', e => {
  console.log("Parent clicked")
})

child.addEventListener('click', e => {
  console.log("Child clicked")
})


//Challenge 4.2

var grandparent=document.getElementById("grandparent")
var parent=document.getElementById("parent")
var child=document.getElementById("child")

grandparent.addEventListener('click', e => {
  console.log("Grandparent clicked")
},{capture:true})

parent.addEventListener('click', e => {
  console.log("Parent clicked")
},{capture:true})

child.addEventListener('click', e => {
  console.log("Child clicked")
},{capture:true})


//Challenge 5

var category = document.getElementById("category")
category.addEventListener('click', e => {
  if (e.target.id=="blazers") {
    console.log("blazers")
  }
})