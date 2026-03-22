 
    //mensajes por cada dia de la semana 
 var a = new Date(); // obtener fecha y hora del sistema 
        var dia = a.getDay();//devuelve el numero del dia de la semana; 1: lunes, 2: martes...
        //getDate() devuelve numero del dia, ejemplo 21
        switch(dia){
            case 1: document.write("<center>Mensaje del lunes"); break;
            case 2: document.write("<center>Mensaje del martes"); break;
            case 3: document.write("<center>Mensaje del miercoles"); break;
            case 4: document.write("<center>Mensaje del jueves"); break;
            case 5: document.write("<center>Mensaje del viernes"); break;
            case 6: document.write("<center>Mensaje del sabado"); break;
            case 7: document.write("<center>Mensaje del domingo"); break;
        }