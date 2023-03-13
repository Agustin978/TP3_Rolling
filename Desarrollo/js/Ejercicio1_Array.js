let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

document.write("<section class='container'> <div class='card'> <ul class='list-group list-group-flush'>");
for(let i = 0; i < meses.length; i++)
{
    document.write("<li class='list-group-item'>"+meses[i]+"</li>");
}
document.write("</ul></div></section>");