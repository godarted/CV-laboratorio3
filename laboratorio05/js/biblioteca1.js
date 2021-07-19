// declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var cboCurso=document.getElementById("cboCurso");
var cboTurno=document.getElementById("cboTurno");
var btnRegistrar=document.getElementById("btnRegistrar");

// creamos un procedimiento para mostrar
function MostrarRegistro(){
    // declaramos una variable para guardar los datos
    var listaregistro=Mostrar();
    // selecciono el tbody de la tabla donde voy a mostrar la informacion
    var tbody=document.querySelector("#tbAlumno tbody");
    tbody.innerHTML="";
    // agregamos al tbody las filas que se registren
    for(var i=0;i<listaregistro.length;i++){
        // declaramos una variable para las filas
        var fila=tbody.insertRow(i);
        // declaramos variables para los titulos
        var titulonom=fila.insertCell(0);
        var tituloape=fila.insertCell(1);
        var titulodni=fila.insertCell(2);
        var titulocurso=fila.insertCell(3);
        var tituloturno=fila.insertCell(4);
        //agregamos los valores
        titulonom.innerHTML=listaregistro[i].nombre;
        tituloape.innerHTML=listaregistro[i].apellido;
        titulodni.innerHTML=listaregistro[i].dni;
        titulocurso.innerHTML=listaregistro[i].curso;
        tituloturno.innerHTML=listaregistro[i].turno;
        tbody.appendChild(fila);
    }
}

//creamos un procedimiento para registrar los datos
function RegistrarDatos(){
    //validacion de datos
    //capturando valores 
    var nom=txtnom.value;
    var ape=txtape.value;
    var dni=txtdni.value;
    var curso=curso.value;
    var turno=turno.value;

    //llamamos al procedimiento registrar
    Registrar(nom,ape,dni,curso,turno);
    //llamamos al procedimiento para mostrar
    MostrarRegistro();
}

btnRegistrar.addEventListener("click",RegistrarDatos);