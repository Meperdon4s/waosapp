import React from 'react'

import BarraMenu from '../components/BarraMenu';
import LateralMenu from '../components/LateralMenu';
import VistaInformacion from '../components/VistaInformacion';

export default function Home() {
  return (
    <div>
      <BarraMenu/>
      <LateralMenu/>
      <VistaInformacion/>
    </div>
  )
}
