// 1. Crear una función constructora para cada objeto.
function Paciente(nombre, historiaMedica) {
    this.nombre = nombre;
    this.historiaMedica = historiaMedica;
}

// 2. Implementar métodos getters y setters para poder acceder y modificar los datos de los pacientes.
Paciente.prototype.getNombre = function() {
    return this.nombre;
}

Paciente.prototype.setNombre = function(nombre) {
    this.nombre = nombre;
}

Paciente.prototype.getHistoriaMedica = function() {
    return this.historiaMedica;
}

Paciente.prototype.setHistoriaMedica = function(historiaMedica) {
    this.historiaMedica = historiaMedica;
}

// 3. Crear un método mediante la propiedad prototype que permita buscar los datos de los usuarios por nombre
Paciente.prototype.buscarPorNombre = function(nombre, pacientes) {
    return pacientes.filter(paciente => paciente.getNombre() === nombre);
}

// y otro método que permita mostrar todos los datos de los usuarios registrados.
Paciente.prototype.mostrarTodos = function(pacientes) {
    return pacientes.map(paciente => `Nombre: ${paciente.getNombre()}, Historia Médica: ${paciente.getHistoriaMedica()}`);
}

// 4. Instanciar cada objeto utilizando la instrucción new.
let paciente1 = new Paciente("Juan", "Historia médica de Juan");
let paciente2 = new Paciente("Ana", "Historia médica de Ana");

let pacientes = [paciente1, paciente2];

function mostrarPacientes() {
    let pacientesDiv = document.getElementById('pacientes');
    pacientesDiv.innerHTML = '';
    let lista = document.createElement('ul');
    pacientes.forEach(paciente => {
        let elemento = document.createElement('li');
        elemento.textContent = `Nombre: ${paciente.getNombre()}, Historia Médica: ${paciente.getHistoriaMedica()}`;
        lista.appendChild(elemento);
    });
    pacientesDiv.appendChild(lista);
}
