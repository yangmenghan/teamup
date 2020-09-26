import styles from './createGame.module.scss'
import React from 'react'
import { siteTitle } from './layout'

export default function CreateGame () {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{siteTitle}</h1>
      <form>
        <input type={'text'} required id={'name'} placeholder={'Your Name'}/>
        <input type={'submit'} value={'Submit'}/>
      </form>
    </div>
  )
}