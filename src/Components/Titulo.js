import React from 'react'
import styles from './Titulo.module.css'

const Titulo = ({titulo}) => {
  return (
    <div className={`${styles.titulo}`}>
    <h3>{titulo}</h3>
    </div>



  )
}

export default Titulo