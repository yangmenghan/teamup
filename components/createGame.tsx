import styles from './createGame.module.scss'
import React from 'react'
import { siteSubtitle, siteTitle } from './layout'

export default function CreateGame () {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{siteTitle}</h1>
      <h4 className={styles.subtitle}>{siteSubtitle}</h4>
      <form>
        <input type={'text'} required id={'name'} placeholder={'Your Name'}/>
        <input type={'submit'} value={'Submit'}/>
      </form>
    </div>
  )
}