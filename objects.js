let character = {
    name: "Tony Stark",
    heroName: "IronMan",
    alive: false,
    age:40,
    suts: ['Mark1','Mark XXV', 'HulkBuster'],
    address: {
        zip:28052,
        city:'Madrid'
    }
}


console.log(character.address,'IronMan addres');
console.log(character.address.city, 'IronMan city');

let character1 = {
    name: "Peter Parker",
    heroName: "Spiderman",
    alive: true
}
let tonyCopy = {...character,house:"tonyHouse"};
console.log(character, 'original Tony')
console.log(tonyCopy, 'TonyCopy')

let createAvengers = (...object ) => ({...object});
let avengers = createAvengers(character,character1);
console.log('******Avengers******* \t',avengers );

