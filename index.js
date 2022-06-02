const signInBtn = document.querySelector(".button");
const emailInput = document.querySelector(".input");
const warningText = document.querySelector(".warning");
const errorText = document.querySelector(".error");
const successText = document.querySelector(".success");
const form = document.querySelector(".form");

const doRequest = async () => {
    const BASE_URL = 'https://email-api.dev.hml.cz/';

    const request = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({email: emailInput.value}) 
    })
    if (request.status === 200) {
        errorText.style.display = "none";
        warningText.style.display = "none";   
        successText.style.display = "block";  
        return request.json();
    }

    if (request.status === 400) {
        form.style.display = "block";
        successText.style.display = "none"; 
        warningText.style.display = "none";
        return errorText.style.display = "block";              
    }
}

let inputState = ""; 

emailInput.addEventListener("input", e => {
    inputState = e.target.value;
})

signInBtn.addEventListener("click", e => {
    e.preventDefault();    

    if (inputState === "") {
        return warningText.style.display = "block";        
    }

    doRequest();
    emailInput.value = ""; 
    form.style.display = "none";    
})
