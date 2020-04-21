class SectionNavigate{
    constructor(){
        this.events()
    }

    events(){
        
        document.querySelectorAll('#about-call').forEach(item =>{
            item.addEventListener('click', ()=>{
                this.scrollView(document.querySelector('#navigate-about'))
            })
        })

        document.querySelectorAll('#home-call').forEach(item => {
            item.addEventListener('click', ()=>{
                this.scrollView(document.querySelector('#navigate-home'))
            })
        })
        
        document.querySelector('#favorite-tech-call').addEventListener('click', ()=>{
            this.scrollView(document.querySelector('#navigate-technology'))
        })

        document.querySelector('#resume-call').addEventListener('click', ()=>{
            this.scrollView(document.querySelector('#navigate-resume'))
        })

        document.querySelector('#portfolio-call').addEventListener('click', ()=>{
            this.scrollView(document.querySelector('#navigate-portfolio'))
        })

        document.querySelector('#contact-call').addEventListener('click', ()=>{
            this.scrollView(document.querySelector('#navigate-contact'))
        })
    }

    scrollView(selector){
        selector.scrollIntoView({
            block: "start"
        });
    }
}

export default SectionNavigate  