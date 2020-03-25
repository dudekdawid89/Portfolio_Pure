import Welcome from "./modules/Welcome"
new Welcome()
import '../styles/styles.css'
import Scroll from "./modules/Scroll"
import TypeWriter from "./modules/TypeWriter"



new TypeWriter()
new Scroll()


if(module.hot){
    module.hot.accept()
}



