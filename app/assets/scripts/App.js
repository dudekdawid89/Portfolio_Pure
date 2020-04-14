
import '../styles/styles.css'
import TypeWriter from "./modules/TypeWriter"
import WelcomeScreen from "./modules/WelcomeScreen"
import NavigationToggle from "./modules/NavigationToggle"
import RevealOnScroll from "./modules/RevealOnScroll"
import ButtonAnimation from "./modules/ButtonAnimation"


document.querySelector('.ulliabout').addEventListener('click', ()=>{

    document.querySelector('.about__content').scrollIntoView({
        block: "center"
    });
})
// window.addEventListener('click', ()=>{

//     document.querySelector('#portfolio').scrollIntoView({
//         block: "start"
//     });
// })

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
new ButtonAnimation()
new RevealOnScroll()
new NavigationToggle()
new WelcomeScreen()
new TypeWriter()

if(module.hot){
    module.hot.accept()
}



