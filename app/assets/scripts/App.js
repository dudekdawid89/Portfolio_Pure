import Welcome from "./modules/Welcome"
new Welcome()
import '../styles/styles.css'
import Scroll from "./modules/Scroll"
import TypeWriter from "./modules/TypeWriter"

function toggle(){
    var header = document.querySelector('.site-header')
    header.classList.toggle('active')
}

var click = document.querySelector('.site-header__toggle')
click.addEventListener('click', function(){
    toggle()
})

var ul = document.querySelector("ul")
ul.addEventListener('click', function(){
    toggle()
})
new TypeWriter()
new Scroll()


if(module.hot){
    module.hot.accept()
}



