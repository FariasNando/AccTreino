import React from 'react';

const inicialTxt = "Hello World!"
//Função com a data
function DateSet() {
    const date = new Date();
    const dia = date.getDate();
    const mes = date.getMonth() + 1;
    const ano = date.getFullYear();    
    const fullDate = dia + '/' + mes + '/' + ano;
    return fullDate;
}
//Função com os tipos de textos
function ListaTexto(props) {
   
    function txtNormal(t) {
        t = inicialTxt
        return t;
    }    

    function txtUpperCase(t) {
        const newT = t.toUpperCase();
        return newT
    }

    function txtLowerCase(t) {
        const newT = t.toLowerCase();
        return newT
    }
    function txtSpace(t) {
        const newT = t.split("").join("  ");
        return newT
    }
    function txtReverse(t) {
        const newT = t.split('').reverse().join('');
        return newT
    }
    
     
 // Array com os tipos de textos formatados
    const TextsArray = [
        txtNormal(props.text) + " " + DateSet(), 
        txtUpperCase(props.name) + " " + DateSet(), 
        txtLowerCase(props.name) + " " + DateSet(),   
        txtSpace(props.name) + " " + DateSet(),  
        txtReverse(props.name) + " " + DateSet(), 
    ]
   
    const itens = TextsArray.map((data, index) => <p key={index}>{data}</p>)
    
    return (
        <dir className="texts">
            <h1>Formas dos textos: </h1>
            {itens}
        </dir>
    )
}

export default ListaTexto
