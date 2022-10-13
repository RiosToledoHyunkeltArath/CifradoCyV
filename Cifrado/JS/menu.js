let btnVig = document.getElementById("btnViggenere")
let btnCes = document.getElementById("btnCesar")

let secVig = document.getElementById("secVig")
let secCes = document.getElementById("secCes")

btnCes.addEventListener('click', ()=>{
    if(secVig.style.display==="none" && secCes.style.display==="none"){
        secCes.style.display=""
    }else if(secVig.style.display==="none"){
        secCes.style.display="none"
    }else{
        secVig.style.display="none"
        secCes.style.display=""
    }
    document.getElementById("pantalla").innerHTML =""
})

btnVig.addEventListener('click', ()=>{
    if(secVig.style.display==="none" && secCes.style.display==="none"){
        secVig.style.display=""
    }else if(secCes.style.display==="none"){
        secVig.style.display="none"
    }else{
        secCes.style.display="none"
        secVig.style.display=""
    }
    document.getElementById("pantalla").innerHTML =""
})