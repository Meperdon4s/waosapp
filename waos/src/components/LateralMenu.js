import React from 'react';
import {Link} from 'react-router-dom';

export default function LateralMenu() {
  return (
<<<<<<< HEAD
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
=======
    <div class='d-flex bd-highlight'>
    <div class="p-2 h-100 bd-highlight">
    
    <div class='btn-group-vertical' role='group' aria-label='Vertical button group'>
    <nav class="nav flex-column">
      
        <button type='button' class='btn btn-info'>
          <Link class='nav-link' to="/Home">Pagina Principal</Link>
        </button>
        <button type='button' class='btn btn-info'>
          <Link class='nav-link' to="/Explorarcat">Explorar catergorias</Link>
        </button>
        <button type='button' class='btn btn-info'>
          <Link class='nav-link' to="/Usuarios">Usuarios</Link>
        </button>
        <button type='button' class='btn btn-info'>
          <Link class='nav-link' to="/Explorarcom">Explorar comunidades</Link>
        </button>
        <button type='button' class='btn btn-info'>
          <Link class='nav-link' to="/Miscom">Mis comunidades</Link>
        </button>
        

        
        </nav>
      </div>
      </div>
      </div>
      


>>>>>>> 208bb6796624e59fe5482cfa80721488885d6579
  )
}