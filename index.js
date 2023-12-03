
const Password = document.querySelector("#password")
const togglePassword = document.querySelector("#togglePassword");


togglePassword.addEventListener("click", ()=> {
    const type = Password.getAttribute("type") === "password" ? "text": "password";
    Password.setAttribute("type", type);


    togglePassword.classList.toggle("fa-eye");




})



