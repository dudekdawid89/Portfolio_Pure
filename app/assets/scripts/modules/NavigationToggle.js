class NavigationToggle{
    constructor(){
        this.header = document.querySelector('.site-header')
        this.click = document.querySelector('.site-header__toggle')
        this.ul = document.querySelector("ul")
        this.events()
    }

    events(){
        this.click.addEventListener('click', () => this.toggle())
        this.ul.addEventListener('click', () => this.toggle())
        window.addEventListener('scroll', () => {
            this.toggleBackround()
        })
    }

    toggle(){
        this.header.classList.toggle('active')
    }

    toggleBackround(){
        this.header.classList.toggle('site-header__dark-background', window.scrollY > 10)

    }
}

export default NavigationToggle