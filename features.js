let moveinlog = document.querySelector("#movetolog")
moveinlog.addEventListener("click",myfun)
let movetosign = document.querySelector("#movetosign")
movetosign.addEventListener("click",signup)

function myfun(){
    window.location.href="login.html"
}

function signup(){
    window.location.href="signup.html"
}