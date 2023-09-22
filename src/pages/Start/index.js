import React from 'react'
import Banner from '../../components/Banner'
import styles from '../Start/Start.module.css'
import posts from  '../../json/posts.json'

const Start = () => {
  return (
    <main>
      <Banner/>
      <ul className={styles.post}>
        {posts.map((post)=> (
          <li key={post.id}>
            <Post/>
          </li>
        ))}
      </ul>
    </main>

  )
}

export default Start
