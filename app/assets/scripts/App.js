import '../styles/styles.css'
import Scroll from "./modules/Scroll"
import TypeWriter from "./modules/TypeWriter"

if(module.hot){
    module.hot.accept()
}

new TypeWriter()
new Scroll()



