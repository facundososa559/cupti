import React from 'react'
import arrow from "../assets/icons/arrow.svg"

function Project({title, description}) {
  return (
    <div className='project container--between container--center'>
        <div className='project-description container--column'>
            <h4 className='title semi-bold'>{title}</h4>
            <p>{description}</p>
        </div>
        <img className='project-icon' src={arrow} alt="arrow.svg" />
    </div>
  )
}

export default Project
