const licenceInput = document.querySelector(".licenceInput");
const licenceInfo = document.querySelector(".licenceInfo");
const validInfo = document.querySelector(".validInfo");
const licenceCode = document.querySelector(".licenceCode");
const shownSPZ = document.querySelector(".inputLicence");
const submitBtn = document.querySelector(".button");
const msgBox = document.querySelector(".msgBox");

const spzFilter = /\d[A-C,E,H,J-M,P,S-U,Z][A-Z0-9]\d{4}/;
const regionFilter = /\d[A-C,E,H,J-M,P,S-U,Z][A-Z0-9]/;

licenceInput.addEventListener("focus", e => {
    msgBox.innerHTML = "";
    licenceInfo.style.display = "block";
})

licenceInput.addEventListener("input", e => {
    msgBox.innerHTML = "";
    const value = e.currentTarget.value;

    shownSPZ.value = value.toUpperCase();   

    const result = value.replace(/\s/g, "").toUpperCase(); 
    
    // 1 
    if (spzFilter.test(result) == false) {
        licenceCode.style.display = "block";
        submitBtn.classList.add("disabled");
    } else {
        licenceCode.style.display = "none";
        submitBtn.classList.remove("disabled");
    }

    // 2
    if (result.length < 7 || result.length > 7) {
        e.currentTarget.classList.add("error");
        licenceInfo.style.display = "block";
    } else {
        if (e.currentTarget.classList.contains("error")) {
            e.currentTarget.classList.remove("error"); 
            licenceInfo.style.display = "none";
        }        
    }

    // 3 
    if (regionFilter.test(result) == false) {
        validInfo.style.display = "block";
    } else {
        validInfo.style.display = "none";
    }
})

submitBtn.addEventListener("click", e => {
    e.preventDefault();
    if (!licenceInput.classList.contains("error") && 
        !submitBtn.classList.contains("disabled")
    ) {
        msgBox.innerHTML = "Zadali jste validné číslo SPZ!";
        licenceInput.value = "";
        shownSPZ.value = "";  
        licenceInfo.style.display = "none";        
    }
})

