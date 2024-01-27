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

        let prendasPantalones = prendas.filter(function(prenda){
            return prenda.Tipo === "pantalones";
        })
      
       

        for(let i=0;i<prendasPantalones.length;i++){
            
            crearPrendaHtml(prendasPantalones[i]);
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