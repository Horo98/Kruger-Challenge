import React from 'react'

function FormAdmin() {
    
    function handleSubmit(e) {
        e.preventDefault()
        const user = { 
            cedula: e.target[0].value,
            nombre: e.target[1].value,
            
            apellido: e.target[2].value,
            email: e.target[3].value
         }
         console.log(user)
      }

  return (
    <div>
        <form onSubmit={(e) =>handleSubmit(e)}>

        <h1>Form Admin</h1>
        <label>Cedula<input type="number" id="cedula" name="cedula"/></label>
        <label>Nombre<input type="text" id="name" name="name"/></label>
        <label>Apellido<input type="text" id="apellido" name="apellido"/></label>
        <label>Correo electrónico<input type="email" id="email" name="email"/></label>
        <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default FormAdmin
// Registrar la siguiente información del empleado.
// ○ Cédula.
// ○ Nombres.
// ○ Apellidos.
// ○ Correo electrónico.
// b. Los campos deben contener validaciones de acuerdo al tipo de dato:
// ○ Todos los campos son requeridos.
// ○ Cédula válida. (Incluir un valor numérico y único de 10 dígitos)
// ○ Correo electrónico válido.
// ○ Nombres y apellidos no deben contener números o caracteres especiales.
// c. Al dar de alta un empleado se debe generar un usuario y contraseña para el empleado.