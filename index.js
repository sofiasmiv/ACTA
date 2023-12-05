const sliderEl = document.querySelector(".slider");
const selectorEl = document.querySelector(".slidernav");
const welcomeEl1 = document.querySelector(".welcome_left");
const welcomeEl2 = document.querySelector(".welcome_paragraph");
const welcomeEl3 = document.querySelector("#sign_up");
const welcomeEl4 = document.querySelector(".welcome_left");
const goal = document.querySelector(".goalsflex")

function loadContent(){
    fetch('./index.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            //infernal if checks, there's gotta be a better way to do this.
            data.forEach(insertion => {
                if (insertion.sliders != undefined){
                    sliderEl.insertAdjacentHTML('beforeend', `${insertion.sliders}`)
                };
                if (insertion.selector != undefined){
                    selectorEl.insertAdjacentHTML('beforeend', `${insertion.selector}`)
                };
                if (insertion.welcome1 != undefined){
                    welcomeEl1.insertAdjacentHTML('afterbegin', `${insertion.welcome1}`)
                };
                if (insertion.welcome2 != undefined){
                    welcomeEl2.insertAdjacentHTML('beforeend', `${insertion.welcome2}`)
                };
                if (insertion.welcome3 != undefined){
                    welcomeEl3.insertAdjacentHTML('beforeend', `${insertion.welcome3}`)
                };
                if (insertion.welcome4 != undefined){
                    welcomeEl4.insertAdjacentHTML('afterend', `${insertion.welcome4}`)
                };
                if (insertion.goals != undefined){
                    goal.insertAdjacentHTML('beforeend', `${insertion.goals}`)
                };
            });
        });
        
    }
window.addEventListener("DOMContentLoaded", loadContent, false)
/* Slider code is modified from https://www.bannerbear.com/blog/how-to-create-an-image-slider-in-html-css-and-javascript/ */
transition = (n) => {
    const imgs = document.querySelectorAll('.slider img');
    const selectors = document.querySelectorAll('.selector');
    for (var i = 0; i < imgs.length; i++) { // standard for loop, used for setting the classes and z index of the slider
        imgs[i].style.opacity = 0; // make all images transparent
        selectors[i].className = selectors[i].className.replace(' active', ''); // removing active class
    }
    currentImg = (currentImg + 1) % imgs.length; // e.g. with a length of 3, current img value of 0 gives remainder 1, 1 remainder 2, and 2 remainder 0 taking us back to the beginning.
    if (n != undefined) {
        clearInterval(timer);
        timer = setInterval(transition, slideInterval);
        currentImg = n;
    }
    imgs[currentImg].style.opacity = 1;
    selectors[currentImg].className += ' active'; // adding back active class
}

var currentImg = 0; // index
const slideInterval = 5000; // 5 seconds
var timer = setInterval(transition, slideInterval);