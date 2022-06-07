const spzInput = document.querySelector(".spzInput");
const spzInfo = document.querySelector(".spzInfo");
const validInfo = document.querySelector(".validInfo");
const spzCode = document.querySelector(".spzCode");
const shownSPZ = document.querySelector(".inputLicence");
const submitBtn = document.querySelector(".button");
const msgBox = document.querySelector(".msgBox");

const spzFilter = /\d[A-C,E,H,J-M,P,S-U,Z][A-Z0-9]\d{4}/;
const regionFilter = /\d[A-C,E,H,J-M,P,S-U,Z][A-Z0-9]/;

spzInput.addEventListener("input", e => {
    msgBox.innerHTML = "";
    const value = e.currentTarget.value;
    
    shownSPZ.value = value.toUpperCase();   

    const result = value.replace(/\s/g, "").toUpperCase(); 
    
    // 1 
    if (spzFilter.test(result) == false) {
        spzCode.style.display = "block";
        submitBtn.classList.add("disabled");
    } else {
        spzCode.style.display = "none";
        submitBtn.classList.remove("disabled");
    }

    // 2
    if (result.length != 7) {
        e.currentTarget.classList.add("error");
        spzInfo.style.display = "block";
    } else {
        if (e.currentTarget.classList.contains("error")) {
            e.currentTarget.classList.remove("error"); 
            spzInfo.style.display = "none";
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
    if (!spzInput.classList.contains("error") && 
        !submitBtn.classList.contains("disabled")
    ) {
        msgBox.innerHTML = "Zadali jste validné číslo SPZ!";
        spzInput.value = "";
        shownSPZ.value = "";  
        
    }
})

