import React from 'react'
import { Link, NavLink} from "react-router-dom";

function NavBar() {
  return (
    <div>
        <h1>Hola</h1>
        <ul>
            <li>
                <Link to="/user">User</Link>
            </li>
            <li>
                <Link to="/admin">Admin</Link>
            </li>
        </ul>
     
     
    </div>
  )
}

