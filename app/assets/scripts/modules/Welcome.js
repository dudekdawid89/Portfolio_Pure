class Welcome {
    constructor(){
        this.newWelcome = document.querySelector('.newWelcome');
        this.events()
            }

            events(){
                if(document.readyState == 'loading'){
                document.addEventListener('DOMContentLoaded', e =>{
                    setTimeout(()=>{
                        this.newWelcome.classList.add('hidden')
                    }, 2000);
                })
            }
        }
        }

export default Welcome