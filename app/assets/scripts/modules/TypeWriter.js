class TypeWriter {
    constructor(){
        this.i = 0;
        this.txt = 'js'
        this.speed = 100;
        this.demo = document.querySelector('.demo')
        this.typeWriter()
    }
    
    typeWriter() {
        if (this.i < this.txt.length) {
          this.result = this.demo.innerHTML += this.txt.charAt(this.i);
          this.i++;
          console.log('result :', this.result);
          setTimeout(()=> this.typeWriter(), this.speed);
          
        }
      }

}

export default TypeWriter

