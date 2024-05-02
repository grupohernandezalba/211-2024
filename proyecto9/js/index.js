// continue

for(let x = 0; x < 5; x++){
    if(x==2)
      continue;
    console.log(x);
}


    let x = 10;
    x *= 5;
    console.log(x);
    
    x **= 2;
    console.log(x);


    // Date object:
    const fecha = new Date("2022-03-25");

    console.log(fecha);


    function myFunction(p1=3, p2=7) {
        return p1 * p2;
    }

    console.log(myFunction(5,10));
    console.log(myFunction());
    console.log(myFunction(8));

/*
    function otraFuncion(a, b) {
        return a * b;
    }

    */

    //Funciones anonimas
    let otraFuncion = (a, b) => a * b; 

    console.log(otraFuncion);
    console.log(otraFuncion(3,4));


    //Funciones autoejecutadas

    (function () {
        console.log('Estoy llamando una funcion sin nombre autoejecutada')
    })();


    ( ()=> {
        console.log('Estoy llamando una funcion flecha sin nombre autoejecutada')
    })();

    //variables tipo objeto en js
    const person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
          return this.firstName + " " + this.lastName;
        }
    };

    console.log(person.fullName());

    //Eventos





 
