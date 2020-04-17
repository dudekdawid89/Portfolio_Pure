
import '../styles/styles.css'
import TypeWriter from "./modules/TypeWriter"
import WelcomeScreen from "./modules/WelcomeScreen"
import NavigationToggle from "./modules/NavigationToggle"
import RevealOnScroll from "./modules/RevealOnScroll"
import ButtonAnimation from "./modules/ButtonAnimation"
import SectionNavigate from "./modules/SectionNavigate"

// let navigation 

// let hamburger = document.querySelector('.site-header__toggle')
// hamburger.addEventListener('click', () =>{
//     if(typeof navigation == "undefined"){
//         import(/* webpackChunkName: "navigation"*/'./modules/NavigationToggle').then( x => {
//             navigation = new x.default()
//             navigation.toggle()
//         }).catch(() =>{
//             console.log("There was a problem");
//         })
//     }else{
//         navigation.toggle()
//     }
// })
new RevealOnScroll()
new SectionNavigate()
new ButtonAnimation()
new RevealOnScroll()
new NavigationToggle()
new WelcomeScreen()

if(module.hot){
    module.hot.accept()
}



