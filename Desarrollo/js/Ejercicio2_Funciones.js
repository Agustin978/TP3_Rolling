function infoFrase(texto)
{
    let contMay = 0;
    let contMin = texto.length;
    let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i = 0; mayusculas.length; i++)
    {
        for(let j = 0; j < texto.length; j++)
        {
            if(texto[j] == mayusculas[i])
            {
                contMay++;
                contMin--;
            }
        }
    }


    if(contMay != 0 && contMin == 0)
    {
        return "esta conformada por mayusculas.";
    }else if(contMay == 0 && contMin != 0)
    {
        return "esta conformada por minusculas.";
    }else
    {
        return "esta conformada por un total de "+contMay+" letras en mayuscula y "+contMin+" letras minusculas."
    }
}

let texto;
document.write("<section class='container'> <div class='card my-2'> <ul class='list-group list-group-flush'>");
do
{
    texto = prompt("Ingrese una palabra o frase: ");
}while(!isNaN(texto) || texto.length < 2)
document.write("<li class='list-group-item'><p>La frase ingresada '"+texto+"' "+infoFrase(texto)+"</p></li>");
document.write("</ul></div></section>");