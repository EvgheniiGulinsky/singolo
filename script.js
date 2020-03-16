document.querySelector('.navigation').addEventListener("click", selectActiveLink);
function selectActiveLink (){
    document.querySelectorAll(".navigation a").forEach( element => {
    element.classList.remove("active")})
    event.target.classList.add("active")
}

const $slide1 = document.getElementsByClassName("slide1")[0];
const $slide2 = document.getElementsByClassName("slide2")[0];

document.getElementById("Arrow_Black_Left").addEventListener("click",changeSlide)
document.getElementById("Arrow_Black_Right").addEventListener("click",changeSlide)

function changeSlide(){
    if ($slide2.style.opacity==0){
    $slide2.style.opacity=1
    $slide1.style.opacity=0}
    else{
    $slide2.style.opacity=0
    $slide1.style.opacity=1
    }
}

document.getElementsByClassName("vertical")[0].addEventListener("click",() => {
if (document.getElementById("Vertical-Screen").style.display == "none")
document.getElementById("Vertical-Screen").style.display = "block"
else 
document.getElementById("Vertical-Screen").style.display = "none"
})

document.getElementsByClassName("horizontal")[0].addEventListener("click",() => {
if (document.getElementById("Horizontal-Screen").style.display == "none")
document.getElementById("Horizontal-Screen").style.display = "block"
else 
document.getElementById("Horizontal-Screen").style.display = "none"
})

document.querySelectorAll('.portfolio__grid img').forEach(element=>{element.addEventListener("click", addBorder)})
function addBorder (){
    document.querySelectorAll("img").forEach( element => {
    element.classList.remove("bordered")})
    event.target.classList.add("bordered")
}



document.getElementsByClassName("portfolio__buttons")[0].addEventListener("click", filterImg)

function filterImg(){
document.querySelectorAll(".portfolio__buttons input").forEach( element => {
element.classList.remove("activetab")})
event.target.classList.add("activetab")
let imageArray = [...document.querySelectorAll(".portfolio__grid img")]
let cutElem = imageArray[11]
imageArray.unshift(cutElem)
document.querySelector(".portfolio__grid").insertBefore(imageArray[0], document.querySelector(".portfolio__grid img"))
}
