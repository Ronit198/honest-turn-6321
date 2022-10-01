let change = document.querySelector("#movetosign")
change.addEventListener("click",myfun)

let home = document.querySelector("#home")
home.addEventListener("click",movetohome)

let template = document.querySelector("#template")
template.addEventListener("click",movetotemp)

let feature = document.querySelector("#feature")
feature.addEventListener("click",movetofeature)

let price = document.querySelector("#price")
price.addEventListener("click",movetoprice)

function myfun(){
    window.location.href="signup.html"
}

function movetohome(){
    window.location.href="navbar.html"
}

function movetotemp(){
    window.location.href="template.html"
}
function movetofeature(){
    window.location.href="features.html"
}

function movetoprice(){
    window.location.href="price.html"
}