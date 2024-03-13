import React from 'react'
import {Link} from 'react-router-dom';
import MenuCategoria from './MenuCategoria';

export default function FeedInformacion() {
  return (
    <div class="container p-2 mt-5 col-sm-5 col-md-8">
      <MenuCategoria/>
      <Link class="nav-link" to="/Vista">
      <div class="card border border-primary shadow-0 ">
      
  <div class="card-body">
    <h5 class="card-title">Titulo</h5>
    <h6 class="card-title">Autor</h6>
    <h6 class="card-title">Categoria</h6>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the
      card's content.
    </p>


  </div>
  
  <div class="card-footer">Calificacion</div>
</div>
</Link>
  <div class="card mt-2">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a class="btn btn-primary"><span><Link class= "nav-link" to="/Vista">Ver Informacion</Link></span></a>
  </div>
  </div>
  <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a class="btn btn-primary"><span><Link class= "nav-link" to="/Vista">Ver Informacion</Link></span></a>
  </div>
  </div>
</div>

  )
}
