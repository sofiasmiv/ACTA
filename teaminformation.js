const profilejs = document.querySelector(".profiles");

function loadContent(){
    fetch('./teaminformation.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // infernal if checks, there's gotta be a better way to do this.
            data.forEach(insertion => {
                if (insertion.profile != undefined){
                    profilejs.insertAdjacentHTML('beforeend', `${insertion.profile}`)
                };
            });
        });
        
    }
window.addEventListener("DOMContentLoaded", loadContent, false)