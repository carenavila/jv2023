function loggin()

{

    let user=document.getElementById("usuario").value;

    let pass=document.getElementById("clave").value;


    if(user=="caren" && pass=="1234")
    {

window.location="acceso.html";


    }

    else 
    {

        alert("datos incorrectos"); 
    }
}