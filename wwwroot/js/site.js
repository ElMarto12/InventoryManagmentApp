function revealPass(){
    let passwordInput = document.getElementById("password");
    passwordInput.getAttribute("type") === "password" ? passwordInput.setAttribute("type", "text") : passwordInput.setAttribute("type", "password");
}