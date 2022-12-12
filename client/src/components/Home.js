import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";

function Home() {
    const users = async() => await fetch("http://localhost:3001/users").then(response => response.json()).then(data => setData(data));

    const [data, setData] = useState([])

    useEffect(() => {
        users()
    }, [])
const handleDelete = (e) => {
  axios.delete(`http://localhost:3001/users/${e}`)
}
const handleFilter = (e) => {
  if(e.target.name === "vacuna"){
    if(e.target.value === "vacunados"){
      fetch("http://localhost:3001/users").then(response => response.json()).then(data => data.filter(e=> e.vacunacion === "vacunado")).then(payload => setData(payload));
    }else if(e.target.value === "novacunados"){
      fetch("http://localhost:3001/users").then(response => response.json()).then(data => data.filter(e=> e.vacunacion === "novacunado")).then(payload => setData(payload));
    }else{
      fetch("http://localhost:3001/users").then(response => response.json()).then(data => setData(data));
    }
  }
  else if(e.target.name === "tipoVacuna"){
    if(e.target.value === "todos"){ fetch("http://localhost:3001/users").then(response => response.json()).then(data => setData(data));}
    else if(e.target.value === "Sputnik"){ fetch("http://localhost:3001/users").then(response => response.json()).then(data => data.filter(e=> e.tipoVacuna === "Sputnik")).then(payload => setData(payload));}
    else if(e.target.value === "Pfizer"){ fetch("http://localhost:3001/users").then(response => response.json()).then(data => data.filter(e=> e.tipoVacuna === "Pfizer")).then(payload => setData(payload));}
    else if(e.target.value === "AstraZeneca"){ fetch("http://localhost:3001/users").then(response => response.json()).then(data => data.filter(e=> e.tipoVacuna === "AstraZeneca")).then(payload => setData(payload));}
    else{}
  }
  else{                      
    if(e.target.value === "2022"){fetch("http://localhost:3001/users").then(response => response.json()).then(data => data.filter((e)=> e.fechavacuna === "2022")).then(payload => setData(payload));}
    else if(e.target.value === "todos"){fetch("http://localhost:3001/users").then(response => response.json()).then(data => setData(data))}
    else{fetch("http://localhost:3001/users").then(response => response.json()).then(data => data.filter(e=> e.fechavacuna == "2021")).then(payload => setData(payload));}
  }
  
}

  return (
    <div><h1>Empleados</h1>
    <div>
                    <select defaultValue={'DEFAULT'} name="vacuna" onChange={e => handleFilter(e)}>
                        <option value="DEFAULT" hidden>Filtrar por vacunados</option>
                        <option value="todos">Todos</option>
                        <option value="vacunados">Vacunados</option>
                        <option value="novacunados">No Vacunados</option>
                    </select>
                    <select defaultValue={'DEFAULT'} name="tipoVacuna" onChange={e => handleFilter(e)}>
                        <option value="DEFAULT" hidden>Vacuna</option>
                        <option value="todos">Todos</option>
                        <option value="Sputnik">Sputnik</option>
                        <option value="Pfizer"> Pfizer</option>
                        <option value="AstraZeneca"> AstraZeneca</option>
                        <option value="Jhonson&Jhonson">Jhonson&Jhonson</option>
                    </select>
                    <select defaultValue={'DEFAULT'} name="rango" onChange={e => handleFilter(e)}>
                        <option value="DEFAULT" hidden>Rango fecha</option>
                        <option value="todos">Todos</option>
                        <option value="2022">2022</option>
                        <option value="2021"> 2021</option>
  
                    </select>

                </div>
    <br></br>        {data.map(e => 
        <div>
            <h1>Nombre: {e.username}</h1>
            <h1>Apellido: {e.lastname}</h1>
            <h1>Email: {e.email}</h1>
          <button onClick = {() => handleDelete(e.id)}>Eliminar</button>
            <br></br>
            </div>) }
    

    </div>
  )
}

export default Home