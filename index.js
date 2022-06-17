const firstName=document.getElementById("fname");
const lastName= document.getElementById("lname");
const email=document.getElementById("email");
const password=document.getElementById("password");
const form=document.getElementById("form");
const error1=document.getElementById("error1");
const error2=document.getElementById("error2");
const error3=document.getElementById("error3");
const error4=document.getElementById('error4');


form.addEventListener("submit", (e)=>{
  if(firstName.value === "" || firstName.value == null){
    error1.style.display = "block";
    firstName.style.border = "1px solid hsl(0,100%,74%)";
  }

  if (lastName.value === "" || lastName.value == null){
    error2.style.display = "block";
    lastName.style.border = "1px solid hsl(0,100%,74%)";
  }

  if(email.value === "" || email.value == null){
    error3.style.display="block";
    email.style.border = "1px solid hsl(0,100%,74%)";
  }

   if(password.value === "" || password.value == null){
    error4.style.display="block";
    password.style.border = "1px solid hsl(0,100%,74%)";
  }
 e.preventDefault();
})

