class SectionNavigate{
    constructor(){
        this.events()
    }

    events(){
        document.querySelector('#about-call').addEventListener('click', ()=>{

            document.querySelector('.navigate').scrollIntoView({
                block: "end"
            });
        })
    }
}

export default SectionNavigate  