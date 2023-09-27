import React from 'react'
import styles  from './PostModel.module.css'

const PostModel = ({PhotoCover, Title,children }) => {
  return (
    <article className={styles.postModeloContainer}>
      <div className={styles.photoCover} style={{backgroundImage: `url(${PhotoCover})`}} />
      <h2 className={styles.title}>{Title}</h2>
      <div className={styles.postContainer}>{children}</div>
    </article>
  )
}

export default PostModel
