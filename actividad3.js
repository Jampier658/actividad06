//Crear una función autoejecutable, que imprima cuántas horas, minutos y segundos faltan para terminar el día.


(function(){
  let fecha = new Date();

  let horas = 23 - fecha.getHours();
  let minutos = 59 - fecha.getMinutes();
  let segundos = 59 - fecha.getSeconds();
  console.log(" Faltan " + horas + " horas, " + minutos + " minutos y " + segundos + " segundos para terminar el dia ");
})();


