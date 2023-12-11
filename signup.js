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

function confirm(e){
    e.preventDefault();
    const firstname = document.querySelector("#fname").value;
    const lastname = document.querySelector("#lname").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value; 
    
    const messages = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        message: message
    }

    const serializedMessage = JSON.stringify(messages);
    console.log(serializedMessage)

    const fetchOptions = {
        method: "POST",
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: serializedMessage
    }

    fetch("http://localhost:3000/form",fetchOptions )
    .then(onResponse)
    .then(onTextReady);

}

function onTextReady(text){
    console.log(text);
    window.alert("A confirmation email has been sent to " + email);
    // const newp = document.querySelector("#return-text");
    // newp.style.color = "red";
    // newp.textContent = text;
}

function onResponse(response){
    return response.text();
}

const form = documentquerySelector("#form");
submit.addEventListener("click",confirm);