
// GERÊNCIA

CENTRO=147609.98
CENTROSUL=210766.32
LESTE=215333.90
NORTE=314056.68
OESTE=210647.15
SUL=143011.36
AGRESTECENTRAL=249249.81
AGRESTEMERIDIONAL=119654.11
ALTOCAPIBARIBE=65346.32
ALTODOPAJEU=65346.32
IPOJUCA=97115.45
MATANORTE=218254.46
MATASUL=123123.86
MOXOTO=97293.55
PAJEU=145242.69
RUSSAS=191022.79
SAOFRANCISCO=327727.14
SERTAO=231548.89

TOTAL=3000000.00



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