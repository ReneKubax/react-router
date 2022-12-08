import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>No se encontro la pagina</h1>
      <Link to="/" className='btn btn-dark'>Volver al inicio</Link>
    </div>
  )
}

export default NotFound