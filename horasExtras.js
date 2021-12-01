/*
Determinar la cantidad de dinero que recibirá un trabajador por concepto de las horas extras
trabajadas en una empresa, sabiendo que cuando las horas de trabajo exceden de 40, el
resto se consideran horas extras y que éstas se pagan al doble de una hora normal cuando
no exceden de 8; si las horas extras exceden de 8 se pagan las primeras 8 al doble de lo que
se paga por una hora normal y el resto al triple.
*/

const horasExtras = (horas) => {

    let money2 = 0;
    let money3 = 0;
    const money_hora = 50;

    if( horas > 40 ){
        let horasLess = horas - 40;
        
        if( horasLess <= 8 ){

            money2 = horasLess * ( money_hora * 2 );
        }
        
        if( horasLess > 8 ){

            money3 = ( horasLess - 8 ) * ( money_hora * 3 );
            money2 = 8 * ( money_hora * 2 );
        }


    }
    
    return console.log( money2 + money3 );

}

horasExtras(50);