var barras;
var pastel;



$(document).ready(function(){

    mostrarGraficosJSON();
    
    
    })
    
    function mostrarGraficosJSON(){
        $.ajax({
            type: 'GET',
            url: 'data.json',
            dataType: "json",
            async: true,
            success: function(prendas){
               
                mostrarGraficos(prendas);
            }
        });
    }
    
    function mostrarGraficos(prendas){
        let prendaVestido = prendas.filter(prenda => prenda.Tipo == "vestido");
        let cantidadVestido = prendaVestido.length;
        
        let prendaPantalon = prendas.filter(prenda => prenda.Tipo == "pantalones");
        let cantidadPantalon = prendaPantalon.length;

        let prendaShort = prendas.filter(prenda => prenda.Tipo == "short");
        let cantidadShort = prendaShort.length;

        let prendaBlusa = prendas.filter(prenda => prenda.Tipo == "blusa");
        let cantidadBlusa = prendaBlusa.length;

        const etiquetas=["vestido","pantalones","short","blusa"];

        const tipos={
            label:"Cantidad de prenda",//leyenda
            data:[ cantidadVestido,cantidadPantalon,cantidadShort,cantidadBlusa],//datos
            backgroundColor:["#FF2D00","#0068FF","#00FF3A","#FFFB00"],
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


    