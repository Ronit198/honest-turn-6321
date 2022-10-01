let moveinlog = document.querySelector("#movetolog")
moveinlog.addEventListener("click",myfun)

let movetosign = document.querySelector("#movetosign")
movetosign.addEventListener("click",signup)

let temp = document.querySelector("#movetotemp")
temp.addEventListener("click",move)

let price = document.querySelector("#price")
price.addEventListener("click",movetoprice)

let home = document.querySelector("#home")
home.addEventListener("click",movetohome)
function myfun(){
    window.location.href="login.html"
}

function signup(){
    window.location.href="signup.html"
}
function move(){
    window.location.href="template.html"
}
function movetoprice(){
    window.location.href="price.html"
}

function movetohome(){
window.location.href="navbar.html"
}