document.querySelector('.navigation').addEventListener("click", selectActiveLink);
function selectActiveLink (){
    document.querySelectorAll(".navigation a").forEach( element => {
    element.classList.remove("active")})
    event.target.classList.add("active")
}

const $slide1 = document.getElementsByClassName("slide1")[0];
const $slide2 = document.querySelector(".slide2 img");
const $slider = document.querySelector(".slider container"); 
const $modalClose = document.getElementById("closeModal")
const $modalOpen = document.getElementById("submit")
const $modal = document.getElementsByClassName("modal")[0]
const $modalContent = document.getElementsByClassName("modal__content")[0]
const $name = document.getElementById("name")
const $email = document.getElementById("email")
const $form = document.getElementsByClassName("quote__form")[0]
const $subjectForm = document.getElementById("subject")
const $descriptionForm = document.getElementById("describe")
const $subject = document.getElementsByClassName("modal__subject")[0]
const $description = document.getElementsByClassName("modal__description")[0]
const $arrowLeft = document.getElementById("Arrow_Black_Left")
const $arrowRight = document.getElementById("Arrow_Black_Right")


$arrowLeft.addEventListener("click",changeSlideLeft)
$arrowRight.addEventListener("click",changeSlideRight)

let currentSlide = $slide1
let nextSlide = $slide2
let color1 = "#f06c64"
let color2 = "#648bf0"
let slideArray = [currentSlide,nextSlide]
let colorArray = [color1,color2]
let i = 0

function changeSlideLeft(){
    slideArray[i%2].classList.remove("left2")
    slideArray[i%2].classList.remove("right2")
    slideArray[i%2].classList.add("left1")
    slideArray[i%2].addEventListener("animationstart", 
    () => $slider.style.background=colorArray[i%2])
    i++
    slideArray[i%2].classList.remove("left1")
    slideArray[i%2].classList.remove("right1")
    slideArray[i%2].classList.add("left2")
}
function changeSlideRight(){
    
    slideArray[i%2].classList.remove("left2")
    slideArray[i%2].classList.remove("right2")
    slideArray[i%2].classList.add("right1")
    slideArray[i%2].addEventListener("animationstart", 
    () =>{ let j =i+1;  $slider.style.background=colorArray[j%2]})
    i++
    slideArray[i%2].classList.remove("left1")
    slideArray[i%2].classList.remove("right1")
    slideArray[i%2].classList.add("right2")

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

document.addEventListener("scroll", highlightNav)

function highlightNav(){
    if (scrollY<500){
    document.querySelectorAll(".navigation a").forEach( element => {
    element.classList.remove("active")})
    document.getElementById("homeLink").classList.add("active")}
    if (scrollY>500 && scrollY<1000){
        document.querySelectorAll(".navigation a").forEach( element => {
        element.classList.remove("active")})
        document.getElementById("serviceLink").classList.add("active")}
    if (scrollY>1000 && scrollY<1900){
        document.querySelectorAll(".navigation a").forEach( element => {
        element.classList.remove("active")})
        document.getElementById("portfolioLink").classList.add("active")}
    if (scrollY>1900 && scrollY<2500){
        document.querySelectorAll(".navigation a").forEach( element => {
        element.classList.remove("active")})
        document.getElementById("aboutLink").classList.add("active")}
    if (scrollY>2500){
        document.querySelectorAll(".navigation a").forEach( element => {
        element.classList.remove("active")})
        document.getElementById("contactLink").classList.add("active")}
}

$modalOpen.addEventListener("click",function (){if ($name.validity.valid && $email.validity.valid) {
event.preventDefault()
$modal.style.display="block"
}
if ($subjectForm.value!=="")
$subject.innerHTML=`Subject: ${$subjectForm.value}`
if ($descriptionForm.value!=="")
$description.innerHTML=`Description: ${$descriptionForm.value}`
} )
$modalClose.addEventListener("click",function (){ $modal.style.display="none"
$form.reset()
$description.innerHTML=``
$subject.innerHTML=``} )
$modal.onclick = (event) => {if (event.target==$modal ) {$modal.style.display="none"
$form.reset()
$description.innerHTML=`No subject`
$subject.innerHTML=`No description`} }
