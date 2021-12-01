/*
Realizar un programa que pida cargar una fecha cualquiera, luego verificar si dicha fecha
corresponde a Navidad.
*/
let day = prompt('Introduce el día');
let mes = prompt('Introduce el mes');
let year = prompt('Introduce el año');

const itsChristmas = (dia,mes,year) => {

    (dia == 25 && mes == 12) ? 
    
    document.body.innerHTML = "<h3> It's Christmas </h3>"
    :
    document.body.innerHTML ='<h3> The Grinch has ruined christmas day </h3>';
};

itsChristmas(day,mes,year);

