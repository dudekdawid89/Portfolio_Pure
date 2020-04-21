class Scroll {
    constructor(){
        this.navigationBar = document.querySelector('.site-header');
        this.events()
    }
    
    events(){
        window.addEventListener('scroll', () => this.runOnScroll())
    }

    runOnScroll(){
        this.navigationBar.classList.toggle('site-header__dark-background', window.scrollY > 10)
    }
 }

export default Scroll 