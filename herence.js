class Person {
    personName= "";
    surName= "";
    email = "";
    codigo= "";
    frase="";


    constructor(personName ,surName, email){
    this.personName = personName,
    this.surName = surName,
    this.email = email
    }


    setCodigo(codigo){
        this.codigo = codigo;
    }
    setFrase(frase){
        this.frase = frase;
    }
    getCodigo(){
        return this.codigo;
    }
    getFrase(){
        return this.frase;
    }
}

let person2 = new Person("Tony","Stark","tstark@avengers.com");
person2.setCodigo("IronMan");
person2.setFrase("I'm the inteligent avenger");


class Heroe extends Person {

    grupo = "Sin grupo";

    constructor(personName,codigo,frase){
        super();
        this.personName = personName;
        this.codigo = codigo;
        this.frase = frase;
        this.grupo = "Avengers";
    }

}

const hulk = new Heroe('Banner','Hulk', 'Hulk Aplasta');
console.log(hulk);