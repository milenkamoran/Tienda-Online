$(document).ready(function(){

    mostrarDataJSON();
    
    
    })
    
    function mostrarDataJSON(){
         $.ajax({
            type: "GET",
            url: "dataverano.json",
            dataType: "json",
            async: true,
            success: function(prendas){
                mostrarDataHtml(prendas);
            }
         })
    }


    function mostrarDataHtml(prendas){
       
        for(let i=0;i<prendas.length;i++){
        
            crearPrendaHtml(prendas[i]);
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

        let tipo = $("<p></p>");
        tipo.addClass("parrafo");
        tipo.append("<b> Prenda: </b>" + prenda.Tipo + " ");

        divcardprenda.append(tipo);

        let colores = $("<p></p>");
        colores.addClass("parrafo");
        colores.append("<b> Colores: </b>" + prenda.Colores + " ");
         
        divcardprenda.append(colores);

        let tallas = $("<p></p>");
        tallas.addClass("parrafo");
        tallas.append("<b> Tallas: </b>" + prenda.Tallas + " ");

        divcardprenda.append(tallas);

        let precio = $("<p></p>");
        precio.addClass("parrafo");
        precio.append("<b> Precio: </b>" + prenda.Precio + " ")
       
        divcardprenda.append(precio)

        


           



        $("#contenedorFlexPrendas").append(divcardprenda);
     

    }