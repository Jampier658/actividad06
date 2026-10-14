

function sumarArreglos(arreglo1, arreglo2){
    let arreglo = [];
    
    if(arreglo1.length == arreglo2.length){
        for (let i = 0; i < arreglo1.length; i++){
            arreglo.push(arreglo1[i] + arreglo2[i]);
        }
      }
      return arreglo;   

  }

  console.log(sumarArreglos([1,2,3],[4,5,6]));