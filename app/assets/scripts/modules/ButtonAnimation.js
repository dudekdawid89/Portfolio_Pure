class ButtonAnimation{
    constructor(){
        this.buttonToAnimate = document.querySelector('.landing-page__button-container')
        this.hideInitially()
        this.events()
    }

    events(){
        document.addEventListener('DOMContentLoaded', () =>{            
            setTimeout(()=>{
                this.buttonToAnimate.classList.add('button-animation--is-visible')
            }, 2500);
        })
    }

    hideInitially(){
        this.buttonToAnimate.classList.add('button-animation')
    }
}

export default ButtonAnimation 