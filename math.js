
const Math = {}; //creo un objeto


//defino los metodos

function add(x1, x2) {
    return x1 + x2;
}

function substract(x1, x2) {
    return x1 - x2;
}

function multiply(x1, x2) {
    return x1 * x2;
}

function divide(x1, x2) {
    
    if(x2==0)
    {
        console.log('No se puede divir por 0');
    } else{
        return x1/x2; 
    }
}

Math.add = add;
Math.substract = substract;
Math.divide = divide;
Math.multiply = multiply;

function hello(name) {
    console.log('Hola ', name);
}


//module.exports= Math;
module.exports= hello;

/* exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide; */

