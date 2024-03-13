import React, {useState} from 'react';
import FeedInformacion from './FeedInformacion';
import {lista} from "../datos/ListDatos";


export default function Lista() {
   
    const [datos, setDatos]=useState(lista)
  return (
   
       <div className='row row-cols-1 row-cols-md-3 g-4 p-4'>
        {
            datos.map(
                (articulo)=>
                <FeedInformacion
                key={articulo.id}
                titulo={articulo.titulo} 
                autor={articulo.autor} 
                descripcion={articulo.descripcion}

                />)
        }
        </div>
   
  )
}