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

    function txtChange(t) {
        const newT = t.split(" ").reverse().join(" ");
        return newT
    }

    function txtRepReverse(t) {
        const newT = t.repeat(2).split('').reverse();
        return newT
    }

    function txtChangeReverse(t) {
        const newT = t.split(" ").reverse().join(" ").split("").reverse().join("");
        return newT
    }

    function txtReveseDot(t) {
        let newT = t.split('').reverse().join('.').replace(' ', '');
        return newT
    }
    
    function txtLowUp(t) {
        let newT = '';
        for (let i = 0; i < t.length; i++) {
            if (i % 2 === 0) {
                newT += t.charAt(i).toLowerCase();
            } else {
                newT += t.charAt(i).toUpperCase();
            }
        }
        return newT;
    }
    
     
 // Array com os tipos de textos formatados
    const TextsArray = [
        txtNormal(props.text) + " " + DateSet(), 
        txtUpperCase(props.name) + " " + DateSet(), 
        txtLowerCase(props.name) + " " + DateSet(),   
        txtSpace(props.name) + " " + DateSet(),  
        txtReverse(props.name) + " " + DateSet(),
        txtChange(props.name) + " " + DateSet(),  
        txtRepReverse(props.name) + "  " + DateSet(),
        txtChangeReverse(props.name) + " " + DateSet(),  
        txtReveseDot(props.name) + " " + DateSet(),
        txtLowUp(props.name) + " " + DateSet()
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
