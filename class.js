

class Person {
    personName= "";
    surName= "";
    email = "";
    codigo= "";
    frase="";


    constructor(personName = "Alejandro",surName="Rodrigues", email="safsa@sfa.com"){
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

console.log(person2);

