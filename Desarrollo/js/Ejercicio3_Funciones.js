function CalculaPerimetro(lado1, lado2)
{
    return 2 * (parseInt(lado1)+parseInt(lado2));
}

let lado1, lado2;
document.write("<section class='container'> <div class='card my-2'> <ul class='list-group list-group-flush'>");
do
{
    lado1 = prompt("Ingrese la medida del lado mayor: ");
}while(isNaN(parseInt(lado1)) || parseInt(lado1) < 1)
do
{
    lado2 = prompt("Ingrese la medida del lado menor: ");
}while(isNaN(parseInt(lado2)) || parseInt(lado2) < 1)

document.write("<li class='list-group-item'><p>El perimetro del rectangulo ingresado es de "+CalculaPerimetro(lado1,lado2)+"</p></li>");
document.write("</ul></div></section>");