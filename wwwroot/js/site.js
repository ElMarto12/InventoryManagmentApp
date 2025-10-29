function revealPass(inputElement, iconElement) {
    const passwordInput = document.getElementById(inputElement);
    const icon = document.getElementById(iconElement);

    if (passwordInput.getAttribute("type") === "password") {
        passwordInput.setAttribute("type", "text");
        icon.className = "bi bi-eye-slash-fill";
    } else {
        passwordInput.setAttribute("type", "password");
        icon.className = "bi bi-eye-fill";
    }
}

document.querySelector("#pass-rev-button").addEventListener("click", function(){
   revealPass("password", "pass-rev-icon"); 
});

document.querySelector("#repass-rev-button").addEventListener("click", function(){
   revealPass("repeatpassword", "repass-rev-icon"); 
});

document.querySelector("#repeatpassword").addEventListener("input", (e) => {
    const password = document.getElementById("password");
    const repeatPassword = e.target;
    const buttonElement = document.getElementById("repass-rev-button");
    
    let existingWarning = document.getElementById("password-warning");
    if (existingWarning) existingWarning.remove();
    
    if (password.value !== repeatPassword.value) {
        const warning = document.createElement("span");
        warning.id = "password-warning";
        warning.textContent = "Passwords do not match";
        warning.style.color = "red";
        warning.style.fontSize = "0.9rem";
        warning.className = "w-100 mt-2";
        buttonElement.insertAdjacentElement("afterend", warning);
    }
});
