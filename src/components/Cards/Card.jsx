import React from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'

function Card({image, title, content, route}) {
  return (
    <div className='card container--center container--column'>
      <div className='card-header text-center'>
        <img className='card-icon' src={image} alt="card-logo.svg" />
        <h1 className='title-small'>{title}</h1>
      </div>
      <div className='card-body container--center container--column'>
        <p className='card-text text-center'>{content}</p>
        <div className='card-button text-center'>
            <Link to={route}>
                <Button content="Más información"/>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
