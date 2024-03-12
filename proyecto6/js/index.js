
    let meses = ["enero", "febrero", "lunes", "martes"];
    console.log(meses);

    let dias = meses.splice(2);
    console.log('Días: ' + dias);
    console.log('Meses: ' + meses);


    let nombres = ['Hugo', 'Paco', 'Luis', 'Donald'];
    let menores = nombres.splice(0,3);
    console.log('Menores: ' + menores);
    console.log('Nombres: ' +nombres);

    /* Cómo eliminar y añadir elementos de un arreglo */ 
    let meses2 = ["enero", "febrero", "lunes", "martes"];
    let dias2 = meses2.splice(2, 2, "marzo", "abril");

    console.log(dias2);  
    console.log(meses2);  

    /* Añadir elementos sin eliminar ninguno */
    let meses3 = ["enero", "febrero", "lunes", "martes"];
    meses3.splice(2, 0, "marzo");
    console.log(meses3); 

