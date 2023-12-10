const imgbox1El = document.querySelector("#imgandbox1");
const imgbox2El = document.querySelector("#imgandbox2");
const charheaderEl = document.querySelector("#charityheader");
const charityEl = document.querySelector(".charities");


function loadContent(){
    fetch('./climateaction.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            //infernal if checks, there's gotta be a better way to do this.
            data.forEach(insertion => {
                if (insertion.imgbox1 != undefined){
                    imgbox1El.insertAdjacentHTML('beforeend', `${insertion.imgbox1}`)
                };
                if (insertion.imgbox2 != undefined){
                    imgbox2El.insertAdjacentHTML('beforeend', `${insertion.imgbox2}`)
                };
                if (insertion.charheader != undefined){
                    charheaderEl.insertAdjacentHTML('beforeend', `${insertion.charheader}`)
                };
                if (insertion.charity != undefined){
                    charityEl.insertAdjacentHTML('beforeend', `${insertion.charity}`)
                };
            });
        });
        
    }
window.addEventListener("DOMContentLoaded", loadContent, false)