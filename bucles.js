let hero = ["Batman", "wonderwoman", "flash","arrow"];

for (let index = 0; index < hero.length; index++) {
    const element = hero[index];
    console.log(element, 'BUCLE FOR');
    
}

hero.forEach(element => {
    console.log(element, 'FOREACH');
});

for (const heros of hero) {
    console.log(heros, 'forOf')
}

let map = hero.map((element)=>element);

console.log(map)