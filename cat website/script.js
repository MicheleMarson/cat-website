function  scroll(element, position, newClass, num) {
    var elmnt = document.querySelector(position);
    var elmtGet = document.querySelectorAll(element)[num];
    var pos = elmnt.getBoundingClientRect().top;
    var  screenPos = window.innerHeight / 2;
    if(pos < screenPos){
        elmtGet.classList.add(newClass);
    }else{
        elmtGet.classList.remove(newClass);
    }
}



window.addEventListener("scroll", function () {
    scroll(".logo-sticky", ".about",  "logo-new", 0);
    scroll(".about h1", ".about",  "new", 0);
    scroll(".about-grid img", ".about-grid",  "new", 0);
    scroll(".about-grid img", ".about-grid img",  "new", 1);
    scroll(".anatomy h1", ".anatomy",  "new", 0);
    scroll(".anatomy-img", ".anatomy",  "new-anatomy", 0);
    scroll(".breeds h1", ".breeds",  "new", 0);
    scroll(".care h1", ".care",  "new", 0);
})

const carouselSlide = document.querySelector(".slide");
const carouselImg = document.querySelectorAll(".slide-img");

//button
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

//counter
let counter = 1;
const size = carouselImg[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

//button listener
nextBtn.addEventListener("click", ()=>{
    if(counter >= carouselImg.length - 1) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
})

prevBtn.addEventListener("click", ()=>{
    if(counter <= 0) return;
    carouselSlide.style.translate = "transform 0.6s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
})

carouselSlide.addEventListener("transitionend",()=>{
    if(carouselImg[counter].id == "last-clone"){
        carouselSlide.style.transition = "none";
        counter = carouselImg.length - 2;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
    if(carouselImg[counter].id == "first-clone"){
        carouselSlide.style.transition = "none";
        counter = carouselImg.length - counter;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
})

let burgerLink = document.querySelector(".burger");
let navbarList = document.querySelector(".navlist");
burgerLink.addEventListener("click", ()=>{
    if(navbarList.style.display == "none"){
        navbarList.style.display = "block";
        navbarList.style.opacity = 1;
    }else{
        navbarList.style.display = "none"
    }
})
