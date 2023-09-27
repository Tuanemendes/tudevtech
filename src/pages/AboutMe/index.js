import React from 'react'
import PostModel from '../../components/PostModel'
import photoCover from '../../assets/sobre_mim_capa.png'
import styles from './AboutMe.module.css'
import photoAboutMe from '../../assets/sobre-mim.png'


const AboutMe = () => {
  return (
   <PostModel
    PhotoCover={photoCover}
    Title="Sobre mim"
   >
    <h3 className={styles.subtitulo}>
      Olá eu sou a Tuane!
    </h3>
    <img
      src={photoAboutMe}
      alt="Foto Tuane sorrindo"
      className={styles.fotoSobreMim}
    
    />
    <p className={styles.paragrafo}>
    Olá, eu sou Tuane Mendes Belmiro, uma apaixonada pelos desafios que a vida oferece. Com 29 anos de idade, sou uma belo-horizontina de coração, mas atualmente chamo Contagem, MG, de lar. 
    </p>
    <p className={styles.paragrafo}>Tenho interesse em tecnologia, mercado financeiro, animes, séries, filmes de ficção e astronomia.
    </p>
    <p className={styles.paragrafo}>
    Minha trajetória começou aos 15 anos com um curso técnico em eletrotécnica,trabalhei no setor industrial,Formei curso tecnico em transações imobiliaria onde tive a opurtunidade de desenvolver a comunicação  trabalhando com o sistema web na imobiiaria me cahou a atenção onde  formei  em Sistemas de Informações em 2022 para começar a criar paginas web e entender o ecossistema da tecnologia, em 2023 tirei a  certificação AWS para entender melhor o serviços de cloud.
    </p>
    <p className={styles.paragrafo}>
      Hoje estou como  desenvolvedora Front-end na criação de projetos pessoais. 
    </p>
   </PostModel>
  )
}

export default AboutMe
