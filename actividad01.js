//Crear una funcion autoejecutable que solicite un numero (expresado en segundos)
// devuelva un saludo despues del tiempo indicado (setimeout)

(function(){
    const readline = require("readline");

    const entrada = readline.createInterface({
        input: process.stdin,
        output: process.stdout

    });
    entrada.question("Ingrese los segundos:", function(respuesta){
        let segundos = Number(respuesta);

        setTimeout(()=>{
            console.log("Hola Bienvenido");
            entrada.close();
            
        }, segundos * 1000);
    })
})();