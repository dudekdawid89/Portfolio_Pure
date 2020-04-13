class RevealOnScroll {
    constructor(){
        this.itemsToReveal = document.querySelectorAll('.flip-card')
        this.hideInitially()
        this.events()
    }

    events(){
        window.addEventListener('scroll', () => {
            this.itemsToReveal.forEach(el => {
                this.calculateIfScrolledTo(el)
            })
        })
    }

    calculateIfScrolledTo(el){
        let scrollPrecent = (el.getBoundingClientRect().y / window.innerHeight) * 100
        if(scrollPrecent < 85){
            el.classList.add('reveal-item--is-visible')
        }
    }

    hideInitially(){
        this.itemsToReveal.forEach( el => el.classList.add('reveal-item'))
    }
}

export default RevealOnScroll