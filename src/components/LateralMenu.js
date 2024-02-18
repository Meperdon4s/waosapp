import React from 'react'
import {Link} from 'react-router-dom'

export default function LateralMenu() {
  return (
    <div>
      <ul class="nav nav-pills">
      <ul class="nav flex-column">
        <li class="nav-item">
          <Link to="/Home">Pagina Principal</Link>
        </li>
        <li class="nav-item">
          <Link to="/Explorarcat">Explorar catergorias</Link>
        </li>
        <li class="nav-item">
          <Link to="/Usuarios">Usuarios</Link>
        </li>
        <li class="nav-item">
          <Link to="/Explorarcom">Explorar comunidades</Link>
        </li>
        <li class="nav-item">
          <Link to="/Miscom">Mis comunidades</Link>
        </li>
  
      </ul>
      </ul>
    </div>
  )
}