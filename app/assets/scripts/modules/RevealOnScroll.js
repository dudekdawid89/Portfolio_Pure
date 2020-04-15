import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class RevealOnScroll {
    constructor(){
        this.itemToReveal = document.querySelectorAll('.reveal')
        this.browserHeight = window.innerHeight
        this.hideInitially()
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
        this.events()
    }

    events(){
        window.addEventListener('scroll', this.scrollThrottle)
        window.addEventListener('resize', debounce(() =>{
            this.browserHeight = window.innerHeight
        }, 300))
    }

    calcCaller(){
        this.itemToReveal.forEach(el => {
            console.log('el :', el);
            if(el.isRevealed == false){
                this.calculateIfScrolledTo(el)
            }
        })
    }

    calculateIfScrolledTo(el){
        if(window.scrollY + this.browserHeight > el.offsetTop){
            console.log('calculated');
            let scrollPrecent = (el.getBoundingClientRect().top / this.browserHeight) * 100
            if(scrollPrecent < 95){
                el.classList.add('reveal-item--is-visible')
                el.isRevealed = true
                if(el.isLastItem){
                    window.removeEventListener('scroll', this.scrollThrottle)
                }
            }
        }
    }

    hideInitially(){
        this.itemToReveal.forEach(el => {
            el.classList.add('reveal-item')
            el.isRevealed = false
        })

        this.itemToReveal[this.itemToReveal.length - 1].isLastItem = true
    }
}

export default RevealOnScroll