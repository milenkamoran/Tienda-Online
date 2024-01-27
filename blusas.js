$(document).ready(function(){

    mostrarDataJSON();
    
    
    })
    
    function mostrarDataJSON(){
         $.ajax({
            type: "GET",
            url: "data.json",
            dataType: "json",
            async: true,
            success: function(prendas){
                mostrarDataHtml(prendas);
            }
         })
    }







    function mostrarDataHtml(prendas){

        let prendasBlusa = prendas.filter(function(prenda){
            return prenda.Tipo === "blusa";
        })
      
       

        for(let i=0;i<prendasBlusa.length;i++){
            
            crearPrendaHtml(prendasBlusa[i]);
            //nombre.append(prendas[i].Prenda);
            //$("#divGrande").append(nombre);
        }
        
    }
    
    
    function crearPrendaHtml(prenda){
    
        
        

        let divcardprenda = $("<div></div>");
        divcardprenda.addClass("card");




        let imgprenda = $("<img></img>");
        imgprenda.attr("src",prenda.Imagen)
        imgprenda.addClass("img");

        divcardprenda.append(imgprenda);

        let tipo = $("<p></p>")
        tipo.addClass("parrafo")
        tipo.append("<b> Prenda: </b>" + prenda.Tipo + " ");

        divcardprenda.append(tipo)




        $("#contenedorFlexPrendas").append(divcardprenda);
}