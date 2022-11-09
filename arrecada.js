
// GERÊNCIA

SFRANCISCO = 304080.82

AGCENTRAL  = 235366.73

SERTAO = 234864.71

MATANORTE = 224843.08

RUSSAS = 208109.37

PAJEU = 148879.85

AGRESTEMERIDIONAL = 134390.82

MATASUL = 121425.50

IPOJUCA = 104010.12

MOXOTO = 82516.75

CAPIBARIBE = 73459.30

ALTOPAJEU = 71594.99

CENTROSUL	 = 201042.16
LESTE	 = 175886.99
OESTE	 = 162628.77
NORTE	 = 155967.81
CENTRONORTE	 = 142206.78
CENTRO	 = 109864.55
SUL	 = 108860.91

let g = "SUL" 
n = SUL


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