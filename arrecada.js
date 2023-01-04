
// GERÊNCIA

SFRANCISCO = 290352.74

AGCENTRAL  = 240894.72

MATANORTE = 232587.10

SERTAO = 232206.42

RUSSAS = 202634.83

PAJEU = 142910.28

AGRESTEMERIDIONAL = 130113.89

MATASUL = 121563.73

IPOJUCA = 105534.11

MOXOTO = 88658.16

ALTOPAJEU = 67929.37

CAPIBARIBE = 67693.58

CENTROSUL	 = 218533.32
LESTE	 = 191583.54
OESTE	 = 161266.18
NORTE	 = 159322.63
CENTRONORTE	 = 134209.73
SUL	 = 108051.52
CENTRO	 = 103954.14


let g = "CENTRO" 
n = CENTRO


function arrecada (g, n) {

    result = n / 3;
    result2 = result * 2
    return console.log(`gerencia: ${g} 
    result ${result.toFixed(2)} 
    result2 ${result2.toFixed(2)}
    total ${n}`);
        
}

arrecada(g, n)

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, index, array) => {
//     console.log(array);
// });