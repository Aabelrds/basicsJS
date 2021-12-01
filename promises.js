const promise = new Promise((resolve, reject)=> {

    setTimeout(()=>{

        const exito = true;

        if(exito) {
            resolve();
        }else{
            reject();
        }
    },4000);
})

promise.then(()=>{
    console.log("exito");
})

promise.catch(()=>{
    console.log('Error, no sabes ni lo que haces!')
})