let temp = document.querySelector("#movetotemp")
temp.addEventListener("click",myfun)

let feature = document.querySelector("#movetofeature")
feature.addEventListener("click",fun)

let price = document.querySelector("#price")
price.addEventListener("click",movetoprice)

let moveinlog = document.querySelector("#movetolog")
moveinlog.addEventListener("click",movetolog)

let movetosign = document.querySelector("#movetosign")
movetosign.addEventListener("click",signup)

let home = document.querySelector("#home")
home.addEventListener("click",gotohome)


function myfun(){
    window.location.href="template.html"
}

function fun(){
    window.location.href="features.html"
}
function movetoprice(){
    window.location.href="price.html"
}

function movetolog(){
    window.location.href="login.html"
}
function signup(){
    window.location.href="signup.html"
}

function gotohome(){
    window.location.href="navbar.html"
}