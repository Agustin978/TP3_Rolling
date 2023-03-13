let ciudades = [];

while(true)
{
    ciudades.push(prompt("Ingrese una ciudad:"));
    if(confirm("Cancelar") == true)
    {
        break;
    }
}

document.write("<section class='container'> <div class='card'> <ul class='list-group list-group-flush'>");
document.write("<li class='list-group-item'><p>Usted ingreso un total de "+ciudades.length+" ciudades.</p></li>");
for(let i = 0; i < ciudades.length; i++)
{
    switch(i)
    {
        case 0:
            document.write("<li class='list-group-item'><p>La ciudad ingresada en la posicion "+(i+1)+" es "+ciudades[i]+"</p></li>");
            break;
        case 2:
            document.write("<li class='list-group-item'><p>La ciudad ingresada en la posicion "+(i+1)+" es "+ciudades[i]+"</p></li>");
            break;
        case ciudades.length-1:
            document.write("<li class='list-group-item'><p>La ciudad ingresada en la ultima posicion es "+ciudades[i]+"</p></li>");
            break;
    }
}
ciudades.push("Paris");
document.write("<li class='list-group-item'><p>La ciudad ingresada en la segunda posicion es "+ciudades[1]+"</p></li>");
ciudades[1] = "Barcelona";
document.write("<li class='list-group-item'><p>Ahora la ciudad que se encuentra en la segunda posicion es "+ciudades[1]+"</p></li>");
document.write("<li class='list-group-item'><p>Ahora la ciudad ingresada en la ultima posicion es "+ciudades[ciudades.length-1]+"</p></li>");
document.write("</ul></div></section>");