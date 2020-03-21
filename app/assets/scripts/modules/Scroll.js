class Scroll {
    constructor(){
        this.header = document.querySelector('header');
        this.events()
    }

    events(){
        window.addEventListener('scroll', () => this.runOnScroll())
    }

    runOnScroll(){
        this.header.classList.toggle('site-header__sticky', window.scrollY > 710)
    }
 }

export default Scroll 