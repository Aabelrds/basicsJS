const empleados = [
    {
        nombre:"Alejandro",
        sueldo: 20
    },
    {
        nombre: "Eusebio",
        sueldo:30
    },
    {
        nombre: "Maria",
        sueldo:15
    },
    {
        nombre: "Andreina",
        sueldo:10
    },
    {
        nombre: "Abel",
        sueldo:20
    }

]



let personaSueldoMax = () => {

    let sueldo = 0;
    
empleados.forEach(element=> {
       if(sueldo < element.sueldo){
        sueldo = element.sueldo;
        
       }

    });

    empleados.find(empleado => {
        if(empleado.sueldo === sueldo){
            console.log('persona con el mayor sueldo es: '+ empleado.nombre + ' ' + empleado.sueldo + ' euros');
        }
    });



}


personaSueldoMax();