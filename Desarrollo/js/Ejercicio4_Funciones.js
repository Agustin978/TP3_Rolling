function multiplicar(num,mult)
{
    return parseInt(num) * parseInt(mult);
}

let numero;
document.write("<section class='container'> <div class='card my-2'> <ul class='list-group list-group-flush'>");
do
{
    numero = prompt("Ingrese el numero a multiplicar: ");
}while(isNaN(parseInt(numero)) || parseInt(numero) < 1)

for(let i = 0; i<10; i++)
{
    document.write("<li class='list-group-item'><p> "+numero+" x "+(i+1)+" = "+multiplicar(numero,(i+1))+"</p></li>");
}
document.write("</ul></div></section>");