import React, { useEffect, useState } from 'react'

function Form() {
    function handleSubmit(e) {
        e.preventDefault()
        const user = {
            cedula: e.target[0].value,
            nombre: e.target[1].value,
            apellido: e.target[2].value,
            email: e.target[3].value,
        }
        console.log(user)
    }
    const [vacunado, setVacunado] = useState();
    useEffect(() => {
        
    }, [vacunado])

    function estadoVacuna(e){
        console.log(vacunado)
        setVacunado(e.target.value)

    }
  return (
    <div>
    <form onSubmit={(e) => handleSubmit(e)}>

        <h1>Form User</h1>
        <label>Fecha de nacimiento<input type="date" id="birth" name="birth" /></label>
        <label>Domicilio<input type="text" id="domicilio" name="domicilio" /></label>
        <label>Telefono<input type="number" id="telefono" name="telefono" /></label>
        <label onChange={(e) => estadoVacuna(e)}>Estado de Vacunacion<select id="vacunacion">
            <option hidden>Selecciona una opcion</option>
            <option value="vacunado">Vacunado</option>
            <option value="novacunado">No vacunado</option>
        </select>
            </label>
        { vacunado == "vacunado" ? <label>Nombre de vacuna
            <select id="tipovacuna">
            <option hidden>Selecciona una vacuna</option>
            <option value="Sputnik">Sputnik</option>
            <option value="AstraZeneca">AstraZeneca</option>
            <option value="Jhonson&Jhonson">Jhonson&Jhonson</option>
        </select>
        <label>Fecha de vacunacion<input type="date" id="fechavacuna" name="fechavacuna" /></label>
        <label>Dosis<input type="number" id="numerodosis" name="numerodosis" /></label>
            </label>
            
         : null
        }
        <input type="submit" value="Enviar" />
    </form>
</div>
  )
}

export default Form