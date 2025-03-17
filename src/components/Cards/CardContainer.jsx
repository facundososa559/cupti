import React from 'react'
import Card from './Card'
import cardPanel from "../../assets/icons/card-icons/card-panel.svg"
import cardBattery from "../../assets/icons/card-icons/card-battery.svg"
import cardNote from "../../assets/icons/card-icons/card-note.svg"

function CardContainer() {
  return (
    <div className='card-container container--center wrapper'>
      <Card 
        image={cardPanel}
        title="Energías Renovables"
        content="Contamos con técnicos dedicados al desarrollo de proyectos e instalación de energía eólica, solar y centrales hidroeléctricas."
      />
      <Card 
        image={cardBattery}
        title="Eficiencia energética"
        content="Realizamos estudios y proyectos de eficiencia energética orientados a reducir el consumo de energía y los costos asociados. "
      />
      <Card 
        image={cardNote}
        title="Diseño industrial"
        content="Contamos con un departamento de diseño industrial, orientado a brindar soluciones integrales con alto grado de ingeniería de detalle."
      />
      <Card 
        image={cardNote}
        title="Diseño industrial"
        content="Contamos con un departamento de diseño industrial, orientado a brindar soluciones integrales con alto grado de ingeniería de detalle."
      />
    </div>
  )
}

export default CardContainer
