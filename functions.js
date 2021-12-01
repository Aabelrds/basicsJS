function sayHello() {
    console.log('hello world');
}

const sayHello2 = function(){
    console.log('Other say hello');
}

const sayArrow = () => {
    //console.log('say hello with arrow function')
    let hello = 'hello'
}

sayHello();

sayHello2();

sayArrow();

const suma = (a,c) => {
    return a + c;
}

console.log('suma = ',suma(2,3));