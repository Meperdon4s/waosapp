import React from 'react';
import {Link} from 'react-router-dom';

export default function LateralMenu() {
  return (
    <div class="p-3 w-25 mb-2 bg-info-subtle text-info-emphasis ">
      
      <ul class="nav flex-column" >
      <button type="button" class="btn btn-info">
        <li class="nav-item">
          <Link class="nav-link" to="/Home">Pagina Principal</Link>
        </li>
        </button>
        <li class="nav-item">
          <Link class="nav-link" to="/Explorarcat">Explorar catergorias</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Usuarios">Usuarios</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Explorarcom">Explorar comunidades</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Miscom">Mis comunidades</Link>
        </li>
  
      </ul>
    </div>
  )
}