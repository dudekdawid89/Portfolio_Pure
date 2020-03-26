
import '../styles/styles.css'
import Scroll from "./modules/Scroll"
import TypeWriter from "./modules/TypeWriter"
import WelcomeScreen from "./modules/WelcomeScreen"
import NavigationToggle from "./modules/NavigationToggle"

let siteHeader = document.querySelector('.landing-page')
window.addEventListener('scroll', function(){
    let value = 1 + window.scrollY/-600

})

new NavigationToggle()
new WelcomeScreen()
new TypeWriter()
new Scroll()


if(module.hot){
    module.hot.accept()
}



