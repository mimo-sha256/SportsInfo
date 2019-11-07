var signup = document.getElementById("signupButton");
var login = document.querySelectorAll(".signup");
var loginButton = document.getElementById("loginButton");

signup.addEventListener("click",function () {
   for(var i=0;i<login.length;i++) {
       login[i].classList.remove("signup");
       signup.classList.add("signup");
        loginButton.innerHTML = "Sign Up"
   } 
});