class NegotiationController{

    constructor(){
        const $ = document.querySelector.bind(document);
        this._negotiationDateInput = $("#data");
        this._negotiationQuantityInput = $("#quantidade");
        this._negotiationValueInput = $("#valor");
        this._negotiationsList = new NegotiationsList();

        this._negotiationView = new NegotiationView($('#negociacoesView'));
        this._negotiationView.update(this._negotiationsList);

        this._message = new Message();

        this._messageView = new MessageView($('#mensagemView'));  
        this._messageView.update(this._message);
    }

    addNegotiation(event){
        event.preventDefault();
        this._negotiationsList.add(this._createNegotiation());
        this._negotiationView.update(this._negotiationsList);

        this._message.text = 'Negociação efetuada com sucesso!';
        this._messageView.update(this._message);

        this._cleanForm();
    }   

    _createNegotiation(){
        return  new Negotiation(
            DateHelper.textToDate(this._negotiationDateInput.value),
            this._negotiationQuantityInput.value,
            this._negotiationValueInput.value
        );
    }
    
    _cleanForm(){
        this._negotiationDateInput.value = '';
        this._negotiationQuantityInput.value = 1;
        this._negotiationValueInput.value = 0.0;

        this._negotiationDateInput.focus();
    }
}