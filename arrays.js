let days = ['lunes', 'martes', 'miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo',2,{nombre:"alejandro"}];

let a = 10,b=20, c= "hola", d= "dios",x=a+b;

console.log(a);
//{} nos muestra el nombre de la variable
console.log({a});

// mensaje de error
console.error(b);
// mensaje de alerta
console.warn(c)

// vista de tabla con las variables y valores
console.table({a,b,c,x});

console.table(days[days.length-1]);

let games = ["Metroid", "zelda","Mario","tetris" ];

games.forEach((index,game,arr)=>{
    console.table({game,index});
});

console.log(games, 'todos los juegos');

let newGame = "Contra";

games.push(newGame);

console.log(games, "agregando un elemento al final .push()");

games.unshift("MarioCart");

console.log(games,"Agregando un elemento al inicio .unshift()");

games.shift()

console.log(games, "eliminando el primer elemento .shift()");

games.pop();

console.log(games, "eliminando el ultimo elemento .pop()");

games.splice(1,1);

console.log(games, 
    "Borrando un elemento 1 indica el número de elementos a eliminar y el segundo parametro indica el index del elemento a eliminar");
    