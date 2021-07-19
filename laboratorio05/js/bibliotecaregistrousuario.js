//declarando variables para los controles
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnRegistrar=document.getElementById("btnRegistrar");

//creamos un procedimiento para limpiar las cajas
function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}

//creamos un procedimineto para registrar el usuario
function RegistrarUsuario(){
    if(txtCor.value="" || txtCor.value==null){
        alert("Ingrese el correo");
        txtCor.focus();
    }else if(txtCon.value="" || txtCon.value==null){
        alert("Ingrese la contraseña");
        txtCon.focus();
    }else{
        //capturando valores
        var cor=txtCor.value;
        var con=txtCon.value;
        //llamamos a la funcion de Firebase para crear usuarios
        auth.createUserWithEmailAndPassword(cor, con)
  .then((userCredential) => {
    // Signed in
    alert ("Se registro el usuario en Firebase");
  })
  .catch((error) => {
    alert("No se pudo registrar en Firebase");
  });
    }
}