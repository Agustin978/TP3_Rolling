function ParImpar(numero)
{
    if(numero%2==0)
    {
        return "es par";
    }else
    {
        return "es impar";
    }
}

document.write("<section class='container'> <div class='card my-2'> <ul class='list-group list-group-flush'>");
do
{
    numero = prompt("Ingrese un numero:");
}while(isNaN(parseInt(numero)))

document.write("<li class='list-group-item'><p>El numero ingresado "+numero+" "+ParImpar(numero)+"</p></li>");
document.write("</ul></div></section>");