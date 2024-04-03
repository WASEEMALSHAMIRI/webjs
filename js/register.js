let firstname = document.querySelector("#FirstName")
let listname = document.querySelector("#Listname")
let username = document.querySelector("#username")
let email = document.querySelector("#email")
let phone = document.querySelector("#NumberPhone")
let password = document.querySelector("#password")
let conpassword = document.querySelector("#Confiempassword")

let register = document.querySelector("#sign_up")

register.addEventListener ("click" , function (w){
    w.preventDefault()
    if (firstname.value ==="" || listname.value ==="" || username.value==="" || email.value==="" ||phone.value ==="" ||  password.value ==="" ||conpassword.value ===""  ){
        alert("The Data Is Incomplate");
    }else if(password.value!== conpassword.value){
        alert("Password Mismatch");
    }else {
        localStorage.setItem("firstname" , firstname.value);
        localStorage.setItem("listname" , listname.value);
        localStorage.setItem("username" , username.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("phone" , phone.value);
        localStorage.setItem("password" , password.value); 
        localStorage.setItem("conpassword" , conpassword.value);

        setTimeout ( () => {
            window.location = "login.html"
        } , 1500)
    }
})

