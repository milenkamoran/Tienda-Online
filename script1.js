$(document).ready(function(){

    mostrarDataJSON();
    
    
    })
    
    function mostrarDataJSON(){
         $.ajax({
            type: "GET",
            url: "dataindex.json",
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

      

        let boton = $("<button></button>");
        boton.append(prenda.Tipo);
        boton.addClass("botones")


        divcardprenda.append(boton);

        
        
        
        //let paginas = ['vestidos.html','blusas.html','short.html','pantalones.html']
            
        boton.click(function(){
                
                location.href=(prenda.Tipo.toLowerCase()+".html");
        
            })

           
        
       
        




        $("#contenedorFlexPrendas").append(divcardprenda);
     

    }