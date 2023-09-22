import React from 'react'
import styles from './Banner.module.css'
import circuloColorido from './../../assets/circulo_colorido.png'
import minhaFoto from './../../assets/minha_foto.png'

const Banner = () => {
  return (
      <div className={styles.banner}>
        <div className={styles.apresentacao}>
          <h1 className={styles.titulo}>Olá,sou a Tuane Mendes</h1>
          <p className={styles.paragrafo}>
            Aqui vou compartilhar meu conhecimento no desenvolvimento Web  
          </p>
          <div className={styles.imagens}>
            <img 
              className={styles.circuloColorido} 
              src={circuloColorido}
              aria-hidden={true}

              />

              <img  
              className={styles.minhaFoto}
              src={minhaFoto} 
              alt="Foto da Tuane"/>
          </div>
        </div>
    </div>
  )
}

export default Banner
