function divisores(numero){
    let arreglo = [];

    for (let i = 1; i <= numero; i++) {
        if (i % 5 == 0){
            arreglo.push(i);

        }

    }

    return arreglo;

}
 console.log(divisores(29));