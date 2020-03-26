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
    }

    toggle(){
        this.header.classList.toggle('active')
    }
}

export default NavigationToggle