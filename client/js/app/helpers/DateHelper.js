class DateHelper {

    constructor(){
        throw new Error('DateHelper não deve ser instanciada');
    }


    static textToDate(text){
        if(!/^\d{4}-\d{2}-\d{2}$/.test(text)) throw new Error('Data deve estar no padrão YYYY-MM-DD');

        return new Date(text.split('-'));
    }

    static dateToText(date){
        return `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`;
    }
}