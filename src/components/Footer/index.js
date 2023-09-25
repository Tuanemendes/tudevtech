import React from 'react'
import styles from '../Footer/Footer.module.css'
import { ReactComponent as MarcaRegistrada } from '../../assets/marca_registrada.svg'

const Footer = () => {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada/>
      Desenvolvido por Tuane Mendes
    </footer>
  )
}

export default Footer
