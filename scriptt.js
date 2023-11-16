//cache the DOM
var button = document.getElementById("button")
var body = document.getElementById("body")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var img = document.getElementById("imagine")
var educatie = document.getElementById("educatie")
var an =document.getElementById("anNastere")

const d=new Date()
var year = d.getFullYear()

//add eventListener to button
button.addEventListener("click", nou)
an.addEventListener("mouseover", displayAge)

function displayAge()
{
an.innerHTML=year-an.innerHTML
}

function nou()
{
nume.innerHTML ="Functie: mattress tester"
prenume.innerHTML ="Locul de munca: Mattress Store Ro"
asteptari.innerHTML ="Experiente: <ol><li>
intership</li><li>licenta</li></ol>"

img.src ="mattress-tester.jpg"

body.style.backgroundColor = "black"
body.style.color = "lightBlue"

img.style.height = "250px"

}