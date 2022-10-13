//vamos a definir nuestro abc

const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//aqui va a estar la llave

let llave = "";

$(document).ready(function(){
    $('#ci').click(function(){
        //vamos a cifrar utilizando una funcion y = (x+z)mod27

        //vamos a traer los datos de los campos de texto
        key = document.getElementById('llave').value;
        //validemos la llave
        key = key.replace(/ /g, '');

        //obtenemos el mensaje
        let mess = document.getElementById('mess').value;
        //vamos a verificar los datos del mensaje
        mess = mess.replace(/ /g, '');

        let newMess = "";

        let keyComplete = "";

        //algoritmo de viggenere

        if(revision(mess, key)){

            //for para recorrer el tamaño del mensaje
            for(var i = 0; i < mess.length; i++){
                //vamos aplicar la parte de la llave al mensaje
                keyComplete += key.charAt((i%Number(key.length)));
            }
            alert("LLave : " + keyComplete);

            //vamos a obtener la posicion letra por letra del mensaje
            for(var i = 0; i < mess.length; i++){
                let charr = mess.charAt(i);
                let posm = getPosition(charr);

                charr = keyComplete.charAt(i);
                let posk = getPosition(charr);

                //vamos a ejecutar el algoritmo
                let newVal = change(posm, posk);

                //aqui obtenemos el mensaje cifrado
                newMess += abc[newVal];
            }
            //imprimir resultado
            document.getElementById('pantalla').innerHTML = "Cifrado: " + newMess;
        }else{
            //aqui si no se cumplen las condiciones
            alert("Chillo T_T");
        }

    });
    //decifrar
    $('#de').click(function(){
        //se aplica lo mismo pero alreves volteado
        //vamos a traer los datos de los campos de texto
        key = document.getElementById('llave').value;
        //validemos la llave
        key = key.replace(/ /g, '');

         //obtenemos el mensaje
         let mess = document.getElementById('mess').value;
         //vamos a verificar los datos del mensaje
         mess = mess.replace(/ /g, '');

         let newMess = "";

        let keyComplete = "";

        //algoritmo de viggenere decifrado
        if(revision(mess, key)){

            //for para recorrer el tamaño del mensaje
            for(var i = 0; i < mess.length; i++){
                //vamos aplicar la parte de la llave al mensaje
                keyComplete += key.charAt((i%Number(key.length)));
            }
            alert("LLave : " + keyComplete);

            //vamos a obtener la posicion letra por letra del mensaje
            for(var i = 0; i < mess.length; i++){
                let charr = mess.charAt(i);
                let posm = getPosition(charr);

                charr = keyComplete.charAt(i);
                let posk = getPosition(charr);

                //vamos a ejecutar el algoritmo
                let newVal = rechange(posm, posk);

                //aqui obtenemos el mensaje cifrado
                newMess += abc[newVal];
            }
            //imprimir resultado
            document.getElementById('pantalla').innerHTML = "Descifrado: " +newMess;
        }else{
            //aqui si no se cumplen las condiciones
            alert("Chillo T_T");
        }
    });

});


//funcion de cambio
function change(posm, posk){
    //aqui aplicamos y = (x+z)mod27
    let y = (posm+posk)%27;
    return y;
}

//funcion de recarga
function rechange(posm, posk){
    let val = 0;
    if((posm - posk)>=0){
        val = (posm-posk)%27;
    }else{
        val = (posm-posk+27)%27;
    }
    return val;
}
//funcion para la posicion
function getPosition(letra){
    let posicion = abc.indexOf(letra);
    return posicion;
}

//funcion de la revision
function revision(mess, desp){
    //vamos a validar la entrada de los datos a partir de una expresion regular
    const re = /^([a-zñ?]+([]*[a-zñ?]?['-]?[a-zñ?]+)*)$/;

    var acc = true;

    if(!re.test(mess)){
        sd(); //cuando no ha sido aceptado
        acc = false;
    }
    if(desp.length > mess.length){
        sz(); //para decir que el texto no ha sido aceptado respecto de la llave
        acc=false;
    }
    if(!re.test(desp)){
        sdd(); //cuando el texto no ha sido aceptado de la llave
        acc = false;
    }
    return acc;
}


function sd(){
    Swal.fire({
        title : "Error",
        text : "El texto ingreso no ha sido aceptado, ingrese solo minuscular y evite numeros y simbolos",
        icon : 'error'
    });
}


function sdd(){
    Swal.fire({
        title : "Error",
        text : "La clave ingresa no es correcta no cumple con las normas",
        icon : 'error'
    });
}

function sz(){
    Swal.fire({
        title : "Error",
        text : "La clave no puede ser mayor que la clave",
        icon : 'error'
    });
}