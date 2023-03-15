let tiros = [];
let dado1, dado2;
let suma;

function filtraArreglo()
{
    let repetidos = {};

    tiros.forEach(function(numero)
    {
        repetidos[numero] = (repetidos[numero] || 0) + 1;
    });
    
    return repetidos;
}

document.write("<section class='container'> <div class='card my-2'> <ul class='list-group list-group-flush'>");
for(let i = 0; i < 50; i++)
{
    dado1 = Math.floor(Math.random()*(7-1)+1);
    dado2 = Math.floor(Math.random()*(7-1)+1);
    suma = dado1+dado2;
    tiros.push(suma);
}

let res = filtraArreglo();

for(let clave in res)
{
    document.write("<li class='list-group-item'><p>Valor de la suma: "+clave+" fue repetido "+res[clave]+" veces.</p></li>");
}

document.write("</ul></div></section>");