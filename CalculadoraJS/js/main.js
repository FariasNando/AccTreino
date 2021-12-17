onload = () => {
    document.querySelector('#btn0').onclick = () => insertNum(0);
    document.querySelector('#btn1').onclick = () => insertNum(1);
    document.querySelector('#btn2').onclick = () => insertNum(2);
    document.querySelector('#btn3').onclick = () => insertNum(3);
    document.querySelector('#btn4').onclick = () => insertNum(4);
    document.querySelector('#btn5').onclick = () => insertNum(5);
    document.querySelector('#btn6').onclick = () => insertNum(6);
    document.querySelector('#btn7').onclick = () => insertNum(7);
    document.querySelector('#btn8').onclick = () => insertNum(8);
    document.querySelector('#btn9').onclick = () => insertNum(9);
    document.querySelector('#btn-').onclick = () => insertOp('-');
    document.querySelector('#btnSoma').onclick = () => insertOp('+');
    document.querySelector('#btnMultiplica').onclick = () => insertOp('*');
    document.querySelector('#btnDivide').onclick = () => insertOp('/');
    document.querySelector('#btnDot').onclick = () => insertNum('.');
    document.querySelector('#btnC').onclick = () => reset();
    document.querySelector('#btnDel').onclick = () => backSpace();
    document.querySelector('#btnCalc').onclick = () => calcular();

};



function insertNum (n) {
   document.querySelector('#tela').innerHTML += n;    
};

function insertOp (op) {
    document.querySelector('#tela').innerHTML += op;    
 };

function reset() {
    document.querySelector('#tela').innerHTML = '';
};

function backSpace() {
    document.querySelector('#tela').innerHTML = document.querySelector('#tela').innerHTML.slice(0, -1);
};

function calcular() {
    
    let display = document.querySelector('#tela').innerHTML;
    let ultimo = display;
    ultimo = ultimo.charAt(ultimo.length -1);
    
    let result = display;

    if(result) {
        document.querySelector('#tela').innerHTML = eval(result);
    } else {
        document.querySelector('#tela').innerHTML = display;
    }
 
}

