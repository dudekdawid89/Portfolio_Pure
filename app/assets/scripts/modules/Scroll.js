class Scroll {
    constructor(){
        this.navigationBar = document.querySelector('.site-header');
        this.events()
        alert('wow')
    }
    
    events(){
        window.addEventListener('scroll', () => this.runOnScroll())
        alert('wow')
    }

    runOnScroll(){
        this.navigationBar.classList.toggle('site-header__dark-background', window.scrollY > 10)
    }
 }

export default Scroll 