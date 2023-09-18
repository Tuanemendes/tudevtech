import React from 'react'
import styles from './Menu.module.css'
import MenuLink from '../MenuLink'


const Menu = () => {

  return (
    <header>
        <nav className={styles.navegacao}>
            <MenuLink start="/">Inicio</MenuLink>
            <MenuLink start="/aboutme">Sobre Mim</MenuLink>
        </nav>
    </header>
  )
}

export default Menu
