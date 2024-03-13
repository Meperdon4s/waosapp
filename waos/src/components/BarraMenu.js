import React from 'react';
import {Link} from 'react-router-dom';

export default function BarraMenu() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary ">
  <div class="container-fluid">
    <a class="navbar-brand">Waos</a>
    <form class="d-flex text-aling-center" role="search">
      <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit"><i class="bi bi-search"></i></button>
    </form>
    <button type="button" class="btn btn-primary"><Link class="nav-link"to="/pregunta">Hacer pregunta </Link></button>
    <div class="dropdown">
        <a
          data-mdb-dropdown-init
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    
  </div>
</nav>
    </div>
  )
}
