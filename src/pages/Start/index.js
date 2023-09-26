import React from 'react'
import styles from '../Start/Start.module.css'
import posts from  '../../json/posts.json'
import Post from '../../components/Post'

const Start = () => {
  return (
    <ul className={styles.posts}>
      {posts.map((post)=> (
        <li key={post.id}>
          <Post post={post}/>
        </li>
      ))}
    </ul>
  )
}

export default Start
