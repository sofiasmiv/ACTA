const msignupEl = document.querySelector(".msignup");
const mformEl = document.querySelector(".msignup")

function loadContent(){
    fetch('./signup.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            //infernal if checks, there's gotta be a better way to do this.
            data.forEach(insertion => {
                if (insertion.msignup != undefined){
                    msignupEl.insertAdjacentHTML('afterbegin', `${insertion.msignup}`)
                };
                if (insertion.form != undefined){
                    mformEl.insertAdjacentHTML('beforeend', `${insertion.form}`)
                };
            });
        });
        
    }
window.addEventListener("DOMContentLoaded", loadContent, false)