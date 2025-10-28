function revealPass(inputElement, iconElement) {
    const passwordInput = document.getElementById(inputElement);
    const icon = document.getElementById(iconElement);
    
    if(passwordInput.getAttribute("type") === "password"){
        passwordInput.setAttribute("type", "text");
        icon.className = "bi bi-eye-slash-fill";
    }
    else{
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