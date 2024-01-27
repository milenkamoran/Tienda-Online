var barras;
var pastel;

$(document).ready(function(){


mostrarTodosJSON();


$("#botonMostrarTodos").click(function(e){
    e.preventDefault();
    mostrarTodosJSON();
});

$("#botonLimpiar").click(function(e){
    e.preventDefault();
    limpiar();
})

$("#botonBuscar").click(function(e){
    e.preventDefault();
    var nombrePokemon = $("#campoBuscar").val().toLowerCase(); //nombrePokemon guardamos el nombre del pokemon en minuscula
    if (nombrePokemon) {
        
      buscarPokemonJSON(nombrePokemon);
    }
    
})

$("#botonOrdenarAlfa").click(function(e){
    e.preventDefault();

    ordenarAlfaJSON();
})

$("#botonVerEstadisticas").click(function(e){
    e.preventDefault();

    mostrarGraficosJSON();
})



})

function limpiar(){ //JQUERY
    $("#pictures-container").empty();
    $("#campoBuscar").val("");
    
    
    if(barras){
        barras.destroy();
    }
    if(pastel){
        pastel.destroy();
    }
    
}

function buscarPokemonJSON(nombrePokemon){
    $.ajax({
        type: 'GET',
        url: 'data/data.json',
        dataType: "json",
        async: true,
        success: function(data){
           
            buscarPokemon(data,nombrePokemon);
        }
    });
}

function buscarPokemon(data,nombrePokemon){
    
    //console.log(nombrePokemon)
    limpiar();

    var pokemonEncontrado = data.pokemones.find(pokemon => pokemon.nombre == nombrePokemon);
    if(pokemonEncontrado){
        crearCard(pokemonEncontrado);
    }
    else{
        alert("No encontrado");
    }
    
}

function mostrarTodosJSON(){
    $.ajax({
        type: 'GET',
        url: 'data/data.json',
        dataType: "json",
        async: true,
        success: function(data){
           
            mostrarTodos(data);
        }
    });
}

function mostrarTodos(data){
    limpiar();
    //console.log(divContainer.val());
    for(let i=0; i<data.pokemones.length; i++){
        crearCard(data.pokemones[i]);

    }
    
}

function ordenarAlfaJSON(){
    
    $.ajax({
        type: 'GET',
        url: 'data/data.json',
        dataType: "json",
        async: true,
        success: function(data){
           
            ordenarAlfa(data);
        }
    });
}

function ordenarAlfa(data){
    data.pokemones.sort(function(pokemonA,pokemonB){
        pokemonA.nombre = pokemonA.nombre.toLowerCase();
        pokemonB.nombre = pokemonB.nombre.toLowerCase();

        return pokemonA.nombre.localeCompare(pokemonB.nombre)})

    console.log(data)
    mostrarTodos(data);
}

function crearCard(pokemon){
    
    let divCard = $("<div></div>");
    divCard.addClass("card");
    let nombre = $("<h3></h3>");
    nombre.append(pokemon.num+" "+pokemon.nombre);
    nombre.addClass("nombre");
    divCard.append(nombre);

    let img = $("<img></img>");
    img.attr("src",pokemon.img);
    img.addClass("card-img");

    divCard.append(img);

    let info = $('<p></p>');
    info.append(pokemon.info);
    info.addClass("info");

    divCard.append(info);

    
    $("#pictures-container").append(divCard);

}

function mostrarGraficosJSON(){
    $.ajax({
        type: 'GET',
        url: 'data/data.json',
        dataType: "json",
        async: true,
        success: function(data){
           
            mostrarGraficos(data);
        }
    });
}

function mostrarGraficos(data){
    limpiar();

    let pokemonesFuego = data.pokemones.filter(pokemon => pokemon.tipo == "fuego");
    let cantidadFuego = pokemonesFuego.length;
    
    let pokemonesAgua = data.pokemones.filter(pokemon => pokemon.tipo == "agua");
    let cantidadAgua = pokemonesAgua.length;

    let pokemonesPlanta = data.pokemones.filter(pokemon => pokemon.tipo == "planta");
    let cantidadPlanta = pokemonesPlanta.length;

    let pokemonesElectrico = data.pokemones.filter(pokemon => pokemon.tipo == "electrico");
    let cantidadElectrico = pokemonesElectrico.length;

    let pokemonesVolador = data.pokemones.filter(pokemon => pokemon.tipo == "volador");
    let cantidadVolador = pokemonesVolador.length;

    let pokemonesFantasma = data.pokemones.filter(pokemon => pokemon.tipo == "fantasma");
    let cantidadFantasma = pokemonesFantasma.length;

    
    
     //ESTADISTICA
//Definimos datos

const etiquetas=["Fuego","Agua","Planta","Electrico","Volador","Fantasma"];

const tipos={
    label:"Cantidad de pokemon",//leyenda
    data:[ cantidadFuego,cantidadAgua,cantidadPlanta,cantidadElectrico,cantidadVolador,cantidadFantasma],//datos
    backgroundColor:["#FF2D00","#0068FF","#00FF3A","#FFFB00","#DEDEDE","#B764BB"],
    borderColor:'#33398a',
    borderWidth:4,//ancho de linea
    
};

const graficoBarras=$("#graficoBarras");

if(barras){
    barras.destroy();
}

barras = new Chart(graficoBarras,{
    type:'bar',
    data:{
        labels:etiquetas,
        datasets:[tipos]
        }
  
    });

const graficoPastel = $("#graficoPastel");

if(pastel){
    pastel.destroy();
}
pastel = new Chart(graficoPastel,{
    type: 'pie',
    data:{
        labels: etiquetas,
        datasets:[tipos]
    }
})

    
}

