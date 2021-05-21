class View{
    
    constructor(element) {
        this._element = element; // recebe o elemento do dom q irá receber o template
    }

    template(){
        throw new Error('O método template deve ser implementado na classe filha');
    }

    update(model){
        this._element.innerHTML = this.template(model);
    }
}