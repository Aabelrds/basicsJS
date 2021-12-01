let cambiar = document.getElementById('myButton');
        let activo = false;
        let change = () => {
            
            let h1 = document.getElementById('title');
            if(activo === false){
                activo = true;
            h1.style.color = "blue";
            h1.innerText = "CAMBIANDO EL TITLE DESDE JS"

            let paragraph = document.getElementById('paragraph');
            paragraph.innerText = "cambiando el texto desde js" 

            }else{

                h1.innerHTML = "Manejando el dom";
                paragraph.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel doloremque, asperiores, consectetur id iure perferendis hic repellat nam dolorem at, fugiat explicabo tempore? Commodi suscipit ad repudiandae veniam officiis?";
                activo = false;
            }

        }
        cambiar.onclick = change;

        let inputName = document.getElementById("nombre").value;
        let age = document.getElementById("edad").value;

        console.log(inputName);
        console.log(age);
