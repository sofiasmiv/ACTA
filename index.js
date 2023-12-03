/* Slider code is modified from https://www.bannerbear.com/blog/how-to-create-an-image-slider-in-html-css-and-javascript/ */
transition = (n) => {
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
    imgs[currentImg].style.opacity = 1 ;
    selectors[currentImg].className += ' active'; // adding back active class
}

var imgs = document.querySelectorAll('.slider img');
var selectors = document.querySelectorAll('.selector');
var currentImg = 0; // index
const slideInterval = 5000; // 5 seconds
var timer = setInterval(transition, slideInterval);