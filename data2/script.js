$("#titulo").append("hola")

$(document).ready(function(){

mostrarDataJSON();




})

function mostrarDataJSON(){
     $.ajax({
        type: "GET",
        url: "data2.json",
        dataType: "json",
        async: true,
        success: function(prendas){
            mostrarDataHtml(prendas);
        }
     })
}

function mostrarDataHtml(prendas){
    let nombre = $("<h2></h2>");
    for(let i=0;i<prendas.length;i++){
        crearPrendaHtml(prendas[i]);
        //nombre.append(prendas[i].Prenda);
        //$("#divGrande").append(nombre);
    }
    
}

function crearPrendaHtml(){

    let divcardprenda = $(<div></div>)
}
