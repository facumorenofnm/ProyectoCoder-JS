const dataBaseUsuario = [];

class usuarioPaciente{
    constructor(nombre = '', apellido= '', edad = '', mail = '', celular = ''){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.mail = mail;
        this.celular = celular;
        dataBaseUsuario.push(this);
    }
};

function agregarUsuario(){
    const nombre = prompt("Ingrese su nombre:");
    const apellido = prompt("Ingrese su apellido:");
    const edad = parseInt(prompt("Ingrese su edad:"), 10);
    const mail = prompt("Ingrese su correo electrónico:");
    const celular = prompt("Ingrese su número de celular:");

    if(!nombre || !apellido || !edad || !mail || !celular) {
        alert("Por favor, ingrese todos los datos correctamente.");
        return;
    }
    
    new usuarioPaciente(nombre, apellido, edad, mail, celular);
    console.log("Usuario agregado con éxito:", nombre);
};

agregarUsuario();
console.log("Lista actualizada de usuarios:", dataBaseUsuario);