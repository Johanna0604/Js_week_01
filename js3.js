//definir nuevos atributos a los ele,ntos de una pagina web
        //acceder etiqueta, identificador o clase
        var obj1 = document.getElementById("titulo");
        obj1.style.color = "purple";
        obj1.style.textAlign = "center";
        obj1.style.fontSize="30pt";


        var obj2 = document.getElementById("subtitulo");
        obj2.style.color = "pink";
        obj2.style.fontStyle = "italic";
        obj2.style.fontSize = "20pt";

        //definir funciones para cambiar los atributos de los parrafos

        boton1.onclick=function(){
            par1.style.color = "brown";
            par1.style.fontSize = "28pt";
            
        }

        boton2.onclick=function(){
            par2.style.color="magenta";
            par2.style.fontFamily="impact";
            par2.style.fontSize="20pt";
            par2.style.textAlign="justify";
        }

        boton3.onclick = function(){
            par1.style="";
            par2.style="";
        }


        //manipular el color de fondo de la pagina web

        function fondo1(){
            document.body.style.backgroundColor="beige";

        }

        boton4.onclick = fondo1;

        function fondo2(){
            document.body.style.backgroundColor = "aqua";

        }
        boton5.onclick=fondo2;