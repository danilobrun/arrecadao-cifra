// GERÊNCIA

GNMCENTRO = 151743.1;
GNMCENTROSUL = 202704.45;
GNMLESTE = 209427.82;
GNMNORTE = 320147.71;
GNMOESTE = 205322.01;
GNMSUL = 112836.49;
GNRAGRESTECENTRAL = 213926.08;
GNRAGRESTEMERIDIONAL = 115017.4;
GNRALTOCAPIBARIBE = 72510.7;
GNRALTODOPAJEU = 68198.94;
GNRIPOJUCA = 83710.23;
GNRMATANORTE = 165965.74;
GNRMATASUL = 122905.61;
GNRMOXOTO = 84469.08;
GNRPAJEU = 156650.55;
GNRRUSSAS = 224381.36;
GNRSAOFRANCISCO = 273717.33;
GNRSERTAO = 216365.4;
TOTAL = 3000000.0;
DRM = 1202181.58;
DRI = 1797818.42;

let g = "TOTA";
n = TOTA;

function arrecada(g, n) {
  result = n / 3;
  result2 = result * 2;
  return console.log(`gerencia: ${g} 
    result ${result.toFixed(2)} 
    result2 ${result2.toFixed(2)}
    total ${n}`);
}

arrecada(g, n);

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, index, array) => {
//     console.log(array);
// });
