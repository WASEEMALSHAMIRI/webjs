let username = document.querySelector("#username")
let password = document.querySelector("#password")

let loginBtn = document.querySelector("#sign_in")

let getUser = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")

loginBtn.addEventListener ("click" , function(W){
    W.preventDefault()
    if (username.value==="" || password.value===""){
        alert("The Data Is Incomplate")
    } else {
        if ( (getUser && getUser.trim() === username.value.trim() && getPassword && getPassword === password.value )  )
        {
            setTimeout ( () => {
                window.location = "index.html"
            } , 1500)
        } else {
            console.log("username or password is wrong ")
        }
    }
})



