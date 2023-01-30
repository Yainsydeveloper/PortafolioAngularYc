   // reloj

   (function(){

    let actualizarhora= function(){
        let fecha = new Date(),
          horas = fecha.getHours(),
          ampm,
          minutos = fecha.getMinutes(),
          segundos = fecha.getSeconds(),
          diasemana = fecha.getDay(),
          dia = fecha.getDate(),
          mes = fecha.getMonth(),
           year = fecha.getFullYear();
 
     let  phoras = document.getElementById("horas"),
          pAmpm = document.getElementById("ampm"),
          pMinutos = document.getElementById("minutos"),
          pSegundos = document.getElementById("segundos"),
          pdiasemana = document.getElementById("diasemana"),
          pDia = document.getElementById("dia"),
          pMes = document.getElementById("mes"),
          pYear = document.getElementById("year"); 
          
     let semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
     pdiasemana.textContent =semana [diasemana];
 
     pDia.textContent = dia;
 
     let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Novienbre","Dicienmbre"];
     pMes.textContent = meses [mes];
 
     pYear.textContent = year;
 
     if (horas >= 12){
         horas = horas - 12;
         ampm = "PM";
     } else {
         ampm = "AM";
     }
     if (horas == 0){
        horas = 12;
     }
 
     phoras.textContent = horas;
     pAmpm.textContent = ampm;
 
     if (minutos < 10){minutos = "0"+ minutos};
     if (segundos< 10){segundos = "0" + segundos};
 
     pMinutos.textContent = minutos;
     pSegundos.textContent = segundos;
 
 
 
 
 
 };
 
 
 
 
 actualizarhora();
 
 let intervalo = setInterval(actualizarhora, 1000);
 
 }())                    